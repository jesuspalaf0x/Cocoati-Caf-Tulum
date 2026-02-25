import Link from 'next/link'

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col md:flex-row gap-8 h-full">
            {/* Settings Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <nav className="space-y-8">
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">General</h3>
                        <div className="space-y-1">
                            <Link href="/admin/settings" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium">
                                Vista General
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">Usuarios y Roles</h3>
                        <div className="space-y-1">
                            <Link href="/admin/settings/users" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium">
                                Gestión de Usuarios
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">Blog CMS</h3>
                        <div className="space-y-1">
                            <Link href="/admin/settings/blog/authors" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium">
                                Autores
                            </Link>
                            <Link href="/admin/settings/blog/categories" className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium">
                                Categorías
                            </Link>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 bg-surface-dark rounded-2xl border border-slate-800 p-8 shadow-sm">
                {children}
            </main>
        </div>
    )
}
