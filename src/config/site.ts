import { siteInfo } from "@/data/siteInfo";

export const siteConfig = {
    // Brand
    name: siteInfo.name,
    shortName: siteInfo.name,
    description: siteInfo.description,

    // URLs
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://moroccoatlasguide.com',

    // Localization
    defaultLocale: 'en',
    locales: ['en', 'fr'],

    // Contact
    contact: {
        phone: siteInfo.contact.phone,
        whatsapp: siteInfo.contact.whatsapp,
        email: siteInfo.contact.email
    },

    // SEO Keywords
    keywords: [
        'Morocco Atlas Guide',
        'Toubkal treks',
        'High Atlas Mountain guide',
        'Imlil trekking',
        'Sahara desert tours',
        'Merzouga desert adventures',
        'Imperial cities Morocco',
        'Marrakech excursions',
        'Authentic Berber experience',
        'Atlas Mountains hiking',
        'Mount Toubkal summit guide',
        'Ouzoud waterfalls day trip',
        'Essaouira tours',
        'Ait Ben Haddou day trip'
    ],

    // SEO / Social
    ogImage: '/images/og-morocco-atlas-guide.png',
    twitterHandle: '@moroccoatlasguide',
    creator: siteInfo.name,

    // Business Info (for structured data)
    business: {
        type: 'TravelAgency',
        priceRange: '$$',
        address: {
            streetAddress: siteInfo.contact.address,
            addressLocality: 'Imlil',
            addressRegion: 'Al Haouz',
            postalCode: '42152',
            addressCountry: 'MA'
        },
        geo: {
            latitude: 31.1353,
            longitude: -7.9221
        },
        openingHours: 'Mo-Su 08:00-22:00'
    }
};

export type SiteConfig = typeof siteConfig;