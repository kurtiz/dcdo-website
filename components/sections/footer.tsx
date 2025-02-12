"use client";

import {AiFillFacebook} from "@react-icons/all-files/ai/AiFillFacebook";
import {AiFillInstagram} from "@react-icons/all-files/ai/AiFillInstagram";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill";
import {AiFillMail} from "@react-icons/all-files/ai/AiFillMail";
import {AiFillPhone} from "@react-icons/all-files/ai/AiFillPhone";
import {XLogo} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div
                    className="grid grid-cols-2 gap-8 sm:gap-6 text-gray-200 font-medium sm:grid-cols-3">
                    <div className="mb-6 md:mb-0 space-y-3">
                        <Link href="/" className="flex items-center">
                            <div className="flex items-center gap-2">
                                <Image
                                    priority={true}
                                    src="/assets/img/brand/logo.png"
                                    alt="Logo"
                                    width={50} height={50}
                                    className="text-left rounded-full"
                                />
                                <p className="font-bold text-xl">DCDO</p>
                            </div>
                        </Link>
                        <p className="text-sm">
                            We are committed to making a lasting impact across key sectors that
                            shape our society.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-200">
                            Quick Links
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <div className="flex flex-col ">
                                <Link className="hover:text-yellow-700 hover:font-bold" href="/about">
                                    About Us
                                </Link>
                                <Link className="hover:text-yellow-700 hover:font-bold" href="/gallery">
                                    Gallery
                                </Link>
                                <Link className="hover:text-yellow-700 hover:font-bold"
                                      href="/contact">
                                    Contact
                                </Link>
                                <Link className="hover:text-yellow-700 hover:font-bold" href="/donate">Donate</Link>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
                            Connect With Us
                        </h2>
                        <div className="grid grid-cols-4 gap-y-2 md:w-2/3 dark:text-gray-400">
                            <Link href="https://www.facebook.com"
                                  className="text-gray-500 hover:text-yellow-400">
                                <AiFillFacebook className="w-8 h-auto"/>
                                <span className="sr-only">Facebook Page</span>
                            </Link>
                            <Link href="https://x.com/"
                                  className="text-gray-500 hover:text-yellow-400">
                                <XLogo className="w-8 h-auto"/>
                                <span className="sr-only">Twitter Page</span>
                            </Link>
                            <Link href="https://www.instagram.com"
                                  className="text-gray-500 hover:text-yellow-400">
                                <AiFillInstagram className="w-8 h-auto"/>
                                <span className="sr-only">Instagram Page</span>
                            </Link>
                            <Link href="https://www.linkedin.com"
                                  className="text-gray-500 hover:text-yellow-400">
                                <AiFillLinkedin className="w-8 h-auto"/>
                                <span className="sr-only">Linkedin Page</span>
                            </Link>
                            <Link href="https://wa.me/"
                                  className="text-gray-500 hover:text-yellow-400">
                                <RiWhatsappFill className="w-8 h-auto"/>
                                <span className="sr-only">WhatsApp Chat</span>
                            </Link>
                            <Link href="mailto:@"
                                  className="text-gray-500 hover:text-yellow-400">
                                <AiFillMail className="w-8 h-auto"/>
                            </Link>
                            <Link href="tel:1234556677"
                                  className="text-gray-500 hover:text-yellow-400">
                                <AiFillPhone className="w-8 h-auto"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className=" w-full flex justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Link href="/privacy-policy" className="hover:text-yellow-700 ">
                            Fraud Disclaimer
                        </Link> | <Link href="/privacy-policy" className="hover:text-yellow-700 ">
                        Privacy Policy
                    </Link> | <span>© {new Date().getFullYear()}</span>
                        <span><Link href="/" className=""> Dangme Community Development Organisation™</Link> All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;