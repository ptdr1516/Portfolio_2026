"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Hexagon } from "lucide-react";

const NAV_LINKS = [
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Building", href: "/#currently-building" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10 p-4" : "bg-transparent p-6"}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#00ff88]/10 group-hover:border-[#00ff88]/30 transition-all">
                        <Hexagon className="w-6 h-6 text-white group-hover:text-[#00ff88] transition-colors" />
                    </div>
                    <span className="font-bold tracking-tighter text-xl hidden sm:block">PATIDAR</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://github.com/ptdr1516"
                        target="_blank"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
                    >
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold text-white hover:text-[#00ff88] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-4 mt-4 w-full justify-center border-t border-white/5 pt-8">
                            <a
                                href="https://github.com/ptdr1516"
                                target="_blank"
                                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium"
                            >
                                <Github className="w-5 h-5" />
                                GitHub Repository
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
