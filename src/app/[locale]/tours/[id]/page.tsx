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

    // Determine which category this tour belongs to
    const categoryMap: Record<string, { key: string; items: any[] }> = {
        'toubkal-treks': { key: 'toubkal-treks', items: data.toubkalTreks },
        'desert-tours': { key: 'desert-tours', items: data.desertTours },
        'imperial-cities': { key: 'imperial-cities', items: data.imperialCities },
        'excursions': { key: 'excursions', items: data.excursions },
    };

    let category = '';
    let siblings: { id: string; name: string; image: string }[] = [];
    let item: any = null;

    for (const [, { key, items }] of Object.entries(categoryMap)) {
        const found = items.find((t: any) => t.id === id);
        if (found) {
            item = found;
            category = key;
            siblings = items.map((t: any) => ({ id: t.id, name: t.name, image: t.image || '' }));
            break;
        }
    }

    if (!item) {
        return notFound();
    }

    // Format price
    let price: number | string = 0;
    if (item.pricing && item.pricing[0]) {
        const p = item.pricing[0] as any;
        price = p.totalPrice || p.pricePerPerson || 0;
    }

    const description = item.description || `Experience the magic of ${item.name}. This curated tour takes you through the most iconic locations, offering a blend of history, culture, and breathtaking scenery. Our professional guides ensure you don't miss any hidden gems.`;

    return (
        <ServiceDetailContent
            id={id}
            locale={locale}
            type="tour"
            title={item.name}
            description={description}
            image={item.image || "/images/marrakech/marrakech.jpg"}
            price={price}
            duration={item.duration}
            location="Marrakech Region"
            included={(item as any).includes || ['Professional Guide', 'Hotel Pickup & Drop-off', 'Transport', 'All Meals During Trek']}
            excluded={(item as any).excludes || ['Travel Insurance', 'Personal Expenses', 'Tips', 'International Flights']}
            itinerary={(item as any).itinerary || undefined}
            subItems={[]}
            gallery={item.gallery || []}
            category={category}
            siblings={siblings}
        />
    );
}
