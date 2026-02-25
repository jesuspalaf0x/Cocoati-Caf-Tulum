import { createClient } from '@/utils/supabase/server'

export default async function AdminPage() {
    const supabase = await createClient()

    // Fetch some basic stats
    const { count: productsCount } = await supabase.from('products').select('*', { count: 'exact', head: true })
    const { count: profilesCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true })
    const { count: postsCount } = await supabase.from('posts').select('*', { count: 'exact', head: true })

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-dark p-6 rounded-xl border border-slate-800 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">Miembros del Club</h3>
                    <span className="material-symbols-outlined text-gold-500">groups</span>
                </div>
                <p className="text-3xl font-serif font-bold text-white">{profilesCount || 0}</p>
                <p className="text-xs text-slate-500 mt-2">Emperadores registrados</p>
            </div>

            <div className="bg-surface-dark p-6 rounded-xl border border-slate-800 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">Productos en Menú</h3>
                    <span className="material-symbols-outlined text-gold-500">restaurant_menu</span>
                </div>
                <p className="text-3xl font-serif font-bold text-white">{productsCount || 0}</p>
                <p className="text-xs text-slate-500 mt-2">Items activos</p>
            </div>

            <div className="bg-surface-dark p-6 rounded-xl border border-slate-800 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">Crónicas Publicadas</h3>
                    <span className="material-symbols-outlined text-gold-500">article</span>
                </div>
                <p className="text-3xl font-serif font-bold text-white">{postsCount || 0}</p>
                <p className="text-xs text-slate-500 mt-2">Posts en el blog</p>
            </div>
        </div>
    )
}
