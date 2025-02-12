"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import {FiX} from "@react-icons/all-files/fi/FiX";
import {BiMenu} from "@react-icons/all-files/bi/BiMenu";
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <nav suppressHydrationWarning={true}
                 className="hidden md:flex lg:p-4 text-black md:p-2 fixed top-0 left-0 w-full z-10 flex items-center justify-start md:rounded-md">
                <ul className="flex gap-5 items-center py-2 px-4 bg-white/40 backdrop-blur-xl lg:rounded-md font-bold">
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/img/brand/logo.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-4 left-4 z-20">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-white/40 backdrop-blur-xl rounded-md">
                    {isOpen ? <FiX size={24}/> : <BiMenu size={24}/>}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: 0, opacity: 0}}
                        transition={{duration: 0.3}}
                        className="fixed top-0 left-0 w-full h-full bg-zinc-800/40 shadow-lg z-10"
                    >
                        <motion.div
                            initial={{x: -200, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: -200, opacity: 0}}
                            transition={{duration: 0.3}}
                            className="bg-white w-2/3 h-full flex flex-col p-6 gap-3 font-semibold"
                        >
                            <div className="mb-8"/>
                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.15, // Stagger delay between children
                                        },
                                    },
                                }}
                                className="flex flex-col gap-5"
                                onClick={() => setIsOpen(false)}
                            >
                                <motion.li variants={{
                                    hidden: {opacity: 0, x: 0}, // Start off-screen and invisible
                                    visible: {opacity: 1, x: 20}, // Animate into view
                                }}>
                                    <Link href="/">
                                        <Image
                                            src="/assets/img/brand/logo.png"
                                            alt="logo"
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                    </Link>
                                </motion.li>
                                <motion.li variants={{
                                    hidden: {opacity: 0, x: 0},
                                    visible: {opacity: 1, x: 20},
                                }}>
                                    <Link href="/">Home</Link>
                                </motion.li>
                                <motion.li variants={{
                                    hidden: {opacity: 0, x: 0},
                                    visible: {opacity: 1, x: 20},
                                }}>
                                    <Link href="/about">About</Link>
                                </motion.li>
                                <motion.li variants={{
                                    hidden: {opacity: 0, x: 0},
                                    visible: {opacity: 1, x: 20},
                                }}>
                                    <Link href="/gallery">Gallery</Link>
                                </motion.li>
                                <motion.li variants={{
                                    hidden: {opacity: 0, x: 0},
                                    visible: {opacity: 1, x: 20},
                                }}>
                                    <Link href="/contact">Contact</Link>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
