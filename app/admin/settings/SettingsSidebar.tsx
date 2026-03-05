'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SettingsSidebar() {
    const pathname = usePathname()

    const sections = [
        {
            title: 'General',
            items: [
                { name: 'Vista general', href: '/admin/settings', icon: 'grid_view' }
            ]
        },
        {
            title: 'Usuarios y roles',
            items: [
                { name: 'Gestión de usuarios', href: '/admin/settings/users', icon: 'manage_accounts' },
                { name: 'Configuración de niveles', href: '/admin/settings/levels', icon: 'shield_person' }
            ]
        },
        {
            title: 'Control de Menu',
            items: [
                { name: 'Categorías', href: '/admin/settings/menu/categories', icon: 'category' },
                { name: 'Etiquetas', href: '/admin/settings/menu/tags', icon: 'label' },
                { name: 'Modificadores', href: '/admin/settings/menu/modifiers', icon: 'tune' }
            ]
        },
        {
            title: 'Blog CMS',
            items: [
                { name: 'Autores', href: '/admin/settings/blog/authors', icon: 'edit_note' },
                { name: 'Categorías de blog', href: '/admin/settings/blog/categories', icon: 'topic' }
            ]
        }
    ]

    return (
        <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 bg-panel-dark/50 border-r border-slate-800/50 flex flex-col overflow-y-auto custom-scrollbar">
            <div className="py-4 md:py-8 lg:py-8 pr-4">
                <nav className="flex flex-col gap-6 lg:gap-8">
                    {sections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="px-4 text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-3">
                                {section.title}
                            </h3>
                            <div className="flex flex-col gap-1">
                                {section.items.map((item) => {
                                    const isActive = pathname === item.href

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all ${isActive
                                                    ? 'bg-gradient-to-r from-primary/15 to-transparent border-l-[3px] border-primary text-slate-100 rounded-r-lg'
                                                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-100 rounded-lg'
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    )
}
