import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import React from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});
export const metadata: Metadata = {
    title: "DCDO",
    description: " Dangme Community Development Organisation",
    icons: "/assets/img/brand/logo.png",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body
            className={`${poppins.className} antialiased bg-white`}
        >
        {children}
        </body>
        </html>
    );
}
