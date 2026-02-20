'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getSiteData } from '@/data/getSiteData';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';

interface PageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export default function TourDetailPage({ params }: PageProps) {
    const { id, locale } = use(params);
    const data = getSiteData(locale);

    // Search across all tour categories
    const allTours = [
        ...data.toubkalTreks,
        ...data.desertTours,
        ...data.imperialCities,
        ...data.excursions
    ];

    const item = allTours.find(t => t.id === id);

    if (!item) {
        return notFound();
    }

    // formatting price
    let price: number | string = 0;
    if (item.pricing && item.pricing[0]) {
        const p = item.pricing[0] as any;
        price = p.totalPrice || p.pricePerPerson || 0;
    }

    // Use the actual description from the tour data
    const description = item.description || `Experience the magic of ${item.name}. This curated tour takes you through the most iconic locations, offering a blend of history, culture, and breathtaking scenery. Our professional guides ensure you don't miss any hidden gems.`;

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="tour"
            title={item.name}
            description={description}
            image={item.image || "/images/hero-marrakech.jpg"}
            price={price}
            duration={item.duration}
            location="Marrakech Region"
            included={(item as any).includes || ['Professional Guide', 'Hotel Pickup & Drop-off', 'Transport', 'All Meals During Trek']}
            excluded={(item as any).excludes || ['Travel Insurance', 'Personal Expenses', 'Tips', 'International Flights']}
            itinerary={(item as any).itinerary || undefined}
            subItems={[]}
            gallery={item.gallery || []}
        />
    );
}
