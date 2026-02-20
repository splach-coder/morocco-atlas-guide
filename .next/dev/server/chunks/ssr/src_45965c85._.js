module.exports = [
"[project]/src/components/HeroSlider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSlider",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteInfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const slides = [
    {
        id: 1,
        image: '/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg',
        title: 'High Atlas',
        emphasis: 'Peaks',
        subtitle: 'Conquer the majestic Mount Toubkal with expert local guides.'
    },
    {
        id: 2,
        image: '/images/desert_tours/merzouga3.jpg',
        title: 'Sahara',
        emphasis: 'Magic',
        subtitle: 'Experience the silence of the dunes and the magic of starlit nights.'
    },
    {
        id: 3,
        image: '/images/imperial_cities/marrakech5.jpg',
        title: 'Ancient',
        emphasis: 'Medinas',
        subtitle: 'Uncover the rich history and vibrant culture of Morocco\'s imperial cities.'
    }
];
const HeroSlider = ({ lang })=>{
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrentSlide((prev)=>(prev + 1) % slides.length);
        }, 8000);
        return ()=>clearInterval(timer);
    }, []);
    const nextSlide = ()=>setCurrentSlide((prev)=>(prev + 1) % slides.length);
    const prevSlide = ()=>setCurrentSlide((prev)=>(prev - 1 + slides.length) % slides.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-[100dvh] w-full overflow-hidden bg-neutral-dark grain",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 1.05,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 1.2,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    className: "absolute inset-0",
                    style: {
                        willChange: 'transform, opacity'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: slides[currentSlide].image,
                            alt: slides[currentSlide].title,
                            fill: true,
                            className: "object-cover",
                            priority: currentSlide === 0,
                            loading: currentSlide === 0 ? "eager" : "lazy",
                            quality: 85,
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSlider.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSlider.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSlider.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `bg-${currentSlide}`, true, {
                    fileName: "[project]/src/components/HeroSlider.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSlider.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex items-end pb-12 md:pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 md:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.3,
                                    duration: 0.6
                                },
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-6 h-[1px] bg-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSlider.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-[10px] font-bold uppercase tracking-[0.4em]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteInfo"].tagline
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSlider.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, `tag-${currentSlide}`, true, {
                                fileName: "[project]/src/components/HeroSlider.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    initial: {
                                        y: "100%"
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ],
                                        delay: 0.4
                                    },
                                    className: "text-white leading-[0.9] flex flex-col",
                                    style: {
                                        willChange: 'transform'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter font-medium",
                                            children: slides[currentSlide].title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSlider.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary italic text-5xl md:text-6xl lg:text-7xl tracking-tighter font-light -mt-1 md:-mt-3",
                                            children: slides[currentSlide].emphasis
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSlider.tsx",
                                            lineNumber: 106,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `title-${currentSlide}`, true, {
                                    fileName: "[project]/src/components/HeroSlider.tsx",
                                    lineNumber: 95,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSlider.tsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.8,
                                    duration: 0.6
                                },
                                className: "mt-6 md:ml-8 border-l border-primary/40 pl-6 max-w-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/80 text-base font-light leading-relaxed mb-6 font-inter",
                                        children: slides[currentSlide].subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSlider.tsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-6 items-start sm:items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/tours`,
                                                className: "relative group overflow-hidden bg-primary px-6 py-3 text-white font-bold text-xs tracking-widest uppercase transition-all hover:bg-white hover:text-black",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10 flex items-center gap-3",
                                                    children: [
                                                        "Explore Journeys",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroSlider.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroSlider.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroSlider.tsx",
                                                lineNumber: 125,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteInfo"].contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteInfo"].whatsappBookingMessage)}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-white font-bold tracking-widest uppercase text-[10px] border-b border-white/20 pb-1 hover:border-primary transition-all flex items-center gap-2 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                        className: "w-3 h-3 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HeroSlider.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Book via WhatsApp"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HeroSlider.tsx",
                                                lineNumber: 135,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HeroSlider.tsx",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, `desc-${currentSlide}`, true, {
                                fileName: "[project]/src/components/HeroSlider.tsx",
                                lineNumber: 113,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSlider.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSlider.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSlider.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-12 right-12 z-20 hidden md:flex items-end gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 text-white/40 font-bold text-[10px] uppercase tracking-widest",
                        children: slides.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide(i),
                                className: `transition-all ${currentSlide === i ? 'text-primary scale-110' : 'hover:text-white'}`,
                                children: [
                                    "0",
                                    i + 1
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/HeroSlider.tsx",
                                lineNumber: 154,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSlider.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevSlide,
                                className: "w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4 group-hover:-translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSlider.tsx",
                                    lineNumber: 169,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSlider.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextSlide,
                                className: "w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSlider.tsx",
                                    lineNumber: 175,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSlider.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSlider.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSlider.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 h-0.5 bg-white/5 w-full z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: "100%"
                    },
                    transition: {
                        duration: 8,
                        ease: "linear"
                    },
                    className: "h-full bg-primary/80"
                }, `progress-${currentSlide}`, false, {
                    fileName: "[project]/src/components/HeroSlider.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSlider.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSlider.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/ReviewsSlider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewsSlider",
    ()=>ReviewsSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// Minimal Google Icon
const GoogleIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/ReviewsSlider.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/ReviewsSlider.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/ReviewsSlider.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/ReviewsSlider.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReviewsSlider.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ReviewsSlider = ({ reviews })=>{
    // Calculate average rating
    const avgRating = reviews.length > 0 ? (reviews.reduce((acc, r)=>acc + r.rating, 0) / reviews.length).toFixed(1) : '5.0';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 bg-white grain overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-end justify-between border-b border-neutral-light pb-8 mb-16 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block",
                                    children: "THE GUEST RECORD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all",
                                    children: [
                                        "Voices of the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-primary",
                                            children: "High Atlas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 48,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-12 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-6xl font-medium font-playfair text-neutral-dark block leading-none",
                                            children: avgRating
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 54,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold text-neutral-300 uppercase tracking-widest mt-2 block",
                                            children: "Global Index"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-16 w-px bg-neutral-light"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-5xl font-medium font-playfair text-neutral-dark block leading-none",
                                            children: [
                                                reviews.length,
                                                "+"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold text-neutral-300 uppercase tracking-widest mt-2 block",
                                            children: "Verified Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                    ],
                    spaceBetween: 48,
                    slidesPerView: 1,
                    pagination: {
                        clickable: true
                    },
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    },
                    className: "w-full !pb-24",
                    children: reviews.map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            className: "h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: index * 0.1,
                                    duration: 0.8
                                },
                                className: "group flex flex-col h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                ...Array(5)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: `w-3 h-3 ${i < review.rating ? 'fill-primary text-primary' : 'text-neutral-200'}`
                                                }, i, false, {
                                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 90,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-light text-neutral-medium leading-relaxed italic pr-12",
                                                children: [
                                                    '"',
                                                    review.comment,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ReviewsSlider.tsx",
                                                lineNumber: 100,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 99,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto pt-8 flex items-center justify-between border-t border-neutral-light group-hover:border-primary transition-colors duration-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-neutral-dark uppercase tracking-widest mb-1",
                                                            children: review.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-neutral-300 font-bold uppercase tracking-[0.2em]",
                                                            children: review.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleIcon, {
                                                    className: "w-5 h-5 text-neutral-200 group-hover:text-primary transition-colors duration-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                                            lineNumber: 105,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                    lineNumber: 89,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewsSlider.tsx",
                                lineNumber: 82,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, review.id, false, {
                            fileName: "[project]/src/components/ReviewsSlider.tsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-12 border-t border-neutral-light pt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group flex flex-col items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full border border-neutral-light flex items-center justify-center group-hover:bg-neutral-dark group-hover:border-neutral-dark transition-all duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "w-6 h-6 text-neutral-dark group-hover:text-white transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewsSlider.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-neutral-dark font-bold uppercase tracking-[0.2em] text-[10px]",
                                children: "Document your Discovery"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewsSlider.tsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReviewsSlider.tsx",
                        lineNumber: 120,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ReviewsSlider.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ReviewsSlider.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ReviewsSlider.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/AboutPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutPreview",
    ()=>AboutPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const AboutPreview = ({ locale, dict })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-[#F9F7F2] overflow-hidden grain",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-100px"
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                className: "relative aspect-[4/5] overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/atlas-legacy.jpg",
                                    alt: "Atlas Mountains Legacy",
                                    fill: true,
                                    className: "object-cover transition-transform duration-[2s] hover:scale-110",
                                    loading: "lazy",
                                    quality: 80,
                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutPreview.tsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-16 -right-16 w-3/4 hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 60
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-100px"
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.2
                                    },
                                    className: "p-4 bg-white border-sharp shadow-2xl relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-primary font-bold text-4xl mb-4 font-playfair leading-none",
                                            children: "12+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 44,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-neutral-dark font-bold tracking-[0.2em] text-xs uppercase mb-2",
                                            children: "Years of Heritage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 45,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-medium font-light text-sm leading-relaxed",
                                            children: "Our journey began in the dust of Imlil. Today, we are Morocco's leading boutique trekking specialists."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 46,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutPreview.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutPreview.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 lg:col-start-8 pt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block",
                                    children: "THE ATLAS LEGACY"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair mb-8 leading-[0.95] tracking-tighter",
                                    children: [
                                        "More than a ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 66,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic",
                                            children: "Journey."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-medium text-xl font-light leading-relaxed mb-12",
                                    children: "Born and raised in the High Atlas mountains, our team brings a life's worth of local knowledge to every trek. We don't just show you the path; we share our culture, our home, and our heart."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-12 mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-8 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-primary font-bold text-sm tracking-widest pt-1",
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-neutral-dark mb-2 tracking-widest uppercase text-xs",
                                                            children: "Berber Roots"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-neutral-medium/80 font-light text-sm",
                                                            children: "Every guide is a native of the peaks you conquer."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-8 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-primary font-bold text-sm tracking-widest pt-1",
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-neutral-dark mb-2 tracking-widest uppercase text-xs",
                                                            children: "Boutique Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-neutral-medium/80 font-light text-sm",
                                                            children: "We believe in small groups and big experiences."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 82,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}/about`,
                                    className: "inline-flex items-center gap-6 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full border border-neutral-dark/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-6 h-6 group-hover:text-white group-hover:translate-x-1 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutPreview.tsx",
                                                lineNumber: 96,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 95,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold uppercase tracking-[0.2em] text-xs text-neutral-dark group-hover:text-primary transition-colors",
                                            children: "Discover Our Story"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutPreview.tsx",
                                            lineNumber: 98,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutPreview.tsx",
                                    lineNumber: 91,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutPreview.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AboutPreview.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutPreview.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/AboutPreview.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AboutPreview.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/data/siteData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteData",
    ()=>siteData,
    "siteDataEs",
    ()=>siteDataEs,
    "siteDataFr",
    ()=>siteDataFr
]);
const siteData = {
    "currency": "EUR",
    "location": "Marrakech",
    // TOUBKAL TREKS - Mountain adventures in the High Atlas
    "toubkalTreks": [
        {
            "id": "toubkal-treks-2-days-express",
            "name": "Toubkal Express 2 days Ascent",
            "duration": "2_days",
            "image": "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
            "gallery": [
                "/images/toubkal_treks/sven123musik-ai-generated-8635943_1920.png",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg"
            ],
            "description": `moroccoatlasguide invites you on a unique adventure: to climb Toubkal, the highest peak in North Africa, in just 2 days. This demanding hike is reserved for experienced hikers and adventure seekers, but does not require any technical expertise.

Highlights of the trek:
- Ascent of Toubkal (4167m): an unforgettable achievement for experienced hikers.
- Discovery of the Berber villages of Imlil and Aremd: immersion in the authentic Amazigh culture.
- Breathtaking landscapes of the High Atlas: spectacular panoramas of the mountains and valleys.

Practical information:
- Duration: 2 days
- Difficulty: High
- Elevation gain: 2700m
- Accommodation: Mountain refuge and lodge
- Season: all year
- Necessary equipment: hiking shoes, warm and waterproof mountain clothing, backpack, water bottle, headlamp, etc.

This trek is a unique opportunity to:
- Take on a sporting and personal challenge.
- Discover the wild beauty of the High Atlas.
- Meet the Berber people and share their culture.

100% Customizable
Tell us about your trip requirement. We’ll work together to customize your trip to meet your exact requirement so that you have a memorable trip.

No Hidden Charges
We don’t add hidden extras cost. All trips include travel permit, lodging and fooding. There are no surprises with hidden costs.`,
            "pricing": [
                {
                    "totalPrice": 140
                }
            ],
            "includes": [
                "Transportation from Marrakech",
                "Accommodation in a refuge and lodge",
                "Meals during the trek",
                "Supervision by a mountain guide"
            ],
            "excludes": [
                "Round-trip flights to Marrakech",
                "Drinks not included in meals",
                "Tips and personal expenses"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Toubkal Refuge (3205m)",
                    "description": "Departure in the morning at 8am from Marrakech in tourist transport or taxi to the Western High Atlas where the Toubkal massif is located (1h30 drive). We will cross Asni, a small provincial center of the isolated Berber villages of the Toubkal region. We will arrive in Imlil (1800m) where we will be met by our mule driver to start our trek. After a two and a half hour walk, we will arrive at the marabout of sidi chamharourch. This is the ideal place to have lunch while enjoying the scenery. We will continue to climb to the Toubkal refuge (2h30). We will have dinner and spend the night at the refuge. (On request, it will also be possible to spend the night under the stars by setting up a bivouac under tents). *(Day: 1h 30 of tourist transport and 5h00 of walking, high level)."
                },
                {
                    "day": 2,
                    "title": "Toubkal Refuge (3205m) – Toubkal (4168m) – Marrakech",
                    "description": "We will start the hike at dawn (departure around 5am). We recommend to be technically well equipped for the ascent, as it can be cold at the top (even in summer against all odds!). We advise you to bring gloves, a hat, a warm coat and walking sticks that can be very useful during the descent. The ascent takes 3h30, as soon as we reach the summit, we will be “on the roof of North Africa” and will be able to contemplate distant plains and enjoy a breathtaking view of the summits of the neighboring massifs which also exceed an altitude of 4000m. The descent takes 2 hours. We will have lunch at the refuge. Then, we will continue our descent for 3.5 hours to reach Imlil and take the road back to Marrakech (1h30). *(Day: 1h30 of tourist transport and 8h of walking, high level)."
                }
            ]
        },
        {
            "id": "imlil-azzaden-valleys-2-day-trek",
            "name": "2 Day Atlas Valley Trek",
            "duration": "2_days",
            "image": "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/sven123musik-ai-generated-8635944_1920.png",
                "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
                "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg"
            ],
            "description": `Embark on a captivating journey from the bustling streets of Marrakech, weaving through a tapestry of charming hamlets and traditional Berber villages. The majestic Western High Atlas Mountains will rise before you, beckoning you deeper into their embrace.

Our trek begins with a path that winds past the picturesque villages of Imlil, Arghen, and M’zzik. Each settlement offers a glimpse into the rich Berber culture, with their unique architecture and welcoming locals.

As we venture onward, the landscape transforms into the breathtaking Assif Aït Mizane Valley. Here, marvel at the ancient irrigated terraced fields, meticulously crafted to sustain a bounty of fruit trees and vibrant vegetables. A true testament to human ingenuity and harmony with nature.

Conquering the Tiz M’zzik mountain pass (2450m) will be a rewarding challenge, offering panoramic vistas that will leave you breathless. Breathe in the crisp mountain air as you soak in the awe-inspiring scenery.

Our descent takes us through a fragrant juniper forest, eventually leading us to the charming village of Tizi Oussem. Here, we’ll rest our weary legs and immerse ourselves in the warm hospitality of a traditional village for the night.`,
            "pricing": [
                {
                    "totalPrice": 165
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Imlil – Azzaden Valley – Tizi Oussem",
                    "description": "Your adventure begins with a scenic drive from Marrakech to Imlil, a Berber village nestled in the foothills of Mount Toubkal, the highest peak in North Africa. Along the way, you’ll enjoy breathtaking views of the mountains and valleys. After breakfast in Imlil, you’ll embark on your trek, following a well-maintained trail through the Azzaden Valley. This valley is known for its lush green fields, traditional Berber villages, and stunning waterfalls. Enjoy a delicious lunch prepared by a Berber family in a traditional mudbrick home to learn about Berber culture. In the afternoon, ascend the Tizi Mzik Pass for panoramic views, then descend to see the Tamsoult Cascades before arriving at Tizi Oussem (1,850m) for dinner and overnight in a traditional gite."
                },
                {
                    "day": 2,
                    "title": "Tizi Oussem – Imlil – Marrakech",
                    "description": "On the second day, you’ll trek back to Imlil, following a different route that offers equally stunning views. Along the way, you may visit other Berber villages and explore the local handicraft scene. After lunch in Imlil, you’ll be transferred back to Marrakech, where your adventure ends. (Note: The difficulty level of the trek can be adjusted to suit your fitness level)."
                }
            ]
        },
        {
            "id": "toubkal-tres-3-days",
            "name": "Toubkal Winter 3 Days",
            "duration": "3_days",
            "image": "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
                "/images/toubkal_treks/sven123musik-ai-generated-8635943_1920.png"
            ],
            "description": `Join us for a memorable 3-day winter ascent of Mount Toubkal. This extended itinerary allows for better acclimatization and a more relaxed pace compared to the 2-day express option. You'll hike from Imlil to the refuge, summit the highest peak in North Africa (4167m) to enjoy breathtaking views, and spend two nights in the heart of the Atlas Mountains.

The price of the trek varies depending on the number of participants, the season, and the duration of the trek. Please contact us for a detailed quote. We look forward to welcoming you to Morocco!

Necessary equipment: hiking shoes, warm and waterproof mountain clothing, backpack, water bottle, headlamp, etc.`,
            "pricing": [
                {
                    "totalPrice": 190
                }
            ],
            "includes": [
                "Round-trip transportation between Marrakech and Imlil",
                "Guide service",
                "Muleteer and cook service",
                "2 nights in the refuge",
                "Food during the trek"
            ],
            "excludes": [
                "Hotel in Marrakech",
                "Travel insurance",
                "Traditional tips for the team",
                "Drinks not included in meals",
                "Personal expenses"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Toubkal Refuge",
                    "description": "A short transfer from Marrakech to the village of Imlil (1800m) in the High Atlas, where we will meet our team of mule drivers and cook. After meeting our Berber team, we will start our hike to the Toubkal Refuge, passing through the village of Aremed and the small village of Chamharouch. 5 to 6 hours of walking."
                },
                {
                    "day": 2,
                    "title": "Toubkal Refuge – Ascent of Mount Toubkal (4167m)",
                    "description": "Early departure to avoid the risk of bad weather. 3.5 hours of ascent to the summit of Toubkal, which does not present any technical difficulty. Once we reach the summit of Toubkal, we will be “on the roof of North Africa” and will be able to contemplate distant plains and enjoy a breathtaking view of the summits of the neighboring massifs which also exceed an altitude of 4000m. The descent takes 2 hours. We will have lunch at the refuge. 2.5 hours to descend to the refuge where we will spend the second night."
                },
                {
                    "day": 3,
                    "title": "Toubkal Refuge – Imlil – Return to Marrakech",
                    "description": "After breakfast, we will descend leisurely by the same path, passing through Sidi Chamharouch. A good lunch awaits us in Imlil under the walnut trees prepared by our cook before making a short transfer to Marrakech via Asni and Tahnaout. 1.5 hours of driving and 5 hours of walking."
                }
            ]
        },
        {
            "id": "berber-villages-4-days",
            "name": "Berber Villages 4 Days",
            "duration": "4_days",
            "image": "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
                "/images/excursions/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg"
            ],
            "description": `Immerse yourself in Berber culture on this 4-day trek through the 'Berber Villages'. Traverse the Imnane and Azzaden valleys, crossing high passes with panoramic views but staying in traditional village guesthouses each night. This moderate trek focuses on cultural connection, landscapes, and the rhythm of local life.

Additional information:
The price of the trek varies depending on the number of participants, the season, and the duration of the trek.
Please contact us for a detailed quote.
We look forward to welcoming you to Morocco!`,
            "pricing": [
                {
                    "totalPrice": 245
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Id Aissa Village",
                    "description": "Depart from Marrakech to the High Atlas, passing through the small town of Tahnaout and then Asni. Enjoy superb views of the mountain range and the summit of Toubkal. Upon arrival in Imi Oughlad, meet your Berber mule driver. Begin your hike through the village of Imi Oughlad, followed by a beautiful climb to the Tacht Pass at 2020 m for panoramic views of the Azaden Valley. After lunch, enjoy an easy descent to the village of Ait Aissa at 1800 m. Stay overnight in a gite with a local family. (5 hours of walking and 1.5 hours of transfer)."
                },
                {
                    "day": 2,
                    "title": "Ait Aissa – Tkent Village",
                    "description": "Start with a descent to the Azaden River, followed by a beautiful climb to the Teouti Pass at 2440 m altitude, ascending in the shade of walnut and juniper trees. Descend to Assaka for a lunch break under a walnut tree. Enjoy a 1.5-hour hike with small descents and ascents to the village of Tizgui de Tkent. Stay overnight in a gite with a local family. (5.5 hours of walking)."
                },
                {
                    "day": 3,
                    "title": "Tkent Village – Tagdalt Pass – Tizi Oussem Village",
                    "description": "Depart from Tkent with its beautiful stone and mudbrick houses. Meet Berber villagers working the land. Enjoy a gradual ascent to the Tagdalt Pass (2700 m) for beautiful views of the valley and peaks over 3000 m. Enjoy a long descent through a juniper forest. Have lunch in the shade by the river before arriving at the village of Tizi Oussem. Stay overnight in a gite with a local family. (6 hours of walking)."
                },
                {
                    "day": 4,
                    "title": "Tizi Oussem Village – Tamsoult Waterfalls – Marrakech",
                    "description": "After breakfast, ascend to the pretty village of Tamsoult. Enjoy breathtaking views of the Azaden Valley with its contrasting colors. Ascend to the Tamsoult Waterfalls and then to the Mzik Pass. Take in panoramic views of the beautiful village of Imlil. Enjoy a delicious lunch under the juniper trees before descending to the valley. Transfer to Marrakech. (5 hours of walking and 1.5 hours of driving)."
                }
            ]
        },
        {
            "id": "toubkal-winter-8-days",
            "name": "Toubkal Winter 8 Days",
            "duration": "8_days",
            "image": "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg",
                "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                "/images/toubkal_treks/sven123musik-ai-generated-8635944_1920.png"
            ],
            "description": `During winter, the majestic Mt. Toubkal and the surrounding peaks of the High Atlas undergo a remarkable transformation into a paradise for hikers, boasting tranquil trails, crisp air, and breathtaking vistas of the Toubkal Massif. Embarking from the bustling city of Marrakech, we journey directly into the heart of the High Atlas to conquer North Africa’s highest peak (4167m) amidst awe-inspiring scenery. While crampons and ice axes may be necessary depending on the weather, this expedition is crafted to be accessible to those who are physically fit and determined, even if they are new to winter trekking.

WHAT TO BRING:
moroccoatlasguide, prepares as you would for walking in any mountain region; it can be warm and sunny during the day, but the weather can quickly change to snow and cold winds. Please carry out what you carry in, leaving no rubbish behind.

moroccoatlasguide is tailored to match the season and your level of fitness. You have the choice of basing yourself in Berber Guesthouses for daily walks or opting for an Atlas Mule Trek for 2+ days. On mule treks, you usually have the option of staying in Berber Guesthouses/families or wild camping in 2-person tents. In addition to regular packing, here is a checklist for moroccoatlasguide:

- Good walking boots and socks
- Comfortable shoes/slippers for camp/guesthouse
- Trekking pants
- Lightweight waterproof over-trousers/rain pants`,
            "pricing": [
                {
                    "totalPrice": 430
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Transfer from Marrakech airport to the 4-star hotel.",
                    "description": "Transfer from Marrakech airport to the 4-star hotel."
                },
                {
                    "day": 2,
                    "title": "Marrakech – Imlil (Acclimatization)",
                    "description": "Transfer from Marrakech to Imlil. Acclimatization day around the Imlil Valley. One option is to trek to Tizi M’zzik col at 2660m / 8727ft in the nearby Mezzik Valley. Overnight in a local village."
                },
                {
                    "day": 3,
                    "title": "Imlil – Sidi Chamharouch – Neltner Refuge",
                    "description": "Ascend to the shrine at Sidi Chamharouch. Continue the ascent to reach the Neltner Refuge (3207m / 10,521ft), our accommodation for the next 3 nights."
                },
                {
                    "day": 4,
                    "title": "Climb Ouanoukrim (4089m)",
                    "description": "Leave the refuge to climb Ouanoukrim (4089m / 13,415ft) during the day. Time to rest and relax in the late afternoon at the refuge."
                },
                {
                    "day": 5,
                    "title": "Summit Jebel Toubkal (4167m)",
                    "description": "Today, make the steep ascent to the summit of Jebel Toubkal (4167m / 13,672ft). After enjoying the panoramic views, return to the Neltner Refuge for the night."
                },
                {
                    "day": 6,
                    "title": "Refuge – Aroumd Valley – Imlil",
                    "description": "Leave the refuge and descend down the Aroumd Valley, passing through Sidi Chamharouch, and return to Imlil for the night at the hotel."
                },
                {
                    "day": 7,
                    "title": "Imlil – Marrakech",
                    "description": "Transfer to Marrakech, where you’ll have the opportunity to explore the city before returning to the 4-star hotel."
                },
                {
                    "day": 8,
                    "title": "Transfer from the hotel to the airport.",
                    "description": "Transfer from the hotel to the airport."
                }
            ]
        },
        {
            "id": "toubkal-15-days-walk",
            "name": "Toubkal Massif 15 Days 14 Nights",
            "duration": "15_days",
            "image": "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg"
            ],
            "description": `Unforgettable Trek to Mount Toubkal
an other extraordinary adventure through Morocco’s High Atlas Mountains with morocco atlas guide. Join your local guide, cook, and mule driver as you explore charming Berber villages, traverse lush valleys, navigate moderate crevasses, and ascend majestic mountains bathed in golden sunlight.

Experience a unique blend of comfort and adventure. Stay in traditional guesthouses and camp under a canopy of fig trees. Culminate your journey with the challenging yet rewarding climb to the summit of Mount Toubkal, North Africa’s highest peak at an impressive 4,167 meters (13,671 ft). The breathtaking panoramic views from the top will leave you speechless.

This trek goes beyond a physical challenge. It’s a cultural immersion designed to give you a glimpse into the Berber way of life in the Atlas Mountains. The itinerary is suitable for anyone who maintains a regular fitness routine.

Extend your adventure with a trip to Marrakech, a captivating city known for its fire-eaters, snake charmers, and vibrant markets.

Remember: This is a demanding trek. Be prepared for changing weather conditions in the mountains (warm days, cold nights, wind, and snow possible). Pack accordingly with sturdy boots, comfortable camp shoes, trekking pants, and rain gear.`,
            "pricing": [
                {
                    "totalPrice": 380
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Arrival in Marrakech",
                    "description": "Arrive in Marrakech, relax at your hotel, and enjoy a delicious dinner (included)."
                },
                {
                    "day": 2,
                    "title": "Marrakech – Tiziane (1800m)",
                    "description": "Embark on your trek! Hike from Marrakech to Tiziane (1800m) via Asni, Imioughlad, and Col Tacht (2000m). Enjoy stunning scenery and spend the night at a camp or gite (4.5 hours walking, +600m/-300m elevation change)."
                },
                {
                    "day": 3,
                    "title": "Tiziane – Tizgui’n Tikkent (2250m)",
                    "description": "The climb continues! Trek from Tiziane to Tizgui’n Tikkent campsite (2250m) via Col Téouti (2400m). Prepare for breathtaking views (6 hours walking, +1050m/-250m elevation change)."
                },
                {
                    "day": 4,
                    "title": "Tizgui’n Tikkent – Azib n Tamsoult (2250m)",
                    "description": "Traverse from Azib n Tikkent to Azib n Tamsoult campsite (2250m), passing Col Tougdalt (2700m) along the way (6 hours walking, +800m/-900m elevation change)."
                },
                {
                    "day": 5,
                    "title": "Azib n Tamsoult – Imlil (1750m)",
                    "description": "Descend from Azib n Tamsoult to Imlil (1750m) via Col Mezzik. Enjoy a well-deserved rest (5 hours walking)."
                },
                {
                    "day": 6,
                    "title": "Imlil – Refuge Neltner (3200m)",
                    "description": "Challenge yourself with a significant ascent from Imlil to Refuge Neltner (3200m) passing Armed and Sidi Chamharouch (5.5 hours walking, +1500m elevation change)."
                },
                {
                    "day": 7,
                    "title": "Refuge Neltner – Mount Toubkal Summit (4167m) – Refuge",
                    "description": "Conquer the summit! Hike from Refuge Neltner to the peak of Mount Toubkal (4167m) and return to the refuge for the night (5 hours walking, +1000m/-1000m elevation change)."
                },
                {
                    "day": 8,
                    "title": "Refuge Neltner – Lac Ifni (2400m)",
                    "description": "Explore a new route! Trek from Refuge Neltner to Lac Ifni campsite (2400m) via Col Ounamous (3700m) (6 hours walking, +500m/-1350m elevation change)."
                },
                {
                    "day": 9,
                    "title": "Lac Ifni – Taghbalout (2500m)",
                    "description": "Continue your journey from Lac Ifni to Taghbalout campsite (2500m) passing Tissaldai (5.5 hours walking, +850m/-300m elevation change)."
                },
                {
                    "day": 10,
                    "title": "Taghbalout – Camp (2600m)",
                    "description": "Brace yourself for a challenging climb! Hike from Taghbalout to Camp (2600m) via Col 2900m and Azib Likkemt (6.5 hours walking, +900m/-800m elevation change)."
                },
                {
                    "day": 11,
                    "title": "Camp – Azib Likkemt – Camp Amagdoul (2300m)",
                    "description": "Another climb awaits! Trek from Azib Likkemt to Camp Amagdoul (2300m) via Col Likkemt (3600m) (6 hours walking, +1000m/-1200m elevation change)."
                },
                {
                    "day": 12,
                    "title": "Camp Amagdoul – Ousertek (2100m)",
                    "description": "Descend towards the end of the trek. Hike from Ousarou to Ousertek (2100m) via Col Eddi (2900m) and Oukaimden (2600m) (5.5 hours walking, +700m/-900m elevation change)."
                },
                {
                    "day": 13,
                    "title": "Ousertek – Imioughlad – Marrakech (Transfer)",
                    "description": "Celebrate your accomplishment! Reach the end of the trek at Imioughlad after a final hike from Ousertek via Arg Imeskar (3.5 hours walking, +300m/-400m elevation change)."
                },
                {
                    "day": 14,
                    "title": "Marrakech (Free Day)",
                    "description": "Enjoy a free day in Marrakech to explore the vibrant city."
                },
                {
                    "day": 15,
                    "title": "Departure",
                    "description": "Relax and reflect on your adventure. Transfer to the airport, with time for souvenir shopping in the souk if your flight allows."
                }
            ]
        },
        {
            "id": "3-days-imlil-to-setti-fatma",
            "name": "3 Days – Imlil to Setti Fatma",
            "duration": "3_days",
            "image": "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/excursions/rigel-ibisQEDxODo-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg"
            ],
            "description": `Why book this trek?
- Trekking in the High Atlas Mountains
- See Berber villages
- Beautiful scenery
- See the waterfall in Setti Fatma

Tour Details:
In the higher elevations you’ll find mostly evergreen alpines with some occasional undergrowth, while the lower elevations have diverse valleys of walnut, apple, cherry and other fruit trees as well as mountain orchids, poppies and irises.

Trek Grades:
- Grade 1 walks (Easy): Tend to be short day walks and rambles at low altitudes. Grade 1 walks can be enjoyed by anyone who leads a reasonably active life and no special preparation is required.
- Grade 2 walks (Moderate): Will usually involve some longer walks (4-6 hours/day) at low altitudes (below 3000m). Some previous hill walking experience would be beneficial but these walks should be within the capabilities of those who lead a normal active life. Grade 2 walking tours may contain some optional strenuous days, and in order to get the best out of the trip we would advise that you tone up your fitness before you join.
- Grade 3 walks (Strenuous): Are for the more serious hill walker and a higher level of physical fitness is required. Walking days are normally 6-8 hours and may involve up to 900m or more of ascent and descent. You should be prepared for several consecutive days walking, often at higher altitudes, so stamina is important.

What to Bring:
For Atlas Trekking you need to prepare as you would for walking in any mountain region; it can be warm and sunny during the day but the weather in the mountains can quickly change from sunshine to snow and cold winds (autumn through late spring). Please do not leave any rubbish behind you; carry out what you carry in.
Atlas Treks are tailored to match the season and your level of fitness. You have the choice of basing yourself in Berber Guesthouses, from where you can take daily walks, or you can Atlas Mule Trek for 2+ days. On mule treks you usually have the choice of staying in Berber Guesthouse/with families or wild camping in 2-person tents. In addition to regular packing, here is a Check List for Atlas Trekking:
- Good walking boots and socks
- Comfortable shoes/slippers for camp/guesthouse
- Trekking pants
- Lightweight waterproof over-trousers / rain-pants`,
            "pricing": [
                {
                    "totalPrice": 200
                }
            ],
            "includes": [
                "Fully escorted by local mountain guide, muleteers and cook",
                "All meals: breakfast, lunch and dinner",
                "Accommodation: 2 nights at local gites",
                "Transport: minibus or 4×4 car"
            ],
            "excludes": [
                "International Flights",
                "Travel Insurance",
                "Sleeping Bags",
                "Tips",
                "Walking poles, Meals not mentioned",
                "Soft drinks"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Imlil – Tacheddirt (Valley of Tacheddirt)",
                    "description": "After a transfer to Imlil we start walking towards the valley of Tacheddirt, passing by Tizi ‘n Tamatert (2279m) to arrive at the village of Ouanesekra (2200m) in the valley of Tacheddirt. Here we spend the night in a Berber gîte or in tents. Approx. 4 hours walking. (L/D)"
                },
                {
                    "day": 2,
                    "title": "Tacheddirt – Timichi",
                    "description": "We start walking from Tacheddirt towards Timichi (2000m), passing by the Tizi ‘n Tacheddirt (3172m). After the pass we descent past the villages of Ibbasen and Timichi. We spend the night in a Berber gîte. Approx. 6 to 7 hours walking. (B/L/D)"
                },
                {
                    "day": 3,
                    "title": "Timichi – Setti Fatma – Marrakech",
                    "description": "Today we walk from Timichi towards Setti Fatma (1700m). All along the journey there are Berber villages in the valley: Tiourdou, Anfli, Tadrart, Chiker. After lunch we continue via Agadir ‘n Aït Boulmane and on to the centre of Setti Fadma. If there is enough time we will visit the waterfall in Setti Fadma before returning to Marrakech. Approx. 4 to 5 hours walking."
                }
            ]
        },
        {
            "id": "8-days-mount-toubkal-summer",
            "name": "8 Days Mount Toubkal – Summer",
            "duration": "8_days",
            "image": "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
            "gallery": [
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg"
            ],
            "description": `Why book this trek?
- Attempt the summit of Mt Toubkal, highest mountain in North Africa
- Trekking in the High Atlas Mountains
- See the beautiful Ifni Lake
- Experience the Berber way of life
- Explore the city of Marrakech

Tour Details:
North Africa’s highest mountain dominates the breathtaking view southwards from Marrakech, often surprising with its unexpected snow-capped peak. However, it also offers a relatively easy ascent during the summer.

Trek Grades:
- Grade 1 walks (Easy): Tend to be short day walks and rambles at low altitudes. Grade 1 walks can be enjoyed by anyone who leads a reasonably active life and no special preparation is required.
- Grade 2 walks (Moderate): Will usually involve some longer walks (4-6 hours/day) at low altitudes (below 3000m). Some previous hill walking experience would be beneficial but these walks should be within the capabilities of those who lead a normal active life. Grade 2 walking tours may contain some optional strenuous days, and in order to get the best out of the trip we would advise that you tone up your fitness before you join.
- Grade 3 walks (Strenuous): Are for the more serious hill walker and a higher level of physical fitness is required. Walking days are normally 6-8 hours and may involve up to 900m or more of ascent and descent. You should be prepared for several consecutive days walking, often at higher altitudes, so stamina is important.

What to Bring:
For Atlas Trekking you need to prepare as you would for walking in any mountain region; it can be warm and sunny during the day but the weather in the mountains can quickly change from sunshine to snow and cold winds (autumn through late spring). Please do not leave any rubbish behind you; carry out what you carry in.

Atlas Treks are tailored to match the season and your level of fitness. You have the choice of basing yourself in Berber Guesthouses, from where you can take daily walks, or you can Atlas Mule Trek for 2+ days. On mule treks you usually have the choice of staying in Berber Guesthouse/with families or wild camping in 2-person tents. In addition to regular packing, here is a Check List for Atlas Trekking:
- Good walking boots and socks
- Comfortable shoes/slippers for camp/guesthouse
- Trekking pants
- Lightweight waterproof over-trousers / rain-pants`,
            "pricing": [
                {
                    "totalPrice": 420
                }
            ],
            "includes": [
                "Fully escorted by local mountain guide, muleteers and cook",
                "All meals: breakfast, lunch and dinner (except in Marrakech)",
                "Accommodation: 2 nights in Marrakech and 5 nights camping",
                "Transport: minibus or 4×4 car"
            ],
            "excludes": [
                "International Flights",
                "Travel Insurance",
                "Sleeping Bags",
                "Walking poles, Meals not mentioned",
                "Tips",
                "Soft drinks"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Arrival Marrakech",
                    "description": "Pick up from the airport in Marrakech and transfer to your riad where you will spend the night. (B)"
                },
                {
                    "day": 2,
                    "title": "Marrakech – Imlil – Tacheddirt",
                    "description": "We leave Marrakech after breakfast and drive to Imlil (1740m) via Asni. Imlil is the principal trailhead for walkers. This is the place where we meet our mule team and once all our gear is loaded we begin walking along the valley towards Tacheddirt, some 8 km from Imlil. Soon the trail begins to rise as we climb up to the pass at Tizi ‘n Tamatert (2279m). We then descend to the pretty village of Ouaneskra (2200m) and continue, for a further half-hour or so, to Tacheddirt (2300m), where we set up camp near the river. Approx. 4 hours walking. (B/L/D)"
                },
                {
                    "day": 3,
                    "title": "Tacheddirt – Azib Likemt",
                    "description": "We immediately begin a long, slow ascent to the pass at Tizi Likemt (3555m). At the top we enjoy our first fine view of the Toubkal Massif before a long downhill descent to the village of Azib Likemt (2200m), where we set up our camp for the night. Approx. 5 hours walking. (B/L/D)"
                },
                {
                    "day": 4,
                    "title": "Azib Likemt – Amsouzert",
                    "description": "This day is going to be a long but quite easy day, passing many different landscapes. From Tizi ‘n Ououraine (3120m) we enjoy further views of the Toubkal Massif, including the summit, the east face and the Ifni Dome (3876m). The trail leads on towards Amsouzert (1700m), one of the most striking villages in the region, where we spend the night in a local gite or in a camp. The gite is very basic accommodation. Approx. 6 hours walking. (B/L/D)"
                },
                {
                    "day": 5,
                    "title": "Amsouzert – Ifni Lake",
                    "description": "West of Amsouzert are several small villages, which we explore as we make our way towards Ifni Lake (2300m), the only lake in the Massif. It is a memorable sight, surrounded by rocky mountains and giant heaps of rubble, and is unusually deep. We expect to arrive by lunchtime and spend the afternoon relaxing at the shore. We camp tonight in this area. Approx. 4 hours walking. (B/L/D)"
                },
                {
                    "day": 6,
                    "title": "Ifni Lake – Tizi n’Ouanoums – Nelther Refuge",
                    "description": "By now we should be both fit and acclimatised, and ready to tackle the hardest day of the trek. We make our way along a steep path that leads up a seemingly endless scree slope. At length we reach the pass at Tizi n’Ouanoums (3664m), a narrow ledge between two shafts of rock. From here it is a long zigzag descent to Nelther Refuge (3200m), where we spend the night in tents. Approx. 6 hours walking. (B/L/D)"
                },
                {
                    "day": 7,
                    "title": "Nelther Refuge – Toubkal Summit – Imlil – Marrakech",
                    "description": "We leave before dawn, following a well-worn route to the summit of Toubkal (4167m). If conditions are good it should take no more than 2-3 hours to reach the summit, where we enjoy beautiful views of the entire Atlas range and the Marrakech plains beyond. Returning to base, we then descend fairly rapidly to the villages of Sidi Chamharouch and Aremd, before following the Mizane River, along a well-forested trail, to the trailhead at Imlil. Transfer back to Marrakech. Approx. 9 hours walking. Night in a riad. (B/L)"
                },
                {
                    "day": 8,
                    "title": "Departure",
                    "description": "Transfer back to the airport and departure. (B)"
                }
            ]
        }
    ],
    // DESERT TOURS - Sahara adventures and southern Morocco
    "desertTours": [
        {
            "id": "tour-to-merzouga-from-marrakech-3-days-and-2-nights",
            "name": "Tour To Merzouga From Marrakech 3 Days And 2 Nights",
            "duration": "3_days",
            "image": "/images/desert_tours/merzouga1.jpg",
            "gallery": [
                "/images/desert_tours/merzouga2.jpg",
                "/images/desert_tours/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                "/images/desert_tours/merzouga5.jpg",
                "/images/desert_tours/merzouga6.jpg",
                "/images/desert_tours/kristijan-nikodinovski-yrweAIJtSzo-unsplash.jpg"
            ],
            "description": `Embark on a 3-day adventure through Morocco’s breathtaking landscapes. Traverse valleys, explore ancient kasbahs, and finally, stand in awe of the legendary Sahara Desert. Expert guides will be by your side every step of the way, ensuring a safe and culturally enriching journey.`,
            "pricing": [
                {
                    "totalPrice": 390
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Kasbah Telouet – Ait Benhaddou – Ouarzazate",
                    "description": "We will pick you up from your hotel or riad and head out to the High Atlas Tizi-n-Tichka pass at 2260m altitude. We’ll break up your journey with a visit to the kasbah Telouet and then take the caravan tracks to the kasbah at Ait Benhaddou. Tonight, we’ll stay at the Gateway To The Sahara, Ouarzazate in a riad or a comfortable hotel."
                },
                {
                    "day": 2,
                    "title": "Ouarzazate – Dades Gorges – Todra Gorges – Merzouga",
                    "description": "After breakfast we’ll take you out to see The Valley Of The Roses’ with the winding River Dades running through the centre. When we leave, we’ll get some stunning views of the surrounding countryside as we travel on toward Tinghir and the Todgha valley. Make sure you keep an eye out for traditional Berber huts and villages! Our next destination is the dramatic 300m Todgha Gorge, a popular destination with rock climbers and occasionally even film-makers. Afterward, we’ll set off for the village of Merzouga where we’ll be welcomed with a glass of mint tea and a short rest. From there, we’re off into the desert! When we’re ready, we’ll ride our camels out into the dunes and catch the sunset before spending the night in a traditional nomad’s tent. Your dinner is included."
                },
                {
                    "day": 3,
                    "title": "Merzouga – Rissani – Erfoud – Marrakech",
                    "description": "Today, we’ll get up early to watch the desert sunrise among the dunes and to get ready for the day ahead. We’ll trek back to the hotel with our camels and grab a shower before we continue on with our adventure. We’ll make a stop at Boumalne-Dades (via Rissani and Erfoud) where we’ll see the workshops that make objects and decorations from fossilized marble. Finally, we’ll return to Marrakech where you can spend the night in your hotel or riad."
                }
            ]
        },
        {
            "id": "marrakech-to-fes-5-day-sahara-desert-tour",
            "name": "Marrakech To Fes 5 Day Sahara Desert Tour",
            "duration": "5_days",
            "image": "/images/desert_tours/merzouga3.jpg",
            "gallery": [
                "/images/desert_tours/merzouga4.jpg",
                "/images/desert_tours/kristijan-nikodinovski-RfK4AQchykw-unsplash.jpg",
                "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "/images/desert_tours/merzouga1.jpg",
                "/images/desert_tours/peter-thomas-PotqZeNaUZ4-unsplash.jpg"
            ],
            "description": `Unveil the Soul of Morocco: A 5-Day Adventure
Embark on a captivating journey that traverses the majestic landscapes of Morocco, starting in the vibrant heart of Marrakech and culminating in the ancient city of Fes. Ascend the rugged peaks of the High Atlas Mountains, their sharp pinnacles scraping the sky. Delve into the heart of the Sahara – a sea of vast sand dunes whispering tales of time. Wander through labyrinthine medinas teeming with life, their vibrant souks overflowing with treasures. Marvel at exquisite mosques and the grandeur of once-powerful royal residences. Unravel the secrets of ancient kasbahs – silent sentinels guarding forgotten stories. Explore sun-baked desert towns where time seems to stand still. Experience the thrill of a camel trek across the Merzouga dunes, culminating in a memorable night under a canopy of stars in a desert camp. This 5-day adventure promises an unforgettable immersion into the rich tapestry of Moroccan culture, history, and breathtaking natural beauty.`,
            "pricing": [
                {
                    "totalPrice": 390
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Unveiling the High Atlas and Ait Ben Haddou",
                    "description": "Our journey begins in Marrakech, weaving through the stunning High Atlas Mountains. Conquer the Tizi n’Tichka pass, reaching a staggering 2260 meters! Breathe in the fresh mountain air and admire the dramatic landscapes. We’ll also stop at a local Argan oil cooperative to learn about this unique Moroccan product. After a delicious lunch at a local restaurant, delve into history with a visit to the UNESCO World Heritage site, Ait Ben Haddou, a magnificent kasbah. Our day concludes in Ouarzazate, where a traditional hotel awaits for dinner and a comfortable night’s rest."
                },
                {
                    "day": 2,
                    "title": "Dades Gorges and the Gateway to the Sahara",
                    "description": "Refueled by breakfast, we journey back through the Dades Valley, marveling at the fascinating rock formations known as “the monkey toes.” We’ll also encounter the historic 19th-century Kasbah of Ait Yul. Leaving the Dades behind, we head towards Tinghir and the Todra Gorges. Prepare to be awestruck by panoramic views of ancient mud-brick Berber villages clinging to the valley walls. Arrive at the Todra Gorges, a natural wonder where towering 300-meter cliffs provide a haven for rock climbers. Our path continues to Erfoud and Rissani, where we’ll savor a delicious lunch. Finally, we reach the charming village of Merzouga, greeted with a refreshing glass of mint tea before settling into our accommodation."
                },
                {
                    "day": 3,
                    "title": "Exploring the Desert and a Night Under the Stars",
                    "description": "After breakfast, embark on an adventurous exploration of the region. A 4×4 guide will unveil the secrets of the Sahara, including a visit to the “village of the blacks,” descendants of Sudanese slaves, where you can experience their unique music and lifestyle. We might also stop by the scenic Lake Merzouga, a haven for diverse birdlife, including flamingos. Explore the nomad wire house, offering Berber handicrafts at lower prices compared to the bustling cities. As the afternoon arrives, prepare for a thrilling camel trek into the heart of the Erg Chebbi, a sea of mesmerizing sand dunes. Tonight, experience the magic of the desert under a blanket of stars. Choose between a traditional Berber nomad tent or a comfortable riad – the choice is yours! Savor a delightful dinner under the starlit sky."
                },
                {
                    "day": 4,
                    "title": "Sunrise Spectacle and Ziz Valley Journey",
                    "description": "Rise before dawn with your camel guide to witness a breathtaking sunrise, perhaps the most memorable of your life. After the enchanting sunrise, camel trek back to your Merzouga riad for a rejuvenating breakfast. Our journey continues towards Medilt, traversing through the towns of Rissani and Erfoud. In Rissani, immerse yourself in the vibrant local souk, bustling with colorful spices, dates, and lively conversations. We then travel to Errachidia, following the magnificent Ziz Valley. Take a moment to appreciate the panoramic views over the dramatic Ziz Canyon before continuing to Medilt."
                },
                {
                    "day": 5,
                    "title": "Cedar Forest and Arrival in Fes",
                    "description": "After breakfast, we depart for Fes via Azrou, a Berber village nestled within the Middle Atlas Mountains. Along the way, stop and observe the playful Barbary macaques in the famous Cedar Forest. Our final stop before reaching Fes is the charming “French village” of Ifrane – a perfect opportunity to capture some photos or enjoy a refreshing drink. Finally, arrive in Fes, your final destination, and settle into your chosen accommodation."
                }
            ]
        },
        {
            "id": "5-days-trek-atlas-mountains-and-sahara-desert",
            "name": "5 Days Trek Atlas Mountains And Sahara Desert",
            "duration": "5_days",
            "image": "/images/desert_tours/merzouga5.jpg",
            "gallery": [
                "/images/desert_tours/darolti-dan-GJw9zRK_VBs-unsplash.jpg",
                "/images/desert_tours/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
                "/images/desert_tours/merzouga7.jpg",
                "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg"
            ],
            "description": `Explore Morocco: Shared & Private Desert Adventures with moroccoatlasguide

Embark on an unforgettable journey through Morocco with our shared or private desert tours, departing from either Marrakech or Fes.

Tailored Experiences: Choose from excursions ranging from 2 to 8 days, designed to fit your travel style and timeframe. Explore at your own pace with a private tour, or join a vibrant shared adventure and connect with fellow travelers.
Round Trip or Traverse: We offer both round-trip itineraries that return you to your departure city, or traverse journeys that take you on a one-way exploration, allowing you to discover new destinations at the end of your tour.
Desert & Beyond: Our desert tours can be combined with thrilling treks in the majestic Atlas Mountains. Immerse yourself in the diverse landscapes of Morocco, from the vast sand dunes of the Sahara to the towering peaks and Berber villages of the Atlas range.
Contact us today to craft your perfect Moroccan adventure!

Unforgettable Morocco: Mountains, Canyons, and Desert Dunes (5 Days) Embark on an epic journey that blends the majesty of the Atlas Mountains with the magic of the Sahara Desert.`,
            "pricing": [
                {
                    "totalPrice": 470
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Unveiling Imlil, the “Moroccan Chamonix”",
                    "description": "Our adventure begins in Imlil, a charming village nestled within the High Atlas Mountains. Often called the “Moroccan Chamonix,” Imlil offers breathtaking scenery and a welcoming Berber atmosphere. Spend the day exploring nearby Berber villages, immersing yourself in their rich culture and traditions."
                },
                {
                    "day": 2,
                    "title": "Trekking Through the Atlas Wonders",
                    "description": "Lace up your boots and conquer scenic day walks in the Atlas Mountains. Witness breathtaking landscapes and discover hidden gems untouched by time. Savor delicious local meals and connect with Berber communities along the way."
                },
                {
                    "day": 3,
                    "title": "Dades Gorges, a Natural Spectacle",
                    "description": "Bid farewell to the mountains and journey towards the awe-inspiring Dades Gorges. These dramatic canyons, carved by the Dades River, offer stunning vistas and a unique geological marvel. Explore the gorges, marvel at the rock formations, and learn about the region’s history."
                },
                {
                    "day": 4,
                    "title": "Merzouga’s Enchanting Desert",
                    "description": "Continue your adventure towards Merzouga, the gateway to the Sahara Desert. Immerse yourself in the vastness of the sand dunes and experience the tranquility of the desert landscape. Embark on a thrilling camel trek, journeying deep into the heart of the dunes as the sun dips below the horizon. Spend the night under a blanket of stars in a traditional nomad camp, a truly unforgettable experience."
                },
                {
                    "day": 5,
                    "title": "Farewell, Morocco!",
                    "description": "After a magical night under the stars, enjoy a leisurely breakfast before departing Merzouga. Our journey takes us back through the stark beauty of the Tazarine desert before reaching Ouarzazate. Finally, we arrive in Marrakech, where your adventure concludes. This 5-day itinerary promises a perfect blend of cultural immersion, breathtaking scenery, and unforgettable experiences."
                }
            ]
        },
        {
            "id": "south-morocco-discovery",
            "name": "South Morocco Discovery 10 Days",
            "duration": "10_days",
            "image": "/images/desert_tours/merzouga6.jpg",
            "gallery": [
                "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "/images/desert_tours/marvin-meyer-X0XRRXSVLU4-unsplash.jpg",
                "/images/desert_tours/ismail-el-youssefi-geeSPCxnKzU-unsplash.jpg"
            ],
            "description": `Unveiling Morocco: A Journey from Bustling Cities to Tranquil Deserts (10-Days)

MAIN ATTRACTIONS: Dates Valley, Merzouga Desert, Agdz, Taroudant

Embark on an extensive 10-day exploration of glorious Southern Morocco. This immersive route takes you from the vibrant streets of Marrakech to the silent dunes of Merzouga and the coastal charm of Essaouira. Experience the changing landscapes, deep traditions, and hidden treasures of the south.`,
            "pricing": [
                {
                    "totalPrice": 675
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Arrival in Marrakech",
                    "description": "Welcome to the captivating city of Marrakech! Immerse yourself in the vibrant energy as you arrive at any time. The city is a sensory feast, filled with the alluring scents of spices, the rhythmic sounds of musicians, and the dazzling colors of the bustling souks. In the afternoon, join a welcome meeting at a designated time and place (details will be confirmed upon arrival). You’ll then be transferred to your comfortable riad or hotel, where you can check in and relax after your journey."
                },
                {
                    "day": 2,
                    "title": "DISCOVER the High Atlas and Dades Valley",
                    "description": "After a satisfying breakfast, we embark on a scenic journey south towards Ouarzazate, the gateway to the desert. Our adventure begins with a thrilling ascent through the Tizi n’Tichka pass, offering breathtaking views of the majestic High Atlas Mountains. As we travel through Berber villages, we’ll witness the captivating contrast between fertile valleys and arid hillsides dotted with ancient Kasbahs. A highlight of the day is a stop at the fortified city of Ait Benhaddou, a UNESCO World Heritage Site. After lunch, we reach the stunning Dades Valley, settling into our comfortable hotel accommodation."
                },
                {
                    "day": 3,
                    "title": "Embracing the Desert Landscape",
                    "description": "Today, we delve deeper into the desert landscape. Leaving the Dades Gorges behind, we make our way towards Merzouga, stopping at the Todra Gorge and the Tinghir palm grove along the way. Upon arrival in Merzouga, nestled amidst the Erg Chebbi dunes, prepare for an unforgettable experience. We’ll embark on a camel trek into the heart of the dunes, arriving at our traditional Berber tents for the night. As the sun dips below the horizon, witness a breathtaking desert sunset followed by a delicious dinner under a blanket of stars."
                },
                {
                    "day": 4,
                    "title": "Desert Delights and Agdaz Oasis",
                    "description": "Awaken to a magical desert sunrise and enjoy a final camel ride back to Merzouga. We’ll then transfer to Agdz, a charming town nestled within the Draa Valley. Along the way, we’ll stop to connect with Berber families and enjoy a traditional mint tea ceremony. In the evening, we’ll settle into our comfortable hotel or riad accommodation."
                },
                {
                    "day": 5,
                    "title": "Unveiling the Argan Route and Taroudant",
                    "description": "Today, we hop back into our minivan and venture towards the lively market town of Oulad Driss, often referred to as “Little Marrakech.” The journey offers scenic desert landscapes and a chance to spot the unique argan trees. Keep your eyes peeled for the famous sight of goats climbing these trees in search of nuts! We continue to Taroudant for the night."
                },
                {
                    "day": 6,
                    "title": "Essaouira, a Seaside Escape",
                    "description": "In the morning, explore the bustling souks of Taroudant. Afterwards, we bid farewell to the High Atlas Mountains and head west towards the charming coastal town of Essaouira (approximately a 5-hour drive). Essaouira lives up to its name with its picturesque whitewashed houses adorned with bright blue shutters. Explore the art galleries, wander the ramparts, or simply relax on the beautiful sandy beaches."
                },
                {
                    "day": 7,
                    "title": "Exploring Essaouira at Your Pace",
                    "description": "Today is a free day to explore Essaouira at your own leisure. Whether you choose to delve deeper into the town’s history, relax on the beach, or indulge in delicious seafood, the day is yours to create lasting memories."
                },
                {
                    "day": 8,
                    "title": "Returning to Marrakech",
                    "description": "After a leisurely breakfast, we’ll transfer back to the bustling city of Marrakech, where you’ll spend your final two nights in Morocco."
                },
                {
                    "day": 9,
                    "title": "Unveiling the Treasures of Marrakech",
                    "description": "Embark on a guided tour of Marrakech, uncovering the city’s hidden gems. Witness the intricate mosaics and architecture of the Bahia Palace. Delve into the serene beauty of the Saadian Tombs. Prepare to be dazzled by the vibrant souks of Marrakech, a labyrinth of sights, smells, and sounds."
                },
                {
                    "day": 10,
                    "title": "Departure",
                    "description": "Your 10-day adventure comes to an end. Transfer to the airport for your flight home."
                }
            ]
        },
        {
            "id": "9-days-trek-saghro-south-morocco",
            "name": "9 Days Trek Saghro South Morocco",
            "duration": "9_days",
            "image": "/images/desert_tours/merzouga7.jpg",
            "gallery": [
                "/images/desert_tours/ismail-el-youssefi-geeSPCxnKzU-unsplash.jpg",
                "/images/desert_tours/kristijan-nikodinovski-yrweAIJtSzo-unsplash.jpg",
                "/images/desert_tours/raul-mermans-garcia-oWzVpeYyJ-w-unsplash.jpg",
                "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg"
            ],
            "description": "A 9-day trekking adventure in the Jebel Saghro, a spectacular volcanic mountain range connecting the High Atlas and the Sahara. Known for its mesas, basalt spires, and winter warmth, it's a favorite for dry-season trekking. Hike through remote villages and dramatic rock formations with our expert team.",
            "pricing": [
                {
                    "totalPrice": 750
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Tagdilt",
                    "description": "Drive over Tichka pass to Ouarzazate and Boumalne Dades. Arrive Tagdilt."
                },
                {
                    "day": 2,
                    "title": "Tagdilt – Almou N'Ouarg",
                    "description": "Begin trek. Cross Tizi n'Ouzarzam. Camp at Almou N'Ouarg."
                },
                {
                    "day": 3,
                    "title": "Almou N'Ouarg – Igli",
                    "description": "Trek to Kouaouch summit (2600m). Descent to Igli."
                },
                {
                    "day": 4,
                    "title": "Igli – Bab n'Ali",
                    "description": "Walk through gorges to the famous rock towers of Bab n'Ali."
                },
                {
                    "day": 5,
                    "title": "Bab n'Ali – Ighazzoun",
                    "description": "Trek through Tadaout n'Tablah diverse landscapes."
                },
                {
                    "day": 6,
                    "title": "Ighazzoun – Handour",
                    "description": "Trek to Handour village. Green oases contrasting with rock."
                },
                {
                    "day": 7,
                    "title": "Handour – Nkob – Marrakech",
                    "description": "Short walk. Meet transport in Nkob. Drive back to Marrakech."
                },
                {
                    "day": 8,
                    "title": "Marrakech Free Day",
                    "description": "Explore the Medina."
                },
                {
                    "day": 9,
                    "title": "Departure",
                    "description": "Transfer to airport."
                }
            ]
        },
        {
            "id": "6-day-trekking-program-in-saghro-morocco",
            "name": "6 Day Trekking Program In Saghro Morocco",
            "duration": "6_days",
            "image": "/images/desert_tours/marvin-meyer-X0XRRXSVLU4-unsplash.jpg",
            "gallery": [
                "/images/desert_tours/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                "/images/desert_tours/raul-mermans-garcia-oWzVpeYyJ-w-unsplash.jpg",
                "/images/desert_tours/merzouga3.jpg",
                "/images/desert_tours/merzouga2.jpg"
            ],
            "description": "A focused 6-day trekking program in the beautiful Jebel Saghro region. Experience the 'Monument Valley' of Morocco with its unique volcanic geology. This shorter itinerary captures the highlights of the range, including the Bab n'Ali pinnacles and authentic interaction with the Ait Atta tribe nomads.",
            "pricing": [
                {
                    "totalPrice": 540
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Tagdilt",
                    "description": "Drive from Marrakech to Tagdilt village via Ouarzazate."
                },
                {
                    "day": 2,
                    "title": "Tagdilt – Almou N'Ouarg",
                    "description": "Start trekking towards the seasonal pastures of Almou N'Ouarg."
                },
                {
                    "day": 3,
                    "title": "Almou N'Ouarg – Igli",
                    "description": "Ascent of Kouaouch peak for panoramic views. Camp at Igli."
                },
                {
                    "day": 4,
                    "title": "Igli – Bab n'Ali",
                    "description": "Walk to the spectacular rock formations of Bab n'Ali."
                },
                {
                    "day": 5,
                    "title": "Bab n'Ali – Nkob",
                    "description": "Final trek to Handour/Nkob."
                },
                {
                    "day": 6,
                    "title": "Nkob – Marrakech",
                    "description": "Transfer back to Marrakech via the Draa Valley."
                }
            ]
        },
        {
            "id": "11-days-jebel-sirwa-safran-valley",
            "name": "11 Days Jebel Sirwa Safran Valley",
            "duration": "11_days",
            "image": "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg",
            "gallery": [
                "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg",
                "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
            ],
            "description": "A unique 11-day adventure combining the volcanic Sirwa range and the Saffron capital of Taliouine. This trek bridges the High Atlas and Anti-Atlas, offering landscapes of gorges, plateaus, and saffron fields (best in harvest season October-November). Summit Jebel Sirwa (3304m) and explore ancient fortified granaries.",
            "pricing": [
                {
                    "totalPrice": 600
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Tamlakout",
                    "description": "Drive over Tizi n'Test. Arrival in Tamlakout."
                },
                {
                    "day": 2,
                    "title": "Tamlakout – Ait Tigga",
                    "description": "Start trek. Walk through almond trees to Ait Tigga."
                },
                {
                    "day": 3,
                    "title": "Ait Tigga – Idoughagh",
                    "description": "Visit ancient Agadir (granary). Trek to Idoughagh."
                },
                {
                    "day": 4,
                    "title": "Idoughagh – Aison",
                    "description": "Trek through saffron fields to Aison."
                },
                {
                    "day": 5,
                    "title": "Aison – Tisgui",
                    "description": "Walk to the village of Tisgui."
                },
                {
                    "day": 6,
                    "title": "Tisgui – Sirwa Summit – Tikniouine",
                    "description": "Ascent of Jebel Sirwa. Dramatic volcanic views. Camp at Tikniouine."
                },
                {
                    "day": 7,
                    "title": "Tikniouine – Aziouane",
                    "description": "Trek through Iriqui pasturelands to magnificent Aziouane rocks."
                },
                {
                    "day": 8,
                    "title": "Aziouane – Amassine",
                    "description": "Final walk to Amassine village."
                },
                {
                    "day": 9,
                    "title": "Amassine – Marrakech",
                    "description": "Transfer back to Marrakech."
                },
                {
                    "day": 10,
                    "title": "Marrakech",
                    "description": "Free day."
                },
                {
                    "day": 11,
                    "title": "Departure",
                    "description": "Transfer to airport."
                }
            ]
        }
    ],
    // IMPERIAL CITIES - Cultural tours of Morocco's historic cities
    "imperialCities": [
        {
            "id": "imperial-city-8-days",
            "name": "Imperial City 8 Days",
            "duration": "8_days",
            "image": "/images/imperial_cities/marrakech1.jpg",
            "gallery": [
                "/images/imperial_cities/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
                "/images/imperial_cities/hamza-demnati-CJ_DC8Nd2Fk-unsplash.jpg",
                "/images/imperial_cities/mehdi-lamaaffar-PqX7EELWjh0-unsplash.jpg",
                "/images/imperial_cities/yous-gil-2Kyh6kB5Yh8-unsplash.jpg",
                "/images/imperial_cities/marrakech8.jpg",
                "/images/imperial_cities/marrakech9.jpg"
            ],
            "description": "Discover the royal history of Morocco on this 8-day tour of the Imperial Cities. Visit Casablanca's Hassan II Mosque, the capital Rabat, the Roman ruins of Volubilis, the cultural heart of Fes, and finish in vibrant Marrakech. Experience the rich architecture, bustling medinas, and diverse landscapes of the Kingdom.",
            "pricing": [
                {
                    "totalPrice": 780
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Arrival Casablanca",
                    "description": "Welcome and transfer to hotel."
                },
                {
                    "day": 2,
                    "title": "Casablanca – Rabat",
                    "description": "Visit Hassan II Mosque. Drive to Rabat to see Oudayas Kasbah and Hassan Tower."
                },
                {
                    "day": 3,
                    "title": "Rabat – Volubilis – Meknes – Fes",
                    "description": "Explore Roman ruins of Volubilis. Visit Moulay Idriss and Meknes. Continue to Fes."
                },
                {
                    "day": 4,
                    "title": "Fes Guided Tour",
                    "description": "Full day dedicated to exploring the oldest Medina in the world."
                },
                {
                    "day": 5,
                    "title": "Fes – Ifrane – Beni Mellal",
                    "description": "Drive through the Middle Atlas cedar forests. Stop in 'Little Switzerland' Ifrane."
                },
                {
                    "day": 6,
                    "title": "Beni Mellal – Ouzoud – Marrakech",
                    "description": "Visit the stunning Ouzoud Waterfalls en route to Marrakech."
                },
                {
                    "day": 7,
                    "title": "Marrakech Guided Tour",
                    "description": "Explore the Red City: Palaces, Koutoubia, and Jemaa el-Fnaa."
                },
                {
                    "day": 8,
                    "title": "Departure",
                    "description": "Transfer to Marrakech airport."
                }
            ]
        },
        {
            "id": "imperial-city-tour-11-days",
            "name": "Imperial City Tour 11 Days",
            "duration": "11_days",
            "image": "/images/imperial_cities/marrakech2.jpg",
            "gallery": [
                "/images/imperial_cities/eka-maitri-viryani-qL3_NSPo9o8-unsplash.jpg",
                "/images/imperial_cities/framopia-EZqHkkyc0wg-unsplash.jpg",
                "/images/imperial_cities/imad-ghazal-gRE6Be-o_Hw-unsplash.jpg",
                "/images/imperial_cities/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
                "/images/imperial_cities/hamza-demnati-CJ_DC8Nd2Fk-unsplash.jpg"
            ],
            "description": "An 11-day grand tour covering the Imperial Cities and the magic of the North. From the modern metropolis of Casablanca to the blue pearl of Chefchaouen, the ancient alleys of Fes, and the bustling souks of Marrakech. Includes a touch of the desert and the cinematic landscapes of the south.",
            "pricing": [
                {
                    "totalPrice": 950
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Arrival Casablanca",
                    "description": "Welcome and transfer to hotel."
                },
                {
                    "day": 2,
                    "title": "Casablanca – Rabat",
                    "description": "Visit Hassan II Mosque. Drive to Rabat."
                },
                {
                    "day": 3,
                    "title": "Rabat – Chefchaouen",
                    "description": "Drive north to the Blue City. Free afternoon to explore."
                },
                {
                    "day": 4,
                    "title": "Chefchaouen – Volubilis – Fes",
                    "description": "Visit Roman ruins while heading south to Fes."
                },
                {
                    "day": 5,
                    "title": "Fes Guided Tour",
                    "description": "Discover the spiritual capital of Morocco."
                },
                {
                    "day": 6,
                    "title": "Fes – Merzouga",
                    "description": "Long drive across Middle Atlas and Ziz Valley to the Sahara dunes."
                },
                {
                    "day": 7,
                    "title": "Merzouga – Dades",
                    "description": "Sunrise camel trek. Drive to Todra and Dades Gorges."
                },
                {
                    "day": 8,
                    "title": "Dades – Ouarzazate – Marrakech",
                    "description": "Visit Ait Benhaddou. Cross High Atlas to Marrakech."
                },
                {
                    "day": 9,
                    "title": "Marrakech Tour",
                    "description": "Guided visit of city monuments."
                },
                {
                    "day": 10,
                    "title": "Marrakech Free Day",
                    "description": "Relax or shop in the souks."
                },
                {
                    "day": 11,
                    "title": "Departure",
                    "description": "Transfer to airport."
                }
            ]
        },
        {
            "id": "imperial-city-8-days-tour-tangier-chefchaouen-fes-merzouga-desert-marrakech",
            "name": "Imperial City 8 Days Tour Tangier Chefchaouen Fes Merzouga Desert Marrakech",
            "duration": "8_days",
            "image": "/images/imperial_cities/marrakech3.jpg",
            "gallery": [
                "/images/imperial_cities/kristijan-nikodinovski-nkav4Pi-UwY-unsplash.jpg",
                "/images/imperial_cities/mannie-nami-_aNm8TMzbUI-unsplash.jpg",
                "/images/imperial_cities/marrakech6.jpg",
                "/images/imperial_cities/hazy-momo-YSTtLgsvRa8-unsplash.jpg",
                "/images/imperial_cities/kristijan-nikodinovski-nkav4Pi-UwY-unsplash.jpg"
            ],
            "description": "From north to south: The complete 8-day Moroccan experience. Start in Tangier, gateway to Africa, explore the blue streets of Chefchaouen, the history of Fes, ride camels in the Merzouga desert, and finish in vibrant Marrakech. A fast-paced adventure seeing the best highlights.",
            "pricing": [
                {
                    "totalPrice": 750
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Tangier – Chefchaouen",
                    "description": "Arrival Tangier. Drive to Chefchaouen."
                },
                {
                    "day": 2,
                    "title": "Chefchaouen – Fes",
                    "description": "Morning in Chaouen. Afternoon drive to Fes."
                },
                {
                    "day": 3,
                    "title": "Fes Tour",
                    "description": "Guided exploration of Fes Medina."
                },
                {
                    "day": 4,
                    "title": "Fes – Merzouga",
                    "description": "Drive across the Atlas to the Sahara. Night in desert camp."
                },
                {
                    "day": 5,
                    "title": "Merzouga – Ouarzazate",
                    "description": "Travel via Todra Gorges and Dades Valley."
                },
                {
                    "day": 6,
                    "title": "Ouarzazate – Marrakech",
                    "description": "Visit Ait Benhaddou and Tichka Pass."
                },
                {
                    "day": 7,
                    "title": "Marrakech Tour",
                    "description": "City exploration."
                },
                {
                    "day": 8,
                    "title": "Departure",
                    "description": "Transfer to Marrakech airport."
                }
            ]
        },
        {
            "id": "5-day-morocco-tour-from-tangier-to-explore-the-cities-2",
            "name": "5 Day Morocco Tour From Tangier To Explore The Cities 2",
            "duration": "5_days",
            "image": "/images/imperial_cities/mehdi-sakout-54nOsVV1xI4-unsplash.jpg",
            "gallery": [
                "/images/imperial_cities/mehdi-sakout-54nOsVV1xI4-unsplash.jpg",
                "/images/imperial_cities/mauro-lima-buvA1ofvTMY-unsplash.jpg",
                "/images/imperial_cities/niklas-VqouWpsuziE-unsplash.jpg",
                "/images/imperial_cities/marrakech10.jpg",
                "/images/imperial_cities/marrakech4.jpg"
            ],
            "description": "A focused 5-day northern Morocco tour. Explore the Mediterranean vibes of Tangier, the blue photogenic streets of Chefchaouen, the ancient Roman history at Volubilis, and the spiritual depth of Fes. Perfect for those arriving by ferry from Spain.",
            "pricing": [
                {
                    "totalPrice": 500
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Tangier Arrival",
                    "description": "Explore the Kasbah and Hercules Caves."
                },
                {
                    "day": 2,
                    "title": "Tangier – Chefchaouen",
                    "description": "Scenic drive to the Blue City."
                },
                {
                    "day": 3,
                    "title": "Chefchaouen – Volubilis – Meknes",
                    "description": "Visit Roman ruins and Imperial city of Meknes."
                },
                {
                    "day": 4,
                    "title": "Meknes – Fes",
                    "description": "Short drive to Fes. Half day tour."
                },
                {
                    "day": 5,
                    "title": "Fes – Tangier/Departure",
                    "description": "Return north or airport transfer."
                }
            ]
        },
        {
            "id": "11-days-best-of-morocco",
            "name": "11 Days Best Of Morocco",
            "duration": "11_days",
            "image": "/images/imperial_cities/zakaria-zayane-aBywMnV7ibk-unsplash.jpg",
            "gallery": [
                "/images/imperial_cities/soulaymane-elyoussfi-oDSEPEtrQFo-unsplash.jpg",
                "/images/imperial_cities/toni-DBNhQdCG-XA-unsplash.jpg",
                "/images/imperial_cities/oussama-rahib-NNECQHl9bJc-unsplash.jpg",
                "/images/imperial_cities/zakaria-zayane-aBywMnV7ibk-unsplash.jpg",
                "/images/imperial_cities/marrakech5.jpg",
                "/images/imperial_cities/marrakech7.jpg"
            ],
            "description": "The definitive 11-day Morocco loop. Starting and ending in Marrakech (or Casablanca), this tour encircles the country's highlights: Imperial Cities, Sahara Desert, Atlas Mountains, and coast. It's the 'Best of Morocco' in one comprehensive package.",
            "pricing": [
                {
                    "totalPrice": 1100
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Arrival Marrakech",
                    "description": "Welcome."
                },
                {
                    "day": 2,
                    "title": "Marrakech – Casablanca – Rabat",
                    "description": "Coastal capitals."
                },
                {
                    "day": 3,
                    "title": "Rabat – Fes",
                    "description": "Via Meknes and Volubilis."
                },
                {
                    "day": 4,
                    "title": "Fes Tour",
                    "description": "Full immersion in Medina life."
                },
                {
                    "day": 5,
                    "title": "Fes – Merzouga",
                    "description": "Drive to Desert."
                },
                {
                    "day": 6,
                    "title": "Merzouga Exploration",
                    "description": "Dunes and nomads."
                },
                {
                    "day": 7,
                    "title": "Merzouga – Dades",
                    "description": "Gorges and Valleys."
                },
                {
                    "day": 8,
                    "title": "Dades – Marrakech",
                    "description": "Kasbahs and Mountains."
                },
                {
                    "day": 9,
                    "title": "Marrakech Tour",
                    "description": "City sights."
                },
                {
                    "day": 10,
                    "title": "Essaouira Day Trip",
                    "description": "Relax at the coast."
                },
                {
                    "day": 11,
                    "title": "Departure",
                    "description": "Transfer."
                }
            ]
        }
    ],
    // EXCURSIONS - Day trips from Marrakech
    "excursions": [
        {
            "id": "marrakech-ouzoud-marrakech",
            "name": "Marrakech Ouzoud Marrakech",
            "duration": "1_day",
            "image": "/images/excursions/rigel-ibisQEDxODo-unsplash.jpg",
            "gallery": [
                "/images/excursions/rigel-No_Y3bn4lNQ-unsplash.jpg",
                "/images/excursions/rigel-QWJjSOB9t0Y-unsplash.jpg",
                "/images/excursions/rigel-hppgLk1gxho-unsplash.jpg",
                "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
                "/images/ouzoud/selina-bubendorfer-jP51Ai2tQGE-unsplash.jpg"
            ],
            "description": "Escape the city heat to the majestic Ouzoud Waterfalls. A 2.5-hour drive takes you to the highest waterfalls in North Africa (110m). Hike down through olive groves, take a boat ride under the falls, and spot the resident Barbary macaque monkeys. A refreshing day in nature.",
            "pricing": [
                {
                    "totalPrice": 55
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Ouzoud – Marrakech",
                    "description": "08:00 pickup. Drive to Ouzoud. Guided hike. Lunch with view of falls. Return to Marrakech approx 18:00."
                }
            ]
        },
        {
            "id": "explore-de-berbers",
            "name": "Explore De Berbers",
            "duration": "1_day",
            "image": "/images/excursions/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            "gallery": [
                "/images/excursions/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
                "/images/excursions/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg"
            ],
            "description": "Explore the authentic life of the Berber people in the High Atlas Mountains. Visit Imlil valley, hike to traditional villages like Aremd, enjoy a home-cooked lunch with a local family, and see the stunning landscapes that frame their daily lives. A cultural deep-dive just a short drive from Marrakech.",
            "pricing": [
                {
                    "totalPrice": 60
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Imlil Valley",
                    "description": "Drive to Imlil. Gentle hike through walnut groves to Berber villages. Lunch in a local home. Return to Marrakech."
                }
            ]
        },
        {
            "id": "excursion-to-the-essaouira",
            "name": "Excursion To The Essaouira",
            "duration": "1_day",
            "image": "/images/excursions/pete-bread-4eZeMUKdV-8-unsplash.jpg",
            "gallery": [
                "/images/excursions/peter-schulz--leOF2nzJQ8-unsplash.jpg",
                "/images/excursions/rigel-hppgLk1gxho-unsplash.jpg",
                "/images/excursions/pete-bread-4eZeMUKdV-8-unsplash.jpg",
                "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
                "/images/essaouira/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg"
            ],
            "description": "Visit the charming coastal town of Essaouira, the 'Wind City of Africa'. Explore the historic Medina (UNESCO World Heritage), walk the Portuguese ramparts, watch fishermen at the port, and enjoy fresh seafood. A relaxed day with a bohemian vibe, famous for its Gnawa music and art galleries.",
            "pricing": [
                {
                    "totalPrice": 60
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Essaouira – Marrakech",
                    "description": "Morning drive to coast (approx 3 hours). Stop for Argan oil cooperative. Free time to explore Essaouira Medina and beach. Return evening."
                }
            ]
        },
        {
            "id": "kasbah-ait-ben-haddou-full-day-excursion",
            "name": "Kasbah Ait Ben Haddou Full Day Excursion",
            "duration": "1_day",
            "image": "/images/excursions/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
            "gallery": [
                "/images/excursions/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
                "/images/excursions/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/excursions/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
                "/images/ouarzazate/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
                "/images/ouarzazate/laurent-gence-UMEcD4j--_I-unsplash.jpg"
            ],
            "description": "Step back in time at the Ksar of Ait Benhaddou, a UNESCO World Heritage site and famous filming location (Gladiator, Game of Thrones). Cross the High Atlas via the Tizi n'Tichka pass (2260m) to reach this stunning example of southern Moroccan earthen architecture. A must-see day trip for history and film buffs.",
            "pricing": [
                {
                    "totalPrice": 80
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Ait Benhaddou – Marrakech",
                    "description": "Scenic drive over High Atlas. Guided tour of Ait Benhaddou Kasbah. Visit Ouarzazate. Return to Marrakech."
                }
            ]
        },
        {
            "id": "agafay-desert-sunset-tour",
            "name": "Agafay Desert Sunset Tour:",
            "duration": "1_day",
            "image": "/images/excursions/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg",
            "gallery": [
                "/images/excursions/laurent-gence-UMEcD4j--_I-unsplash.jpg",
                "/images/excursions/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/excursions/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg",
                "/images/Camel Riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                "/images/Camel Riding/oussama-rahib-f7F8URbIx08-unsplash.jpg"
            ],
            "description": "Experience the magic of the desert without traveling far. The Agafay Stone Desert offers a dramatic moon-like landscape just 45 minutes from Marrakech. Enjoy a camel ride, watch a breathtaking sunset over the Atlas Mountains, and savor a traditional Moroccan dinner under the stars.",
            "pricing": [
                {
                    "totalPrice": 75
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Agafay Desert Experience",
                    "description": "Afternoon pickup. Drive to Agafay. Camel ride at sunset. Dinner in a nomadic tent. Return to Marrakech by night."
                }
            ]
        },
        {
            "id": "atlas-mountains-trekking-with-berbers",
            "name": "Atlas Mountains Trekking With Berbers",
            "duration": "1_day",
            "image": "/images/excursions/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            "gallery": [
                "/images/excursions/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg"
            ],
            "description": "A customized day of trekking in the Atlas Mountains tailored to your fitness level. Walk through picturesque Berber villages like Tinerhourhine and Aguersioual, cross streams, and hike through walnut groves. Accompanied by a professional mountain guide for a safe and informative eco-adventure.",
            "pricing": [
                {
                    "totalPrice": 40
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Atlas Trekking Day",
                    "description": "Full day guided hiking (5-6 hours) in the Imlil region. Picnic lunch included. Route adapted to group ability."
                }
            ]
        }
    ],
    // ACTIVITIES - Additional experiences
    "activities": {
        "timeSlots": [
            {
                "id": "morning",
                "from": "09:00",
                "to": "12:30"
            },
            {
                "id": "afternoon",
                "from": "14:00",
                "to": "18:00"
            }
        ],
        "experiences": [
            {
                "id": "chegaga-dunes-draa-valley-8-days-7-nights",
                "name": "Chegaga Dunes Draa Valley 8 Days 7 Nights",
                "duration": "8_days",
                "image": "/images/desert_tours/merzouga2.jpg",
                "gallery": [
                    "/images/desert_tours/merzouga3.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/desert_tours/merzouga4.jpg",
                    "/images/desert_tours/merzouga5.jpg",
                    "/images/desert_tours/merzouga6.jpg"
                ],
                "description": "This unforgettable 8-day expedition will unveil the breathtaking wonders of the Southern Moroccan Sahara. Immerse yourself in the tranquility of the Draa Valley’s lush oases, traverse the majestic sand ridges of Chegaga, and embark on a captivating camel trek through the vast desert landscape.\n\nOur journey will ignite your respect for nature’s grandeur. Witness the captivating contrast between the vibrant palm groves and the boundless stretches of golden dunes. This meticulously crafted itinerary is the perfect introduction to the Sahara, allowing you to discover its hidden gems and experience its magic firsthand.\n\nWHAT TO BRING WITH YOU : Good Walking Boots And Socks Comfortable Shoes/Slippers For Camp/Guesthouse Trekking Pants Lightweight Waterproof Over-Trousers / Rain-Pants",
                "pricing": [
                    {
                        "totalPrice": 300
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Arrival in Marrakech or Ouarzazate",
                        "description": "Your journey begins in either Marrakech or Ouarzazate, the gateway to the desert. Meet our welcoming staff and settle into your comfortable hotel accommodation for the night."
                    },
                    {
                        "day": 2,
                        "title": "Unveiling the High Atlas and Draa Valley",
                        "description": "After a satisfying breakfast, we embark on a scenic journey south towards Ouarzazate. We’ll conquer the majestic Tizi n’Tichka pass, reaching an elevation of 2260 meters. Along the way, we’ll stop to admire the famous Kasbah of Telouet, a testament to the region’s rich history. Our adventure continues through the fertile Agdz and Zagora, before reaching Faija, where our comfortable camp awaits for a restful night under the stars. (Distance: 400 km with breaks)"
                    },
                    {
                        "day": 3,
                        "title": "Desert Landscapes and Oued Crossing",
                        "description": "The day begins with a delicious breakfast, followed by a hike across the vast desert plateau surrounding Faija. We’ll pass by charming farms nestled at the foot of Djebel Bani before tackling the renowned Oum Laachar pass. This exciting ascent leads us to the Oued Lemhasser, a refreshing waterway that cuts through the arid landscape. Enjoy a moderate 5-6 hour trek covering approximately 17 kilometers before settling into camp for the night."
                    },
                    {
                        "day": 4,
                        "title": "Reaching the Majestic Chegaga Dunes",
                        "description": "Leaving the Oued Lemhasser behind, we embark on a captivating walk towards the awe-inspiring Chegaga Dunes. These towering golden giants will leave you breathless. As the day draws to a close, we’ll set up camp right amidst the dunes, offering a truly unforgettable desert experience. (5-6 hours walking / 20 kilometers)"
                    },
                    {
                        "day": 5,
                        "title": "Unveiling the Bougarn Dunes",
                        "description": "Today, we delve deeper into the heart of the desert, leaving the majestic Chegaga Dunes for the equally stunning Bougarn Dunes. Explore these captivating landscapes and soak in the serenity of the vast Sahara. The night will be spent nestled comfortably in our camp amidst the dunes. (5 hours walking / 16 kilometers)"
                    },
                    {
                        "day": 6,
                        "title": "Crossing the Oued Naam",
                        "description": "After breakfast, we bid farewell to the Bougarn Dunes and embark on a journey across the Oued Naam, a seasonal waterway that adds another layer of diversity to the desert landscape. Our camp for the night will be set up near the Oued Naam, offering a tranquil setting to reflect on the day’s adventures. (5-6 hours walking / 16 kilometers)"
                    },
                    {
                        "day": 7,
                        "title": "Farewell to the Desert and Return to Marrakech",
                        "description": "On our final day, we’ll savor the last glimpses of the captivating desert landscape. Our journey takes us through the Mhamid Dunes before arriving back in Zagora. From there, we’ll transfer comfortably back to Marrakech, where you can reminisce about the unforgettable experiences of the past week. (3 hours walking / 8 hours drive back to Marrakech with breaks)"
                    },
                    {
                        "day": 8,
                        "title": "Departure",
                        "description": "We’ll arrange a smooth transfer to the airport, marking the end of your incredible moroccoatlasguide adventure. We hope you’ll carry cherished memories of the breathtaking Sahara!"
                    }
                ]
            },
            {
                "id": "9-days-trek-saghro-south-morocco",
                "name": "9 Days Trek Saghro South Morocco",
                "duration": "9_days",
                "image": "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/desert_tours/ismail-el-youssefi-geeSPCxnKzU-unsplash.jpg",
                    "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg"
                ],
                "description": `Djebel Saghro: A Hidden Gem for Hikers in Morocco

The Djebel Saghro mountain range is a hidden gem located in southern Morocco. While it may not be as well-known as the High Atlas or Middle Atlas mountains, it offers a unique and rewarding experience for hikers.

Geography and Landscape:
The Djebel Saghro is a vast and rugged mountain range that stretches for over 200 kilometers. The landscape is characterized by its gentle slopes, wide valleys, and numerous oasis. The mountains are home to a variety of plant and animal life, including many endemic species.

Hiking in the Djebel Saghro:
The Djebel Saghro is a hiker’s paradise. There are a variety of trails to choose from, ranging from easy day hikes to challenging multi-day treks. The best time to hike in the Djebel Saghro is during the spring or fall, when the weather is mild.

Additional Information:
The Djebel Saghro is a natural area that dates back to the Precambrian period. Its age is between 230 million and 570 million years old. This geological age has resulted in a rich and attractive lithological diversity. Lovers of stone and fossil collections will find a choice that is difficult to find elsewhere.

What is included in the price:
Round-trip transportation between Marrakech and the start of the hike and return to Marrakech at the end of the trek;
2 nights in a guesthouse with locals during the hike;
Tent and mattress rental during the hike;
All meals during the hike;
Muleteer and mule services;
Cook services;
Services of a qualified mountain guide.

What is not included in the price:
Round-trip flight;
Hotel and meals in Marrakech;
Drinks and personal items;
Repatriation insurance;
Traditional tips for the team: Guide, muletiers, driver

Additional Information:
The total distance of the hike is approximately 60 kilometers.
The hike is rated moderate to difficult.
The best time to hike in the Djebel Saghro is during the spring or fall, when the weather is mild.`,
                "pricing": [
                    {
                        "totalPrice": 460
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Tizi N’Tichka – Ouarzazate – Dadès Valley – Ait Youl",
                        "description": "Transfer from Marrakech to Ouarzazate via the Tizi N’Tichka pass (2260 meters altitude). Lunch in Ouarzazate before arriving in Ait Youl. Then, you will have time to discover the small village and the villagers who work in their fields. 6 hours of driving. Overnight in tents."
                    },
                    {
                        "day": 2,
                        "title": "Ait Youl (1500 m) – Tafoughalt Plateau (1600 m)",
                        "description": "After breakfast, start our hike towards the Saghro mountains. We cross the small villages that extend the capital of the Rose city of Kalâat Mgouna at the foot of the volcanic massif of Saghro. Overnight in tents on the Tafoughalt plateau near a well in a place frequented by the nomads of the Ait Atta tribe. 5 hours 30 minutes of walking."
                    },
                    {
                        "day": 3,
                        "title": "Tafoughalt – Tagmout Pass – Assaka",
                        "description": "A one-hour hike to the Tizi n-Tagmout pass (1900m), then a short descent that takes us to the village of Tagmout; surrounded by rocks with ease a canyon facing northeast to the village of Assaka (1584m). Overnight in tents after the village of Assaka."
                    },
                    {
                        "day": 4,
                        "title": "Assaka – Ighazoun",
                        "description": "We descend this beautiful valley through a string of small villages: Tajalajt, Berkou, Tifdassine. Where the villagers live decently thanks to their herds of goats and sheep. Lunch will be under the almond trees. Then in the afternoon, we cross a small pass before descending to the Ighazzoun valley. Overnight in tents. 5 hours 30 minutes of walking."
                    },
                    {
                        "day": 5,
                        "title": "Ighazzoun – Tadaout N’Tablah – Bab N’Ali",
                        "description": "We cross the village of Ighazzoun before climbing towards the plateau of Tadaoute N’Tablah; in the middle of a rocky cirque surreal landscape. Then, we will arrive at the famous gate of Bab N’Ali (1416 m). A landscape of peaks sculpted in rocks of the Precambrian metamorphic sandstone offers the visitor splendid and gigantic forms. The two main pylons form a kind of giant gate (Bab). Visitors who love landscapes can admire it from several angles depending on their position and that of the sun."
                    },
                    {
                        "day": 6,
                        "title": "Bab N’Ali – Afourare Gorges – Igli",
                        "description": "We follow our path through the Assif n-Afourare gorges before arriving at the small oasis of Boualouz; a few fields of cereals combined with almond plantations, testify to the effort made to live. We climb through the village of Afourare towards the small oasis of Igli (2000 m) at the heart of the Saghro massif, on the way we meet the transhumants of Ait Atta. Overnight in tents."
                    },
                    {
                        "day": 7,
                        "title": "Igli – Kouaouch Summit – Almou N-Ouarg",
                        "description": "After breakfast, we climb the Tassigdelt cliffs; where we appreciate the beauty of the landscape (the colors of the rocks, the silence of the mountains). Then we head by a good path very used by the herds of sheep and goats to the right towards the summit of Kouaouch (2570m). From where we enjoy a beautiful view of the M’goun range, on the valley of the roses. The descent to our camp at Almou N’Ouarg. 5H30 of walking. Overnight in tents."
                    },
                    {
                        "day": 8,
                        "title": "Almou N-Ouarg – Tagdilt",
                        "description": "A steady climb will take us to the Ifed pass (2400 m). Panoramic view of the Dadès valley and the southern slope of the M’goun massif in the High Atlas. A beautiful descent by a mule track to a small valley of oleanders for lunch. In the afternoon, we continue to the village of Tagdilt (1650m). Overnight with the locals."
                    },
                    {
                        "day": 9,
                        "title": "Tagdilt – Dadès Valley – Ouarzazate – Marrakech",
                        "description": "Departure at 8am. Return by car to Marrakech via the Dadès valley. Some photo stops. Lunch after the Tichka pass. Arrival in Marrakech. 6 hours of driving."
                    }
                ],
                "type": "other",
                "location": "Djebel Saghro",
                "price": 460
            },
            {
                "id": "6-days-trekking-program-in-saghro-morocco",
                "name": "6 Days Trekking Program In Saghro Morocco",
                "duration": "6_days",
                "image": "/images/desert_tours/merzouga3.jpg",
                "gallery": [
                    "/images/desert_tours/merzouga4.jpg",
                    "/images/desert_tours/merzouga2.jpg",
                    "/images/desert_tours/merzouga3.jpg",
                    "/images/desert_tours/merzouga1.jpg"
                ],
                "description": `6 DAYS TREKKING PROGRAM IN SAGHRO MOROCCO

Djebel Saghro is a stunning volcanic mountain range in southern Morocco, offering a unique trekking experience. This 6-day program takes you through dramatic landscapes, from plateaus to gorges, and allows you to experience the hospitality of the Ait Atta semi-nomads.

Prices per person:
2 people: 540 € / person
3 people: 490 € / person
4 people and more: 410 € / person

The price includes:
Round-trip transportation between Marrakech and the start of the hike and return.
1 night in a guesthouse with locals.
Tent and mattress rental during the hike.
All meals during the hike.
Muleteer and mule services.
Cook services.
Services of a qualified mountain guide.

The price does not include:
Round-trip flight.
Hotel and meals in Marrakech.
Drinks and personal items.
Repatriation insurance.
Traditional tips for the team.

Additional Information:
Total distance: approx 60 km.
Rating: Moderate to difficult.
Best time: Spring or Fall.
What to pack: Hiking shoes, sun hat, sunscreen, water bottle, first-aid kit, sleeping bag, backpack.`,
                "pricing": [
                    {
                        "totalPrice": 410
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Tichka Pass – Ouarzazate – Tagdilt",
                        "description": "Early departure to Ouarzazate via the Tizi N’Tichka pass. After discovering the Dades Valley and its thousand kasbahs, we drive south through a desert plateau to the village of Tagdilt. Overnight with locals at 1650m. 6 hours of driving."
                    },
                    {
                        "day": 2,
                        "title": "Tagdilt – N’Iferd Pass – Irefd – N’Ouarg Plateau",
                        "description": "At the start of the hike, we watch the mules being loaded. We cross a huge plateau before heading up to the Tizi N’iferd pass (2400m): beautiful view from afar of the central High Atlas massif. Then we descend to the Iferd plateau. Setting up our camp on a plateau often crossed by the semi-nomadic herders of Ait Atta. Overnight in tents at 2250m. 5 hours 30 minutes of walking."
                    },
                    {
                        "day": 3,
                        "title": "Almou N’Ouarg – Kouaouck Summit – Igli",
                        "description": "We start with a beautiful climb to the summit of Kouaouch (2600m). A climb that does not require any technical means. Our cook brings us the picnic. Descent by Tassegdilt. Overnight in tents at Igli at 1700m. 5 hours 30 minutes of walking."
                    },
                    {
                        "day": 4,
                        "title": "Igli – Afourar Gorges – Bab n’Ali – Ighazzoun Oasis",
                        "description": "We descend through the Afourar valley which gradually turns into gorges, we pass by the small oasis of Bouallouz. Then we arrive at Ousdidene. The landscape opens onto a huge plateau dominated by the peaks of Bab n’Ali. After the climb to the famous gate Bab n’Ali, then the continuation to the oasis of Ighazoune. Overnight in tents. 5 hours of walking."
                    },
                    {
                        "day": 5,
                        "title": "Ighazoun Oasis – Tifdassine – Handour",
                        "description": "Departure at 8:30 am towards the small pass of Tifdassine. A long descent of the beautiful valley of the same name. Lunch under the almond trees. Continuation to the village of Handoure. Overnight in tents."
                    },
                    {
                        "day": 6,
                        "title": "Handoure – Ighazzoun – Agdez – Ouarzazate – Marrakech",
                        "description": "After thanking our mule team, a short track takes us to the town of Nkob. Then Agdez before crossing the Tichka pass. Lunch after the pass. Arrival in Marrakech in the afternoon. 7 hours of transfer."
                    }
                ],
                "type": "other",
                "location": "Djebel Saghro"
            },
            {
                "id": "jebel-sirwa-and-safran-valley-11-days",
                "name": "Jebel Sirwa & Safran Valley – 11 Days",
                "duration": "11_days",
                "image": "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                    "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg"
                ],
                "description": `Jebel Sirwa & Safran valley – 11 Days

This journey is perfect for nature enthusiasts and lovers of stunning landscapes. It features a unique road trip, crossing two major passes of the Atlas Mountains, a five-day trek with outdoor camping that leads to the peak of Siroua Mountain (3,305 meters), and visits to the two most captivating Kasbahs and Ksars in the southern region. In Taliouine, we will also learn all about the prized saffron.

Why book this trek?
Crossing the High Atlas Mountains via the dramatic Tizin’Test Pass (2100m)
Attempt the summits of Jbel Sirwa at 3305m and Jbel Guiliz at 2905m
Explore the beautiful Safran Valley
Visit the UNESCO monument Ksar of Ait Ben Haddou
Drive via the Tizi ‘n Tichka Pass (2260m) back to Marrakech

Price Includes:
Fully escorted by local mountain guide, muleteers and cook
Meals: breakfast, lunch and dinners mentioned in itinerary
Accommodation: 3 nights in Marrakech, 6 nights camping and 1 night at small hotel
Transport: minibus or 4×4 car

Price Excludes:
International Flights
Travel Insurance
Sleeping Bags
Walking poles
Tips
Soft drinks , Meals not mentioned

What to Bring:
Good walking boots and socks
Comfortable shoes/slippers for camp/guesthouse
Trekking pants
Lightweight waterproof over-trousers / rain-pants`,
                "pricing": [
                    {
                        "totalPrice": 600
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech Arrival",
                        "description": "We will await you at the airport by our driver who will transfer you to your accommodation, a typical Riad in the medina, the medieval walled city of Marrakech. The rest of the evening is free for you to explore exotic Marrakech. Night in a riad. (B)"
                    },
                    {
                        "day": 2,
                        "title": "Marrakech – Taliouine",
                        "description": "After breakfast, transfer from Marrakech, first crossing the High Atlas Mountains via the dramatic Tizin’Test Pass (2100m), then pausing for lunch on the way, before arriving at the southern town of Taliouine (1063m) in good time for your evening meal. The rest of the day is free for you to explore Taliouine, famous for its safran production. (B/L/D)"
                    },
                    {
                        "day": 3,
                        "title": "Taliouine – Akhfamane",
                        "description": "Enjoy a gentle introduction to your trek by walking from Taliouine along the banks of the Oued Zagmouzen, passing by a succession of small villages, to reach Akhfamane (1250m) where we will camp for the night. (B/L/D)"
                    },
                    {
                        "day": 4,
                        "title": "Akhfamane – Ti n’Iddr",
                        "description": "Walk from Akhfamane to Ti n’Iddr (1684m) by following a trail that leads further up valley through the ancient village of Mazwad (1441m). Beyond Mazwad, the valley narrows to a gorge and meanders, more steeply, upwards into the mountains. Arrive at the beautiful village of Ti n’Iddr with its striking kasbah, mosque and agadir where we will camp for the night. (B/L/D)"
                    },
                    {
                        "day": 5,
                        "title": "Ti n’Iddr – Tegragra",
                        "description": "Walk from Ti n’Iddr to Tegragra (2650m) by following the bank of the Assif n’Wamrane Valley through an increasingly striking and isolated landscape. First, we climb steeply through the dramatic village of Atougha, perched on the hillside against a vertiginous mountain backdrop, its terraced fields unfolding below, before arriving at the stunning summer pastures of Tegragra (2650m) where we will camp for the night close to a water source. (B/L/D)"
                    },
                    {
                        "day": 6,
                        "title": "Tegragra – Jebel Siroua Summit – Waterfall Camp",
                        "description": "Today there are optional ascents of both Jebel Siroua (3305m) and Jebel Guiliz (2905m) with a descent along the Assif n’Aïtou‘Byal Valley to Waterfall Camp (2400m). From Tegragra, we either climb steeply to the summit of Jebel Sirwa before descending to Waterfall Camp, perhaps rising to a second summit, that of Jebel Guiliz, en route Otherwise, we simply descend directly from Tegragra to Waterfall Camp where we camp for the night close by the river. (B/L/D)"
                    },
                    {
                        "day": 7,
                        "title": "Waterfall Camp – Tislit",
                        "description": "We walk down valley from Waterfall Camp through the delightful village of Tizgui (2200m), stopping to visit its fortified granary, the most astounding in the region, before continuing to the surreal rock formations and verdant palm trees of Tislit Gorge where we camp for the night. (B/L/D)"
                    },
                    {
                        "day": 8,
                        "title": "Tislit – Taliouine – Ait Ben Haddou",
                        "description": "We head on to the village of Tislit, which lends its name to the gorge, then across wide open terrain through a patchwork of agricultural fields and wild flowers to the village of Souk Larba (1675m). Transfer from Souk Larba via the panoramic route to your accommodation in Ait Ben Haddou. About 4 hours driving. (B/L/D)"
                    },
                    {
                        "day": 9,
                        "title": "Ait Ben Haddou – Marrakech",
                        "description": "After breakfast you will have time to visit the UNESCO monument Ksar of Ait Ben Haddou. After that we will follow a dramatic scenery of changing landscapes before arriving to the Tiz-n-Tichka Pass at 2260 m and drive further to Marrakech. The evening is free for you to continue exploring Marrakech. Overnight in a charming and typical Riad. (B/L)"
                    },
                    {
                        "day": 10,
                        "title": "Marrakech Free Day",
                        "description": "The last and additional night in Marrakech gives the opportunity to follow own ideas for sightseeing and shopping in its magnificent medina. We provide you a stay at a Riad in the medina of Marrakech. (B)"
                    },
                    {
                        "day": 11,
                        "title": "Departure",
                        "description": "Transfer back to airport in Marrakech."
                    }
                ],
                "type": "other",
                "location": "Jebel Sirwa",
                "price": 600
            },
            {
                "id": "imperial-cities-8-days",
                "name": "Imperial Cities 8 Days",
                "duration": "8_days",
                "image": "/images/desert_tours/merzouga6.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/imperial_cities/marrakech8.jpg",
                    "/images/imperial_cities/marrakech9.jpg"
                ],
                "description": `Unveil the Enchantment of Morocco’s Imperial Cities

Embark on an unforgettable 8-day adventure through the heart of Morocco, exploring the vibrant and historic Imperial Cities. This whirlwind tour condenses centuries of cultural marvels into a captivating journey.

Immerse yourself in the labyrinthine alleyways of Fez, Meknes, Rabat, and Marrakech, each a dazzling metropolis adorned with towering ramparts. Marvel at bustling marketplaces, exquisite mosques, ancient madrasas (Koranic schools), and bygone royal palaces.

Travel back in time at the awe-inspiring Roman ruins, explore Morocco’s most renowned explorer city, wander the bustling capital, and witness the majestic snow-capped peaks of the High Atlas. Prepare to return home not just with a glimpse, but a deep immersion into the captivating tapestry of Moroccan culture.

MAIN ATTRACTION: Imperial Cities Of Morocco Fez, Meknes, Rabat, Marrakech`,
                "pricing": [
                    {
                        "totalPrice": 750
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Casablanca",
                        "description": "Arrive in Casablanca and witness the magnificent Hassan II Mosque, a landmark blending Moorish influences and modern design. Stroll along the Casablanca beachfront, soaking up the city’s atmosphere. Explore the bustling Place Mohammed V and admire the Sacre Coeur Cathedral, a unique blend of Moroccan and European styles."
                    },
                    {
                        "day": 2,
                        "title": "Casablanca to Rabat",
                        "description": "Journey to Rabat, Morocco’s capital city, and delve into its rich history. Explore the Chellah necropolis, a fascinating site showcasing Roman and Merinid ruins. Marvel at the unfinished Hassan Tower and the Mausoleum of Mohammed V, a masterpiece of modern Moroccan art. Wander through the Kasbah Oudaya, a 12th-century fortress offering stunning views of the Bou Regreg River. Continue your journey to Fes, the oldest of the Imperial Cities."
                    },
                    {
                        "day": 3,
                        "title": "Exploring Fes – The Labyrinthine Medina",
                        "description": "In the company of a local guide, delve into the heart of Fes, a UNESCO World Heritage Site. Lose yourself in the labyrinthine alleys of the Fes el-Bali medina, the largest car-free urban area in the world. Immerse yourself in the sights and smells of the bustling souks, overflowing with handcrafted treasures. Witness the traditional leather-tanning process, a unique and fascinating spectacle. Enjoy panoramic views of the city from the southern tower of Fes. Discover the art of Moroccan mosaic at a local pottery cooperative. (Optional) Cap off the day with a traditional belly dancing dinner show."
                    },
                    {
                        "day": 4,
                        "title": "Fes – Meknes – Volubilis – Midelt",
                        "description": "Uncover Meknes, the 18th-century Imperial City, known for its massive ramparts and the colossal Bab Mansour gate. Explore the impressive Sahrij Swani granary, a testament to the city’s rich agricultural heritage. Travel back in time at the Volubilis archaeological site, a UNESCO World Heritage Site showcasing well-preserved Roman ruins. Immerse yourself in the breathtaking scenery as you drive through the Middle Atlas Mountains, dotted with fields of barley, wheat, and olive trees. Overnight in Midelt, a charming town nestled amidst the mountains."
                    },
                    {
                        "day": 5,
                        "title": "Midelt – Errachidia – Merzouga (Sahara Desert)",
                        "description": "Bid farewell to Fes and embark on a journey towards the majestic Sahara Desert. Take a short break in Ifrane, nicknamed “Little Switzerland” for its charming mountain setting. Keep an eye out for the Barbary macaques, playful monkeys inhabiting the cedar forests of Azrou. Relish a delicious lunch in Midelt, a town known for its annual apple festival. Continue through Errachidia, a bustling city named after a Moroccan prince. Drive through the Ziz Valley, a fertile oasis teeming with date palms, en route to Arfoud, the gateway to the Sahara. Arrive at Merzouga, a charming village nestled at the edge of the Erg Chebbi sand dunes."
                    },
                    {
                        "day": 6,
                        "title": "Merzouga Sand Dunes – Ouarzazate",
                        "description": "After breakfast, leave Merzouga and witness the fascinating Eljerf oasis, a testament to Morocco’s ancient irrigation systems. Enjoy a scenic stop in Tinjdad, a small town offering a glimpse into Berber life. Savor lunch in the Todra Valley, a spectacular gorge carved by the Todra River, renowned for its beauty and rock climbing opportunities. Continue your journey through the Dades Valley, known for its dramatic rock formations sculpted by millions of years of erosion. Traverse the Rose Valley, the only place in Morocco where Damascus roses are cultivated, used to produce rosewater and rose oil, prized for their beauty and skincare benefits. Rest for the night in Ouarzazate, a major city known as the “Hollywood of Morocco” for its cinematic history."
                    },
                    {
                        "day": 7,
                        "title": "Ouarzazate – Marrakech",
                        "description": "Explore the UNESCO-listed Ait Ben Haddou Kasbah, a fortified village that has served as a backdrop for numerous Hollywood films. Journey through the High Atlas Mountains via the Tizi-n-Tichka pass, offering breathtaking views of red mountains and Berber villages. Arrive in Marrakech, the vibrant heart of Morocco."
                    },
                    {
                        "day": 8,
                        "title": "Unveiling Marrakech",
                        "description": "Immerse yourself in the captivating energy of Marrakech with a guided tour. Explore the Bahia Palace, a masterpiece of Moorish architecture, and hear stories about its fascinating history."
                    }
                ],
                "type": "other",
                "location": "Imperial Cities",
                "price": 750
            },
            {
                "id": "berber-villages-valleys-gorges-day-trip",
                "name": "Berber Villages & Atlas Valleys Day Trip",
                "duration": "1_day",
                "image": "/images/toubkal_treks/sven123musik-ai-generated-8635943_1920.png",
                "gallery": [
                    "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                    "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                    "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg"
                ],
                "description": `Immerse yourself in the true essence of Morocco on this captivating day trip from Marrakech. We’ll whisk you away to explore the majestic Atlas Mountains!

Journey Through Valleys and Gorges:
Our adventure begins with a pick-up from your Marrakech hotel. We’ll venture into the Atlas, passing by charming Berber villages. Take a moment to capture the breathtaking scenery of Moulay Brahim gorges.

Imlil Exploration:
Upon arrival in Imlil, a traditional Berber village, lace up your boots for a scenic two-hour hike. This is your chance to witness the beauty of the region firsthand. After the hike, we’ll savor a delicious lunch hosted by a Berber family, offering a taste of local hospitality.

Imnane Valley Majesty:
Refreshed, we’ll hop back on the vehicle and continue to Imnane Valley. Our journey takes us through Tamatert, a Berber village nestled amidst the mountains. Ascend Tizi n’Tamaterte, a high pass offering panoramic views of the Imnane and Ait Mizane Valleys, with the Atlas Mountains as a majestic backdrop.

Berber Charm and Breathtaking Vistas:
Our adventure continues through Tighrine village nestled within the Imnane Valley, passing by more Berber settlements. Relax and enjoy a cup of refreshing mint tea at a traditional Berber house. Admire the stunning view of Mount Toubkal, the highest peak in North Africa.

On our return journey, we’ll drive through Tahnaoute, a scenic town, before dropping you back at your hotel in Marrakech. This trip promises a day filled with captivating scenery, cultural encounters, and unforgettable memories.

MAIN ATTRACTION: Berber villages, Valleys, Gorges`,
                "pricing": [
                    {
                        "totalPrice": 60
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Full Day Excursion",
                        "description": "Morning pick-up from Marrakech. Drive through Moulay Brahim Gorges to Imlil. 2-hour hike and lunch with a Berber family. Drive to Imnane Valley via Tamatert and Tizi n’Tamaterte pass for panoramic views. Visit Tighrine village and have tea in a Berber house. Return to Marrakech via Tahnaoute in the late afternoon."
                    }
                ],
                "type": "other",
                "location": "Atlas Mountains",
                "price": 60
            },
            {
                "id": "imperial-city-tour-11-days",
                "name": "Imperial City Tour 11 Days",
                "duration": "11_days",
                "image": "/images/desert_tours/merzouga6.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/imperial_cities/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
                    "/images/imperial_cities/hamza-demnati-CJ_DC8Nd2Fk-unsplash.jpg"
                ],
                "description": `Unveiling Morocco: From Casablanca to Rabat

A Welcoming Arrival: Your Moroccan adventure begins the moment you land! We'll greet you warmly at Casablanca Mohammed V International Airport and whisk you away on a scenic drive to Rabat, the capital city.

Casablanca's Majesty: En route, we'll stop at the awe-inspiring Hassan II Mosque, the largest mosque in Africa and the third-largest in the world. Prepare to be captivated by its intricate details, towering minaret, and stunning oceanfront location.

MAIN ATTRACTION: Imperial Cities Of Morocco`,
                "pricing": [
                    {
                        "totalPrice": 950
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Casablanca – Rabat",
                        "description": "Arrive at Casablanca airport and be greeted by your guide. Take a scenic drive to Rabat, stopping to see the Hassan II Mosque, the largest outside of Mecca, in Casablanca. Enjoy the coastal Corniche seaside promenade. Continue to Rabat, Morocco’s capital. Here, you’ll see the iconic Hassan Tower and the Oudaya Kasbah before checking into your riad."
                    },
                    {
                        "day": 2,
                        "title": "Rabat – Chefchaouen",
                        "description": "After breakfast, explore Rabat’s Hassan Tower. Depart for Chefchaouen, the “Blue Pearl,” via the city of Knitra and the Rif Mountains, passing through Wazzen and other charming Rif villages. Arrive in Chefchaouen in the early afternoon."
                    },
                    {
                        "day": 3,
                        "title": "Chefchaouen – Volubilis – Meknes – Fes",
                        "description": "After breakfast, begin your authentic Moroccan journey towards Volubilis, the Roman ruins, passing again through Wazzen and other Rif villages. Learn about Morocco’s archaeological heritage at this impressive site. Travel to Meknes, a 17th-century city known for its massive walls and grand gates. Enjoy lunch and explore the historical sites like Bab El Mansour and Moulay Ismail’s shrine. Continue your journey to Fes for the night."
                    },
                    {
                        "day": 4,
                        "title": "Exploring Fes",
                        "description": "After breakfast, delve into the labyrinthine alleys of Fes, the oldest city in Morocco. Immerse yourself in the rich history and culture with visits to the Royal Palace gate, the Jewish Quarter (Mellah), the Al-Qarawiine University (the oldest in the region), the bustling tanneries, the Attarine Museum, and the Moulay Idriss mausoleum. After lunch, visit a tile cooperative and experience a panoramic view of the Fes Medina."
                    },
                    {
                        "day": 5,
                        "title": "Fes – Merzouga",
                        "description": "Depart Fes and travel southwards towards the Middle Atlas Mountains. Stop at the cedar forest to see the Barbary Macaques in their natural habitat. Continue through the Tizi Ntalghamt pass to Midelt and along the Ziz Gorges. Enjoy lunch in Errachidia before reaching Merzouga. After a refreshing mint tea, leave your luggage and embark on a camel ride to a Berber camp nestled amidst the Erg Chebbi sand dunes. Savor dinner and enjoy the desert night under a blanket of stars."
                    },
                    {
                        "day": 6,
                        "title": "Merzouga – Todra Gorges – Dades Valley",
                        "description": "Wake up to a magical desert sunrise and enjoy a peaceful camel trek back to your hotel. After breakfast and a shower, depart for Tinghir and the Todra Gorges, the highest and narrowest gorges in Morocco. Continue to Dades Valley for dinner and overnight stay."
                    },
                    {
                        "day": 7,
                        "title": "Dades Valley – Ouarzazate",
                        "description": "Travel through the Dades Valley, also known as the “Valley of a Thousand Kasbahs.” Meet Berber nomads in their caves. Continue through the fertile Rose Valley, stopping at Kalaat M’gouna. Enjoy a scenic hike in the Skoura palm grove and have lunch overlooking the valley. Arrive in Ouarzazate, known as “the Hollywood of Africa.” Option to visit film studios."
                    },
                    {
                        "day": 8,
                        "title": "Ouarzazate – Ait Ben Haddou – Marrakech",
                        "description": "Depart for Marrakech via the dramatic Tizi Ntichka Pass in the High Atlas Mountains. Stop at the famous Ait Ben Haddou Kasbah, the largest kasbah in Morocco, before continuing your journey to Marrakech. Check into your riad and relax for the evening."
                    },
                    {
                        "day": 9,
                        "title": "Exploring Marrakech",
                        "description": "Explore the vibrant “Red City” of Marrakech. Visit the Majorelle Gardens, Koutoubia Tower, Saadian Tombs, and Bahia Palace. Savor lunch near the Djemaa el-Fnaa square and then lose yourself in the labyrinthine souks. Enjoy some free time in the afternoon."
                    },
                    {
                        "day": 10,
                        "title": "Marrakech Realxation",
                        "description": "Enjoy a relaxing day in Marrakech. If you’re interested, a cooking class can be arranged."
                    },
                    {
                        "day": 11,
                        "title": "Departure",
                        "description": "Transfer to the airport for your departure."
                    }
                ],
                "type": "other",
                "location": "Imperial Cities",
                "price": 950
            },
            {
                "id": "imperial-cities-8-days-tangier-marrakech",
                "name": "Imperial Cities 8 Days Tour Tangier Chefchaouen Fes Merzouga Desert Marrakech",
                "duration": "8_days",
                "image": "/images/desert_tours/merzouga6.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/imperial_cities/hazy-momo-YSTtLgsvRa8-unsplash.jpg",
                    "/images/imperial_cities/kristijan-nikodinovski-nkav4Pi-UwY-unsplash.jpg"
                ],
                "description": `Unheartgettable Morocco: Tangier to Marrakech Adventure

Another incredible 8-day journey through Morocco’s heart, exploring ancient cities, breathtaking landscapes, and vibrant culture. This adventure takes you from bustling Tangier to the magical red city of Marrakech, with captivating stops in between.

Lose yourself in the bluewashed alleys of Chefchaouen, the “Blue Pearl,” and soak up its unique charm.
Delve into the rich history of Fes, the oldest city in Morocco, with its labyrinthine medina, bustling tanneries, and ancient university.
Experience the magic of the Sahara Desert with a camel trek through the golden dunes of Merzouga and an overnight stay in a traditional Berber camp under a star-studded sky.
Explore the dramatic Dades Valley, known as the “Valley of a Thousand Kasbahs,” and discover the unique lifestyle of Berber nomads living in caves.
Visit Ouarzazate, also known as “Hollywood of Africa” for its stunning landscapes that have served as backdrops for famous movies.
Immerse yourself in the vibrant energy of Marrakech, a city overflowing with colorful souks, historical palaces, and captivating gardens.

This is more than just a tour; it’s an immersive experience that will leave you with lasting memories of Morocco’s wonders.

MAIN ATTRACTION: Tangier, Chefchaouen, Fes, Merzouga, Desert ,Ouarzazat ,Atlas Mountains`,
                "pricing": [
                    {
                        "totalPrice": 800
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Tangier – Tetouan – Chefchaouen",
                        "description": "Arrive in Tangier and get picked up at the port or airport. Depart for Chefchaouen, with a stop in the charming Spanish-influenced city of Tetouan. Upon arrival in Chefchaouen, enjoy a guided tour through the enchanting “Blue Pearl.” Wander through its narrow streets lined with blue-washed houses and soak in the breathtaking panoramic views. Dinner and overnight stay at a hotel in Chefchaouen Square."
                    },
                    {
                        "day": 2,
                        "title": "Chefchaouen – Roman Ruins – Meknes – Fez",
                        "description": "Depart in the morning, crossing through the picturesque mountain villages of Jbala. After approximately 4 hours, arrive in Fez, one of the four imperial cities of Morocco, renowned for its rich history and cultural significance. Overnight stay in a riad or hotel in Fez."
                    },
                    {
                        "day": 3,
                        "title": "Unveiling the Magic of Fez",
                        "description": "Dedicate a full day to exploring the intellectual heart of Morocco – Fez. Visit numerous monuments, including the impressive Medersas (Koranic schools) like Chahrij, Bouinania Attarin. Immerse yourself in the bustling Fes El-Jadid souk and marvel at the architectural wonder – the Karaouine Mosque, considered the first university in the world. Explore the fascinating neighborhood of leather tanners, witnessing traditional craftsmanship firsthand. Overnight stay in a riad or hotel."
                    },
                    {
                        "day": 4,
                        "title": "Fez – Middle Atlas Exploration – Desert Adventure",
                        "description": "Depart Fez and journey towards the Middle Atlas Mountains. Stop at Ifrane, known as the “Switzerland of Africa,” for a refreshing change of scenery. Visit the Berber village of Azrou, famous for its handcrafted carpets and wood carvings. Continue through the breathtaking Tizi Talghemt pass, offering stunning landscapes of rugged mountains. Arrive in Errachidia and cross the palm groves of Tafilalet to reach Erfoud. Spend the night in a traditional Berber camp amidst the desert dunes."
                    },
                    {
                        "day": 5,
                        "title": "Exploring Gorges, Valleys, and Kasbahs",
                        "description": "Depart for Rissani and witness the impressive Ksar of Touroug, surrounded by a spectacular oasis. Continue to Tinejdad and Tinerhir, where you can take a walk through the majestic Todra Gorges. Journey through the beautiful Dades Valley, stopping at Kelâa M’gouna, the heart of the Rose Valley, especially captivating during May when the roses are in bloom. Arrive in Ouarzazate, nicknamed “Hollywood of Africa,” and visit the Kasbah. You can also choose to visit the Taourirt Kasbah, a former residence of a Pasha. Overnight stay in Ouarzazate."
                    },
                    {
                        "day": 6,
                        "title": "Ouarzazate – Ait Ben Haddou – Marrakech",
                        "description": "Travel to Marrakech via the dramatic Tizi-n-Tichka pass, offering breathtaking panoramic views. Have the option to visit the UNESCO World Heritage Site – the famous Kasbah of Ait Ben Haddou. Continue your journey to Telouet, visiting the Kasbah that served as the residence of a former Pasha of Marrakech. As you descend the Tichka pass, admire the vibrant colors of the Haouz plains. Arrive in Marrakech and check into your riad."
                    },
                    {
                        "day": 7,
                        "title": "Unveiling the Enchantment of Marrakech",
                        "description": "Embark on a morning city tour of Marrakech, a city steeped in history and vibrant culture. Explore the iconic Djemaa el-Fna square, a captivating spectacle filled with performers, musicians, and storytellers. Visit some of the numerous landmarks in Marrakech, including the Medersa Ben Youssef, the Menara Gardens, the Dar Si Said Museum, the Agdal Gardens, the Saadian Tombs, El Badi Palace, and Bahia Palace. Enjoy an afternoon and dinner in the lively Djemaa el-Fna square. Overnight stay in a riad."
                    },
                    {
                        "day": 8,
                        "title": "Farewell to Morocco",
                        "description": "Enjoy a relaxing morning before transferring to the airport for your departure flight. This marks the end of your unforgettable Moroccan adventure."
                    }
                ],
                "type": "other",
                "location": "Imperial Cities",
                "price": 800
            },
            {
                "id": "5-day-morocco-tour-from-tangier",
                "name": "5 Day Morocco Tour From Tangier To Explore The Cities",
                "duration": "5_days",
                "image": "/images/desert_tours/merzouga6.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/imperial_cities/marrakech10.jpg",
                    "/images/imperial_cities/marrakech4.jpg"
                ],
                "description": `Northern Morocco: A Journey Through Time

Embark on a captivating 5-day adventure through the vibrant cities of northern Morocco. This exciting itinerary takes you from the ancient past to the modern present, showcasing a rich tapestry of history, culture, and breathtaking landscapes.

Start your journey in Tangier, the gateway to Morocco.
Immerse yourself in the magic of Chefchaouen, the “Blue Pearl,” where vibrant blue alleys create a unique and charming atmosphere.
Travel back in time at Volubilis, exploring the captivating Roman ruins that stand as a testament to Morocco’s rich past.
Delve into the imperial grandeur of Meknes, a city adorned with impressive gates and towering walls.
Lose yourself in the labyrinthine medina of Fes, a UNESCO World Heritage Site, and discover its bustling markets and historical landmarks.
Experience the modern charm of Rabat, Morocco’s capital city, with its impressive Hassan Tower and vibrant souks.
Conclude your adventure in Casablanca, Morocco’s largest city, where you can marvel at the architectural masterpiece – the Hassan II Mosque.

This itinerary offers a perfect blend of historical exploration and a taste of contemporary Morocco. You’ll meander through charming blue streets, uncover ancient ruins, and discover the vibrant energy of modern Moroccan cities.

MAIN ATTRACTION: Chefchaouen, Bab El Mansour, Royal Palace Gate`,
                "pricing": [
                    {
                        "totalPrice": 500
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Tangier to Chefchaouen – The Blue Pearl",
                        "description": "Kick off your Moroccan adventure with a scenic drive through the Rif Mountains, passing by the city of Tetouan. Take a moment to soak in the breathtaking panorama as you stop at the foothills before reaching Chefchaouen, the “Blue Pearl.” Immerse yourself in the charm of Chefchaouen’s medina, where Spanish architectural influences blend with vibrant colors. Explore the lively square filled with colorful shops and enjoy a delicious meal at a rooftop restaurant or cafe in your riad. Savor the cool evening breeze and mesmerizing view as you unwind for the night."
                    },
                    {
                        "day": 2,
                        "title": "Unveiling Ancient Ruins & Imperial Grandeur",
                        "description": "After a delightful breakfast, embark on a journey towards Volubilis, a captivating Roman archaeological site. Explore the ruins and learn about Morocco’s rich history. Continue your trip to Meknes, a majestic imperial city. Enjoy a leisurely lunch before delving into its historical medina with its imposing walls and the monumental Bab el Mansour gate. In the afternoon, head to Fes, the oldest city in Morocco, where you’ll spend the night."
                    },
                    {
                        "day": 3,
                        "title": "Exploring the Labyrinthine Medina of Fes",
                        "description": "Dedicate the day to exploring the vibrant maze-like alleys of Fes. Start by visiting the Royal Palace gate, followed by the Jewish Mellah, one of the oldest in Morocco. Embark on a cultural journey, visiting the prestigious Al-Qarawiine University, the oldest in the region, and other significant sites like the tanneries, the Attarine Museum, and the Moulay Idriss mausoleum. After lunch, explore the city’s diverse cooperatives and soak in breathtaking panoramic views of the entire Fes Medina."
                    },
                    {
                        "day": 4,
                        "title": "Rabat & Casablanca – A Fusion of Past & Present",
                        "description": "After breakfast, depart for Rabat, Morocco’s capital city. Explore the bustling souk of Bab El Had and immerse yourself in the local atmosphere. Following lunch, continue southward to Casablanca, Morocco’s largest city. Marvel at the architectural masterpiece of the Hassan II Mosque, the third-largest mosque in the world. Enjoy the evening and settle in for your overnight stay."
                    },
                    {
                        "day": 5,
                        "title": "Farewell from Tangier",
                        "description": "On your final day, enjoy a relaxing morning in Casablanca before departing for Asilah, a charming coastal town. Conclude your Moroccan adventure back in Tangier, where your tour ends."
                    }
                ],
                "type": "other",
                "location": "Imperial Cities",
                "price": 500
            },
            {
                "id": "best-of-morocco-11-days",
                "name": "Best of Morocco – 11 Days",
                "duration": "11_days",
                "image": "/images/desert_tours/merzouga6.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/imperial_cities/marrakech5.jpg",
                    "/images/imperial_cities/marrakech7.jpg"
                ],
                "description": `An unforgettable 11 days adventure across Morocco.

Come with us on an unforgettable adventure across Morocco. On this tour you will experience everything this country has to offer; Mountains, Deserts, Oceans, Rivers, Royal Cities, Palaces, Mosques and Mausoleums.

You will visit age-old imperial cities which evoke the romantic atmosphere of the book ‘One Thousand and One Nights’ and, stepping back a millennium or so, you’ll imagine yourself to be Queen Scheherazade or King Shahryar.

You will mount up to join a camel safari through the magnificent sand dunes of the Sahara. And, when you finally chill out on the Atlantic coast, you will well and truly deserve it!

Departure & Return Location: Marrakech Airport – Casablanca Airport

Price Includes:
Escorted by English speaking driver and local guides for the city tours
Meals: breakfast and dinners mentioned in the itinerary
Accommodation: 9 nights in riads/hotels and 1 night at a desert camp
Transport: minibus or 4×4
Activity : camel ride

Price Excludes:
International Flights
Travel Insurance
Meals not mentioned
Tips
Soft drinks

Why book this trek?
Explore the beautiful Imperial Cities of Morocco
Cross the High Atlas via the spectacular Tizi n’Tichka Pass
Visit Kasbah Ait Benhaddou
Experience a camel ride in the dunes of Erg Chebbi
Discover the ruins of the Roman city of Volubilis
Explore the blue city of Chefchaouen
Explore the city of Fes, the country’s cultural capital`,
                "pricing": [
                    {
                        "totalPrice": 1000
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Arrival",
                        "description": "Pick up from Marrakech Airport and transfer to the riad where you will spend the first 2 nights."
                    },
                    {
                        "day": 2,
                        "title": "Marrakech Sightseeing",
                        "description": "Marrakech is a city to dazzle the senses, today there will be a full day sightseeing tour to introduce you to its delights. Highlights include the marvelous Jemaa El Fna Square – once a site of public execution, now full of storytellers and snake charmers; the Saadian Tombs, Bahia Palace, Ben Youssef Medersa and the beautiful Majorelle Gardens. (B/D)"
                    },
                    {
                        "day": 3,
                        "title": "Marrakech – Tizi n’Tichka Pass – Ait Ben Haddou",
                        "description": "Today, we pick you up from the riad in Marrakech and departure to Ait Benhaddou over the High Atlas mountains passing through the spectacular Tizi n’Tichka pass (2260m). Ait Benhaddou is a small town with one of the best-preserved and most sought-after Kasbah’s to visit in all of Morocco. You will visit the UNESCO World Heritage-listed Ksar at Ait Ben Haddou. Spend the night in a riad/guesthouse. (B/D)"
                    },
                    {
                        "day": 4,
                        "title": "Ait Ben Haddou – Ouarzazate – Kelaa M’gouna – Dades – Todra Gorge",
                        "description": "After breakfast you will drive to Ouarzazate and stop near the Atlas Film Studios for a photo then continue to the city center for a panoramic view of the Kasbah of Taourirt. Driving towards Todra Gorges passing by Kelaa M’gouna, Boumalne du Dades and stopping for a panoramic view of Dades valley. Later on, we will continue to Todra gorges via Imider and Tineghir. Stopping along the way for photos and admiring the views. Arrival to Todra Gorges to enjoy its marvelous Canyons views. (B/D)"
                    },
                    {
                        "day": 5,
                        "title": "Todra Gorge, Tinejdad, Erfoud, Erg Chebbi (Merzouga)",
                        "description": "In the morning you will have free time for walking in the beautiful area of the Todra Gorges. In the afternoon you will drive via Tinejdad and Erfoud to the captivating dunes of Erg Chebbi, these dunes are called also Merzouga Dunes. Arrive to the auberge and get ready for a camel trek for an hour and half to enjoy the sunset. While on the back of your dromedary, you will continue to the camp for an overnight in traditional nomad tents. Dinner and spend the night in a bivouac in the middle of the dunes. (B/D)"
                    },
                    {
                        "day": 6,
                        "title": "Merzouga – Erfoud – Errachidia – Midelt – Azrou – Ifrane – Fes",
                        "description": "Wake up early morning to enjoy the sunrise on the top of the dunes in the Sahara Desert and ride on camels back to the auberge where you will have breakfast and can have shower. You will depart to Errachidia via Erfoud, Aoufous and the valley of Ziz then stopping for a panoramic view of the oasis of Aoufous in the Tafilalte region. Continue to Midelt across the pass of Tizi N’talghamt and have lunch break. After lunch you will be driven to Fes (the medieval city) via the Cedar forest near Azrou and the mountain of the middle Atlas with the possibility to see the Barbary apes. You may have a stop in Ifrane (the Switzerland of Morocco) before arriving to Fes where you will spend 2 nights in a riad. (B/D)"
                    },
                    {
                        "day": 7,
                        "title": "Fes",
                        "description": "Enjoy a half-day medina walking tour, with free time in the afternoon to explore more of the city. The Fès medina is the world’s largest living medieval medina and a UNESCO site. Explore the artisan quarters, sample treats from the carts, and view Fès’ famous leather tannery from above. In the evening, opt for dinner in a converted riad complete with local specialties, music, and belly dancing or visit a local hammam to chat with the locals. (B/D)"
                    },
                    {
                        "day": 8,
                        "title": "Fes – Chefchaouen",
                        "description": "After breakfast we continue via the beautiful sceneries of the Rif Mountains to reach “the Pearl of the North”, “Chefchaouen”. We will explore the blue city of Chefchaouen known for its blue-washed walls, a testament to the city’s rich history. Morocco’s blue city attracts travelers and Moroccans alike, both of whom are intrigued by this enticing and unique city. The blue-glazed houses and buildings were build originally by the town’s former Jewish population. You will spend the night in a guesthouse. (B/D)"
                    },
                    {
                        "day": 9,
                        "title": "Chefchaouen – Meknes",
                        "description": "Departure to Meknes, visit the imperial city with its famous door, Bab El Mansour, the mausoleum of Moulay Ismail and the basin of Agdal. You will discover the ruins of the Roman city of Volubilis located about thirty kilometers from Meknes and holy city of Moulay Idriss, pilgrimage center of any Moroccan. Overnight in Meknes. (B/D)"
                    },
                    {
                        "day": 10,
                        "title": "Meknes – Rabat – Casablanca",
                        "description": "Today you will drive from Meknes to Rabat, the political capital of the country. Here we will visit the Hassan Tower, Mohammed V Mausoleum and Oudaya Kasbah. After that you will drive further to Casablanca. Overnight in a hotel. (B/D)"
                    },
                    {
                        "day": 11,
                        "title": "Departure",
                        "description": "Transfer to Casablanca Airport and departure."
                    }
                ],
                "type": "other",
                "location": "Imperial Cities",
                "price": 1000
            },
            {
                "id": "escape-to-ouzoud-waterfalls-day-trip-from-marrakech",
                "name": "Escape to Ouzoud Waterfalls: Day Trip from Marrakech",
                "duration": "1_day",
                "image": "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
                "gallery": [
                    "/images/ouzoud/sergio-teixeira-svdabxVg7-4-unsplash.jpg",
                    "/images/ouzoud/tobias-pfeifer-IBT7zZDTtNg-unsplash.jpg",
                    "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg"
                ],
                "description": `Overview:
Embark on an unforgettable day trip from Marrakech to Ouzoud Waterfalls, a majestic cascade reaching 100 meters! This adventure unfolds just 170 kilometers away.

Your journey begins at 8:00 AM in Marrakech, as we travel north through charming villages and scenic landscapes dotted with peach, apricot, and olive farms.

Upon arrival, immerse yourself in the beauty of Ouzoud village with a scenic hike. Breathe in the fresh air and listen to the calming sounds of nature.

Get ready for a thrilling downhill walk! The path leads you to the base of the waterfalls, where you’ll witness their full power and be mesmerized by rainbows dancing in the mist. Keep your eyes peeled – you might encounter Barbary apes along the way!

At the bottom, take a refreshing dip in the pool, enjoy a boat ride, or simply relax and savor a delicious lunch by the stream. Rejuvenated, we’ll begin the ascent back to the village, where you’ll meet your driver for the return trip to Marrakech.

Highlights:
Enjoying the splendid views of the falls Enjoy the scenery of the Atlas Have lunch with stunning views Look out for the Barbary monkeys Walk to the bottom of the waterfalls Possibility to swim and cool off Hiking through the Olive groves Enjoy the breathtaking landscapes of Ouzoud

Included:
Air-conditioned transportation
An Experienced driver (Multilingual)
Car fuel
Free time to explore Ouzoud

Excluded:
Drinks
Entrance fees
Travel insurance

FAQs:
What should I know before making a reservation?
This day trip is not recommended for:
People above the age of 70
Pregnant women
People with back problems
People with walking difficulties
Wheelchair users

How is the weather in Ouzoud?
The best period to visit Ouzoud is from march until November. The average temperature in Ouzoud is 17°C in January and the hottest is 39°C in mid-July.

What to pack?
Backpack
Sunscreen
Hat or scarf
sunglasses
Shoes for trekking.

How long does it take to get to Ouzoud from Marrakech?
Ouzoud is located about 170 km north of Marrakech, the journey can take around a 3-hours drive each way.`,
                "pricing": [
                    {
                        "totalPrice": 55
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Ouzoud Waterfalls – Marrakech",
                        "description": "Start at 8:00 AM from Marrakech. Drive through scenic landscapes. Arrival in Ouzoud village for a hike. Descent to the base of the waterfalls. Possibility to swim or boat ride. Lunch by the stream. Ascent back to village. Return drive to Marrakech."
                    }
                ],
                "type": "other",
                "location": "Ouzoud",
                "price": 55
            },
            {
                "id": "excursion-to-essaouira",
                "name": "Excursion to Essaouira",
                "duration": "1_day",
                "image": "/images/essaouira/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg",
                "gallery": [
                    "/images/essaouira/peter-schulz--leOF2nzJQ8-unsplash.jpg",
                    "/images/essaouira/rigel-hppgLk1gxho-unsplash.jpg",
                    "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
                    "/images/essaouira/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg"
                ],
                "description": `Escape to Essaouira: A Relaxing Day Trip from Marrakech
Consider a day trip to Essaouira, a charming coastal town just 175 kilometers from Marrakech. This captivating escape offers a delightful change of pace from the vibrant energy of Marrakech.

Beach Bliss:
Essaouira boasts a stunning ten-kilometer stretch of beach. Imagine the serenity of flawless sand washed by gentle surf. Invigorating ocean breezes and the playful sight of goats climbing Argan trees complete this picture-perfect scene

Beyond the Beach:
Essaouira’s rich history unfolds within its medieval medina. Immerse yourself in the lively atmosphere of Place Moulay El Hassan, explore the imposing seafront fortifications of La Skala, and wander through the bustling port. Don’t miss Derb Lealouj, the historic Jewish quarter, for a glimpse into Essaouira’s diverse heritage.

Perfect Day Trip:
Essaouira’s delightful climate, beautiful beaches, and rich cultural tapestry make it an ideal day trip from Marrakech.

Additional Tips:
Consider a guided tour for a deeper understanding of Essaouira’s history and culture.
Sample the fresh seafood for a delicious lunch with a view.
Pack comfortable shoes for exploring the medina’s winding alleys.

Details:
Essaouira: A Day Trip with History, Beach Bliss, and Shopping Embark on a captivating day trip from Marrakech to Essaouira, a stunning coastal town. Our journey begins at 7:30 am with a convenient pick-up from your hotel`,
                "pricing": [
                    {
                        "totalPrice": 60
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Essaouira – Marrakech",
                        "description": "Start at 7:30 AM from Marrakech. Scenic drive with a coffee break and visit to an Argan oil cooperative. Arrival in Essaouira. Visit Skala du Fort. Free time to explore the medina, shop, and have lunch. Stroll on the beach. Return to Marrakech."
                    }
                ],
                "type": "other",
                "location": "Essaouira",
                "price": 60
            },
            {
                "id": "day-trip-ouarzazate-ait-benhaddou",
                "name": "Ouarzazate & Ait Benhaddou Kasbah Day Trip",
                "duration": "1_day",
                "image": "/images/ouarzazate/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
                "gallery": [
                    "/images/ouarzazate/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
                    "/images/ouarzazate/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                    "/images/ouarzazate/laurent-gence-UMEcD4j--_I-unsplash.jpg"
                ],
                "description": `Overview:
Enjoy the magic of Ouarzazate and Ait Benhaddou Kasbah on this exciting day trip from Marrakech. Journey through stunning landscapes for just four hours and discover the “Gateway to the Sahara.” Explore the magnificent kasbahs, bask in breathtaking sunsets, and marvel at the panoramic mountain and desert vistas. This unforgettable adventure awaits!

Itinerary:
An other captivating journey through the High Atlas Mountains.
Our adventure begins with a pick-up from your Marrakech hotel or riad. We’ll travel via the Tizi n’Tichka Pass, a majestic landscape boasting soaring peaks and traditional Berber villages. Descending the eastern slopes, witness a dramatic transformation as the scenery unfolds into an arid desert panorama. Reaching Ouarzazate, we’ll delve into the history of the region by exploring the Kasbah of Ait Ben Haddou and the Kasbah of Taourirt. Prepare to be amazed!

Price Included:
- Private Transport
- Guide Speak English
- Lunch
- Mineral Water

Price Excluded:
- Soft Drinks
- Travel Insurance And Tips
- Personal Stuff And Tips`,
                "pricing": [
                    {
                        "totalPrice": 80
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Tizi n’Tichka – Ait Ben Haddou – Ouarzazate",
                        "description": "Pick-up from Marrakech. Drive through the High Atlas Mountains via Tizi n’Tichka Pass. Visit the UNESCO World Heritage site, Kasbah Ait Ben Haddou. Continue to Ouarzazate to visit the Kasbah of Taourirt and exploring the 'Gateway to the Sahara'. Return to Marrakech in the evening."
                    }
                ],
                "type": "other",
                "location": "Ouarzazate",
                "price": 80
            },
            {
                "id": "agafay-desert-sunset-tour",
                "name": "Agafay Desert Sunset Tour",
                "duration": "1_day",
                "image": "/images/Camel Riding/tamar-dCMvzMV1jfc-unsplash.jpg",
                "gallery": [
                    "/images/Camel Riding/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                    "/images/Camel Riding/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/Camel Riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                    "/images/Camel Riding/oussama-rahib-f7F8URbIx08-unsplash.jpg"
                ],
                "description": `Agafay Desert Sunset Tour:
The Agafay Desert, located just outside Marrakech, is only an hour’s drive from the city’s lively souks, the Majorelle Garden, the Koutoubia Mosque, and the bustling heart of Marrakech. This undeveloped region offers an ideal one-day excursion for those looking to escape the city’s hustle and experience the serene desert landscape.

PRICES INCLUDE:
- Pick up and drop off in Marrakech
- Camel Ride
- Tea
- 3 Course Dinner

PRICES DOES NOT INCLUDE:
- Travel insurance.
- Soft/alcoholic drinks
- Tips and personal expanses`,
                "pricing": [
                    {
                        "totalPrice": 75
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Agafay Desert",
                        "description": "Pick-up from Marrakech. Drive to Agafay. Enjoy a camel ride and tea. Savor a 3-course dinner. Return to Marrakech."
                    }
                ],
                "type": "other",
                "location": "Agafay Desert",
                "price": 75
            },
            {
                "id": "marrakech-to-imlil-day-trip",
                "name": "Marrakech to Imlil Day Trip",
                "duration": "1_day",
                "image": "/images/toubkal_treks/sven123musik-ai-generated-8635943_1920.png",
                "gallery": [
                    "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                    "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg",
                    "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg"
                ],
                "description": `Escape Marrakech and drive into the Atlas Mountains. Ride a mule or walk and pass Berber villages and enjoy the stunning views of the countryside. Enjoy a traditional lunch in a Berber house and learn about the daily life of the Berber people; all in a single day trip.

Included:
- Transfer from and back to Marrakech
- Guided walk Through Berber Villages
- Lunch

Not Included:
- Tip
- Personnel expenses`,
                "pricing": [
                    {
                        "totalPrice": 75
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech to Imlil",
                        "description": "Drive from Marrakech to Imlil. Guided walk through Berber villages (mule or foot). Lunch in a Berber house. Return to Marrakech."
                    }
                ],
                "type": "other",
                "location": "Atlas Mountains",
                "price": 75
            },
            {
                "id": "atlas-mountains-day-trek-with-berbers",
                "name": "Atlas Mountains Day Trek with Berbers",
                "duration": "1_day",
                "image": "/images/toubkal_treks/sven123musik-ai-generated-8635944_1920.png",
                "gallery": [
                    "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                    "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg",
                    "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                    "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg"
                ],
                "description": `Walking in the High Atlas Mountains:
During this day trek you will walk by the village of Tinerhourhine and around to the village of Aguersioual, follow river courses, cross seguias (traditional irrigation canals) and rivulets, past terraces and through walnut groves. Picnic on route.
The day involves approx. 5 to 6 hours of walking.

Departure & Return Location:
Your hotel in Marrakech center

Meeting Time:
8 am

Price Includes:
- Fully escorted by English speaking driver and local mountain guide for the walk
- Lunch
- Transport: minibus or 4×4 car

Price Excludes:
- Tips
- Soft drinks

Why book this excursion?
- Walking in the High Atlas Mountains
- See Berber villages
- See the highest peak of North Africa
- Visit an Argan oil cooperative
- Beautiful scenery

What to Bring:
- Good walking boots and socks
- Comfortable shoes/slippers for camp/guesthouse
- Trekking pants
- Lightweight waterproof over-trousers / rain-pants`,
                "pricing": [
                    {
                        "totalPrice": 40
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Atlas Mountains Trek – Marrakech",
                        "description": "Start at 8:00 AM from Marrakech. Drive to Tinerhourhine. 5-6 hour guided walk to Aguersioual via river courses, seguias, and walnut groves. Picnic lunch en route. Visit an Argan oil cooperative. Return to Marrakech."
                    }
                ],
                "type": "other",
                "location": "Atlas Mountains",
                "price": 40
            }
        ],
        "addons": [
            {
                "id": "dinner",
                "name": "Dinner",
                "pricePerPerson": 25,
                "availableFrom": "15:00",
                "availableTo": "21:00"
            }
        ]
    },
    // TRANSPORT
    "transport": [
        {
            "id": "private",
            "name": "Private Transport",
            "image": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070",
            "description": "Comfortable private vehicle with professional driver",
            "price": 50
        }
    ],
    // REVIEWS - Authentic testimonials from travelers
    "reviews": {
        "items": [
            {
                "id": "review-1",
                "author": "Sarah Johnson",
                "country": "United Kingdom",
                "rating": 5,
                "date": "November 2024",
                "tourId": "toubkal-treks-2-days-express",
                "comment": "An incredible experience! Our guide was knowledgeable and made the trek to Toubkal summit unforgettable. The Berber hospitality was amazing, and the mountain views were breathtaking. Highly recommend Morocco Atlas Guide!",
                "avatar": "/images/reviews/avatar-1.jpg"
            },
            {
                "id": "review-2",
                "author": "Marco Rossi",
                "country": "Italy",
                "rating": 5,
                "date": "October 2024",
                "tourId": "tour-to-merzouga-from-marrakech-3-days-and-2-nights",
                "comment": "The desert tour exceeded all expectations. Sleeping under the stars in the Sahara was magical. Our guide shared fascinating stories about Berber culture. The whole team was professional and friendly.",
                "avatar": "/images/reviews/avatar-2.jpg"
            },
            {
                "id": "review-3",
                "author": "Emma Williams",
                "country": "Australia",
                "rating": 5,
                "date": "September 2024",
                "tourId": "imperial-city-8-days",
                "comment": "Perfect introduction to Morocco! We visited Fes, Meknes, and Chefchaouen. Each city was unique and beautiful. Our driver was excellent and the accommodations were comfortable. Great value for money!",
                "avatar": "/images/reviews/avatar-3.jpg"
            },
            {
                "id": "review-4",
                "author": "David Chen",
                "country": "Canada",
                "rating": 5,
                "date": "August 2024",
                "tourId": "berber-villages-4-days",
                "comment": "Authentic cultural immersion! Staying in Berber guesthouses and sharing meals with local families was the highlight. The trek through the valleys was challenging but rewarding. Our guide was like family by the end.",
                "avatar": "/images/reviews/avatar-4.jpg"
            },
            {
                "id": "review-5",
                "author": "Sophie Martin",
                "country": "France",
                "rating": 5,
                "date": "July 2024",
                "tourId": "marrakech-ouzoud-marrakech",
                "comment": "Magnifique! The Ouzoud waterfalls are stunning. Perfect day trip from Marrakech. Saw the Barbary macaques and enjoyed a delicious lunch by the falls. Excellent organization!",
                "avatar": "/images/reviews/avatar-5.jpg"
            },
            {
                "id": "review-6",
                "author": "James Anderson",
                "country": "United States",
                "rating": 5,
                "date": "June 2024",
                "tourId": "south-morocco-discovery",
                "comment": "Best trip of my life! The 10-day journey through southern Morocco was perfectly paced. From the Atlas Mountains to the Sahara to the coast - every day brought new wonders. Cannot recommend enough!",
                "avatar": "/images/reviews/avatar-6.jpg"
            }
        ],
        "averageRating": 5.0,
        "totalReviews": 6
    },
    // PACKAGES
    "packages": []
};
const siteDataEs = {
    "currency": "EUR",
    "location": "Marrakech",
    // TOUBKAL TREKS - Aventuras de montaña en el Alto Atlas
    "toubkalTreks": [
        {
            "id": "toubkal-treks-2-days-express",
            "name": "Toubkal Express Ascenso 2 Días",
            "duration": "2_days",
            "image": "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
            "gallery": [
                "/images/toubkal_treks/sven123musik-ai-generated-8635943_1920.png",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg"
            ],
            "description": `moroccoatlasguide te invita a una aventura única: escalar el Toubkal, el pico más alto de África del Norte, en solo 2 días. Esta exigente caminata está reservada para excursionistas experimentados y buscadores de aventura, pero no requiere ninguna experiencia técnica.

Puntos destacados del trek:
- Ascenso al Toubkal (4167m): un logro inolvidable para excursionistas experimentados.
- Descubrimiento de los pueblos bereberes de Imlil y Aremd: inmersión en la auténtica cultura amazigh.
- Paisajes impresionantes del Alto Atlas: panoramas espectaculares de montañas y valles.

Información práctica:
- Duración: 2 días
- Dificultad: Alta
- Desnivel: 2700m
- Alojamiento: Refugio de montaña y lodge
- Temporada: todo el año
- Equipo necesario: zapatos de senderismo, ropa de montaña cálida e impermeable, mochila, cantimplora, frontal, etc.

Este trek es una oportunidad única para:
- Asumir un desafío deportivo y personal.
- Descubrir la belleza salvaje del Alto Atlas.
- Conocer al pueblo bereber y compartir su cultura.

100% Personalizable
Cuéntanos los requisitos de tu viaje. Trabajaremos juntos para personalizar tu viaje y cumplir con tus requisitos exactos para que tengas un viaje memorable.

Sin Cargos Ocultos
No añadimos costes extra ocultos. Todos los viajes incluyen permiso de viaje, alojamiento y comidas. No hay sorpresas con costes ocultos.`,
            "pricing": [
                {
                    "totalPrice": 140
                }
            ],
            "includes": [
                "Transporte desde Marrakech",
                "Alojamiento en refugio y lodge",
                "Comidas durante el trek",
                "Supervisión de un guía de montaña"
            ],
            "excludes": [
                "Vuelos de ida y vuelta a Marrakech",
                "Bebidas no incluidas en las comidas",
                "Propinas y gastos personales"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Refugio Toubkal (3205m)",
                    "description": "Salida por la mañana a las 8am desde Marrakech en transporte turístico o taxi hacia el Alto Atlas Occidental donde se encuentra el macizo del Toubkal (1h30 de viaje). Cruzaremos Asni, un pequeño centro provincial de los pueblos bereberes aislados de la región del Toubkal. Llegaremos a Imlil (1800m) donde nos encontraremos con nuestro arriero para comenzar nuestro trek. Después de una caminata de dos horas y media, llegaremos al marabout de sidi chamharourch. Este es el lugar ideal para almorzar mientras disfrutas del paisaje. Continuaremos subiendo hasta el refugio del Toubkal (2h30). Cenaremos y pasaremos la noche en el refugio. (A petición, también será posible pasar la noche bajo las estrellas montando un vivac bajo tiendas). *(Día: 1h 30 de transporte turístico y 5h00 de caminata, nivel alto)."
                },
                {
                    "day": 2,
                    "title": "Refugio Toubkal (3205m) – Toubkal (4168m) – Marrakech",
                    "description": "Comenzaremos la caminata al amanecer (salida alrededor de las 5am). Recomendamos estar bien equipado técnicamente para el ascenso, ya que puede hacer frío en la cima (¡incluso en verano contra todo pronóstico!). Te aconsejamos traer guantes, gorro, abrigo caliente y bastones de senderismo que pueden ser muy útiles durante el descenso. El ascenso dura 3h30, tan pronto como lleguemos a la cumbre, estaremos \"en el techo de África del Norte\" y podremos contemplar llanuras lejanas y disfrutar de una vista impresionante de las cumbres de los macizos vecinos que también superan una altitud de 4000m. El descenso dura 2 horas. Almorzaremos en el refugio. Luego, continuaremos nuestro descenso durante 3,5 horas hasta llegar a Imlil y tomar el camino de regreso a Marrakech (1h30). *(Día: 1h30 de transporte turístico y 8h de caminata, nivel alto)."
                }
            ]
        },
        {
            "id": "imlil-azzaden-valleys-2-day-trek",
            "name": "Trek de 2 Días por el Valle del Atlas",
            "duration": "2_days",
            "image": "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/sven123musik-ai-generated-8635944_1920.png",
                "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
                "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg"
            ],
            "description": `Embárcate en un viaje cautivador desde las bulliciosas calles de Marrakech, tejiendo un tapiz de encantadores aldeas y tradicionales pueblos bereberes. Las majestuosas montañas del Alto Atlas Occidental se alzarán ante ti, invitándote a adentrarte más en su abrazo.

Nuestro trek comienza con un sendero que serpentea pasando por los pintorescos pueblos de Imlil, Arghen y M'zzik. Cada asentamiento ofrece un vistazo a la rica cultura bereber, con su arquitectura única y acogedores habitantes.

A medida que avanzamos, el paisaje se transforma en el impresionante Valle Assif Aït Mizane. Aquí, maravíllate con los antiguos campos de terrazas irrigadas, meticulosamente elaborados para sustentar una abundancia de árboles frutales y vegetales vibrantes. Un verdadero testimonio de la ingeniosidad humana y la armonía con la naturaleza.

Conquistar el paso de montaña Tiz M'zzik (2450m) será un desafío gratificante, ofreciendo vistas panorámicas que te dejarán sin aliento. Respira el aire fresco de la montaña mientras disfrutas del impresionante paisaje.

Nuestro descenso nos lleva a través de un fragante bosque de enebros, finalmente conduciéndonos al encantador pueblo de Tizi Oussem. Aquí, descansaremos nuestras piernas cansadas y nos sumergiremos en la cálida hospitalidad de una casa de campo tradicional para pasar la noche.`,
            "pricing": [
                {
                    "totalPrice": 165
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Imlil – Valle Azzaden – Tizi Oussem",
                    "description": "Tu aventura comienza con un viaje escénico desde Marrakech a Imlil, un pueblo bereber enclavado en las estribaciones del Monte Toubkal, el pico más alto de África del Norte. En el camino, disfrutarás de impresionantes vistas de montañas y valles. Después del desayuno en Imlil, emprenderás tu caminata, siguiendo un sendero bien mantenido a través del Valle Azzaden. Este valle es conocido por sus exuberantes campos verdes, tradicionales pueblos bereberes y cascadas impresionantes. Disfruta de un delicioso almuerzo preparado por una familia bereber en una tradicional casa de adobe para aprender sobre la cultura bereber. Por la tarde, asciende al Paso Tizi Mzik para vistas panorámicas, luego desciende para ver las Cascadas Tamsoult antes de llegar a Tizi Oussem (1,850m) para cenar y pasar la noche en una gîte tradicional."
                },
                {
                    "day": 2,
                    "title": "Tizi Oussem – Imlil – Marrakech",
                    "description": "En el segundo día, volverás a Imlil caminando, siguiendo una ruta diferente que ofrece vistas igualmente impresionantes. En el camino, puedes visitar otros pueblos bereberes y explorar la escena de artesanía local. Después del almuerzo en Imlil, serás trasladado de regreso a Marrakech, donde termina tu aventura. (Nota: El nivel de dificultad de la caminata puede ajustarse según tu nivel de forma física)."
                }
            ]
        },
        {
            "id": "toubkal-tres-3-days",
            "name": "Toubkal Invierno 3 Días",
            "duration": "3_days",
            "image": "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
                "/images/toubkal_treks/sven123musik-ai-generated-8635943_1920.png"
            ],
            "description": `Únete a nosotros para una memorable ascensión invernal de 3 días al Monte Toubkal. Este itinerario extendido permite una mejor aclimatación y un ritmo más relajado en comparación con la opción exprés de 2 días. Caminarás desde Imlil hasta el refugio, coronarás el pico más alto de África del Norte (4167m) para disfrutar de vistas impresionantes, y pasarás dos noches en el corazón de las montañas del Atlas.

El precio del trek varía según el número de participantes, la temporada y la duración del trek. Por favor contáctanos para un presupuesto detallado. ¡Esperamos darte la bienvenida a Marruecos!

Equipo necesario: zapatos de senderismo, ropa de montaña cálida e impermeable, mochila, cantimplora, frontal, etc.`,
            "pricing": [
                {
                    "totalPrice": 190
                }
            ],
            "includes": [
                "Transporte de ida y vuelta entre Marrakech e Imlil",
                "Servicio de guía",
                "Servicio de arriero y cocinero",
                "2 noches en el refugio",
                "Comida durante el trek"
            ],
            "excludes": [
                "Hotel en Marrakech",
                "Seguro de viaje",
                "Propinas tradicionales para el equipo",
                "Bebidas no incluidas en las comidas",
                "Gastos personales"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Refugio Toubkal",
                    "description": "Un corto traslado desde Marrakech hasta el pueblo de Imlil (1800m) en el Alto Atlas, donde nos encontraremos con nuestro equipo de arrieros y cocinero. Tras conocer a nuestro equipo bereber, comenzaremos nuestra caminata hacia el Refugio Toubkal, pasando por el pueblo de Aremd y el pequeño pueblo de Chamharouch. 5 a 6 horas de caminata."
                },
                {
                    "day": 2,
                    "title": "Refugio Toubkal – Ascenso al Monte Toubkal (4167m)",
                    "description": "Salida temprana para evitar el riesgo de mal tiempo. 3,5 horas de ascenso hasta la cumbre del Toubkal, que no presenta ninguna dificultad técnica. Una vez que lleguemos a la cumbre del Toubkal, estaremos \"en el techo de África del Norte\" y podremos contemplar llanuras lejanas y disfrutar de una vista impresionante de las cumbres de los macizos vecinos que también superan una altitud de 4000m. El descenso dura 2 horas. Almorzaremos en el refugio. 2,5 horas para descender al refugio donde pasaremos la segunda noche."
                },
                {
                    "day": 3,
                    "title": "Refugio Toubkal – Imlil – Regreso a Marrakech",
                    "description": "Después del desayuno, descenderemos tranquilamente por el mismo camino, pasando por Sidi Chamharouch. Un buen almuerzo nos espera en Imlil bajo los nogales preparado por nuestro cocinero antes de hacer un corto traslado a Marrakech vía Asni y Tahnaout. 1,5 horas de conducción y 5 horas de caminata."
                }
            ]
        },
        {
            "id": "berber-villages-4-days",
            "name": "Pueblos Bereberes 4 Días",
            "duration": "4_days",
            "image": "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
                "/images/excursions/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg"
            ],
            "description": `Sumérgete en la cultura bereber en este trek de 4 días a través de los 'Pueblos Bereberes'. Atraviesa los valles de Imnane y Azzaden, cruzando altos pasos con vistas panorámicas pero quedándote en casas de huéspedes de pueblos tradicionales cada noche. Este trek moderado se centra en la conexión cultural, los paisajes y el ritmo de la vida local.

Información adicional:
El precio del trek varía según el número de participantes, la temporada y la duración del trek.
Por favor contáctanos para un presupuesto detallado.
¡Esperamos darte la bienvenida a Marruecos!`,
            "pricing": [
                {
                    "totalPrice": 245
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Pueblo Id Aissa",
                    "description": "Salida de Marrakech hacia el Alto Atlas, pasando por el pequeño pueblo de Tahnaout y luego Asni. Disfruta de vistas magníficas de la cordillera montañosa y la cumbre del Toubkal. A la llegada a Imi Oughlad, conoce a tu arriero bereber. Comienza tu caminata a través del pueblo de Imi Oughlad, seguido de una hermosa subida hasta el Paso Tacht a 2020 m para vistas panorámicas del Valle Azaden. Después del almuerzo, disfruta de un fácil descenso hasta el pueblo de Ait Aissa a 1800 m. Pasa la noche en una gîte con una familia local. (5 horas de caminata y 1,5 horas de traslado)."
                },
                {
                    "day": 2,
                    "title": "Ait Aissa – Pueblo Tkent",
                    "description": "Comienza con un descenso hasta el río Azaden, seguido de una hermosa subida hasta el Paso Teouti a 2440 m de altitud, ascendiendo a la sombra de nogales y enebros. Descenso a Assaka para un descanso para almorzar bajo un nogal. Disfruta de 1,5 horas de caminata con pequeños descensos y ascensos hasta el pueblo de Tizgui de Tkent. Pasa la noche en una gîte con una familia local. (5,5 horas de caminata)."
                },
                {
                    "day": 3,
                    "title": "Pueblo Tkent – Paso Tagdalt – Pueblo Tizi Oussem",
                    "description": "Salida de Tkent con sus hermosas casas de piedra y adobe. Conoce a los aldeanos bereberes trabajando la tierra. Disfruta de un ascenso gradual hasta el Paso Tagdalt (2700 m) para hermosas vistas del valle y picos de más de 3000 m. Disfruta de un largo descenso a través de un bosque de enebros. Almuerza a la sombra junto al río antes de llegar al pueblo de Tizi Oussem. Pasa la noche en una gîte con una familia local. (6 horas de caminata)."
                },
                {
                    "day": 4,
                    "title": "Pueblo Tizi Oussem – Cascadas Tamsoult – Marrakech",
                    "description": "Después del desayuno, asciende hasta el bonito pueblo de Tamsoult. Disfruta de impresionantes vistas del Valle Azaden con sus colores contrastantes. Ascenso a las Cascadas Tamsoult y luego al Paso Mzik. Disfruta de vistas panorámicas del hermoso pueblo de Imlil. Disfruta de un delicioso almuerzo bajo los enebros antes de descender al valle. Traslado a Marrakech. (5 horas de caminata y 1,5 horas de conducción)."
                }
            ]
        },
        {
            "id": "toubkal-winter-8-days",
            "name": "Toubkal Invierno 8 Días",
            "duration": "8_days",
            "image": "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg",
                "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                "/images/toubkal_treks/sven123musik-ai-generated-8635944_1920.png"
            ],
            "description": `Durante el invierno, el majestuoso Monte Toubkal y los picos circundantes del Alto Atlas sufren una notable transformación en un paraíso para excursionistas, con senderos tranquilos, aire fresco e impresionantes vistas del Macizo del Toubkal. Partiendo de la bulliciosa ciudad de Marrakech, viajamos directamente al corazón del Alto Atlas para conquistar el pico más alto de África del Norte (4167m) en medio de un paisaje impresionante. Aunque pueden ser necesarios crampones y piolets dependiendo del tiempo, esta expedición está diseñada para ser accesible para aquellos que están físicamente en forma y decididos, incluso si son nuevos en el senderismo de invierno.

QUÉ TRAER:
moroccoatlasguide, prepárate como lo harías para caminar en cualquier región montañosa; puede ser cálido y soleado durante el día, pero el clima puede cambiar rápidamente a nieve y vientos fríos. Por favor lleva lo que traigas, sin dejar basura.

moroccoatlasguide se adapta a la temporada y tu nivel de forma física. Tienes la opción de establecerte en Casas de Huéspedes Bereberes para caminatas diarias o optar por un Trek de Mulas del Atlas de 2+ días. En los treks de mulas, generalmente tienes la opción de alojarte en Casas de Huéspedes Bereberes/familias o acampar en tiendas de 2 personas. Además del equipaje regular, aquí tienes una lista de verificación para moroccoatlasguide:

- Buenas botas de senderismo y calcetines
- Zapatos cómodos/zapatillas para campamento/casa de huéspedes
- Pantalones de trekking
- Pantalones impermeables ligeros/pantalones de lluvia`,
            "pricing": [
                {
                    "totalPrice": 430
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Traslado desde el aeropuerto de Marrakech al hotel de 4 estrellas.",
                    "description": "Traslado desde el aeropuerto de Marrakech al hotel de 4 estrellas."
                },
                {
                    "day": 2,
                    "title": "Marrakech – Imlil (Aclimatación)",
                    "description": "Traslado de Marrakech a Imlil. Día de aclimatación alrededor del Valle de Imlil. Una opción es hacer un trek hasta el collado de Tizi M'zzik a 2660m / 8727ft en el cercano Valle Mezzik. Pernoctación en un pueblo local."
                },
                {
                    "day": 3,
                    "title": "Imlil – Sidi Chamharouch – Refugio Neltner",
                    "description": "Ascenso al santuario de Sidi Chamharouch. Continuar el ascenso hasta llegar al Refugio Neltner (3207m / 10,521ft), nuestro alojamiento para las próximas 3 noches."
                },
                {
                    "day": 4,
                    "title": "Escalar Ouanoukrim (4089m)",
                    "description": "Salir del refugio para escalar Ouanoukrim (4089m / 13,415ft) durante el día. Tiempo para descansar y relajarse al final de la tarde en el refugio."
                },
                {
                    "day": 5,
                    "title": "Cumbre Jebel Toubkal (4167m)",
                    "description": "Hoy, haz el empinado ascenso hasta la cumbre de Jebel Toubkal (4167m / 13,672ft). Después de disfrutar de las vistas panorámicas, regresa al Refugio Neltner para pasar la noche."
                },
                {
                    "day": 6,
                    "title": "Refugio – Valle Aroumd – Imlil",
                    "description": "Salir del refugio y descender por el Valle Aroumd, pasando por Sidi Chamharouch, y regresar a Imlil para pasar la noche en el hotel."
                },
                {
                    "day": 7,
                    "title": "Imlil – Marrakech",
                    "description": "Traslado a Marrakech, donde tendrás la oportunidad de explorar la ciudad antes de regresar al hotel de 4 estrellas."
                },
                {
                    "day": 8,
                    "title": "Traslado del hotel al aeropuerto.",
                    "description": "Traslado del hotel al aeropuerto."
                }
            ]
        },
        {
            "id": "toubkal-15-days-walk",
            "name": "Macizo del Toubkal 15 Días 14 Noches",
            "duration": "15_days",
            "image": "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg"
            ],
            "description": `Trek Inolvidable al Monte Toubkal
Otra aventura extraordinaria a través de las montañas del Alto Atlas de Marruecos con morocco atlas guide. Únete a tu guía local, cocinero y arriero mientras exploras encantadores pueblos bereberes, atraviesas valles exuberantes, navegas grietas moderadas y asciendes majestuosas montañas bañadas en luz dorada.

Experimenta una mezcla única de comodidad y aventura. Alojate en casas de huéspedes tradicionales y acampa bajo un dosel de higueras. Culmina tu viaje con la desafiante pero gratificante subida a la cumbre del Monte Toubkal, el pico más alto de África del Norte a una impresionante altura de 4,167 metros (13,671 pies). Las impresionantes vistas panorámicas desde la cima te dejarán sin palabras.

Este trek va más allá de un desafío físico. Es una inmersión cultural diseñada para darte un vistazo a la forma de vida bereber en las montañas del Atlas. El itinerario es adecuado para cualquiera que mantenga una rutina regular de ejercicio.

Extiende tu aventura con un viaje a Marrakech, una cautivadora ciudad conocida por sus tragafuegos, encantadores de serpientes y mercados vibrantes.

Recuerda: Este es un trek exigente. Prepárate para condiciones climáticas cambiantes en las montañas (días cálidos, noches frías, viento y posible nieve). Empaca adecuadamente con botas resistentes, zapatos cómodos para el campamento, pantalones de trekking y equipo para la lluvia.`,
            "pricing": [
                {
                    "totalPrice": 380
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Llegada a Marrakech",
                    "description": "Llegada a Marrakech, relájate en tu hotel y disfruta de una deliciosa cena (incluida)."
                },
                {
                    "day": 2,
                    "title": "Marrakech – Tiziane (1800m)",
                    "description": "¡Comienza tu trek! Caminata desde Marrakech hasta Tiziane (1800m) vía Asni, Imioughlad y Collado Tacht (2000m). Disfruta de impresionantes paisajes y pasa la noche en campamento o gîte (4,5 horas caminando, +600m/-300m cambio de elevación)."
                },
                {
                    "day": 3,
                    "title": "Tiziane – Tizgui'n Tikkent (2250m)",
                    "description": "¡La subida continúa! Trek desde Tiziane al campamento Tizgui'n Tikkent (2250m) vía Collado Téouti (2400m). Prepárate para vistas impresionantes (6 horas caminando, +1050m/-250m cambio de elevación)."
                },
                {
                    "day": 4,
                    "title": "Tizgui'n Tikkent – Azib n Tamsoult (2250m)",
                    "description": "Travesía desde Azib n Tikkent al campamento Azib n Tamsoult (2250m), pasando por Collado Tougdalt (2700m) en el camino (6 horas caminando, +800m/-900m cambio de elevación)."
                },
                {
                    "day": 5,
                    "title": "Azib n Tamsoult – Imlil (1750m)",
                    "description": "Descenso desde Azib n Tamsoult a Imlil (1750m) vía Collado Mezzik. Disfruta de un merecido descanso (5 horas caminando)."
                },
                {
                    "day": 6,
                    "title": "Imlil – Refugio Neltner (3200m)",
                    "description": "Desafíate con un ascenso significativo desde Imlil al Refugio Neltner (3200m) pasando por Armed y Sidi Chamharouch (5,5 horas caminando, +1500m cambio de elevación)."
                },
                {
                    "day": 7,
                    "title": "Refugio Neltner – Cumbre Monte Toubkal (4167m) – Refugio",
                    "description": "¡Conquista la cumbre! Caminata desde el Refugio Neltner hasta el pico del Monte Toubkal (4167m) y regreso al refugio para pasar la noche (5 horas caminando, +1000m/-1000m cambio de elevación)."
                },
                {
                    "day": 8,
                    "title": "Refugio Neltner – Lago Ifni (2400m)",
                    "description": "¡Explora una nueva ruta! Trek desde el Refugio Neltner al campamento Lago Ifni (2400m) vía Collado Ounamous (3700m) (6 horas caminando, +500m/-1350m cambio de elevación)."
                },
                {
                    "day": 9,
                    "title": "Lago Ifni – Taghbalout (2500m)",
                    "description": "Continúa tu viaje desde el Lago Ifni al campamento Taghbalout (2500m) pasando por Tissaldai (5,5 horas caminando, +850m/-300m cambio de elevación)."
                },
                {
                    "day": 10,
                    "title": "Taghbalout – Campamento (2600m)",
                    "description": "¡Prepárate para una subida desafiante! Caminata desde Taghbalout al Campamento (2600m) vía Collado 2900m y Azib Likkemt (6,5 horas caminando, +900m/-800m cambio de elevación)."
                },
                {
                    "day": 11,
                    "title": "Campamento – Azib Likkemt – Campamento Amagdoul (2300m)",
                    "description": "¡Otra subida te espera! Trek desde Azib Likkemt al Campamento Amagdoul (2300m) vía Collado Likkemt (3600m) (6 horas caminando, +1000m/-1200m cambio de elevación)."
                },
                {
                    "day": 12,
                    "title": "Campamento Amagdoul – Ousertek (2100m)",
                    "description": "Descenso hacia el final del trek. Caminata desde Ousarou a Ousertek (2100m) vía Collado Eddi (2900m) y Oukaimden (2600m) (5,5 horas caminando, +700m/-900m cambio de elevación)."
                },
                {
                    "day": 13,
                    "title": "Ousertek – Imioughlad – Marrakech (Traslado)",
                    "description": "¡Celebra tu logro! Alcanza el final del trek en Imioughlad después de una caminata final desde Ousertek vía Arg Imeskar (3,5 horas caminando, +300m/-400m cambio de elevación)."
                },
                {
                    "day": 14,
                    "title": "Marrakech (Día Libre)",
                    "description": "Disfruta de un día libre en Marrakech para explorar la vibrante ciudad."
                },
                {
                    "day": 15,
                    "title": "Salida",
                    "description": "Relájate y reflexiona sobre tu aventura. Traslado al aeropuerto, con tiempo para comprar recuerdos en el zoco si tu vuelo lo permite."
                }
            ]
        },
        {
            "id": "3-days-imlil-to-setti-fatma",
            "name": "3 Días – Imlil a Setti Fatma",
            "duration": "3_days",
            "image": "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
            "gallery": [
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/excursions/rigel-ibisQEDxODo-unsplash.jpg",
                "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
                "/images/ourika/hassan-ahrouch-CfmIZwBvxNY-unsplash.jpg"
            ],
            "description": `¿Por qué reservar este trek?
- Senderismo en las montañas del Alto Atlas
- Ver pueblos bereberes
- Hermosos paisajes
- Ver la cascada en Setti Fatma

Detalles del Tour:
En las elevaciones más altas encontrarás principalmente alpinas perennes con alguna vegetación ocasional, mientras que las elevaciones más bajas tienen diversos valles de nogales, manzanos, cerezos y otros árboles frutales, así como orquídeas de montaña, amapolas e iris.

Grados de Trek:
- Caminatas Grado 1 (Fácil): Suelen ser caminatas cortas de un día y paseos a bajas altitudes. Las caminatas de Grado 1 pueden ser disfrutadas por cualquiera que lleve una vida razonablemente activa y no se requiere preparación especial.
- Caminatas Grado 2 (Moderado): Suelen implicar algunas caminatas más largas (4-6 horas/día) a bajas altitudes (por debajo de 3000m). Alguna experiencia previa de caminata en colinas sería beneficiosa pero estas caminatas deberían estar al alcance de quienes llevan una vida activa normal. Los tours de caminata de Grado 2 pueden contener algunos días opcionales extenuantes, y para aprovechar al máximo el viaje te aconsejaríamos que mejoraras tu forma física antes de unirte.
- Caminatas Grado 3 (Extenuante): Son para el excursionista de colinas más serio y se requiere un nivel más alto de forma física. Los días de caminata suelen ser de 6-8 horas y pueden implicar hasta 900m o más de ascenso y descenso. Deberías estar preparado para varios días consecutivos caminando, a menudo a mayores altitudes, por lo que la resistencia es importante.

Qué Traer:
Para el Trekking en el Atlas necesitas prepararte como lo harías para caminar en cualquier región montañosa; puede ser cálido y soleado durante el día pero el clima en las montañas puede cambiar rápidamente de sol a nieve y vientos fríos (otoño hasta finales de primavera). Por favor no dejes basura; lleva lo que traigas.
Los Treks del Atlas se adaptan a la temporada y tu nivel de forma física. Tienes la opción de establecerte en Casas de Huéspedes Bereberes, desde donde puedes hacer caminatas diarias, o puedes hacer un Trek de Mulas del Atlas de 2+ días. En los treks de mulas generalmente tienes la opción de alojarte en Casa de Huéspedes Bereber/con familias o acampar en tiendas de 2 personas. Además del equipaje regular, aquí tienes una Lista de Verificación para el Trekking en el Atlas:
- Buenas botas de senderismo y calcetines
- Zapatos cómodos/zapatillas para campamento/casa de huéspedes
- Pantalones de trekking
- Pantalones impermeables ligeros/pantalones de lluvia`,
            "pricing": [
                {
                    "totalPrice": 200
                }
            ],
            "includes": [
                "Totalmente acompañado por guía de montaña local, arrieros y cocinero",
                "Todas las comidas: desayuno, almuerzo y cena",
                "Alojamiento: 2 noches en gîtes locales",
                "Transporte: minibus o coche 4×4"
            ],
            "excludes": [
                "Vuelos Internacionales",
                "Seguro de Viaje",
                "Sacos de Dormir",
                "Propinas",
                "Bastones de senderismo, Comidas no mencionadas",
                "Refrescos"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Imlil – Tacheddirt (Valle de Tacheddirt)",
                    "description": "Después de un traslado a Imlil comenzamos a caminar hacia el valle de Tacheddirt, pasando por Tizi 'n Tamatert (2279m) para llegar al pueblo de Ouanesekra (2200m) en el valle de Tacheddirt. Aquí pasamos la noche en una gîte bereber o en tiendas. Aprox. 4 horas caminando. (A/C)"
                },
                {
                    "day": 2,
                    "title": "Tacheddirt – Timichi",
                    "description": "Comenzamos a caminar desde Tacheddirt hacia Timichi (2000m), pasando por el Tizi 'n Tacheddirt (3172m). Después del paso descendemos pasando los pueblos de Ibbasen y Timichi. Pasamos la noche en una gîte bereber. Aprox. 6 a 7 horas caminando. (D/A/C)"
                },
                {
                    "day": 3,
                    "title": "Timichi – Setti Fatma – Marrakech",
                    "description": "Hoy caminamos desde Timichi hacia Setti Fatma (1700m). A lo largo del viaje hay pueblos bereberes en el valle: Tiourdou, Anfli, Tadrart, Chiker. Después del almuerzo continuamos vía Agadir 'n Aït Boulmane y hasta el centro de Setti Fadma. Si hay suficiente tiempo visitaremos la cascada en Setti Fadma antes de regresar a Marrakech. Aprox. 4 a 5 horas caminando."
                }
            ]
        },
        {
            "id": "8-days-mount-toubkal-summer",
            "name": "8 Días Monte Toubkal – Verano",
            "duration": "8_days",
            "image": "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
            "gallery": [
                "/images/toubkal_treks/rihards-sarma-JHeCuXiERFo-unsplash.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg",
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg"
            ],
            "description": `¿Por qué reservar este trek?
- Intentar la cumbre del Monte Toubkal, montaña más alta de África del Norte
- Trekking en las montañas del Alto Atlas
- Ver el hermoso Lago Ifni
- Experimentar la forma de vida bereber
- Explorar la ciudad de Marrakech

Detalles del Tour:
La montaña más alta de África del Norte domina la impresionante vista hacia el sur desde Marrakech, sorprendiendo a menudo con su inesperado pico nevado. Sin embargo, también ofrece un ascenso relativamente fácil durante el verano.

Grados de Trek:
- Caminatas Grado 1 (Fácil): Suelen ser caminatas cortas de un día y paseos a bajas altitudes. Las caminatas de Grado 1 pueden ser disfrutadas por cualquiera que lleve una vida razonablemente activa y no se requiere preparación especial.
- Caminatas Grado 2 (Moderado): Suelen implicar algunas caminatas más largas (4-6 horas/día) a bajas altitudes (por debajo de 3000m). Alguna experiencia previa de caminata en colinas sería beneficiosa pero estas caminatas deberían estar al alcance de quienes llevan una vida activa normal. Los tours de caminata de Grado 2 pueden contener algunos días opcionales extenuantes, y para aprovechar al máximo el viaje te aconsejaríamos que mejoraras tu forma física antes de unirte.
- Caminatas Grado 3 (Extenuante): Son para el excursionista de colinas más serio y se requiere un nivel más alto de forma física. Los días de caminata suelen ser de 6-8 horas y pueden implicar hasta 900m o más de ascenso y descenso. Deberías estar preparado para varios días consecutivos caminando, a menudo a mayores altitudes, por lo que la resistencia es importante.

Qué Traer:
Para el Trekking en el Atlas necesitas prepararte como lo harías para caminar en cualquier región montañosa; puede ser cálido y soleado durante el día pero el clima en las montañas puede cambiar rápidamente de sol a nieve y vientos fríos (otoño hasta finales de primavera). Por favor no dejes basura; lleva lo que traigas.

Los Treks del Atlas se adaptan a la temporada y tu nivel de forma física. Tienes la opción de establecerte en Casas de Huéspedes Bereberes, desde donde puedes hacer caminatas diarias, o puedes hacer un Trek de Mulas del Atlas de 2+ días. En los treks de mulas generalmente tienes la opción de alojarte en Casa de Huéspedes Bereber/con familias o acampar en tiendas de 2 personas. Además del equipaje regular, aquí tienes una Lista de Verificación para el Trekking en el Atlas:
- Buenas botas de senderismo y calcetines
- Zapatos cómodos/zapatillas para campamento/casa de huéspedes
- Pantalones de trekking
- Pantalones impermeables ligeros/pantalones de lluvia`,
            "pricing": [
                {
                    "totalPrice": 420
                }
            ],
            "includes": [
                "Totalmente acompañado por guía de montaña local, arrieros y cocinero",
                "Todas las comidas: desayuno, almuerzo y cena (excepto en Marrakech)",
                "Alojamiento: 2 noches en Marrakech y 5 noches acampando",
                "Transporte: minibus o coche 4×4"
            ],
            "excludes": [
                "Vuelos Internacionales",
                "Seguro de Viaje",
                "Sacos de Dormir",
                "Bastones de senderismo, Comidas no mencionadas",
                "Propinas",
                "Refrescos"
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Llegada a Marrakech",
                    "description": "Recogida en el aeropuerto de Marrakech y traslado a tu riad donde pasarás la noche. (D)"
                },
                {
                    "day": 2,
                    "title": "Marrakech – Imlil – Tacheddirt",
                    "description": "Salimos de Marrakech después del desayuno y conducimos a Imlil (1740m) vía Asni. Imlil es el principal punto de partida para excursionistas. Este es el lugar donde nos encontramos con nuestro equipo de mulas y una vez que todo nuestro equipo esté cargado comenzamos a caminar a lo largo del valle hacia Tacheddirt, a unos 8 km de Imlil. Pronto el sendero comienza a subir mientras escalamos hasta el paso de Tizi 'n Tamatert (2279m). Luego descendemos al bonito pueblo de Ouaneskra (2200m) y continuamos, durante media hora más o menos, hasta Tacheddirt (2300m), donde montamos campamento cerca del río. Aprox. 4 horas caminando. (D/A/C)"
                },
                {
                    "day": 3,
                    "title": "Tacheddirt – Azib Likemt",
                    "description": "Inmediatamente comenzamos un largo y lento ascenso hasta el paso de Tizi Likemt (3555m). En la cima disfrutamos de nuestra primera buena vista del Macizo del Toubkal antes de un largo descenso hasta el pueblo de Azib Likemt (2200m), donde montamos nuestro campamento para pasar la noche. Aprox. 5 horas caminando. (D/A/C)"
                },
                {
                    "day": 4,
                    "title": "Azib Likemt – Amsouzert",
                    "description": "Este día va a ser un día largo pero bastante fácil, pasando por muchos paisajes diferentes. Desde Tizi 'n Ououraine (3120m) disfrutamos de más vistas del Macizo del Toubkal, incluyendo la cumbre, la cara este y la Cúpula Ifni (3876m). El sendero conduce hacia Amsouzert (1700m), uno de los pueblos más llamativos de la región, donde pasamos la noche en una gîte local o en campamento. La gîte es un alojamiento muy básico. Aprox. 6 horas caminando. (D/A/C)"
                },
                {
                    "day": 5,
                    "title": "Amsouzert – Lago Ifni",
                    "description": "Al oeste de Amsouzert hay varios pequeños pueblos, que exploramos mientras nos dirigimos hacia el Lago Ifni (2300m), el único lago en el Macizo. Es una vista memorable, rodeado de montañas rocosas y montones gigantes de escombros, y es inusualmente profundo. Esperamos llegar a la hora del almuerzo y pasar la tarde relajándonos en la orilla. Acampamos esta noche en esta área. Aprox. 4 horas caminando. (D/A/C)"
                },
                {
                    "day": 6,
                    "title": "Lago Ifni – Tizi n'Ouanoums – Refugio Nelther",
                    "description": "Ahora deberíamos estar en forma y aclimatados, y listos para abordar el día más duro del trek. Nos abrimos camino por un sendero empinado que sube por una pendiente de pedregal aparentemente interminable. Finalmente llegamos al paso de Tizi n'Ouanoums (3664m), una estrecha cornisa entre dos pilares de roca. Desde aquí es un largo descenso en zigzag hasta el Refugio Nelther (3200m), donde pasamos la noche en tiendas. Aprox. 6 horas caminando. (D/A/C)"
                },
                {
                    "day": 7,
                    "title": "Refugio Nelther – Cumbre Toubkal – Imlil – Marrakech",
                    "description": "Salimos antes del amanecer, siguiendo una ruta bien marcada hasta la cumbre del Toubkal (4167m). Si las condiciones son buenas no debería tomar más de 2-3 horas llegar a la cumbre, donde disfrutamos de hermosas vistas de toda la cordillera del Atlas y las llanuras de Marrakech más allá. Regresando a base, luego descendemos bastante rápidamente hasta los pueblos de Sidi Chamharouch y Aremd, antes de seguir el Río Mizane, a lo largo de un sendero bien arbolado, hasta el punto de partida en Imlil. Traslado de regreso a Marrakech. Aprox. 9 horas caminando. Noche en riad. (D/A)"
                },
                {
                    "day": 8,
                    "title": "Salida",
                    "description": "Traslado de regreso al aeropuerto y salida. (D)"
                }
            ]
        }
    ],
    // DESERT TOURS - Aventuras en el Sahara y sur de Marruecos
    "desertTours": [
        {
            "id": "tour-to-merzouga-from-marrakech-3-days-and-2-nights",
            "name": "Tour a Merzouga desde Marrakech 3 Días y 2 Noches",
            "duration": "3_days",
            "image": "/images/desert_tours/merzouga1.jpg",
            "gallery": [
                "/images/desert_tours/merzouga2.jpg",
                "/images/desert_tours/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                "/images/desert_tours/merzouga5.jpg",
                "/images/desert_tours/merzouga6.jpg",
                "/images/desert_tours/kristijan-nikodinovski-yrweAIJtSzo-unsplash.jpg"
            ],
            "description": `Embárcate en una aventura de 3 días a través de los impresionantes paisajes de Marruecos. Atraviesa valles, explora antiguas kasbahs y finalmente, contémplalo con asombro ante el legendario Desierto del Sahara. Guías expertos estarán a tu lado en cada paso del camino, asegurando un viaje seguro y culturalmente enriquecedor.`,
            "pricing": [
                {
                    "totalPrice": 390
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Kasbah Telouet – Ait Benhaddou – Ouarzazate",
                    "description": "Te recogeremos de tu hotel o riad y saldremos hacia el paso Tizi-n-Tichka del Alto Atlas a 2260m de altitud. Haremos una parada en tu viaje para visitar la kasbah Telouet y luego tomaremos las pistas de caravanas hasta la kasbah de Ait Benhaddou. Esta noche, nos alojaremos en la Puerta del Desierto, Ouarzazate, en un riad o hotel cómodo."
                },
                {
                    "day": 2,
                    "title": "Ouarzazate – Gargantas del Dades – Gargantas del Todra – Merzouga",
                    "description": "Después del desayuno te llevaremos a ver 'El Valle de las Rosas' con el serpenteante Río Dades corriendo por el centro. Cuando salgamos, obtendremos impresionantes vistas del campo circundante mientras viajamos hacia Tinghir y el valle del Todgha. ¡Asegúrate de mantener los ojos abiertos para las tradicionales cabañas y pueblos bereberes! Nuestro siguiente destino es la dramática Garganta del Todgha de 300m, un destino popular con escaladores de roca y ocasionalmente incluso cineastas. Después, partiremos hacia el pueblo de Merzouga donde seremos recibidos con un vaso de té de menta y un breve descanso. Desde allí, ¡nos vamos al desierto! Cuando estemos listos, montaremos nuestros camellos hacia las dunas y veremos la puesta de sol antes de pasar la noche en una tienda tradicional de nómadas. Tu cena está incluida."
                },
                {
                    "day": 3,
                    "title": "Merzouga – Rissani – Erfoud – Marrakech",
                    "description": "Hoy, nos levantaremos temprano para ver el amanecer del desierto entre las dunas y prepararnos para el día por delante. Haremos un trek de regreso al hotel con nuestros camellos y nos daremos una ducha antes de continuar con nuestra aventura. Haremos una parada en Boumalne-Dades (vía Rissani y Erfoud) donde veremos los talleres que hacen objetos y decoraciones de mármol fosilizado. Finalmente, regresaremos a Marrakech donde puedes pasar la noche en tu hotel o riad."
                }
            ]
        },
        {
            "id": "marrakech-to-fes-5-day-sahara-desert-tour",
            "name": "Tour de 5 Días del Desierto del Sahara de Marrakech a Fez",
            "duration": "5_days",
            "image": "/images/desert_tours/merzouga3.jpg",
            "gallery": [
                "/images/desert_tours/merzouga4.jpg",
                "/images/desert_tours/kristijan-nikodinovski-RfK4AQchykw-unsplash.jpg",
                "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "/images/desert_tours/merzouga1.jpg",
                "/images/desert_tours/peter-thomas-PotqZeNaUZ4-unsplash.jpg"
            ],
            "description": `Descubre el Alma de Marruecos: Una Aventura de 5 Días
Embárcate en un cautivador viaje que atraviesa los majestuosos paisajes de Marruecos, comenzando en el vibrante corazón de Marrakech y culminando en la antigua ciudad de Fez. Asciente los picos escarpados de las montañas del Alto Atlas, sus agudas cumbres rozando el cielo. Adéntrate en el corazón del Sahara – un mar de vastas dunas de arena susurrando historias del tiempo. Deambula por laberínticas medinas rebosantes de vida, sus vibrantes zocos desbordantes de tesoros. Maravíllate con exquisitas mezquitas y la grandeza de antiguas residencias reales. Desvela los secretos de antiguas kasbahs – silenciosos centinelas guardando historias olvidadas. Explora pueblos desérticos tostados por el sol donde el tiempo parece detenerse. Experimenta la emoción de un paseo en camello a través de las dunas de Merzouga, culminando en una noche memorable bajo un dosel de estrellas en un campamento del desierto. Esta aventura de 5 días promete una inmersión inolvidable en la rica tapicería de la cultura, historia y impresionante belleza natural de Marruecos.`,
            "pricing": [
                {
                    "totalPrice": 390
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Descubriendo el Alto Atlas y Ait Ben Haddou",
                    "description": "Nuestro viaje comienza en Marrakech, serpenteando a través de las impresionantes montañas del Alto Atlas. ¡Conquista el paso Tizi n'Tichka, alcanzando una asombrosa altitud de 2260 metros! Respira el aire fresco de la montaña y admira los paisajes dramáticos. También haremos una parada en una cooperativa local de aceite de argán para aprender sobre este producto marroquí único. Después de un delicioso almuerzo en un restaurante local, adéntrate en la historia con una visita al sitio del Patrimonio Mundial de la UNESCO, Ait Ben Haddou, una magnífica kasbah. Nuestro día concluye en Ouarzazate, donde te espera un hotel tradicional para la cena y un descanso cómodo."
                },
                {
                    "day": 2,
                    "title": "Gargantas del Dades y la Puerta del Desierto",
                    "description": "Recargado por el desayuno, viajamos de regreso a través del Valle del Dades, maravillándonos con las fascinantes formaciones rocosas conocidas como \"los dedos del mono.\" También encontraremos la histórica Kasbah del siglo XIX de Ait Yul. Dejando atrás el Dades, nos dirigimos hacia Tinghir y las Gargantas del Todra. Prepárate para quedar asombrado por vistas panorámicas de antiguos pueblos bereberes de adobe aferrados a las paredes del valle. Llega a las Gargantas del Todra, una maravilla natural donde imponentes acantilados de 300 metros proporcionan un refugio para escaladores de roca. Nuestro camino continúa hacia Erfoud y Rissani, donde saborearemos un delicioso almuerzo. Finalmente, llegamos al encantador pueblo de Merzouga, recibidos con un refrescante vaso de té de menta antes de instalarnos en nuestro alojamiento."
                },
                {
                    "day": 3,
                    "title": "Explorando el Desierto y una Noche Bajo las Estrellas",
                    "description": "Después del desayuno, emprende una exploración aventurera de la región. Un guía 4×4 desvelará los secretos del Sahara, incluyendo una visita a la \"aldea de los negros,\" descendientes de esclavos sudaneses, donde puedes experimentar su música y estilo de vida únicos. También podríamos parar en el pintoresco Lago Merzouga, un refugio para diversa vida de aves, incluyendo flamencos. Explora la casa de alambre nómada, ofreciendo artesanía bereber a precios más bajos comparados con las bulliciosas ciudades. A medida que llega la tarde, prepárate para un emocionante paseo en camello al corazón del Erg Chebbi, un mar de hipnóticas dunas de arena. Esta noche, experimenta la magia del desierto bajo una manta de estrellas. ¡Elige entre una tienda nómada bereber tradicional o un cómodo riad – la elección es tuya! Saborea una deliciosa cena bajo el cielo estrellado."
                },
                {
                    "day": 4,
                    "title": "Espectáculo del Amanecer y Viaje por el Valle del Ziz",
                    "description": "Levántate antes del amanecer con tu guía de camello para presenciar un amanecer impresionante, quizás el más memorable de tu vida. Después del encantador amanecer, paseo en camello de regreso a tu riad de Merzouga para un desayuno rejuvenecedor. Nuestro viaje continúa hacia Medilt, atravesando los pueblos de Rissani y Erfoud. En Rissani, sumérgete en el vibrante zoco local, bullicioso con especias coloridas, dátiles y animadas conversaciones. Luego viajamos a Errachidia, siguiendo el magnífico Valle del Ziz. Tómate un momento para apreciar las vistas panorámicas sobre el dramático Cañón del Ziz antes de continuar a Medilt."
                },
                {
                    "day": 5,
                    "title": "Bosque de Cedros y Llegada a Fez",
                    "description": "Después del desayuno, partimos hacia Fez vía Azrou, un pueblo bereber enclavado en las montañas del Medio Atlas. En el camino, para y observa a los juguetones macacos de Berbería en el famoso Bosque de Cedros. Nuestra última parada antes de llegar a Fez es el encantador \"pueblo francés\" de Ifrane – una oportunidad perfecta para capturar algunas fotos o disfrutar de una bebida refrescante. Finalmente, llegamos a Fez, tu destino final, y nos instalamos en tu alojamiento elegido."
                }
            ]
        },
        {
            "id": "5-days-trek-atlas-mountains-and-sahara-desert",
            "name": "5 Días Trek Montañas del Atlas y Desierto del Sahara",
            "duration": "5_days",
            "image": "/images/desert_tours/merzouga5.jpg",
            "gallery": [
                "/images/desert_tours/darolti-dan-GJw9zRK_VBs-unsplash.jpg",
                "/images/desert_tours/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg",
                "/images/desert_tours/merzouga7.jpg",
                "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg"
            ],
            "description": `Explora Marruecos: Aventuras en el Desierto Compartidas y Privadas con moroccoatlasguide

Embárcate en un viaje inolvidable a través de Marruecos con nuestros tours del desierto compartidos o privados, saliendo desde Marrakech o Fez.

Experiencias a Medida: Elige entre excursiones que van de 2 a 8 días, diseñadas para adaptarse a tu estilo de viaje y cronograma. Explora a tu propio ritmo con un tour privado, o únete a una vibrante aventura compartida y conecta con otros viajeros.
Viaje de Ida y Vuelta o Traviesa: Ofrecemos itinerarios de ida y vuelta que te devuelven a tu ciudad de salida, o viajes traviesas que te llevan en una exploración de un solo sentido, permitiéndote descubrir nuevos destinos al final de tu tour.
Desierto y Más Allá: Nuestros tours del desierto pueden combinarse con emocionantes treks en las majestuosas montañas del Atlas. Sumérgete en los diversos paisajes de Marruecos, desde las vastas dunas de arena del Sahara hasta los imponentes picos y pueblos bereberes de la cordillera del Atlas.
¡Contáctanos hoy para diseñar tu perfecta aventura marroquí!

Marruecos Inolvidable: Montañas, Cañones y Dunas del Desierto (5 Días) Embárcate en una épica aventura que combina la majestuosidad de las montañas del Atlas con la magia del desierto del Sahara.`,
            "pricing": [
                {
                    "totalPrice": 470
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Desvelando Imlil, el \"Chamonix Marroquí\"",
                    "description": "Nuestra aventura comienza en Imlil, un encantador pueblo enclavado en las montañas del Alto Atlas. A menudo llamado el \"Chamonix Marroquí,\" Imlil ofrece paisajes impresionantes y una acogedora atmósfera bereber. Pasa el día explorando cercanos pueblos bereberes, sumergiéndote en su rica cultura y tradiciones."
                },
                {
                    "day": 2,
                    "title": "Trekking a Través de las Maravillas del Atlas",
                    "description": "¡Ata tus botas y conquista caminatas escénicas de día en las montañas del Atlas. Contempla impresionantes paisajes y descubre joyas ocultas intocadas por el tiempo. Saborea deliciosas comidas locales y conecta con comunidades bereberes en el camino."
                },
                {
                    "day": 3,
                    "title": "Gargantas del Dades, un Espectáculo Natural",
                    "description": "Dile adiós a las montañas y viaja hacia las impresionantes Gargantas del Dades. Estos dramáticos cañones, esculpidos por el Río Dades, ofrecen vistas impresionantes y una maravilla geológica única. Explora las gargantas, maravíllate con las formaciones rocosas y aprende sobre la historia de la región."
                },
                {
                    "day": 4,
                    "title": "El Encantador Desierto de Merzouga",
                    "description": "Continúa tu aventura hacia Merzouga, la puerta al Desierto del Sahara. Sumérgete en la vastedad de las dunas de arena y experimenta la tranquilidad del paisaje desértico. Embárcate en un emocionante paseo en camello, viajando al corazón de las dunas mientras el sol se sumerge bajo el horizonte. Pasa la noche bajo una manta de estrellas en un campamento nómada tradicional, una experiencia verdaderamente inolvidable."
                },
                {
                    "day": 5,
                    "title": "¡Adiós, Marruecos!",
                    "description": "Después de una mágica noche bajo las estrellas, disfruta de un desayuno tranquilo antes de partir de Merzouga. Nuestro viaje nos lleva de regreso a través de la belleza severa del desierto de Tazarine antes de llegar a Ouarzazate. Finalmente, llegamos a Marrakech, donde concluye tu aventura. Este itinerario de 5 días promete una mezcla perfecta de inmersión cultural, paisajes impresionantes y experiencias inolvidables."
                }
            ]
        },
        {
            "id": "south-morocco-discovery",
            "name": "Descubrimiento del Sur de Marruecos 10 Días",
            "duration": "10_days",
            "image": "/images/desert_tours/merzouga6.jpg",
            "gallery": [
                "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "/images/desert_tours/marvin-meyer-X0XRRXSVLU4-unsplash.jpg",
                "/images/desert_tours/ismail-el-youssefi-geeSPCxnKzU-unsplash.jpg"
            ],
            "description": `Desvelando Marruecos: Un Viaje desde Bulliciosas Ciudades hasta Tranquilos Desiertos (10 Días)

ATRACCIONES PRINCIPALES: Valle de los Dátiles, Desierto de Merzouga, Agdz, Taroudant

Embárcate en una extensa exploración de 10 días del glorioso Sur de Marruecos. Esta inmersiva ruta te lleva desde las vibrantes calles de Marrakech hasta las silenciosas dunas de Merzouga y el encanto costero de Essaouira. Experimenta los cambiantes paisajes, profundas tradiciones y tesoros ocultos del sur.`,
            "pricing": [
                {
                    "totalPrice": 675
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Llegada a Marrakech",
                    "description": "¡Bienvenido a la cautivadora ciudad de Marrakech! Sumérgete en la vibrante energía al llegar a cualquier hora. La ciudad es un festín sensorial, lleno de los aromas atractivos de especias, los sonidos rítmicos de músicos y los deslumbrantes colores de los bulliciosos zocos. Por la tarde, únete a una reunión de bienvenida a una hora y lugar designados (los detalles se confirmarán a la llegada). Luego serás trasladado a tu cómodo riad o hotel, donde puedes registrarte y relajarte después de tu viaje."
                },
                {
                    "day": 2,
                    "title": "DESCUBRE el Alto Atlas y el Valle del Dades",
                    "description": "Después de un satisfactorio desayuno, emprendemos un viaje escénico hacia el sur hacia Ouarzazate, la puerta al desierto. Nuestra aventura comienza con un emocionante ascenso a través del paso Tizi n'Tichka, ofreciendo vistas impresionantes de las majestuosas montañas del Alto Atlas. A medida que viajamos a través de pueblos bereberes, presenciaremos el cautivador contraste entre fértiles valles y laderas áridas salpicadas de antiguas Kasbahs. Un punto culminante del día es una parada en la ciudad fortificada de Ait Benhaddou, un Sitio del Patrimonio Mundial de la UNESCO. Después del almuerzo, llegamos al impresionante Valle del Dades, instalándonos en nuestro cómodo alojamiento en hotel."
                },
                {
                    "day": 3,
                    "title": "Abrazando el Paisaje Desértico",
                    "description": "Hoy, nos adentramos más en el paisaje desértico. Dejando atrás las Gargantas del Dades, nos dirigimos hacia Merzouga, haciendo una parada en la Garganta del Todra y el palmeral de Tinghir en el camino. A la llegada a Merzouga, enclavado entre las dunas del Erg Chebbi, prepárate para una experiencia inolvidable. Embárcate en un paseo en camello al corazón de las dunas, llegando a nuestras tradicionales tiendas bereberes para pasar la noche. A medida que el sol se sumerge bajo el horizonte, contempla una impresionante puesta de sol desértica seguida de una deliciosa cena bajo una manta de estrellas."
                },
                {
                    "day": 4,
                    "title": "Delicias del Desierto y Oasis de Agdaz",
                    "description": "Despierta con un mágico amanecer desértico y disfruta de un último paseo en camello de regreso a Merzouga. Luego nos trasladamos a Agdz, un encantador pueblo enclavado en el Valle del Draa. En el camino, haremos una parada para conectar con familias bereberes y disfrutar de una tradicional ceremonia de té de menta. Por la tarde, nos instalaremos en nuestro cómodo alojamiento en hotel o riad."
                },
                {
                    "day": 5,
                    "title": "Desvelando la Ruta del Argán y Taroudant",
                    "description": "Hoy, volvemos a subir a nuestra minivan y nos aventuramos hacia el animado pueblo mercado de Oulad Driss, a menudo llamado \"Pequeña Marrakech.\" El viaje ofrece paisajes desérticos escénicos y la oportunidad de avistar los únicos árboles de argán. ¡Mantén los ojos abiertos para ver la famosa imagen de cabras trepando estos árboles en busca de nueces! Continuamos a Taroudant para pasar la noche."
                },
                {
                    "day": 6,
                    "title": "Essaouira, una Escapada Costera",
                    "description": "Por la mañana, explora los bulliciosos zocos de Taroudant. Después, nos despedimos de las montañas del Alto Atlas y nos dirigimos hacia el oeste hacia la encantadora ciudad costera de Essaouira (aproximadamente 5 horas de conducción). Essaouira cumple con su nombre con sus pintorescas casas blanqueadas adornadas con brillantes postigos azules. Explora las galerías de arte, deambula por las murallas o simplemente relájate en las hermosas playas de arena."
                },
                {
                    "day": 7,
                    "title": "Explorando Essaouira a Tu Ritmo",
                    "description": "Hoy es un día libre para explorar Essaouira a tu propio ritmo. Ya sea que elijas adentrarte más en la historia de la ciudad, relajarte en la playa o deleitarte con deliciosos mariscos, el día es tuyo para crear recuerdos duraderos."
                },
                {
                    "day": 8,
                    "title": "Regreso a Marrakech",
                    "description": "Después de un desayuno tranquilo, nos trasladaremos de regreso a la bulliciosa ciudad de Marrakech, donde pasarás tus últimas dos noches en Marruecos."
                },
                {
                    "day": 9,
                    "title": "Desvelando los Tesoros de Marrakech",
                    "description": "Embárcate en un tour guiado de Marrakech, descubriendo las joyas ocultas de la ciudad. Contempla los intrincados mosaicos y la arquitectura del Palacio Bahia. Adéntrate en la serena belleza de las Tumbas Saadíes. Prepárate para ser deslumbrado por los vibrantes zocos de Marrakech, un laberinto de vistas, olores y sonidos."
                },
                {
                    "day": 10,
                    "title": "Salida",
                    "description": "Tu aventura de 10 días llega a su fin. Traslado al aeropuerto para tu vuelo de regreso."
                }
            ]
        },
        {
            "id": "9-days-trek-saghro-south-morocco",
            "name": "9 Días Trek Saghro Sur de Marruecos",
            "duration": "9_days",
            "image": "/images/desert_tours/merzouga7.jpg",
            "gallery": [
                "/images/desert_tours/ismail-el-youssefi-geeSPCxnKzU-unsplash.jpg",
                "/images/desert_tours/kristijan-nikodinovski-yrweAIJtSzo-unsplash.jpg",
                "/images/desert_tours/raul-mermans-garcia-oWzVpeYyJ-w-unsplash.jpg",
                "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg"
            ],
            "description": "Una aventura de trekking de 9 días en el Jebel Saghro, un espectacular cordón montañoso volcánico que conecta el Alto Atlas y el Sahara. Conocido por sus mesetas, agujas de basalto y calidez invernal, es un favorito para el trekking en temporada seca. Camina a través de pueblos remotos y dramáticas formaciones rocosas con nuestro equipo experto.",
            "pricing": [
                {
                    "totalPrice": 750
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Tagdilt",
                    "description": "Conducción por el paso Tichka hasta Ouarzazate y Boumalne Dades. Llegada a Tagdilt."
                },
                {
                    "day": 2,
                    "title": "Tagdilt – Almou N'Ouarg",
                    "description": "Comienzo del trek. Cruce del Tizi n'Ouzarzam. Campamento en Almou N'Ouarg."
                },
                {
                    "day": 3,
                    "title": "Almou N'Ouarg – Igli",
                    "description": "Trek hasta la cima de Kouaouch (2600m). Descenso a Igli."
                },
                {
                    "day": 4,
                    "title": "Igli – Bab n'Ali",
                    "description": "Caminata a través de gargantas hasta las famosas torres de roca de Bab n'Ali."
                },
                {
                    "day": 5,
                    "title": "Bab n'Ali – Ighazzoun",
                    "description": "Trek a través de Tadaout n'Tablah paisajes diversos."
                },
                {
                    "day": 6,
                    "title": "Ighazzoun – Handour",
                    "description": "Trek hasta el pueblo de Handour. Oasis verdes contrastando con roca."
                },
                {
                    "day": 7,
                    "title": "Handour – Nkob – Marrakech",
                    "description": "Caminata corta. Encuentro con transporte en Nkob. Conducción de regreso a Marrakech."
                },
                {
                    "day": 8,
                    "title": "Día Libre en Marrakech",
                    "description": "Explora la Medina."
                },
                {
                    "day": 9,
                    "title": "Salida",
                    "description": "Traslado al aeropuerto."
                }
            ]
        },
        {
            "id": "6-day-trekking-program-in-saghro-morocco",
            "name": "Programa de Trekking de 6 Días en Saghro Marruecos",
            "duration": "6_days",
            "image": "/images/desert_tours/marvin-meyer-X0XRRXSVLU4-unsplash.jpg",
            "gallery": [
                "/images/desert_tours/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                "/images/desert_tours/raul-mermans-garcia-oWzVpeYyJ-w-unsplash.jpg",
                "/images/desert_tours/merzouga3.jpg",
                "/images/desert_tours/merzouga2.jpg"
            ],
            "description": "Un programa de trekking enfocado de 6 días en la hermosa región de Jebel Saghro. Experimenta el \"Monument Valley\" de Marruecos con su única geología volcánica. Este itinerario más corto captura los puntos destacados de la cordillera, incluyendo los pináculos de Bab n'Ali y la interacción auténtica con los nómadas de la tribu Ait Atta.",
            "pricing": [
                {
                    "totalPrice": 540
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Tagdilt",
                    "description": "Conducción desde Marrakech hasta el pueblo de Tagdilt vía Ouarzazate."
                },
                {
                    "day": 2,
                    "title": "Tagdilt – Almou N'Ouarg",
                    "description": "Comienzo del trekking hacia los pastos estacionales de Almou N'Ouarg."
                },
                {
                    "day": 3,
                    "title": "Almou N'Ouarg – Igli",
                    "description": "Ascenso del pico Kouaouch para vistas panorámicas. Campamento en Igli."
                },
                {
                    "day": 4,
                    "title": "Igli – Bab n'Ali",
                    "description": "Caminata hasta las espectaculares formaciones rocosas de Bab n'Ali."
                },
                {
                    "day": 5,
                    "title": "Bab n'Ali – Nkob",
                    "description": "Trek final hasta Handour/Nkob."
                },
                {
                    "day": 6,
                    "title": "Nkob – Marrakech",
                    "description": "Traslado de regreso a Marrakech vía el Valle del Draa."
                }
            ]
        },
        {
            "id": "11-days-jebel-sirwa-safran-valley",
            "name": "11 Días Jebel Sirwa Valle del Azafrán",
            "duration": "11_days",
            "image": "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg",
            "gallery": [
                "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg",
                "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
            ],
            "description": "Una aventura única de 11 días combinando la cordillera volcánica de Sirwa y la capital del azafrán de Taliouine. Este trek une el Alto Atlas y el Anti-Atlas, ofreciendo paisajes de gargantas, mesetas y campos de azafrán (mejor en temporada de cosecha octubre-noviembre). Cumbre del Jebel Sirwa (3304m) y explora antiguos graneros fortificados.",
            "pricing": [
                {
                    "totalPrice": 600
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Tamlakout",
                    "description": "Conducción por el Tizi n'Test. Llegada a Tamlakout."
                },
                {
                    "day": 2,
                    "title": "Tamlakout – Ait Tigga",
                    "description": "Comienzo del trek. Caminata a través de almendros hasta Ait Tigga."
                },
                {
                    "day": 3,
                    "title": "Ait Tigga – Idoughagh",
                    "description": "Visita al antiguo Agadir (granero). Trek hasta Idoughagh."
                },
                {
                    "day": 4,
                    "title": "Idoughagh – Aison",
                    "description": "Trek a través de campos de azafrán hasta Aison."
                },
                {
                    "day": 5,
                    "title": "Aison – Tisgui",
                    "description": "Caminata hasta el pueblo de Tisgui."
                },
                {
                    "day": 6,
                    "title": "Tisgui – Cumbre Sirwa – Tikniouine",
                    "description": "Ascenso del Jebel Sirwa. Vistas volcánicas dramáticas. Campamento en Tikniouine."
                },
                {
                    "day": 7,
                    "title": "Tikniouine – Aziouane",
                    "description": "Trek a través de pastos de Iriqui hasta las magníficas rocas de Aziouane."
                },
                {
                    "day": 8,
                    "title": "Aziouane – Amassine",
                    "description": "Caminata final hasta el pueblo de Amassine."
                },
                {
                    "day": 9,
                    "title": "Amassine – Marrakech",
                    "description": "Traslado de regreso a Marrakech."
                },
                {
                    "day": 10,
                    "title": "Marrakech",
                    "description": "Día libre."
                },
                {
                    "day": 11,
                    "title": "Salida",
                    "description": "Traslado al aeropuerto."
                }
            ]
        }
    ],
    // IMPERIAL CITIES - Tours culturales de las ciudades históricas de Marruecos
    "imperialCities": [
        {
            "id": "imperial-city-8-days",
            "name": "Ciudades Imperiales 8 Días",
            "duration": "8_days",
            "image": "/images/imperial_cities/marrakech1.jpg",
            "gallery": [
                "/images/imperial_cities/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
                "/images/imperial_cities/hamza-demnati-CJ_DC8Nd2Fk-unsplash.jpg",
                "/images/imperial_cities/mehdi-lamaaffar-PqX7EELWjh0-unsplash.jpg",
                "/images/imperial_cities/yous-gil-2Kyh6kB5Yh8-unsplash.jpg",
                "/images/imperial_cities/marrakech8.jpg",
                "/images/imperial_cities/marrakech9.jpg"
            ],
            "description": "Descubre la historia real de Marruecos en este tour de 8 días por las Ciudades Imperiales. Visita la Mezquita Hassan II de Casablanca, la capital Rabat, las ruinas romanas de Volubilis, el corazón cultural de Fez y termina en la vibrante Marrakech. Experimenta la rica arquitectura, bulliciosas medinas y diversos paisajes del Reino.",
            "pricing": [
                {
                    "totalPrice": 780
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Llegada a Casablanca",
                    "description": "Bienvenida y traslado al hotel."
                },
                {
                    "day": 2,
                    "title": "Casablanca – Rabat",
                    "description": "Visita a la Mezquita Hassan II. Traslado a Rabat para ver la Kasbah de los Oudayas y la Torre Hassan."
                },
                {
                    "day": 3,
                    "title": "Rabat – Volubilis – Meknes – Fez",
                    "description": "Explora las ruinas romanas de Volubilis. Visita Moulay Idriss y Meknes. Continuación a Fez."
                },
                {
                    "day": 4,
                    "title": "Tour Guiado por Fez",
                    "description": "Día completo dedicado a explorar la medina más antigua del mundo."
                },
                {
                    "day": 5,
                    "title": "Fez – Ifrane – Beni Mellal",
                    "description": "Conducción a través de los bosques de cedros del Medio Atlas. Parada en Ifrane, la 'Pequeña Suiza'."
                },
                {
                    "day": 6,
                    "title": "Beni Mellal – Ouzoud – Marrakech",
                    "description": "Visita a las impresionantes Cascadas de Ouzoud en camino a Marrakech."
                },
                {
                    "day": 7,
                    "title": "Tour Guiado por Marrakech",
                    "description": "Explora la Ciudad Roja: Palacios, Koutoubia y Jemaa el-Fnaa."
                },
                {
                    "day": 8,
                    "title": "Salida",
                    "description": "Traslado al aeropuerto de Marrakech."
                }
            ]
        },
        {
            "id": "imperial-city-tour-11-days",
            "name": "Tour Ciudades Imperiales 11 Días",
            "duration": "11_days",
            "image": "/images/imperial_cities/marrakech2.jpg",
            "gallery": [
                "/images/imperial_cities/eka-maitri-viryani-qL3_NSPo9o8-unsplash.jpg",
                "/images/imperial_cities/framopia-EZqHkkyc0wg-unsplash.jpg",
                "/images/imperial_cities/imad-ghazal-gRE6Be-o_Hw-unsplash.jpg",
                "/images/imperial_cities/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
                "/images/imperial_cities/hamza-demnati-CJ_DC8Nd2Fk-unsplash.jpg"
            ],
            "description": "Un gran tour de 11 días cubriendo las Ciudades Imperiales y la magia del Norte. Desde la moderna metrópoli de Casablanca hasta la perla azul de Chefchaouen, los antiguos callejones de Fez y los bulliciosos zocos de Marrakech. Incluye un toque del desierto y los paisajes cinematográficos del sur.",
            "pricing": [
                {
                    "totalPrice": 950
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Llegada a Casablanca",
                    "description": "Bienvenida y traslado al hotel."
                },
                {
                    "day": 2,
                    "title": "Casablanca – Rabat",
                    "description": "Visita a la Mezquita Hassan II. Traslado a Rabat."
                },
                {
                    "day": 3,
                    "title": "Rabat – Chefchaouen",
                    "description": "Conducción hacia el norte hasta la Ciudad Azul. Tarde libre para explorar."
                },
                {
                    "day": 4,
                    "title": "Chefchaouen – Volubilis – Fez",
                    "description": "Visita a las ruinas romanas mientras nos dirigimos hacia el sur hasta Fez."
                },
                {
                    "day": 5,
                    "title": "Tour Guiado por Fez",
                    "description": "Descubre la capital espiritual de Marruecos."
                },
                {
                    "day": 6,
                    "title": "Fez – Merzouga",
                    "description": "Larga conducción a través del Medio Atlas y el Valle del Ziz hasta las dunas del Sahara."
                },
                {
                    "day": 7,
                    "title": "Merzouga – Dades",
                    "description": "Paseo en camello al amanecer. Conducción a las Gargantas del Todra y del Dades."
                },
                {
                    "day": 8,
                    "title": "Dades – Ouarzazate – Marrakech",
                    "description": "Visita a Ait Benhaddou. Cruce del Alto Atlas hasta Marrakech."
                },
                {
                    "day": 9,
                    "title": "Tour por Marrakech",
                    "description": "Visita guiada a los monumentos de la ciudad."
                },
                {
                    "day": 10,
                    "title": "Día Libre en Marrakech",
                    "description": "Relájate o compra en los zocos."
                },
                {
                    "day": 11,
                    "title": "Salida",
                    "description": "Traslado al aeropuerto."
                }
            ]
        },
        {
            "id": "imperial-city-8-days-tour-tangier-chefchaouen-fes-merzouga-desert-marrakech",
            "name": "Tour 8 Días Ciudades Imperiales Tánger Chefchaouen Fez Desierto Merzouga Marrakech",
            "duration": "8_days",
            "image": "/images/imperial_cities/marrakech3.jpg",
            "gallery": [
                "/images/imperial_cities/kristijan-nikodinovski-nkav4Pi-UwY-unsplash.jpg",
                "/images/imperial_cities/mannie-nami-_aNm8TMzbUI-unsplash.jpg",
                "/images/imperial_cities/marrakech6.jpg",
                "/images/imperial_cities/hazy-momo-YSTtLgsvRa8-unsplash.jpg",
                "/images/imperial_cities/kristijan-nikodinovski-nkav4Pi-UwY-unsplash.jpg"
            ],
            "description": "De norte a sur: La completa experiencia marroquí de 8 días. Comienza en Tánger, puerta de entrada a África, explora las calles azules de Chefchaouen, la historia de Fez, paseo en camello en el desierto de Merzouga y termina en la vibrante Marrakech. Una aventura rápida viendo los mejores puntos destacados.",
            "pricing": [
                {
                    "totalPrice": 750
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Tánger – Chefchaouen",
                    "description": "Llegada a Tánger. Conducción a Chefchaouen."
                },
                {
                    "day": 2,
                    "title": "Chefchaouen – Fez",
                    "description": "Mañana en Chaouen. Conducción por la tarde a Fez."
                },
                {
                    "day": 3,
                    "title": "Tour por Fez",
                    "description": "Exploración guiada de la Medina de Fez."
                },
                {
                    "day": 4,
                    "title": "Fez – Merzouga",
                    "description": "Conducción a través del Atlas hasta el Sahara. Noche en campamento del desierto."
                },
                {
                    "day": 5,
                    "title": "Merzouga – Ouarzazate",
                    "description": "Viaje vía Gargantas del Todra y Valle del Dades."
                },
                {
                    "day": 6,
                    "title": "Ouarzazate – Marrakech",
                    "description": "Visita a Ait Benhaddou y Paso Tichka."
                },
                {
                    "day": 7,
                    "title": "Tour por Marrakech",
                    "description": "Exploración de la ciudad."
                },
                {
                    "day": 8,
                    "title": "Salida",
                    "description": "Traslado al aeropuerto de Marrakech."
                }
            ]
        },
        {
            "id": "5-day-morocco-tour-from-tangier-to-explore-the-cities-2",
            "name": "Tour 5 Días por Marruecos desde Tánger para Explorar las Ciudades 2",
            "duration": "5_days",
            "image": "/images/imperial_cities/mehdi-sakout-54nOsVV1xI4-unsplash.jpg",
            "gallery": [
                "/images/imperial_cities/mehdi-sakout-54nOsVV1xI4-unsplash.jpg",
                "/images/imperial_cities/mauro-lima-buvA1ofvTMY-unsplash.jpg",
                "/images/imperial_cities/niklas-VqouWpsuziE-unsplash.jpg",
                "/images/imperial_cities/marrakech10.jpg",
                "/images/imperial_cities/marrakech4.jpg"
            ],
            "description": "Un tour enfocado de 5 días por el norte de Marruecos. Explora las vibras mediterráneas de Tánger, las calles azules fotogénicas de Chefchaouen, la antigua historia romana en Volubilis y la profundidad espiritual de Fez. Perfecto para quienes llegan en ferry desde España.",
            "pricing": [
                {
                    "totalPrice": 500
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Llegada a Tánger",
                    "description": "Explora la Kasbah y las Cuevas de Hércules."
                },
                {
                    "day": 2,
                    "title": "Tánger – Chefchaouen",
                    "description": "Conducción escénica hasta la Ciudad Azul."
                },
                {
                    "day": 3,
                    "title": "Chefchaouen – Volubilis – Meknes",
                    "description": "Visita a las ruinas romanas y ciudad imperial de Meknes."
                },
                {
                    "day": 4,
                    "title": "Meknes – Fez",
                    "description": "Corta conducción a Fez. Tour de medio día."
                },
                {
                    "day": 5,
                    "title": "Fez – Tánger/Salida",
                    "description": "Regreso al norte o traslado al aeropuerto."
                }
            ]
        },
        {
            "id": "11-days-best-of-morocco",
            "name": "11 Días Lo Mejor de Marruecos",
            "duration": "11_days",
            "image": "/images/imperial_cities/zakaria-zayane-aBywMnV7ibk-unsplash.jpg",
            "gallery": [
                "/images/imperial_cities/soulaymane-elyoussfi-oDSEPEtrQFo-unsplash.jpg",
                "/images/imperial_cities/toni-DBNhQdCG-XA-unsplash.jpg",
                "/images/imperial_cities/oussama-rahib-NNECQHl9bJc-unsplash.jpg",
                "/images/imperial_cities/zakaria-zayane-aBywMnV7ibk-unsplash.jpg",
                "/images/imperial_cities/marrakech5.jpg",
                "/images/imperial_cities/marrakech7.jpg"
            ],
            "description": "El definitivo circuito de 11 días por Marruecos. Comenzando y terminando en Marrakech (o Casablanca), este tour circunda los puntos destacados del país: Ciudades Imperiales, Desierto del Sahara, Montañas del Atlas y costa. Es lo 'Mejor de Marruecos' en un paquete completo.",
            "pricing": [
                {
                    "totalPrice": 1100
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Llegada a Marrakech",
                    "description": "Bienvenida."
                },
                {
                    "day": 2,
                    "title": "Marrakech – Casablanca – Rabat",
                    "description": "Capitales costeras."
                },
                {
                    "day": 3,
                    "title": "Rabat – Fez",
                    "description": "Vía Meknes y Volubilis."
                },
                {
                    "day": 4,
                    "title": "Tour por Fez",
                    "description": "Inmersión total en la vida de la medina."
                },
                {
                    "day": 5,
                    "title": "Fez – Merzouga",
                    "description": "Conducción al Desierto."
                },
                {
                    "day": 6,
                    "title": "Exploración de Merzouga",
                    "description": "Dunas y nómadas."
                },
                {
                    "day": 7,
                    "title": "Merzouga – Dades",
                    "description": "Gargantas y Valles."
                },
                {
                    "day": 8,
                    "title": "Dades – Marrakech",
                    "description": "Kasbahs y Montañas."
                },
                {
                    "day": 9,
                    "title": "Tour por Marrakech",
                    "description": "Lugares de interés de la ciudad."
                },
                {
                    "day": 10,
                    "title": "Excursión de un Día a Essaouira",
                    "description": "Relájate en la costa."
                },
                {
                    "day": 11,
                    "title": "Salida",
                    "description": "Traslado."
                }
            ]
        }
    ],
    // EXCURSIONS - Excursiones de un día desde Marrakech
    "excursions": [
        {
            "id": "marrakech-ouzoud-marrakech",
            "name": "Marrakech Ouzoud Marrakech",
            "duration": "1_day",
            "image": "/images/excursions/rigel-ibisQEDxODo-unsplash.jpg",
            "gallery": [
                "/images/excursions/rigel-No_Y3bn4lNQ-unsplash.jpg",
                "/images/excursions/rigel-QWJjSOB9t0Y-unsplash.jpg",
                "/images/excursions/rigel-hppgLk1gxho-unsplash.jpg",
                "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
                "/images/ouzoud/selina-bubendorfer-jP51Ai2tQGE-unsplash.jpg"
            ],
            "description": "Escapa del calor de la ciudad a las majestuosas Cascadas de Ouzoud. Un viaje de 2,5 horas te lleva a las cascadas más altas de África del Norte (110m). Camina hacia abajo a través de olivares, haz un paseo en barco bajo las cascadas y observa a los residentes monos de Berbería. Un día refrescante en la naturaleza.",
            "pricing": [
                {
                    "totalPrice": 55
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Ouzoud – Marrakech",
                    "description": "Recogida a las 08:00. Conducción a Ouzoud. Caminata guiada. Almuerzo con vista a las cascadas. Regreso a Marrakech aproximadamente a las 18:00."
                }
            ]
        },
        {
            "id": "explore-de-berbers",
            "name": "Explora los Bereberes",
            "duration": "1_day",
            "image": "/images/excursions/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            "gallery": [
                "/images/excursions/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
                "/images/excursions/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
                "/images/toubkal_treks/mads-schmidt-rasmussen-SY7nFt-jeiE-unsplash.jpg"
            ],
            "description": "Explora la vida auténtica del pueblo bereber en las montañas del Alto Atlas. Visita el valle de Imlil, camina hasta pueblos tradicionales como Aremd, disfruta de un almuerzo casero con una familia local y contempla los impresionantes paisajes que enmarcan su vida diaria. Una inmersión cultural a poca distancia en coche de Marrakech.",
            "pricing": [
                {
                    "totalPrice": 60
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Valle de Imlil",
                    "description": "Conducción a Imlil. Caminata suave a través de nogales hasta pueblos bereberes. Almuerzo en una casa local. Regreso a Marrakech."
                }
            ]
        },
        {
            "id": "excursion-to-the-essaouira",
            "name": "Excursión a Essaouira",
            "duration": "1_day",
            "image": "/images/excursions/pete-bread-4eZeMUKdV-8-unsplash.jpg",
            "gallery": [
                "/images/excursions/peter-schulz--leOF2nzJQ8-unsplash.jpg",
                "/images/excursions/rigel-hppgLk1gxho-unsplash.jpg",
                "/images/excursions/pete-bread-4eZeMUKdV-8-unsplash.jpg",
                "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
                "/images/essaouira/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg"
            ],
            "description": "Visita la encantadora ciudad costera de Essaouira, la 'Ciudad del Viento de África'. Explora la histórica Medina (Patrimonio de la Humanidad de la UNESCO), camina por las murallas portuguesas, observa a los pescadores en el puerto y disfruta de mariscos frescos. Un día relajado con ambiente bohemio, famosa por su música Gnawa y galerías de arte.",
            "pricing": [
                {
                    "totalPrice": 60
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Essaouira – Marrakech",
                    "description": "Conducción matutina a la costa (aproximadamente 3 horas). Parada en cooperativa de aceite de argán. Tiempo libre para explorar la Medina de Essaouira y la playa. Regreso por la tarde."
                }
            ]
        },
        {
            "id": "kasbah-ait-ben-haddou-full-day-excursion",
            "name": "Excursión de Día Completo a la Kasbah Ait Ben Haddou",
            "duration": "1_day",
            "image": "/images/excursions/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
            "gallery": [
                "/images/excursions/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg",
                "/images/excursions/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/excursions/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
                "/images/ouarzazate/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
                "/images/ouarzazate/laurent-gence-UMEcD4j--_I-unsplash.jpg"
            ],
            "description": "Viaja en el tiempo hasta el Ksar de Ait Benhaddou, un sitio del Patrimonio Mundial de la UNESCO y famosa locación de filmación (Gladiator, Juego de Tronos). Cruza el Alto Atlas por el paso Tizi n'Tichka (2260m) para llegar a este impresionante ejemplo de arquitectura de tierra del sur de Marruecos. Una excursión de día completo imprescindible para amantes de la historia y el cine.",
            "pricing": [
                {
                    "totalPrice": 80
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Marrakech – Ait Benhaddou – Marrakech",
                    "description": "Conducción escénica por el Alto Atlas. Tour guiado por la Kasbah de Ait Benhaddou. Visita a Ouarzazate. Regreso a Marrakech."
                }
            ]
        },
        {
            "id": "agafay-desert-sunset-tour",
            "name": "Tour Atardecer en el Desierto de Agafay:",
            "duration": "1_day",
            "image": "/images/excursions/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg",
            "gallery": [
                "/images/excursions/laurent-gence-UMEcD4j--_I-unsplash.jpg",
                "/images/excursions/cristiano-pinto-knB5iCogf5Q-unsplash.jpg",
                "/images/excursions/mostapha-abidour-h9L1GfDgp0s-unsplash.jpg",
                "/images/Camel Riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                "/images/Camel Riding/oussama-rahib-f7F8URbIx08-unsplash.jpg"
            ],
            "description": "Experimenta la magia del desierto sin viajar lejos. El Desierto de Piedra de Agafay ofrece un paisaje dramático similar a la luna a solo 45 minutos de Marrakech. Disfruta de un paseo en camello, contempla un impresionante atardecer sobre las montañas del Atlas y saborea una cena marroquí tradicional bajo las estrellas.",
            "pricing": [
                {
                    "totalPrice": 75
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Experiencia en el Desierto de Agafay",
                    "description": "Recogida por la tarde. Conducción a Agafay. Paseo en camello al atardecer. Cena en tienda nómada. Regreso a Marrakech por la noche."
                }
            ]
        },
        {
            "id": "atlas-mountains-trekking-with-berbers",
            "name": "Trekking en Montañas del Atlas con Bereberes",
            "duration": "1_day",
            "image": "/images/excursions/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            "gallery": [
                "/images/excursions/hassan-ouajbir-INcADDyMwwo-unsplash.jpg",
                "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                "/images/toubkal_treks/david-magalhaes-LSDknKF5nQA-unsplash.jpg",
                "/images/toubkal_treks/simomed-toubkal-7278422_1920.jpg"
            ],
            "description": "Un día de trekking personalizado en las montañas del Atlas adaptado a tu nivel de forma física. Camina a través de pintorescos pueblos bereberes como Tinerhourhine y Aguersioual, cruza arroyos y camina a través de nogales. Acompañado por un guía de montaña profesional para una aventura ecológica segura e informativa.",
            "pricing": [
                {
                    "totalPrice": 40
                }
            ],
            "itinerary": [
                {
                    "day": 1,
                    "title": "Día de Trekking en el Atlas",
                    "description": "Caminata guiada de día completo (5-6 horas) en la región de Imlil. Almuerzo de picnic incluido. Ruta adaptada a la capacidad del grupo."
                }
            ]
        }
    ],
    // ACTIVITIES - Experiencias adicionales
    "activities": {
        "timeSlots": [
            {
                "id": "morning",
                "from": "09:00",
                "to": "12:30"
            },
            {
                "id": "afternoon",
                "from": "14:00",
                "to": "18:00"
            }
        ],
        "experiences": [
            {
                "id": "chegaga-dunes-draa-valley-8-days-7-nights",
                "name": "Dunas de Chegaga Valle del Draa 8 Días 7 Noches",
                "duration": "8_days",
                "image": "/images/desert_tours/merzouga2.jpg",
                "gallery": [
                    "/images/desert_tours/merzouga3.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/desert_tours/merzouga4.jpg",
                    "/images/desert_tours/merzouga5.jpg",
                    "/images/desert_tours/merzouga6.jpg"
                ],
                "description": `Esta inolvidable expedición de 8 días desvelará las maravillas impresionantes del Sahara del Sur de Marruecos. Sumérgete en la tranquilidad de los exuberantes oasis del Valle del Draa, atraviesa las majestuosas crestas de arena de Chegaga y emprende un cautivador paseo en camello a través del vasto paisaje desértico.

Nuestro viaje encenderá tu respeto por la grandeza de la naturaleza. Contempla el cautivador contraste entre los vibrantes palmerales y las interminables extensiones de dunas doradas. Este itinerario meticulosamente elaborado es la introducción perfecta al Sahara, permitiéndote descubrir sus joyas ocultas y experimentar su magia de primera mano.

QUÉ TRAER CONTIGO: Buenas Botas de Senderismo y Calcetines Zapatos Cómodos/Zapatillas para Campamento/Casa de Huéspedes Pantalones de Trekking Pantalones Impermeables Ligeros / Pantalones de Lluvia`,
                "pricing": [
                    {
                        "totalPrice": 300
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Llegada a Marrakech o Ouarzazate",
                        "description": "Tu viaje comienza en Marrakech o Ouarzazate, la puerta al desierto. Conoce a nuestro acogedor personal e instálate en tu cómodo alojamiento en hotel para pasar la noche."
                    },
                    {
                        "day": 2,
                        "title": "Descubriendo el Alto Atlas y el Valle del Draa",
                        "description": "Después de un satisfactorio desayuno, emprendemos un viaje escénico hacia el sur hacia Ouarzazate. Conquistaremos el majestuoso paso Tizi n'Tichka, alcanzando una elevación de 2260 metros. En el camino, haremos una parada para admirar la famosa Kasbah de Telouet, un testimonio de la rica historia de la región. Nuestra aventura continúa a través de las fértiles Agdz y Zagora, antes de llegar a Faija, donde nos espera nuestro cómodo campamento para una noche de descanso bajo las estrellas. (Distancia: 400 km con paradas)"
                    },
                    {
                        "day": 3,
                        "title": "Paisajes Desérticos y Cruce del Oued",
                        "description": "El día comienza con un delicioso desayuno, seguido de una caminata a través del vasto altiplano desértico que rodea Faija. Pasaremos por encantadoras granjas enclavadas al pie del Djebel Bani antes de abordar el renombrado paso de Oum Laachar. Este emocionante ascenso nos lleva al Oued Lemhasser, una refrescante vía fluvial que atraviesa el paisaje árido. Disfruta de una caminata moderada de 5-6 horas cubriendo aproximadamente 17 kilómetros antes de instalarnos en el campamento para pasar la noche."
                    },
                    {
                        "day": 4,
                        "title": "Alcanzando las Majestuosas Dunas de Chegaga",
                        "description": "Dejando atrás el Oued Lemhasser, emprendemos una cautivadora caminata hacia las impresionantes Dunas de Chegaga. Estos gigantes dorados imponentes te dejarán sin aliento. A medida que el día llega a su fin, montaremos campamento justo en medio de las dunas, ofreciendo una experiencia desértica verdaderamente inolvidable. (5-6 horas caminando / 20 kilómetros)"
                    },
                    {
                        "day": 5,
                        "title": "Descubriendo las Dunas de Bougarn",
                        "description": "Hoy, nos adentramos más en el corazón del desierto, dejando las majestuosas Dunas de Chegaga para las igualmente impresionantes Dunas de Bougarn. Explora estos cautivadores paisajes y sumérgete en la serenidad del vasto Sahara. La noche se pasará cómodamente en nuestro campamento en medio de las dunas. (5 horas caminando / 16 kilómetros)"
                    },
                    {
                        "day": 6,
                        "title": "Cruzando el Oued Naam",
                        "description": "Después del desayuno, nos despedimos de las Dunas de Bougarn y emprendemos un viaje a través del Oued Naam, una vía fluvial estacional que añade otra capa de diversidad al paisaje desértico. Nuestro campamento para pasar la noche se montará cerca del Oued Naam, ofreciendo un entorno tranquilo para reflexionar sobre las aventuras del día. (5-6 horas caminando / 16 kilómetros)"
                    },
                    {
                        "day": 7,
                        "title": "Despedida del Desierto y Regreso a Marrakech",
                        "description": "En nuestro último día, saborearemos las últimas vistas del cautivador paisaje desértico. Nuestro viaje nos lleva a través de las Dunas de Mhamid antes de llegar de regreso a Zagora. Desde allí, nos trasladaremos cómodamente de regreso a Marrakech, donde puedes rememorar las experiencias inolvidables de la semana pasada. (3 horas caminando / 8 horas de conducción de regreso a Marrakech con paradas)"
                    },
                    {
                        "day": 8,
                        "title": "Salida",
                        "description": "Organizaremos un traslado fluido al aeropuerto, marcando el final de tu increíble aventura con moroccoatlasguide. ¡Esperamos que guardes memorias preciadas del impresionante Sahara!"
                    }
                ]
            },
            {
                "id": "9-days-trek-saghro-south-morocco",
                "name": "9 Días Trek Saghro Sur de Marruecos",
                "duration": "9_days",
                "image": "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/desert_tours/ismail-el-youssefi-geeSPCxnKzU-unsplash.jpg",
                    "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg"
                ],
                "description": `Djebel Saghro: Una Joya Oculta para Excursionistas en Marruecos

El cordón montañoso de Djebel Saghro es una joya oculta ubicada en el sur de Marruecos. Aunque puede no ser tan conocido como las montañas del Alto Atlas o del Medio Atlas, ofrece una experiencia única y gratificante para excursionistas.

Geografía y Paisaje:
El Djebel Saghro es un vasto y escarpado cordón montañoso que se extiende por más de 200 kilómetros. El paisaje se caracteriza por sus suaves laderas, amplios valles y numerosos oasis. Las montañas albergan una variedad de vida vegetal y animal, incluyendo muchas especies endémicas.

Senderismo en el Djebel Saghro:
El Djebel Saghro es un paraíso para excursionistas. Hay una variedad de senderos para elegir, que van desde caminatas fáciles de un día hasta treks desafiantes de varios días. La mejor época para hacer senderismo en el Djebel Saghro es durante la primavera o el otoño, cuando el clima es suave.

Información Adicional:
El Djebel Saghro es un área natural que data del período Precámbrico. Su edad está entre 230 millones y 570 millones de años. Esta edad geológica ha resultado en una rica y atractiva diversidad litológica. Los amantes de las colecciones de piedras y fósiles encontrarán una selección difícil de encontrar en otros lugares.

Qué está incluido en el precio:
Transporte de ida y vuelta entre Marrakech y el inicio de la caminata y regreso a Marrakech al final del trek;
2 noches en casa de huéspedes con locales durante la caminata;
Alquiler de tienda y colchón durante la caminata;
Todas las comidas durante la caminata;
Servicios de arriero y mula;
Servicios de cocinero;
Servicios de un guía de montaña calificado.

Qué no está incluido en el precio:
Vuelo de ida y vuelta;
Hotel y comidas en Marrakech;
Bebidas y artículos personales;
Seguro de repatriación;
Propinas tradicionales para el equipo: Guía, arrieros, conductor

Información Adicional:
La distancia total de la caminata es de aproximadamente 60 kilómetros.
La caminata está clasificada como moderada a difícil.
La mejor época para hacer senderismo en el Djebel Saghro es durante la primavera o el otoño, cuando el clima es suave.`,
                "pricing": [
                    {
                        "totalPrice": 460
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Tizi N'Tichka – Ouarzazate – Valle del Dadès – Ait Youl",
                        "description": "Traslado desde Marrakech a Ouarzazate vía el paso Tizi N'Tichka (2260 metros de altitud). Almuerzo en Ouarzazate antes de llegar a Ait Youl. Luego, tendrás tiempo para descubrir el pequeño pueblo y los aldeanos que trabajan en sus campos. 6 horas de conducción. Pernoctación en tiendas."
                    },
                    {
                        "day": 2,
                        "title": "Ait Youl (1500 m) – Meseta Tafoughalt (1600 m)",
                        "description": "Después del desayuno, comenzamos nuestra caminata hacia las montañas Saghro. Cruzamos los pequeños pueblos que extienden la capital de la ciudad de las Rosas de Kalâat Mgouna a los pies del macizo volcánico de Saghro. Pernoctación en tiendas en la meseta de Tafoughalt cerca de un pozo en un lugar frecuentado por los nómadas de la tribu Ait Atta. 5 horas 30 minutos de caminata."
                    },
                    {
                        "day": 3,
                        "title": "Tafoughalt – Paso Tagmout – Assaka",
                        "description": "Una caminata de una hora hasta el paso Tizi n-Tagmout (1900m), luego un corto descenso que nos lleva al pueblo de Tagmout; rodeado de rocas con facilidad un cañón frente al noreste hacia el pueblo de Assaka (1584m). Pernoctación en tiendas después del pueblo de Assaka."
                    },
                    {
                        "day": 4,
                        "title": "Assaka – Ighazoun",
                        "description": "Descendemos este hermoso valle a través de una cadena de pequeños pueblos: Tajalajt, Berkou, Tifdassine. Donde los aldeanos viven decentemente gracias a sus rebaños de cabras y ovejas. El almuerzo será bajo los almendros. Luego por la tarde, cruzamos un pequeño paso antes de descender al valle de Ighazzoun. Pernoctación en tiendas. 5 horas 30 minutos de caminata."
                    },
                    {
                        "day": 5,
                        "title": "Ighazzoun – Tadaout N'Tablah – Bab N'Ali",
                        "description": "Cruzamos el pueblo de Ighazzoun antes de subir hacia la meseta de Tadaoute N'Tablah; en medio de un circo rocoso de paisaje surrealista. Luego, llegaremos a la famosa puerta de Bab N'Ali (1416 m). Un paisaje de picos esculpidos en rocas de arenisca metamórfica precámbrica ofrece al visitante formas espléndidas y gigantescas. Los dos pilones principales forman una especie de puerta gigante (Bab). Los visitantes amantes de los paisajes pueden admirarlo desde varios ángulos dependiendo de su posición y la del sol."
                    },
                    {
                        "day": 6,
                        "title": "Bab N'Ali – Gargantas Afourare – Igli",
                        "description": "Seguimos nuestro camino a través de las gargantas de Assif n-Afourare antes de llegar al pequeño oasis de Boualouz; unos pocos campos de cereales combinados con plantaciones de almendros, testimonian el esfuerzo realizado para vivir. Subimos a través del pueblo de Afourare hacia el pequeño oasis de Igli (2000 m) en el corazón del macizo Saghro, en el camino nos encontramos con los trashumantes de Ait Atta. Pernoctación en tiendas."
                    },
                    {
                        "day": 7,
                        "title": "Igli – Cumbre Kouaouch – Almou N-Ouarg",
                        "description": "Después del desayuno, subimos los acantilados de Tassigdelt; donde apreciamos la belleza del paisaje (los colores de las rocas, el silencio de las montañas). Luego nos dirigimos por un buen camino muy usado por los rebaños de ovejas y cabras a la derecha hacia la cumbre de Kouaouch (2570m). Desde donde disfrutamos de una hermosa vista de la cordillera del M'goun, del valle de las rosas. El descenso a nuestro campamento en Almou N'Ouarg. 5H30 de caminata. Pernoctación en tiendas."
                    },
                    {
                        "day": 8,
                        "title": "Almou N-Ouarg – Tagdilt",
                        "description": "Una subida constante nos llevará al paso Ifed (2400 m). Vista panorámica del valle del Dadès y la ladera sur del macizo del M'goun en el Alto Atlas. Un hermoso descenso por un sendero de mulas hasta un pequeño valle de adelfas para almorzar. Por la tarde, continuamos hasta el pueblo de Tagdilt (1650m). Pernoctación con los locales."
                    },
                    {
                        "day": 9,
                        "title": "Tagdilt – Valle del Dadès – Ouarzazate – Marrakech",
                        "description": "Salida a las 8am. Regreso en coche a Marrakech vía el valle del Dadès. Algunas paradas para fotos. Almuerzo después del paso Tichka. Llegada a Marrakech. 6 horas de conducción."
                    }
                ],
                "type": "other",
                "location": "Djebel Saghro",
                "price": 460
            },
            {
                "id": "6-days-trekking-program-in-saghro-morocco",
                "name": "Programa de Trekking de 6 Días en Saghro Marruecos",
                "duration": "6_days",
                "image": "/images/desert_tours/merzouga3.jpg",
                "gallery": [
                    "/images/desert_tours/merzouga4.jpg",
                    "/images/desert_tours/merzouga2.jpg",
                    "/images/desert_tours/merzouga3.jpg",
                    "/images/desert_tours/merzouga1.jpg"
                ],
                "description": `6 DÍAS DE PROGRAMA DE TREKKING EN SAGHRO MARRUECOS

El Djebel Saghro es un impresionante cordón montañoso volcánico en el sur de Marruecos, que ofrece una experiencia de trekking única. Este programa de 6 días te lleva a través de paisajes dramáticos, desde mesetas hasta gargantas, y te permite experimentar la hospitalidad de los nómadas semi-nómadas de la tribu Ait Atta.

Precios por persona:
2 personas: 540 € / persona
3 personas: 490 € / persona
4 personas y más: 410 € / persona

El precio incluye:
Transporte de ida y vuelta entre Marrakech y el inicio de la caminata y regreso.
1 noche en casa de huéspedes con locales.
Alquiler de tienda y colchón durante la caminata.
Todas las comidas durante la caminata.
Servicios de arriero y mula.
Servicios de cocinero.
Servicios de un guía de montaña calificado.

El precio no incluye:
Vuelo de ida y vuelta.
Hotel y comidas en Marrakech.
Bebidas y artículos personales.
Seguro de repatriación.
Propinas tradicionales para el equipo.

Información Adicional:
Distancia total: aprox 60 km.
Clasificación: Moderado a difícil.
Mejor época: Primavera u Otoño.
Qué empacar: Zapatos de senderismo, sombrero para el sol, protector solar, cantimplora, botiquín de primeros auxilios, saco de dormir, mochila.`,
                "pricing": [
                    {
                        "totalPrice": 410
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Marrakech – Paso Tichka – Ouarzazate – Tagdilt",
                        "description": "Salida temprana a Ouarzazate vía el paso Tizi N'Tichka. Después de descubrir el Valle del Dadès y sus mil kasbahs, conducimos hacia el sur a través de un altiplano desértico hasta el pueblo de Tagdilt. Pernoctación con locales a 1650m. 6 horas de conducción."
                    },
                    {
                        "day": 2,
                        "title": "Tagdilt – Paso N'Iferd – Meseta Irefd – N'Ouarg",
                        "description": "Al inicio de la caminata, observamos cómo se cargan las mulas. Cruzamos una gran meseta antes de subir hacia el paso Tizi N'iferd (2400m): hermosa vista desde lejos del macizo del Alto Atlas central. Luego descendemos a la meseta de Iferd. Montando nuestro campamento en una meseta frecuentada por los pastores semi-nómadas de Ait Atta. Pernoctación en tiendas a 2250m. 5 horas 30 minutos de caminata."
                    },
                    {
                        "day": 3,
                        "title": "Almou N'Ouarg – Cumbre Kouaouch – Igli",
                        "description": "Comenzamos con una hermosa subida a la cumbre de Kouaouch (2600m). Una subida que no requiere ningún medio técnico. Nuestro cocinero nos trae el picnic. Descenso por Tassegdilt. Pernoctación en tiendas en Igli a 1700m. 5 horas 30 minutos de caminata."
                    },
                    {
                        "day": 4,
                        "title": "Igli – Gargantas Afourar – Bab n'Ali – Oasis Ighazzoun",
                        "description": "Descendemos a través del valle de Afourar que gradualmente se convierte en gargantas, pasamos por el pequeño oasis de Bouallouz. Luego llegamos a Ousdidene. El paisaje se abre a una gran meseta dominada por los picos de Bab n'Ali. Después de la subida a la famosa puerta Bab n'Ali, luego la continuación al oasis de Ighazoune. Pernoctación en tiendas. 5 horas de caminata."
                    },
                    {
                        "day": 5,
                        "title": "Oasis Ighazoun – Tifdassine – Handour",
                        "description": "Salida a las 8:30 am hacia el pequeño paso de Tifdassine. Un largo descenso del hermoso valle del mismo nombre. Almuerzo bajo los almendros. Continuación hasta el pueblo de Handoure. Pernoctación en tiendas."
                    },
                    {
                        "day": 6,
                        "title": "Handoure – Ighazzoun – Agdez – Ouarzazate – Marrakech",
                        "description": "Después de agradecer a nuestro equipo de mulas, un corto camino nos lleva a la ciudad de Nkob. Luego Agdez antes de cruzar el paso Tichka. Almuerzo después del paso. Llegada a Marrakech por la tarde. 7 horas de traslado."
                    }
                ],
                "type": "other",
                "location": "Djebel Saghro"
            },
            {
                "id": "jebel-sirwa-and-safran-valley-11-days",
                "name": "Jebel Sirwa y Valle del Azafrán – 11 Días",
                "duration": "11_days",
                "image": "/images/desert_tours/gabriele-stravinskaite--mKpYC4RacA-unsplash.jpg",
                "gallery": [
                    "/images/desert_tours/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/desert_tours/peter-thomas-nF8-ekoE0qw-unsplash.jpg",
                    "/images/desert_tours/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                    "/images/desert_tours/tamar-dCMvzMV1jfc-unsplash.jpg"
                ],
                "description": `JEBEL SIRWA Y VALLE DEL AZAFRÁN – 11 DÍAS

Este viaje es perfecto para los amantes de la naturaleza y los paisajes impresionantes. Cruza dos pasos importantes del Atlas, el Tizi-n-Tichka (2260 m) y el Tizi-n-Test (2092 m). El trek de cinco días te llevará a la cima del Jebel Sirwa (3305 m), un antiguo volcán. También visitaremos Taliouine, el corazón de la producción de azafrán en Marruecos.

Qué incluye el precio:
Transporte de ida y vuelta entre Marrakech y el inicio de la caminata.
Gîte de buena calidad para el primer y último día.
Pensión completa durante todo el viaje.
Servicios de guía de montaña calificado.
Servicios de cocinero.
Servicios de arrieros y mulas.
Alquiler de tiendas y colchones.

Qué no incluye:
Billetes de avión.
Seguro de viaje.
Bebidas y artículos personales.
Propinas para el equipo local.`,
                "pricing": [
                    {
                        "totalPrice": 600
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Llegada a Marrakech",
                        "description": "Recogida en el aeropuerto y traslado a un Riad en la medina. Tarde libre para explorar la plaza Jemaa el-Fna."
                    },
                    {
                        "day": 2,
                        "title": "Marrakech – Taliouine",
                        "description": "Traslado desde su riad a las 8 am hacia Taliouine vía el paso Tizi-n-Test (2092 m). Almuerzo en el camino. Llegada a Taliouine, famosa por su azafrán. Noche en una gîte."
                    },
                    {
                        "day": 3,
                        "title": "Taliouine – Akhfamane",
                        "description": "Primera etapa del trek. Caminata suave a lo largo del río Zagmouzen hasta el pueblo de Akhfamane (1250 m). Noche en tiendas."
                    },
                    {
                        "day": 4,
                        "title": "Akhfamane – Ti n’Iddr",
                        "description": "Seguimos ascendiendo por el valle a través del pueblo de Mazwad (1441 m). El valle se estrecha formando una garganta hasta Ti n'Iddr (1684 m). Noche en tiendas."
                    },
                    {
                        "day": 5,
                        "title": "Ti n’Iddr – Tegragra",
                        "description": "Subida por el valle de Assif n’Wamrane. Atravesamos el pueblo de Atougha encaramado en la ladera. Llegada a los pastos de verano de Tegragra (2650 m). Noche en tiendas."
                    },
                    {
                        "day": 6,
                        "title": "Tegragra – Cumbre Jebel Sirwa – Campamento de la Cascada",
                        "description": "Día cumbre. Ascenso opcional al Jebel Sirwa (3305 m) con vistas espectaculares. Descenso al campamento cerca del río (2400 m). Noche en tiendas."
                    },
                    {
                        "day": 7,
                        "title": "Campamento de la Cascada – Tislit",
                        "description": "Descenso al pueblo de Tizgui (2200 m). Visita a su asombroso granero fortificado (Agadir). Continuación hacia la garganta de Tislit. Noche en tiendas."
                    },
                    {
                        "day": 8,
                        "title": "Tislit – Ouarzazate",
                        "description": "Traslado de 3-4 horas hacia Ouarzazate. Visitaremos la Kasbah de Ait Ben Haddou por el camino. Noche en hotel."
                    },
                    {
                        "day": 9,
                        "title": "Ouarzazate – Marrakech",
                        "description": "Regreso a Marrakech cruzando el paso Tizi-n-Tichka (2260 m). Tiempo libre en la medina."
                    },
                    {
                        "day": 10,
                        "title": "Marrakech",
                        "description": "Día libre para visitas guiadas o compras en los zocos."
                    },
                    {
                        "day": 11,
                        "title": "Salida",
                        "description": "Traslado al aeropuerto según su horario de vuelo."
                    }
                ],
                "type": "other",
                "location": "Jebel Sirwa"
            },
            {
                "id": "imperial-cities-8-days",
                "name": "Ciudades Imperiales 8 Días",
                "duration": "8_days",
                "image": "/images/imperial_cities/marrakech1.jpg",
                "gallery": [
                    "/images/imperial_cities/marrakech8.jpg",
                    "/images/imperial_cities/marrakech9.jpg",
                    "/images/imperial_cities/marrakech5.jpg",
                    "/images/imperial_cities/marrakech7.jpg"
                ],
                "description": "Descubra las joyas arquitectónicas de Marruecos en este tour de las ciudades imperiales: Fez, Meknes, Rabat y Marrakech. Un viaje inolvidable por la historia y la cultura del Reino.",
                "pricing": [
                    {
                        "totalPrice": 750
                    }
                ],
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Llegada a Casablanca",
                        "description": "Traslado del aeropuerto al hotel."
                    },
                    {
                        "day": 2,
                        "title": "Casablanca – Rabat – Fez",
                        "description": "Visita a la Mezquita Hassan II y los monumentos de Rabat antes de seguir hacia Fez."
                    },
                    {
                        "day": 3,
                        "title": "Fez",
                        "description": "Tour guiado por la medina más grande del mundo."
                    },
                    {
                        "day": 4,
                        "title": "Fez – Meknes – Volubilis",
                        "description": "Visita a la ciudad imperial de Meknes y las ruinas romanas de Volubilis."
                    },
                    {
                        "day": 5,
                        "title": "Fez – Midelt – Merzouga",
                        "description": "Viaje hacia el desierto cruzando las montañas del Atlas."
                    },
                    {
                        "day": 6,
                        "title": "Merzouga – Gargantas del Todra – Ouarzazate",
                        "description": "Amanecer en las dunas y viaje hacia el valle de las mil kasbahs."
                    },
                    {
                        "day": 7,
                        "title": "Ouarzazate – Ait Ben Haddou – Marrakech",
                        "description": "Visita a la famosa Kasbah (UNESCO) y llegada a la ciudad roja."
                    },
                    {
                        "day": 8,
                        "title": "Marrakech – Salida",
                        "description": "Traslado al aeropuerto."
                    }
                ],
                "type": "other",
                "location": "Imperial Cities"
            }
        ],
        "addons": [
            {
                "id": "dinner",
                "name": "Cena",
                "pricePerPerson": 25,
                "availableFrom": "15:00",
                "availableTo": "21:00"
            }
        ]
    },
    "transport": [
        {
            "id": "private",
            "name": "Transporte Privado",
            "image": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070",
            "description": "Vehículo privado cómodo con conductor profesional",
            "price": 50
        }
    ],
    "reviews": {
        "items": [
            {
                "id": "review-1",
                "author": "Sarah Johnson",
                "country": "Reino Unido",
                "rating": 5,
                "date": "Noviembre 2024",
                "tourId": "toubkal-treks-2-days-express",
                "comment": "¡Una experiencia increíble! Nuestro guía era muy conocedor e hizo que el ascenso al Toubkal fuera inolvidable. La hospitalidad bereber fue asombrosa y las vistas a la montaña eran impresionantes. ¡Recomiendo encarecidamente Morocco Atlas Guide!",
                "avatar": "/images/reviews/avatar-1.jpg"
            },
            {
                "id": "review-2",
                "author": "Marco Rossi",
                "country": "Italia",
                "rating": 5,
                "date": "Octubre 2024",
                "tourId": "tour-to-merzouga-from-marrakech-3-days-and-2-nights",
                "comment": "El tour al desierto superó todas las expectativas. Dormir bajo las estrellas en el Sahara fue mágico. Nuestro guía compartió historias fascinantes sobre la cultura bereber. Todo el equipo fue profesional y amable.",
                "avatar": "/images/reviews/avatar-2.jpg"
            }
        ],
        "averageRating": 5,
        "totalReviews": 6
    },
    "packages": []
};
const siteDataFr = {
    ...siteData,
    location: "Marrakech"
};
}),
"[project]/src/components/TourCategories.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourCategories",
    ()=>TourCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const TourCategories = ({ locale, dict })=>{
    const data = locale === 'fr' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteDataFr"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteData"];
    const categories = [
        {
            id: 'toubkal-treks',
            name: 'High Atlas Peaks',
            label: 'Toubkal Treks',
            description: 'Conquer North Africa\'s highest peak and explore authentic Berber villages.',
            tours: data.toubkalTreks,
            image: data.toubkalTreks[0]?.image || '/images/toubkal_treks/placeholder.png'
        },
        {
            id: 'desert-tours',
            name: 'Sahara Sands',
            label: 'Desert Tours',
            description: 'Experience the profound silence of the dunes and the magic of starlit nights.',
            tours: data.desertTours,
            image: data.desertTours[0]?.image || '/images/desert_tours/placeholder.png'
        },
        {
            id: 'imperial-cities',
            name: 'Ancient Medinas',
            label: 'Cities',
            description: 'Discover the rich history, vibrant souks, and cultural heart of Morocco.',
            tours: data.imperialCities,
            image: data.imperialCities[0]?.image || '/images/imperial_cities/placeholder.png'
        },
        {
            id: 'excursions',
            name: 'Hidden Gems',
            label: 'Excursions',
            description: 'Curated day journeys from Marrakech to the most stunning local landscapes.',
            tours: data.excursions,
            image: data.excursions[0]?.image || '/images/excursions/placeholder.png'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white grain overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block",
                                    children: "EXPEDITION CATALOG"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TourCategories.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair leading-tight tracking-tighter",
                                    children: [
                                        "Choose Your ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic",
                                            children: "Frontier."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TourCategories.tsx",
                                            lineNumber: 64,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TourCategories.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TourCategories.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.2
                            },
                            className: "text-neutral-medium text-xl font-light max-w-sm border-l border-neutral-light pl-8",
                            children: "From the heights of the High Atlas to the deep silence of the Sahara. Every category is a different world."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TourCategories.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TourCategories.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-light border border-neutral-light overflow-hidden shadow-2xl",
                    children: categories.map((category, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: index * 0.1
                            },
                            className: "group relative bg-white overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${locale}/tours?category=${category.id}`,
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[4/3] md:aspect-square overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: category.image,
                                            alt: category.name,
                                            fill: true,
                                            className: "object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TourCategories.tsx",
                                            lineNumber: 93,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TourCategories.tsx",
                                            lineNumber: 99,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-8 left-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-[10px] font-bold uppercase tracking-[0.4em] bg-black/10 backdrop-blur-md px-4 py-2 border border-white/20",
                                                children: category.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TourCategories.tsx",
                                                lineNumber: 103,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TourCategories.tsx",
                                            lineNumber: 102,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-x-8 bottom-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-hidden mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white text-5xl md:text-7xl font-medium font-playfair tracking-tighter leading-none translate-y-full group-hover:translate-y-0 transition-transform duration-700",
                                                        children: category.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TourCategories.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TourCategories.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-lg font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100",
                                                    children: category.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TourCategories.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TourCategories.tsx",
                                            lineNumber: 109,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-12 right-12 text-white/40 group-hover:text-primary transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-12 h-12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TourCategories.tsx",
                                                lineNumber: 122,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TourCategories.tsx",
                                            lineNumber: 121,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TourCategories.tsx",
                                    lineNumber: 92,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TourCategories.tsx",
                                lineNumber: 91,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, category.id, false, {
                            fileName: "[project]/src/components/TourCategories.tsx",
                            lineNumber: 83,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/TourCategories.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 pt-16 border-t border-neutral-light",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl font-medium font-playfair tracking-tight",
                                    children: [
                                        "Featured ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic",
                                            children: "Experiences"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TourCategories.tsx",
                                            lineNumber: 134,
                                            columnNumber: 100
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TourCategories.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}/tours`,
                                    className: "text-xs font-bold uppercase tracking-[0.3em] text-neutral-dark hover:text-primary transition-colors border-b-2 border-primary/20 pb-1",
                                    children: "View Collection"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TourCategories.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TourCategories.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-12",
                            children: [
                                ...data.toubkalTreks.slice(0, 1),
                                ...data.desertTours.slice(0, 1),
                                ...data.imperialCities.slice(0, 1)
                            ].map((tour, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/tours/${tour.id}`,
                                        className: "block group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[3/4] mb-8 overflow-hidden grayscale-[50%] group-hover:grayscale-0 transition-all duration-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: tour.image,
                                                        alt: tour.name,
                                                        fill: true,
                                                        className: "object-cover transition-transform duration-700 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TourCategories.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white px-4 py-2 text-neutral-dark text-[10px] font-bold tracking-widest uppercase",
                                                            children: "Explore"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TourCategories.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TourCategories.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TourCategories.tsx",
                                                lineNumber: 154,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-2xl font-medium font-playfair mb-2 group-hover:text-primary transition-colors leading-tight",
                                                children: tour.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TourCategories.tsx",
                                                lineNumber: 167,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tour.duration.replace('_', ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TourCategories.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1 h-1 bg-primary rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TourCategories.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-dark",
                                                        children: [
                                                            "€",
                                                            tour.pricing?.[0]?.totalPrice || tour.pricing?.[0]?.pricePerPerson || '---'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/TourCategories.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TourCategories.tsx",
                                                lineNumber: 170,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TourCategories.tsx",
                                        lineNumber: 153,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, tour.id, false, {
                                    fileName: "[project]/src/components/TourCategories.tsx",
                                    lineNumber: 146,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/TourCategories.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TourCategories.tsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TourCategories.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TourCategories.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/WhyTravelWithUs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyTravelWithUs",
    ()=>WhyTravelWithUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mountain.js [app-ssr] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
'use client';
;
;
;
const WhyTravelWithUs = ({ dict })=>{
    const reasons = [
        {
            id: '01',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"],
            title: dict.authenticity || "Ancestral Guides",
            desc: dict.authenticityDesc || "Born and raised in the High Atlas peaks, our guides offer deep ancestral insights that no script can replicate."
        },
        {
            id: '02',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            title: dict.expertKnowledge || "Elite Safety",
            desc: dict.expertKnowledgeDesc || "Our mountain professionals are UIAA certified, specializing in technical safety and high-altitude logistics."
        },
        {
            id: '03',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            title: dict.personalized || "Bespoke Pace",
            desc: dict.personalizedDesc || "We calibrate every expedition to your unique threshold, curiosity, and physical vision."
        },
        {
            id: '04',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            title: dict.sustainable || "Boutique Quality",
            desc: dict.sustainableDesc || "Defining luxury as authenticity. From remote mountain gites to starlit desert encampments."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-white grain overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12 mb-16 transition-all text-center lg:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block transition-all",
                                    children: "THE MOROCCO ADVANTAGE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all",
                                    children: [
                                        "Why Trust the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                                            lineNumber: 44,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-primary",
                                            children: "Ancestral Guide."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                                            lineNumber: 45,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-medium text-xl font-light max-w-sm lg:border-l border-neutral-light lg:pl-8 mb-2 transition-all",
                            children: "In an age of generic travel, we return to the roots of authentic expedition and Berber hospitality."
                        }, void 0, false, {
                            fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-light border border-neutral-light overflow-hidden shadow-2xl transition-all",
                    children: reasons.map((reason, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: idx * 0.1,
                                duration: 0.8
                            },
                            className: "bg-white p-12 group hover:bg-neutral-dark transition-colors duration-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-medium text-neutral-dark mb-6 font-playfair group-hover:text-white transition-colors duration-700 leading-tight",
                                    children: reason.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-medium/80 font-light text-base leading-relaxed group-hover:text-white/60 transition-colors duration-700",
                                    children: reason.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                                    lineNumber: 68,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, reason.id, true, {
                            fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                            lineNumber: 56,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyTravelWithUs.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WhyTravelWithUs.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/WhyTravelWithUs.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/GalleryPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryPreview",
    ()=>GalleryPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const galleryMoments = [
    {
        id: '1',
        image: '/images/imperial_cities/hamza-nouasria-7zVLZu5twJs-unsplash.jpg',
        name: 'Maria Carolina',
        quote: 'Balloon ride was magical!',
        rotation: -4
    },
    {
        id: '2',
        image: '/images/desert_tours/merzouga6.jpg',
        name: 'Alessia Marika',
        quote: 'The desert was incredible.',
        rotation: 3
    },
    {
        id: '3',
        image: '/images/excursions/pete-bread-4eZeMUKdV-8-unsplash.jpg',
        name: 'Aisha Davina',
        quote: 'Every sunset felt like home.',
        rotation: -2
    },
    {
        id: '4',
        image: '/images/imperial_cities/marrakech8.jpg',
        name: 'Dino Kenji',
        quote: 'Everything was perfect.',
        rotation: 4
    },
    {
        id: '5',
        image: '/images/toubkal_treks/mads-schmidt-rasmussen-ZN5eC6__AiU-unsplash.jpg',
        name: 'Ben Philips',
        quote: 'Best time of my life!',
        rotation: -3
    },
    {
        id: '6',
        image: '/images/excursions/rigel-ibisQEDxODo-unsplash.jpg',
        name: 'Sophie Laurent',
        quote: 'Unforgettable memories.',
        rotation: 2
    },
    {
        id: '7',
        image: '/images/imperial_cities/mehdi-lamaaffar-PqX7EELWjh0-unsplash.jpg',
        name: 'James Wilson',
        quote: 'Highly recommended!',
        rotation: -5
    }
];
// Fixed tape rotations to avoid hydration mismatch
const tapeRotations = [
    -1,
    2,
    -2,
    1,
    0,
    -1,
    2
];
const GalleryPreview = ({ locale })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-neutral-100/50 grain overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block font-inter",
                            children: "Real stories from real travelers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GalleryPreview.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-dark font-playfair leading-tight",
                            children: [
                                "Moments that made every journey",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/GalleryPreview.tsx",
                                    lineNumber: 91,
                                    columnNumber: 56
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-primary",
                                    children: "unforgettable"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GalleryPreview.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GalleryPreview.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GalleryPreview.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center items-center gap-4 md:gap-0 pb-12 pt-8",
                    children: galleryMoments.map((moment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.8,
                                rotate: moment.rotation
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1,
                                rotate: moment.rotation
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: index * 0.1,
                                duration: 0.6,
                                type: "spring"
                            },
                            whileHover: {
                                scale: 1.15,
                                rotate: 0,
                                zIndex: 50,
                                transition: {
                                    duration: 0.3
                                }
                            },
                            className: "relative -mx-2 md:-mx-4 cursor-pointer z-0 hover:z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#f8f6f1] p-3 pb-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[160px] md:w-[200px]",
                                style: {
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-red-100/40 opacity-80 backdrop-blur-[1px] shadow-sm transform rotate-[-2deg] z-10 border border-white/20",
                                        style: {
                                            transform: `translateX(-50%) rotate(${tapeRotations[index]}deg)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GalleryPreview.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[4/5] overflow-hidden mb-3 bg-neutral-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: moment.image,
                                                alt: moment.name,
                                                fill: true,
                                                className: "object-cover",
                                                style: {
                                                    filter: 'sepia(15%) contrast(1.1) saturate(0.9)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GalleryPreview.tsx",
                                                lineNumber: 128,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-amber-200/5 via-transparent to-black/20 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GalleryPreview.tsx",
                                                lineNumber: 138,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent opacity-30 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GalleryPreview.tsx",
                                                lineNumber: 140,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GalleryPreview.tsx",
                                        lineNumber: 127,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center px-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-dark/70 text-[10px] md:text-xs font-bold uppercase tracking-widest font-inter opacity-70",
                                            children: moment.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GalleryPreview.tsx",
                                            lineNumber: 145,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GalleryPreview.tsx",
                                        lineNumber: 144,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GalleryPreview.tsx",
                                lineNumber: 114,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, moment.id, false, {
                            fileName: "[project]/src/components/GalleryPreview.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/GalleryPreview.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${locale}/gallery`,
                        className: "inline-flex items-center gap-3 bg-neutral-dark text-white px-8 py-3 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-primary transition-colors shadow-xl",
                        children: "See more happiness"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GalleryPreview.tsx",
                        lineNumber: 161,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/GalleryPreview.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GalleryPreview.tsx",
            lineNumber: 78,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/GalleryPreview.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/FAQAccordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQAccordion",
    ()=>FAQAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const FAQAccordion = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('FAQSection');
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const faqData = [
        {
            question: t('items.0.question'),
            answer: t('items.0.answer')
        },
        {
            question: t('items.1.question'),
            answer: t('items.1.answer')
        },
        {
            question: t('items.2.question'),
            answer: t('items.2.answer')
        },
        {
            question: t('items.3.question'),
            answer: t('items.3.answer')
        },
        {
            question: t('items.4.question'),
            answer: t('items.4.answer')
        }
    ];
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? -1 : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 bg-white grain overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 lg:gap-12 transition-all text-center lg:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block transition-all",
                                    children: t('tag')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FAQAccordion.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-dark font-playfair tracking-tight leading-none transition-all",
                                    children: [
                                        t('titlePart1'),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/FAQAccordion.tsx",
                                            lineNumber: 53,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-primary",
                                            children: t('titlePart2')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQAccordion.tsx",
                                            lineNumber: 54,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FAQAccordion.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FAQAccordion.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-medium text-xl font-light max-w-sm lg:border-l border-neutral-light lg:pl-8 mb-2 transition-all",
                            children: t('description')
                        }, void 0, false, {
                            fileName: "[project]/src/components/FAQAccordion.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FAQAccordion.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto space-y-px bg-neutral-light border border-neutral-light shadow-2xl overflow-hidden transition-all",
                    children: faqData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: index * 0.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white group transition-all duration-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleFAQ(index),
                                        className: "w-full flex items-center justify-between p-6 text-left transition-colors duration-700 hover:bg-neutral-dark group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xl md:text-2xl font-medium font-playfair transition-colors duration-700 ${openIndex === index ? 'text-primary' : 'text-neutral-dark group-hover:text-white'}`,
                                                children: item.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FAQAccordion.tsx",
                                                lineNumber: 76,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 ml-4 transition-all duration-700",
                                                children: openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                    className: "w-6 h-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FAQAccordion.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-6 h-6 text-neutral-200 group-hover:text-white/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FAQAccordion.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FAQAccordion.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FAQAccordion.tsx",
                                        lineNumber: 72,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        initial: false,
                                        children: openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                height: 'auto',
                                                opacity: 1
                                            },
                                            exit: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                ease: [
                                                    0.16,
                                                    1,
                                                    0.3,
                                                    1
                                                ]
                                            },
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-12 pb-6 pt-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px bg-neutral-light mb-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FAQAccordion.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-neutral-medium text-md font-light leading-relaxed max-w-3xl",
                                                        children: item.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FAQAccordion.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FAQAccordion.tsx",
                                                lineNumber: 97,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FAQAccordion.tsx",
                                            lineNumber: 90,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FAQAccordion.tsx",
                                        lineNumber: 88,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FAQAccordion.tsx",
                                lineNumber: 71,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/src/components/FAQAccordion.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/FAQAccordion.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FAQAccordion.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FAQAccordion.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/ExpertiseSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertiseSection",
    ()=>ExpertiseSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const ExpertiseSection = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('ExpertiseSection');
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-white grain overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-inter",
                                    children: t('tag')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl lg:text-6xl font-medium font-playfair text-neutral-dark mb-8 leading-[1]",
                                    children: [
                                        t('titleHighAtlas'),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                            lineNumber: 31,
                                            columnNumber: 55
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-primary",
                                            children: t('heritage')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-medium text-lg font-light leading-relaxed font-inter",
                                            children: t('description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                            lineNumber: 36,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-6 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline gap-4 border-l border-primary/30 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-sm tracking-widest pt-1",
                                                            children: "01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-neutral-dark mb-1 tracking-widest uppercase text-xs",
                                                                    children: t('item1Title')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                                    lineNumber: 44,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-neutral-medium/80 font-light text-sm",
                                                                    children: t('item1Desc')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                                    lineNumber: 45,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline gap-4 border-l border-primary/30 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-sm tracking-widest pt-1",
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-neutral-dark mb-1 tracking-widest uppercase text-xs",
                                                                    children: t('item2Title')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                                    lineNumber: 51,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-neutral-medium/80 font-light text-sm",
                                                                    children: t('item2Desc')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline gap-4 border-l border-primary/30 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-sm tracking-widest pt-1",
                                                            children: "03"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-neutral-dark mb-1 tracking-widest uppercase text-xs",
                                                                    children: t('item3Title')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                                    lineNumber: 58,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-neutral-medium/80 font-light text-sm",
                                                                    children: t('item3Desc')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                                    lineNumber: 59,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                            lineNumber: 40,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                            lineNumber: 20,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExpertiseSection.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                className: "relative aspect-video w-full overflow-hidden shadow-2xl bg-neutral-100 group",
                                children: !isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/toubkal_treks/othman-alghanmi-p2NgMfbJsxs-unsplash.jpg",
                                            alt: "Atlas Expedition Guide",
                                            fill: true,
                                            className: "object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                            lineNumber: 79,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsPlaying(true),
                                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "w-6 h-6 text-white ml-1 fill-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExpertiseSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertiseSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    width: "100%",
                                    height: "100%",
                                    src: "https://www.youtube.com/embed/LXM5Zwu7utY?autoplay=1&start=2322",
                                    title: "Morocco Atlas Guide Video",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true,
                                    className: "absolute inset-0 w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                    lineNumber: 95,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertiseSection.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4
                                },
                                className: "absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-sm hidden lg:block border border-neutral-light",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-playfair italic text-neutral-dark leading-tight",
                                    children: t('quote')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertiseSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertiseSection.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExpertiseSection.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExpertiseSection.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ExpertiseSection.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ExpertiseSection.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/CoreValuesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreValuesSection",
    ()=>CoreValuesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CoreValuesSection = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('CoreValuesSection');
    const features = [
        {
            title: t('features.0.title'),
            image: "/images/toubkal_treks/cermanni-pianchette-top-7989881_1920.jpg",
            description: t('features.0.description')
        },
        {
            title: t('features.1.title'),
            image: "/images/food tour/annie-spratt-_V4v7BbG338-unsplash.jpg",
            description: t('features.1.description')
        },
        {
            title: t('features.2.title'),
            image: "/images/desert_tours/merzouga5.jpg",
            description: t('features.2.description')
        },
        {
            title: t('features.3.title'),
            image: "/images/toubkal_treks/youssef-gahouchi-Lznyc4uR1hs-unsplash.jpg",
            description: t('features.3.description')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-neutral-50 grain overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-20 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-inter",
                            children: t('tag')
                        }, void 0, false, {
                            fileName: "[project]/src/components/CoreValuesSection.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-medium font-playfair text-neutral-dark leading-tight",
                            children: [
                                t('titlePart1'),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/CoreValuesSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-primary",
                                    children: t('titlePart2')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CoreValuesSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CoreValuesSection.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CoreValuesSection.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-24",
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: `flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-1/2 relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/3] overflow-hidden shadow-2xl bg-white p-2 border border-neutral-100/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-full overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: feature.image,
                                                        alt: feature.title,
                                                        fill: true,
                                                        className: "object-cover transition-transform duration-1000 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CoreValuesSection.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CoreValuesSection.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CoreValuesSection.tsx",
                                                lineNumber: 63,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CoreValuesSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute -bottom-6 -z-10 w-full h-full border border-primary/20 ${index % 2 === 0 ? '-right-6' : '-left-6'} hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CoreValuesSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CoreValuesSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-1/2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-playfair font-medium text-neutral-dark mb-6 relative inline-block",
                                                children: [
                                                    feature.title,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -bottom-2 left-0 w-1/3 h-[2px] bg-primary/40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CoreValuesSection.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CoreValuesSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-neutral-medium text-lg font-light leading-relaxed font-inter",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CoreValuesSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CoreValuesSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CoreValuesSection.tsx",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/CoreValuesSection.tsx",
                            lineNumber: 52,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/CoreValuesSection.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CoreValuesSection.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CoreValuesSection.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=src_45965c85._.js.map