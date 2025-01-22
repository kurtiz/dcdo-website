"use client";

import {AnimatePresence, motion} from "framer-motion";
import {useWindowSize} from "@/hooks/useWindowSize";
import React, {useState} from "react";

const AnimatedAccordion = ({...props}) => {

    const {items, className} = props;

    const [open, setOpen] = useState(items[0].id);

    return (
        <div
            className={`flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden ${className}`}>
            {items.map((item: {
                id: number;
                title: string;
                imgSrc: string;
                description: string;
            }) => {
                return (
                    <Panel
                        key={item.id}
                        open={open}
                        setOpen={setOpen}
                        id={item.id}
                        title={item.title}
                        imgSrc={item.imgSrc}
                        description={item.description}
                    />
                );
            })}
        </div>
    );
};

const Panel = (
    {open, setOpen, id, title, imgSrc, description}: {
        open: number;
        setOpen: (id: number) => void;
        id: number;
        title: string;
        imgSrc: string;
        description: string;
    }) => {
    const {width} = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
        <span className="hidden lg:block text-xl font-black mx-4"
        >
          {title}
        </span>
                <span className="block lg:hidden text-xl text-black font-black">{title}</span>
                <span
                    className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px]
                    border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute
                    bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20"/>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black flex items-end"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AnimatedAccordion;

const panelVariants = {
    open: {
        width: "100%",
        height: "100%",
    },
    closed: {
        width: "0%",
        height: "100%",
    },
};

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "200px",
    },
    closed: {
        width: "100%",
        height: "0px",
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: 0.125,
        },
    },
    closed: {opacity: 0, y: "100%"},
};
