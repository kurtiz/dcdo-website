"use client";
import React from 'react';
import Image from "next/image";
import {motion} from "motion/react";

const About = () => {
    // Animation variants
    const fadeInUp = {
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.6, ease: "easeOut"},
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="flex mt-8">
            <div className="w-full">
                {/* Header Section */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                    className="flex justify-center flex-col items-center"
                >
                    <h2 className="text-3xl font-extrabold text-yellow-800">About us</h2>
                    <div className="w-16 h-1 mx-auto bg-yellow-800 mb-6 rounded"></div>
                    <p className="text-gray-600 mb-8 text-center">
                        Empowering the Dangme Community Since 2024
                    </p>
                </motion.div>

                {/* History Section */}
                <motion.div
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto px-4"
                >
                    <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-yellow-800 mb-4">
                        History (2024-2025)
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="text-gray-700 mb-6">
                        The Dangme Community Development Organisation (DCDO) was established on 2nd June 2024 with the
                        mission of promoting the social, economic, and cultural development of the Dangme community.
                        Since its inception, the organisation has made significant strides in achieving its goals.
                    </motion.p>
                    <motion.ul variants={fadeInUp} className="list-disc list-inside text-gray-700 mb-6">
                        <li>Registered the organisation with the relevant authorities</li>
                        <li>Conducted a needs assessment survey to identify the community&#39;s priorities</li>
                        <li>Established partnerships with local stakeholders, including traditional leaders, schools,
                            and healthcare providers
                        </li>
                        <li>Implemented a literacy program for adults, which benefited 50 community members</li>
                        <li>Organized a cultural festival, which attracted over 1,000 attendees</li>
                        <li>Implemented a health education program, which reached over 200 community members</li>
                        <li>Partnered with the Center for National Culture to conduct research on the Dangme
                            community&#39;s
                            cultural heritage
                        </li>
                        <li>Hosted a skills training program, which benefited 50 youth</li>
                    </motion.ul>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{duration: 0.6, ease: "easeOut"}}
                    className="max-w-4xl mx-auto px-4 my-8"
                >
                    <Image
                        src="/assets/img/gallery/img-19.jpeg"
                        alt="Dangme Community History"
                        height={1000}
                        width={1000}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Achievements Section */}
                <motion.div
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto px-4"
                >
                    <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-yellow-800 mb-4">
                        Achievements
                    </motion.h3>
                    <motion.ol variants={fadeInUp} className="list-decimal list-inside text-gray-700 mb-6">
                        <li>Improved literacy rates: Our literacy program has helped to improve the literacy rates among
                            adults in the community.
                        </li>
                        <li>Enhanced community engagement: Our cultural festival and community center have helped to
                            promote community engagement and social cohesion.
                        </li>
                        <li>Better health outcomes: Our health education program has helped to improve health outcomes
                            among community members.
                        </li>
                        <li>Preservation of cultural heritage: Our partnership with the local university has helped to
                            preserve the Dangme community&#39;s cultural heritage.
                        </li>
                    </motion.ol>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{duration: 0.6, ease: "easeOut"}}
                    className="max-w-4xl mx-auto px-4 my-8"
                >
                    <Image
                        src="/assets/img/gallery/img-18.jpeg"
                        alt="Dangme Community Achievements"
                        height={1000}
                        width={1000}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Future Plans Section */}
                <motion.div
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto px-4"
                >
                    <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-yellow-800 mb-4">
                        Future Plans
                    </motion.h3>
                    <motion.ul variants={fadeInUp} className="list-disc list-inside text-gray-700 mb-6">
                        <li>Expand literacy program: We plan to expand our literacy program to reach more community
                            members.
                        </li>
                        <li>Increase access to healthcare: We plan to partner with healthcare providers to increase
                            access to healthcare services for community members.
                        </li>
                        <li>Support economic development: We plan to support economic development initiatives, such as
                            entrepreneurship training and job creation programs.
                        </li>
                        <li>Promote cultural exchange: We plan to promote cultural exchange programs between the Dangme
                            community and other communities.
                        </li>
                    </motion.ul>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{duration: 0.6, ease: "easeOut"}}
                    className="max-w-4xl mx-auto px-4 my-8"
                >
                    <Image
                        src="/assets/img/gallery/img-14.jpeg"
                        alt="Dangme Community Future Plans"
                        height={1000}
                        width={1000}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{duration: 0.6, ease: "easeOut"}}
                    className="max-w-4xl mx-auto px-4 mb-8"
                >
                    <p className="text-gray-700">
                        Overall, the Dangme Community Development Organisation has made significant progress in
                        achieving its mission and goals. We look forward to continuing our work to promote the social,
                        economic, and cultural development of the Dangme community.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;