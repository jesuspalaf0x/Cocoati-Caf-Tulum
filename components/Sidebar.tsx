'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

const menuItems = [
    { name: 'Dashboard', icon: 'grid_view', href: '/admin' },
    { name: 'Menú Pro', icon: 'restaurant_menu', href: '/admin/menu' },
    { name: 'Blog CMS', icon: 'article', href: '/admin/blog' },
    { name: 'CRM Clientes', icon: 'groups', href: '/admin/crm' },
]

export default function Sidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
        router.refresh()
    }

    return (
        <aside className="w-64 flex-shrink-0 border-r border-slate-800 bg-surface-dark hidden md:flex flex-col">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-serif font-bold text-xl shadow-glow">
                        C
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white tracking-wide">COCOATI</h3>
                        <p className="text-[10px] text-gold-500 uppercase tracking-widest">Admin Panel</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-4 px-3">Gestión</p>
                        <nav className="space-y-1">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-l-lg transition-colors ${isActive
                                            ? 'bg-gold-500/10 text-gold-500 border-r-2 border-gold-500'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span className={`material-symbols-outlined text-[20px] ${isActive ? 'fill-1' : ''}`}>
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-4 px-3">Sistema</p>
                        <nav className="space-y-1">
                            <Link
                                href="/admin/settings"
                                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-l-lg transition-colors ${pathname.startsWith('/admin/settings')
                                    ? 'bg-gold-500/10 text-gold-500 border-r-2 border-gold-500'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-[20px] ${pathname.startsWith('/admin/settings') ? 'fill-1' : ''}`}>
                                    settings
                                </span>
                                Configuración
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="mt-auto p-6 border-t border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-700 overflow-hidden ring-2 ring-slate-800">
                        {/* Placeholder avatar */}
                        <div className="w-full h-full bg-slate-600 flex items-center justify-center text-xs text-white">
                            A
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">Admin</p>
                        <p className="text-xs text-slate-500 truncate">admin@cocoati.com</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-slate-500 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}
