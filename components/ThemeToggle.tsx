"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage or system preference on mount
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-slate-600 dark:text-cream/80 hover:text-primary transition-all p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
            aria-label="Toggle Theme"
        >
            {darkMode ? (
                <span className="material-symbols-outlined">light_mode</span>
            ) : (
                <span className="material-symbols-outlined">dark_mode</span>
            )}
        </button>
    );
}
