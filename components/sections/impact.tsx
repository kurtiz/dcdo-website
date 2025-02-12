import React from 'react';
import {motion} from "motion/react";
import Link from 'next/link';

const Impact = () => {
    return (
        <section suppressHydrationWarning={true} className="bg-gray-100">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg">
                    <motion.h2
                        initial={{borderRadius: 0, opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.2}}
                        whileHover={{scale: 1.04}}
                        className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                        Impact and Reach
                    </motion.h2>
                    <motion.p
                        initial={{borderRadius: 0, opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.2}}
                        whileHover={{scale: 1.04}} className="mb-4">
                        From vibrant cultural celebrations to life-changing community projects, every
                        moment tells a story of hope and progress. Explore more inspiring images from our journey!
                    </motion.p>
                    <Link href="/gallery">
                        <motion.button
                            initial={{borderRadius: 0, opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.2}}
                            whileHover={{scale: 1.04, borderRadius: 10,}}
                            className="mt-4 md:mt-8 flex
                                bg-white font-black text-lg text-yellow-800 px-4 py-4 w-56 shadow hover:shadow-xl">
                            Explore Gallery
                            <div className="ml-1 motion-preset-wobble">
                                →
                            </div>
                        </motion.button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.img
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.2}}
                        whileHover={{scale: 1.04,}}
                        className="w-full rounded-lg"
                        src="/assets/img/impact/impact-1.jpeg"
                        alt="office content 1"
                    />
                    <motion.img
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.4}}
                        whileHover={{scale: 1.04}}
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="/assets/img/impact/impact-2.jpeg"
                        alt="office content 2"
                    />
                </div>
            </div>
        </section>
    );
};

export default Impact;