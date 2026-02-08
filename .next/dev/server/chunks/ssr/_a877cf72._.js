module.exports = [
"[project]/src/data/siteData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteData",
    ()=>siteData,
    "siteDataFr",
    ()=>siteDataFr
]);
const siteData = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        {
            id: "marrakech-full-day",
            name: "1 Day Visit to Marrakech City",
            duration: "1_day",
            image: "/images/marrakech/marrakech1.jpg",
            gallery: [
                "/images/marrakech/marrakech2.jpg",
                "/images/marrakech/marrakech3.jpg",
                "/images/marrakech/marrakech4.jpg",
                "/images/marrakech/marrakech5.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "marrakech-half-day",
            name: "Half Day Visit to Marrakech City",
            duration: "half_day",
            image: "/images/marrakech/marrakech6.jpg",
            gallery: [
                "/images/marrakech/marrakech7.jpg",
                "/images/marrakech/marrakech8.jpg",
                "/images/marrakech/marrakech9.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "ourika-day-trip",
            name: "1 Day Trip to Ourika",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "essaouira-day-trip",
            name: "1 Day Trip to Essaouira",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "ouzoud-day-trip",
            name: "1 Day Trip to Ouzoud",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "imlil-day-trip",
            name: "1 Day Trip to Imlil",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/hero-marrakech.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "fes-day-trip",
            name: "1 Day Trip to Fes",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/fes/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 200
                }
            ]
        },
        {
            id: "casablanca-day-trip",
            name: "1 Day Trip to Casablanca",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/casablanca/eka-maitri-viryani-qL3_NSPo9o8-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 180
                }
            ]
        },
        {
            id: "ouarzazate-day-trip",
            name: "1 Day Trip to Ouarzazate",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouarzazate/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 160
                }
            ]
        },
        {
            id: "rabat-day-trip",
            name: "1 Day Trip to Rabat",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/rabat/framopia-EZqHkkyc0wg-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 170
                }
            ]
        }
    ],
    activities: {
        timeSlots: [
            {
                id: "morning",
                from: "09:00",
                to: "12:30"
            },
            {
                id: "afternoon",
                from: "14:00",
                to: "18:00"
            }
        ],
        experiences: [
            {
                id: "quad-agafay",
                type: "quad",
                location: "Agafay",
                price: 50,
                duration: "2_hours",
                image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/mayar-zidan-LVNcykwlDEg-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "quad-palmeraie",
                type: "quad",
                location: "Palmeraie",
                price: 30,
                duration: "2_hours",
                image: "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "camel-agafay",
                type: "camel",
                location: "Agafay",
                price: 25,
                duration: "1_hour",
                image: "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                    "/images/camel-riding/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                    "/images/camel-riding/tamar-dCMvzMV1jfc-unsplash.jpg"
                ]
            },
            {
                id: "camel-palmeraie",
                type: "camel",
                location: "Palmeraie",
                price: 15,
                duration: "1_hour",
                image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
                ]
            },
            {
                id: "hot-air-balloon",
                type: "balloon",
                location: "Marrakech",
                price: 180,
                duration: "3_hours",
                image: "/images/airballon/manoa-angelo-w7jeZ5NFSvQ-unsplash.jpg",
                gallery: []
            },
            {
                id: "cooking-class",
                type: "cooking",
                location: "Marrakech",
                price: 60,
                duration: "4_hours",
                image: "/images/cooking-class/aziz-acharki-UBEcFUvkrcc-unsplash.jpg",
                gallery: []
            },
            {
                id: "food-tour",
                type: "food",
                location: "Marrakech",
                price: 45,
                duration: "3_hours",
                image: "/images/food-tour/annie-spratt-_V4v7BbG338-unsplash.jpg",
                gallery: []
            }
        ],
        addons: [
            {
                id: "dinner",
                name: "Dinner",
                pricePerPerson: 25,
                availableFrom: "15:00",
                availableTo: "21:00"
            }
        ]
    },
    transport: [
        {
            id: "private",
            name: "Private Transport",
            image: "/images/services/transport-private.jpg",
            description: "Comfortable private vehicle with professional driver",
            price: 50
        },
        {
            id: "airport",
            name: "Airport Transport",
            image: "/images/services/transport-airport.jpg",
            description: "Reliable airport transfers, meet & greet service",
            price: 30
        },
        {
            id: "on-demand",
            name: "On-demand Transport",
            image: "/images/services/transport-ondemand.jpg",
            description: "Flexible transportation for your custom itinerary",
            price: 20
        }
    ],
    packages: [
        {
            id: "agafay-full-experience",
            name: "Quad + Camel + Dinner",
            location: "Agafay",
            included: [
                "quad",
                "camel",
                "dinner"
            ],
            price: 60,
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg"
            ]
        },
        {
            id: "palmeraie-adventure",
            name: "Camel + Quad",
            location: "Palmeraie",
            included: [
                "camel",
                "quad"
            ],
            price: 50,
            image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
            gallery: [
                "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg"
            ]
        },
        {
            id: "desert-experience",
            name: "Desert Full Experience",
            location: "Merzouga",
            included: [
                "camel",
                "dinner",
                "overnight"
            ],
            price: 120,
            image: "/images/merzouga/merzouga1.jpg",
            gallery: []
        }
    ],
    reviews: {
        scale: 5,
        items: [
            {
                id: "rev-001",
                targetType: "tour",
                targetId: "marrakech-full-day",
                author: "Sarah M.",
                rating: 5,
                comment: "Perfect introduction to Marrakech. Guide was knowledgeable and friendly.",
                date: "2024-11-12"
            },
            {
                id: "rev-002",
                targetType: "tour",
                targetId: "ourika-day-trip",
                author: "James L.",
                rating: 4,
                comment: "Beautiful landscapes. Transport was comfortable. Worth the day.",
                date: "2024-10-03"
            },
            {
                id: "rev-003",
                targetType: "activity",
                targetId: "quad-agafay",
                author: "Nina K.",
                rating: 5,
                comment: "Amazing quad experience in the desert. Adrenaline and views.",
                date: "2024-09-18"
            },
            {
                id: "rev-004",
                targetType: "package",
                targetId: "agafay-full-experience",
                author: "Omar R.",
                rating: 5,
                comment: "Everything was well organized. Dinner under the stars was unforgettable.",
                date: "2024-08-27"
            },
            {
                id: "rev-005",
                targetType: "activity",
                targetId: "camel-palmeraie",
                author: "Laura D.",
                rating: 4,
                comment: "Relaxing ride and great photos. Short but enjoyable.",
                date: "2024-07-14"
            }
        ]
    }
};
const siteDataFr = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        {
            id: "marrakech-full-day",
            name: "Visite d'une journée de la ville de Marrakech",
            duration: "1_day",
            image: "/images/marrakech/marrakech1.jpg",
            gallery: [
                "/images/marrakech/marrakech2.jpg",
                "/images/marrakech/marrakech3.jpg",
                "/images/marrakech/marrakech4.jpg",
                "/images/marrakech/marrakech5.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "marrakech-half-day",
            name: "Visite d'une demi-journée de la ville de Marrakech",
            duration: "half_day",
            image: "/images/marrakech/marrakech6.jpg",
            gallery: [
                "/images/marrakech/marrakech7.jpg",
                "/images/marrakech/marrakech8.jpg",
                "/images/marrakech/marrakech9.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "ourika-day-trip",
            name: "Excursion d'une journée à la vallée de l'Ourika",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "essaouira-day-trip",
            name: "Excursion d'une journée à Essaouira",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "ouzoud-day-trip",
            name: "Excursion d'une journée aux cascades d'Ouzoud",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "imlil-day-trip",
            name: "Excursion d'une journée à Imlil",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/hero-marrakech.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "fes-day-trip",
            name: "Excursion d'une journée à Fès",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/fes/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 200
                }
            ]
        },
        {
            id: "casablanca-day-trip",
            name: "Excursion d'une journée à Casablanca",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/casablanca/eka-maitri-viryani-qL3_NSPo9o8-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 180
                }
            ]
        },
        {
            id: "ouarzazate-day-trip",
            name: "Excursion d'une journée à Ouarzazate",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouarzazate/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 160
                }
            ]
        },
        {
            id: "rabat-day-trip",
            name: "Excursion d'une journée à Rabat",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/rabat/framopia-EZqHkkyc0wg-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 170
                }
            ]
        }
    ],
    activities: {
        timeSlots: [
            {
                id: "morning",
                from: "09:00",
                to: "12:30"
            },
            {
                id: "afternoon",
                from: "14:00",
                to: "18:00"
            }
        ],
        experiences: [
            {
                id: "quad-agafay",
                type: "quad",
                location: "Agafay",
                price: 50,
                duration: "2_hours",
                image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/mayar-zidan-LVNcykwlDEg-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "quad-palmeraie",
                type: "quad",
                location: "Palmeraie",
                price: 30,
                duration: "2_hours",
                image: "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "camel-agafay",
                type: "camel",
                location: "Agafay",
                price: 25,
                duration: "1_hour",
                image: "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                    "/images/camel-riding/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                    "/images/camel-riding/tamar-dCMvzMV1jfc-unsplash.jpg"
                ]
            },
            {
                id: "camel-palmeraie",
                type: "camel",
                location: "Palmeraie",
                price: 15,
                duration: "1_hour",
                image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
                ]
            },
            {
                id: "hot-air-balloon",
                type: "balloon",
                location: "Marrakech",
                price: 180,
                duration: "3_hours",
                image: "/images/airballon/manoa-angelo-w7jeZ5NFSvQ-unsplash.jpg",
                gallery: []
            },
            {
                id: "cooking-class",
                type: "cooking",
                location: "Marrakech",
                price: 60,
                duration: "4_hours",
                image: "/images/cooking-class/aziz-acharki-UBEcFUvkrcc-unsplash.jpg",
                gallery: []
            },
            {
                id: "food-tour",
                type: "food",
                location: "Marrakech",
                price: 45,
                duration: "3_hours",
                image: "/images/food-tour/annie-spratt-_V4v7BbG338-unsplash.jpg",
                gallery: []
            }
        ],
        addons: [
            {
                id: "dinner",
                name: "Dîner",
                pricePerPerson: 25,
                availableFrom: "15:00",
                availableTo: "21:00"
            }
        ]
    },
    transport: [
        {
            id: "private",
            name: "Transport privé",
            image: "/images/services/transport-private.jpg",
            description: "Véhicule privé confortable avec chauffeur professionnel",
            price: 50
        },
        {
            id: "airport",
            name: "Transfert aéroport",
            image: "/images/services/transport-airport.jpg",
            description: "Transferts aéroport fiables, service d'accueil",
            price: 30
        },
        {
            id: "on-demand",
            name: "Transport sur demande",
            image: "/images/services/transport-ondemand.jpg",
            description: "Transport flexible pour votre itinéraire personnalisé",
            price: 20
        }
    ],
    packages: [
        {
            id: "agafay-full-experience",
            name: "Quad + Dromadaire + Dîner",
            location: "Agafay",
            included: [
                "quad",
                "camel",
                "dinner"
            ],
            price: 60,
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg"
            ]
        },
        {
            id: "palmeraie-adventure",
            name: "Dromadaire + Quad",
            location: "Palmeraie",
            included: [
                "camel",
                "quad"
            ],
            price: 50,
            image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
            gallery: [
                "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg"
            ]
        },
        {
            id: "desert-experience",
            name: "Expérience Complète du Désert",
            location: "Merzouga",
            included: [
                "camel",
                "dinner",
                "overnight"
            ],
            price: 120,
            image: "/images/merzouga/merzouga1.jpg",
            gallery: []
        }
    ],
    reviews: {
        scale: 5,
        items: [
            {
                id: "rev-001",
                targetType: "tour",
                targetId: "marrakech-full-day",
                author: "Sarah M.",
                rating: 5,
                comment: "Parfaite introduction à Marrakech. Le guide était très compétent et sympathique.",
                date: "2024-11-12"
            },
            {
                id: "rev-002",
                targetType: "tour",
                targetId: "ourika-day-trip",
                author: "James L.",
                rating: 4,
                comment: "Paysages magnifiques. Transport confortable. Une journée qui vaut le coup.",
                date: "2024-10-03"
            },
            {
                id: "rev-003",
                targetType: "activity",
                targetId: "quad-agafay",
                author: "Nina K.",
                rating: 5,
                comment: "Expérience quad incroyable dans le désert. Sensations fortes et vues superbes.",
                date: "2024-09-18"
            },
            {
                id: "rev-004",
                targetType: "package",
                targetId: "agafay-full-experience",
                author: "Omar R.",
                rating: 5,
                comment: "Tout était parfaitement organisé. Le dîner sous les étoiles était inoubliable.",
                date: "2024-08-27"
            },
            {
                id: "rev-005",
                targetType: "activity",
                targetId: "camel-palmeraie",
                author: "Laura D.",
                rating: 4,
                comment: "Balade relaxante avec de très belles photos. Un peu courte mais agréable.",
                date: "2024-07-14"
            }
        ]
    }
};
}),
"[project]/src/app/[locale]/transport/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function TransportPage({ params }) {
    const { locale } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(params);
    const transport = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteData"].transport || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FDFBF7] font-poppins text-neutral-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                            backgroundImage: 'url(/images/hero-marrakech.jpg)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 container mx-auto px-4 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-poppins font-semibold text-primary text-xl italic mb-4",
                                    children: "Discover Morocco"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight",
                                    children: "Transport"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8",
                                    children: "Travel in comfort."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}/services`,
                                    className: "px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-neutral-dark text-white transition-all inline-flex items-center gap-2 font-medium backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 29
                                        }, this),
                                        " View All Collections"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/transport/page.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: transport.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: idx * 0.1
                            },
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-auto md:h-[350px] border border-neutral-100 group cursor-pointer hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:w-2/5 relative h-64 md:h-full overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110",
                                                style: {
                                                    backgroundImage: `url(${item.image || '/images/hero-marrakech.jpg'})`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-dark shadow-sm",
                                                children: "Transport"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:w-3/5 p-6 md:p-8 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-3 h-3 text-primary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                        lineNumber: 80,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Flexible"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                        lineNumber: 81,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-50 px-2 py-1 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: "w-3 h-3 fill-current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                        lineNumber: 84,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "4.9"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                        lineNumber: 85,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold font-poppins text-neutral-dark mb-3 leading-tight group-hover:text-primary transition-colors",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-3",
                                                        children: [
                                                            "Enjoy a comfortable and safe journey with our ",
                                                            item.name,
                                                            ". Professional drivers ensure punctuality and comfort."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 font-medium mb-0.5",
                                                                children: "Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold text-primary",
                                                                children: "On Request"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/${locale}/transport/${item.id}`,
                                                        className: "px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-dark font-medium text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2",
                                                        children: [
                                                            "Details ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                                lineNumber: 64,
                                columnNumber: 29
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/src/app/[locale]/transport/page.tsx",
                            lineNumber: 57,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/transport/page.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/transport/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/transport/page.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowUpRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
];
const ArrowUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-up-right", __iconNode);
;
 //# sourceMappingURL=arrow-up-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_a877cf72._.js.map