
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Image from "next/image";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Faster splash screen time

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div
                    key="splash"
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        layoutId="logo-image"
                        className="relative w-full h-full max-w-4xl max-h-[80vh]"
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        <Image
                            src="/logo.jpeg"
                            alt="Pavan Constructions Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>
            ) : (
                <div key="content" className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                </div>
            )}
        </AnimatePresence>
    );
}
