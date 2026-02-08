import { siteInfo } from '@/data/siteInfo';

export const generateWhatsAppLink = (message: string) => {
    const phoneNumber = siteInfo.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const createBookingMessage = (itemName: string, type: 'tour' | 'activity' | 'package' | 'transport') => {
    return `${siteInfo.whatsappBookingMessage} ${itemName} (${type})`;
};
