import { getSiteData } from '@/data/getSiteData';
import { HeroSlider } from '@/components/HeroSlider';
import { ReviewsSlider } from '@/components/ReviewsSlider';
import { AboutPreview } from '@/components/AboutPreview';
import { TourCategories } from '@/components/TourCategories';
import { WhyTravelWithUs } from '@/components/WhyTravelWithUs';
import { GalleryPreview } from '@/components/GalleryPreview';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTASection } from '@/components/CTASection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { CoreValuesSection } from '@/components/CoreValuesSection';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = getSiteData(locale);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. New Animated Hero Slider */}
      <HeroSlider lang={locale} />

      {/* 2. Intro / About Preview */}
      <AboutPreview locale={locale} />

      {/* 2.5 Expertise / Guide Profile */}
      <ExpertiseSection />

      {/* 2.6 Core Values - The Atlas Promise */}
      <CoreValuesSection />

      {/* 3. Tour Categories - NEW: Organized into 4 main categories */}
      <TourCategories locale={locale} />

      {/* 4. Why Travel With Us */}
      <WhyTravelWithUs />

      {/* 5. Reviews - Google Style */}
      <ReviewsSlider reviews={data.reviews.items} />

      {/* 6. Gallery Preview - Traveler Stories */}
      <GalleryPreview locale={locale} />

      {/* 7. FAQ */}
      <FAQAccordion />

      {/* 8. CTA */}
      <CTASection locale={locale} />
    </main>
  );
}