"use client";

import {motion} from "motion/react";

const HeroSection = () => {
    return (
        <section>
            <div className="relative bg-cover bg-center bg-fixed flex items-center justify-center
            min-h-screen motion-preset-expand motion-delay-0 bg-mb-hero-bg md:bg-hero-bg">

                <div className="grid grid-rows-2 md:grid-cols-2 h-screen w-full">
                    <div className=""></div>
                    <div
                        className="bg-black/40  md:h-screen px-8 motion-preset-slide-left motion-delay-100
                        items-center justify-center backdrop-blur-xl">
                        <div className="flex flex-col justify-center md:h-screen">
                            <p className="text-white font-black text-[85px] md:text-[100px] motion-preset-slide-left motion-delay-[200ms]">
                                Hello
                            </p>
                            <p className="text-white motion-preset-slide-left text-3xl motion-delay-[300ms]">
                                This is a long random text to test something
                            </p>
                            <motion.button
                                initial={{borderRadius: 0}}
                                whileHover={{scale: 1.04, borderRadius: 10}}
                                className="mt-4 md:mt-8 motion-preset-slide-left motion-delay-[400ms]
                                bg-white font-black text-lg text-black px-4 py-4 w-52 shadow hover:shadow-xl
                                hover:bg-gray-100">
                                Call To Action
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;