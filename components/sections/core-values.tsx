"use client";

import AnimatedAccordion from "@/components/animated-accordion";

const CoreValues = () => {

    const items = [
        {
            id: 1,
            title: "1",
            imgSrc:
                "/assets/img/core-values/1.png",
            description: "Community-driven and participatory approach",
        },
        {
            id: 2,
            title: "2",
            imgSrc: "/assets/img/core-values/2.png",
            description: "Inclusivity, diversity, and social justice",
        },
        {
            id: 3,
            title: "3",
            imgSrc: "/assets/img/core-values/3.png",
            description: "Transparency, accountability, and good governance",
        },
        {
            id: 4,
            title: "4",
            imgSrc: "/assets/img/core-values/4.png",
            description: "Innovation, creativity, and adaptability",
        },
        {
            id: 5,
            title: "5",
            imgSrc: "/assets/img/core-values/5.png",
            description: "Respect for cultural heritage and environmental sustainability",
        },
    ];

    return (
        <div suppressHydrationWarning={true} className="px-8 py-8 flex flex-col gap-4">
            <p className="text-4xl md:text-6xl font-extrabold text-center text-black">Our Core Values</p>
            <AnimatedAccordion items={items} className="mt-4 motion-blur-in"/>
        </div>
    );
};

export default CoreValues;