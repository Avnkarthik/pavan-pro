
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Aim", href: "/aim" },
        { name: "Structure Plans", href: "/structures" },
        { name: "3D Plans", href: "/3d-plans" },
        { name: "Plans", href: "/plans" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <motion.div
                                layoutId="logo-image"
                                className="relative w-12 h-12 md:w-16 md:h-16"
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/logo.jpeg"
                                    alt="Pavan Constructions Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                            <span className="text-xl font-bold text-slate-800 hidden sm:block">
                                Pavan Constructions
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-black ${pathname === link.href ? "text-black font-bold" : "text-black"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black hover:text-black focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md border-b border-white/30">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-white/50 hover:text-blue-600 ${pathname === link.href ? "text-blue-600 bg-white/50" : "text-slate-800"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
