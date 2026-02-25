'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        // Enforce dark mode by default unless user explicitly chose light
        const theme = localStorage.getItem('theme')
        const isDarkMode = theme === 'dark' || (!theme && document.documentElement.classList.contains('dark'))
        setIsDark(isDarkMode)
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)
        if (newTheme) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const getTitle = () => {
        if (pathname.includes('/admin/menu')) return 'Menú Pro - Gestión de Productos'
        if (pathname.includes('/admin/blog')) return 'Blog CMS - Crónicas de la Corte'
        if (pathname.includes('/admin/crm')) return 'CRM Club de Emperadores'
        return 'Dashboard General'
    }

    return (
        <header className="h-20 border-b border-slate-800/60 glass-panel sticky top-0 z-30 px-8 flex items-center justify-between">
            <nav className="flex items-center text-sm font-medium text-slate-500 space-x-2">
                <div className="hover:text-primary transition-colors flex items-center cursor-default">
                    <span className="material-symbols-outlined text-xl">home</span>
                </div>
                <span className="material-symbols-outlined text-base text-slate-600">chevron_right</span>
                <span className="hover:text-primary transition-colors cursor-default">Panel</span>
                <span className="material-symbols-outlined text-base text-slate-600">chevron_right</span>
                <span className="text-white font-semibold">{getTitle().split(' - ')[0]}</span>
            </nav>

            <div className="flex items-center gap-6">
                <button
                    onClick={toggleTheme}
                    className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-white/5 rounded-full"
                    title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                >
                    <span className="material-symbols-outlined">
                        {isDark ? 'light_mode' : 'dark_mode'}
                    </span>
                </button>
                <div className="h-6 w-[1px] bg-slate-800"></div>
                <button className="relative text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-0 right-0 h-2 w-2 bg-primary rounded-full animate-pulse"></span>
                </button>
            </div>
        </header>
    )
}
