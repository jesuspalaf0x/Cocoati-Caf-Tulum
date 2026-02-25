import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function CRMPage() {
    const supabase = await createClient()
    const { data: profiles } = await supabase.from('profiles').select('*').order('created_at', { ascending: false })

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white">Directorio de Miembros</h2>
                    <span className="inline-flex items-center gap-2 mt-2 px-2.5 py-0.5 rounded-full bg-gold-900/30 text-gold-500 text-xs font-medium border border-gold-900/50">
                        Total: {profiles?.length || 0}
                    </span>
                </div>

                <div className="flex gap-3">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-500 transition-colors">search</span>
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            className="pl-10 pr-4 py-2.5 bg-surface-dark border border-slate-800 rounded-lg text-slate-200 text-sm focus:outline-none focus:border-gold-500 w-64 transition-colors"
                        />
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white text-sm font-semibold rounded-lg hover:shadow-glow transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        Nuevo Miembro
                    </button>
                </div>
            </div>

            <div className="bg-surface-dark rounded-xl border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-black/20 text-xs uppercase tracking-wider text-slate-500 font-medium">
                                <th className="px-6 py-4">Miembro</th>
                                <th className="px-6 py-4">Contacto</th>
                                <th className="px-6 py-4">Nivel</th>
                                <th className="px-6 py-4">Sellos Imperiales</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {profiles && profiles.map((profile) => (
                                <tr key={profile.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-gold-500 font-serif font-bold border border-slate-700">
                                                {profile.first_name ? profile.first_name[0] : 'U'}{profile.last_name ? profile.last_name[0] : ''}
                                            </div>
                                            <div>
                                                <div className="font-medium text-white group-hover:text-gold-500 transition-colors">
                                                    {profile.first_name} {profile.last_name}
                                                </div>
                                                <div className="text-xs text-slate-500">Miembro desde {new Date(profile.created_at).getFullYear()}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-300">{profile.email}</div>
                                        <div className="text-xs text-slate-500">{profile.phone || '--'}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${profile.membership_level === 'imperator' ? 'bg-gold-900/30 text-gold-400 border-gold-500/30' :
                                                profile.membership_level === 'centurion' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                                    'bg-slate-700/30 text-slate-400 border-slate-700/50'
                                            }`}>
                                            <span className="material-symbols-outlined text-[14px]">
                                                {profile.membership_level === 'imperator' ? 'crown' : profile.membership_level === 'centurion' ? 'military_tech' : 'shield'}
                                            </span>
                                            <span className="capitalize">{profile.membership_level}</span>
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="w-full max-w-[140px]">
                                            <div className="flex justify-between text-xs mb-1.5">
                                                <span className="text-gold-500 font-bold">{profile.stamps_count || 0}</span>
                                                <span className="text-slate-600">/ 10</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full" style={{ width: `${(profile.stamps_count || 0) * 10}%` }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link
                                            href={`/admin/crm/${profile.id}`}
                                            className="text-sm text-slate-400 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 rounded px-3 py-1.5"
                                        >
                                            Ver Detalle
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {(!profiles || profiles.length === 0) && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        No se encontraron miembros imperiales.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
