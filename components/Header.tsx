'use client'

import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    const getTitle = () => {
        if (pathname.includes('/admin/menu')) return 'Menú Pro - Gestión de Productos'
        if (pathname.includes('/admin/blog')) return 'Blog CMS - Crónicas de la Corte'
        if (pathname.includes('/admin/crm')) return 'CRM Club de Emperadores'
        return 'Dashboard General'
    }

    return (
        <header className="h-16 border-b border-slate-800 bg-surface-dark/80 backdrop-blur-md sticky top-0 z-20 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <h1 className="font-serif text-xl font-bold text-white tracking-wide">{getTitle()}</h1>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-surface-dark"></span>
                </button>
            </div>
        </header>
    )
}
