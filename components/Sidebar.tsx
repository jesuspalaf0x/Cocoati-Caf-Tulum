'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import BrandLogo from './BrandLogo'

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
        <aside className="w-72 flex-shrink-0 border-r border-slate-800 bg-surface-dark hidden md:flex flex-col">
            <div className="p-6">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-12 w-12 rounded-xl bg-[image:var(--background-image-gold-gradient)] flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <BrandLogo className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-white brand-text">COCOATI</h3>
                        <p className="text-xs text-primary font-medium tracking-wider uppercase">Panel Admin</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-4 px-4">Gestión</p>
                        <nav className="space-y-1">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-lg transition-all group ${isActive
                                            ? 'nav-item-active font-bold'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span className={`material-symbols-outlined text-[20px] ${isActive ? '' : 'group-hover:text-primary transition-colors'}`}>
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-4 px-4">Sistema</p>
                        <nav className="space-y-1">
                            <Link
                                href="/admin/settings"
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-lg transition-all group ${pathname.startsWith('/admin/settings')
                                    ? 'nav-item-active font-bold'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-[20px] ${pathname.startsWith('/admin/settings') ? '' : 'group-hover:text-primary transition-colors'}`}>
                                    settings
                                </span>
                                Configuración
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="mt-auto p-6 border-t border-slate-800/50">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-light border border-slate-800">
                    <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-slate-700 overflow-hidden ring-2 ring-primary/30 flex items-center justify-center text-xs text-white">
                            A
                        </div>
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 border-2 border-surface-light rounded-full"></span>
                    </div>
                    <div className="overflow-hidden flex-1">
                        <p className="text-sm font-medium text-white truncate">Admin Cocoati</p>
                        <p className="text-xs text-slate-400 truncate">admin@cocoati.com</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-slate-500 hover:text-red-400 transition-colors"
                        title="Cerrar Sessión"
                    >
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}
