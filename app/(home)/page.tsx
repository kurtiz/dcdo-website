"use client";

import HeroSection from "@/components/sections/hero-section";
import OurFocusAreas from "@/components/sections/our-focus-areas";
import Impact from "@/components/sections/impact";
import Partners from "@/components/sections/partners";

export default function Home() {
    return (
        <>
            <div suppressHydrationWarning={true}>
                <HeroSection/>
                <OurFocusAreas/>
                <Impact/>
                <Partners />
            </div>
        </>
    );
}
