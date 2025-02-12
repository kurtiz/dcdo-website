"use client";

import {motion} from "motion/react";


const HeroSection = () => {

    return (
        <>
            <section suppressHydrationWarning={true} id="hero-section">
                <div className="relative bg-cover bg-center bg-fixed flex items-center justify-center
            min-h-screen motion-preset-expand motion-delay-0 bg-mb-hero-bg md:bg-hero-bg">

                    <div className="grid grid-rows-2 md:grid-cols-2 h-screen w-full">
                        <div className=""></div>
                        <div
                            className="bg-black/40 md:h-screen px-8 py-4 md:py-0 motion-preset-slide-left motion-delay-100
                        items-center justify-center backdrop-blur-xl">
                            <div className="flex flex-col justify-center md:h-screen"
                                 suppressHydrationWarning={true}>
                                <p className="text-white font-black text-2xl lg:text-4xl uppercase
                            motion-preset-slide-left motion-delay-[200ms]">
                                    Preserving our roots while building the future
                                </p>
                                <p className="text-white motion-preset-slide-left text-lg motion-delay-[300ms]">
                                    Empowering resilience, sustainability, and collective prosperity through
                                    inclusive
                                    action.
                                </p>
                                <motion.button
                                    initial={{borderRadius: 0}}
                                    whileHover={{scale: 1.04, borderRadius: 10}}
                                    className="mt-4 md:mt-8 motion-preset-slide-left motion-delay-[400ms]
                                bg-white font-black text-lg text-yellow-800 px-4 py-4 w-56 shadow hover:shadow-xl
                                hover:bg-gray-100"
                                >
                                    Support Our Cause
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;