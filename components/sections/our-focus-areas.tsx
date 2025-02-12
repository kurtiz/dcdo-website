"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const focusAreas = [
    {
        title: "Education",
        description: "Unlocking potential through access to quality learning.",
        icon: "education"
    },
    {
        title: "Economic Growth",
        description: "Creating opportunities for sustainable livelihoods.",
        icon: "economic-growth"
    },
    {
        title: "Healthcare",
        description: "Ensuring well-being for all generations.",
        icon: "healthcare"
    },
    {
        title: "Cultural Heritage",
        description: "Preserving our roots while building the future.",
        icon: "heritage"
    },
    {
        title: "Environment",
        description: "Protecting our land for tomorrow’s leaders.",
        icon: "environment"
    }
];

const OurFocusAreas = () => {
    return (
        <section suppressHydrationWarning={true} className="py-16 px-6 md:px-12 bg-gray-100/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-yellow-800 ">Our Focus Areas</h2>
                <div className="w-16 h-1 mx-auto bg-yellow-800 mb-6 rounded"></div>
                <p className="text-gray-600 mb-8">
                    We are committed to making a lasting impact across key sectors that
                    shape our society.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {focusAreas.map((area, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: index * 0.2}}
                        whileHover={{scale: 1.04}}
                        className="p-6 bg-white shadow-lg rounded-lg text-center"
                    >
                        <Image
                            src={`/assets/svg/${area.icon}.svg`}
                            alt={area.icon || "icon"} width={100}
                            height={100}
                            className="mx-auto text-yellow-800"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurFocusAreas;
