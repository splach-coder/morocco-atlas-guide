import re
import random
import os

# Dictionary to store selected images for each ID to ensure consistency across files
# format: { "object_id": "selected_image_path" }
selected_images_map = {}

# Set to track images already assigned in the current run to avoid duplicates across different tours
overall_used_images = set()

# Images that should NOT be selected for the 'image' field
EXCLUDED_IMAGES = [
    "/images/toubkal_treks/sven123musik-ai-generated-8635943_1920.png",
    "/images/toubkal_treks/sven123musik-ai-generated-8635944_1920.png"
]

def update_file(file_path):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    print(f"Processing {os.path.basename(file_path)}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    keys_to_process = ["toubkalTreks", "desertTours", "excursions", "imperialCities"]

    for key in keys_to_process:
        key_pattern = rf'"{key}":\s*\['
        match = re.search(key_pattern, content)
        if not match:
            continue

        start_index = match.end() - 1 
        
        bracket_count = 0
        end_index = -1
        for i in range(start_index, len(content)):
            if content[i] == '[':
                bracket_count += 1
            elif content[i] == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    end_index = i + 1
                    break
        
        if end_index == -1:
            continue

        array_content = content[start_index:end_index]
        
        objects = []
        current_pos = 0
        while True:
            obj_start = array_content.find('{', current_pos)
            if obj_start == -1:
                break
            
            brace_count = 0
            obj_end = -1
            for i in range(obj_start, len(array_content)):
                if array_content[i] == '{':
                    brace_count += 1
                elif array_content[i] == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        obj_end = i + 1
                        break
            
            if obj_end == -1:
                break
                
            objects.append((obj_start, obj_end))
            current_pos = obj_end

        # Process objects from last to first
        modified_array_content = array_content
        for obj_start, obj_end in reversed(objects):
            obj_str = modified_array_content[obj_start:obj_end]
            
            id_match = re.search(r'"id":\s*"([^"]+)"', obj_str)
            if not id_match:
                continue
            obj_id = id_match.group(1)

            image_match = re.search(r'"image":\s*"([^"]+)"', obj_str)
            gallery_match = re.search(r'"gallery":\s*\[(.*?)\]', obj_str, re.DOTALL)
            
            if image_match and gallery_match:
                # 1. Use existing selection if available (Consistency)
                if obj_id in selected_images_map:
                    random_image = selected_images_map[obj_id]
                else:
                    # 2. Pick a new image (Uniqueness)
                    gallery_str = gallery_match.group(1)
                    gallery_items = re.findall(r'"([^"]+)"', gallery_str)
                    
                    available_images = [img for img in gallery_items if img not in EXCLUDED_IMAGES]
                    
                    if not available_images:
                        continue

                    # Try to find images that haven't been used yet in this run
                    unused_images = [img for img in available_images if img not in overall_used_images]
                    
                    if unused_images:
                        random_image = random.choice(unused_images)
                    else:
                        # Fallback: if all images in gallery are already used elsewhere, pick 
                        # the one that is used the least or just any valid one from the gallery
                        # To keep it simple, we just pick from all available if we've exhausted options
                        random_image = random.choice(available_images)
                    
                    # Store selection for consistency and uniqueness tracking
                    selected_images_map[obj_id] = random_image
                    overall_used_images.add(random_image)

                # Replace the image field
                old_image_line = image_match.group(0)
                new_image_line = f'"image": "{random_image}"'
                new_obj_str = obj_str.replace(old_image_line, new_image_line, 1)
                
                modified_array_content = modified_array_content[:obj_start] + new_obj_str + modified_array_content[obj_end:]
        
        content = content[:start_index] + modified_array_content + content[end_index:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully processed {os.path.basename(file_path)}")

if __name__ == "__main__":
    base_path = r"C:\Users\Ultrapc\Desktop\Websites\morocco-atlas-guide\src\data"
    files_to_update = [
        os.path.join(base_path, "siteData.ts"),
        os.path.join(base_path, "siteDataEs.ts"),
        os.path.join(base_path, "siteDataFr.ts")
    ]
    
    # Reset tracking maps
    selected_images_map.clear()
    overall_used_images.clear()
    
    for f_path in files_to_update:
        update_file(f_path)
    
    print("\nUpdate complete for all files.")
    print(f"Total unique images assigned: {len(overall_used_images)}")
