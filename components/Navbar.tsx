"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <header
            id="navbar"
            className={`fixed top-0 w-full z-50 border-b border-primary/10 transition-all duration-300 ${isScrolled ? "shadow-lg bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md" : ""
                }`}
        >
            <div className="glass absolute inset-0 dark:block hidden pointer-events-none"></div>
            <div className="glass-light absolute inset-0 dark:hidden block pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white transition-all group-hover:scale-105">
                            <BrandLogo className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold brand-text text-slate-900 dark:text-white transition-colors duration-300">
                            Cocoati
                        </h2>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className={`text-sm font-medium tracking-wide transition-colors ${isActive("/")
                                ? "text-primary dark:text-primary font-bold border-b-2 border-primary"
                                : "text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary"
                                }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/historia"
                            className={`text-sm font-medium tracking-wide transition-colors ${isActive("/historia")
                                ? "text-primary dark:text-primary font-bold border-b-2 border-primary"
                                : "text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary"
                                }`}
                        >
                            Historia
                        </Link>
                        <Link
                            href="/club-emperadores"
                            className={`text-sm font-medium tracking-wide transition-colors ${isActive("/club-emperadores")
                                ? "text-primary dark:text-primary font-bold border-b-2 border-primary"
                                : "text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary"
                                }`}
                        >
                            Club de Emperadores
                        </Link>
                        {/* Removed Estrategias as per user request */}
                        <Link
                            href="/menu"
                            className={`text-sm font-medium tracking-wide transition-colors ${isActive("/menu")
                                ? "text-primary dark:text-primary font-bold border-b-2 border-primary"
                                : "text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary"
                                }`}
                        >
                            Menú
                        </Link>
                        <Link
                            href="/blog"
                            className={`text-sm font-medium tracking-wide transition-colors ${isActive("/blog")
                                ? "text-primary dark:text-primary font-bold border-b-2 border-primary"
                                : "text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary"
                                }`}
                        >
                            Blog
                        </Link>
                    </nav>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 lg:gap-6">
                    {/* Search */}
                    <div className="hidden lg:flex items-center bg-slate-100 dark:bg-white/10 rounded-full px-4 py-1.5 border border-slate-200 dark:border-white/10 transition-colors">
                        <span className="material-symbols-outlined text-slate-400 dark:text-cream/50 text-xl">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="bg-transparent border-none focus:ring-0 text-sm text-slate-700 dark:text-cream placeholder:text-slate-400 dark:placeholder:text-cream/40 w-24 xl:w-32 focus:w-40 transition-all duration-300 outline-none"
                        />
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* CTA */}
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/30 uppercase tracking-widest hidden sm:block">
                        Ordenar Ahora
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-600 dark:text-cream/80"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/10 shadow-lg animate-fade-in-up">
                    <nav className="flex flex-col p-6 space-y-4">
                        <Link
                            href="/"
                            className="text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="/historia"
                            className="text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Historia
                        </Link>
                        <Link
                            href="/club-emperadores"
                            className="text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Club de Emperadores
                        </Link>
                        <Link
                            href="/menu"
                            className="text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Menú
                        </Link>
                        <Link
                            href="/blog"
                            className="text-slate-600 dark:text-cream/80 hover:text-primary dark:hover:text-primary font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
