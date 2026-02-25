'use client'

import { useState, useEffect } from 'react'

export default function SettingsPage() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        // Check current theme
        if (document.documentElement.classList.contains('dark')) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        } else {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Configuración General</h2>

            <div className="flex items-center justify-between py-6 border-b border-slate-800">
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">Tema del Dashboard</h3>
                    <p className="text-slate-400 text-sm">Alternar entre modo oscuro (Imperial) y modo claro.</p>
                </div>
                <button
                    onClick={toggleTheme}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${theme === 'dark' ? 'bg-gold-500' : 'bg-slate-600'}`}
                >
                    <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}`}
                    />
                </button>
            </div>

            <div className="py-6">
                <p className="text-slate-500 text-sm italic">Más configuraciones generales próximamente...</p>
            </div>
        </div>
    )
}
