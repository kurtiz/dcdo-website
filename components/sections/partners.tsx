import React from 'react';
import Image from "next/image";
import {Marquee, MarqueeContent, MarqueeFade, MarqueeItem} from "@/components/ui/marquee";

const Partners = () => {
    const arr = Array.from({length: 5}, (_, i) => `/assets/img/partners/img-${i + 1}.jpeg`);

    return (
        <Marquee className="py-4">
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent>
                {arr.map((src, index) => (
                    <MarqueeItem key={index} className="w-32 h-32">
                    <div key={index} className="bg-blue-900 h-32 aspect-square">
                        <Image src={src} alt={src} height={1000} width={1000}/>
                    </div>
                    </MarqueeItem>
                ))}
            </MarqueeContent>
        </Marquee>
    );
};

export default Partners;