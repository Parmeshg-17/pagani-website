"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                scrolled ? "bg-pagani-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase text-white hover:text-pagani-gold transition-colors">
                Pagani
            </Link>

            <button className="px-6 py-2 border border-white/30 text-xs font-bold tracking-[0.2em] uppercase hover:bg-pagani-gold hover:text-black hover:border-pagani-gold transition-all">
                Inquire
            </button>
        </nav>
    );
}
