import { createClient } from '@/utils/supabase/server'

interface PageProps {
    params: Promise<{ id: string }>
}

export function generateStaticParams() {
    return [{ id: 'placeholder' }];
}

export default async function MemberDetailPage({ params }: PageProps) {
    const { id } = await params
    const supabase = await createClient()
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', id).single()

    if (!profile) {
        return <div className="text-white">Miembro no encontrado</div>
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-surface-dark border-l-4 border-gold-500 shadow-2xl rounded-r-xl overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-slate-800 bg-gradient-to-b from-slate-800/50 to-transparent flex items-start justify-between">
                    <div className="flex gap-6">
                        <div className="h-20 w-20 rounded-full bg-slate-800 ring-4 ring-surface-dark flex items-center justify-center text-3xl text-gold-500 font-serif font-bold border border-slate-700 shadow-glow">
                            {profile.first_name ? profile.first_name[0] : 'U'}{profile.last_name ? profile.last_name[0] : ''}
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-white">{profile.first_name} {profile.last_name}</h2>
                            <div className="flex items-center gap-3 mt-2">
                                <span className={`inline-flex items-center gap-1 text-sm font-medium ${profile.membership_level === 'imperator' ? 'text-gold-400' : 'text-slate-400'
                                    }`}>
                                    <span className="material-symbols-outlined text-[18px]">
                                        {profile.membership_level === 'imperator' ? 'crown' : 'shield'}
                                    </span>
                                    <span className="capitalize">{profile.membership_level}</span>
                                </span>
                                <span className="text-slate-600 text-xs">•</span>
                                <span className="text-slate-400 text-sm">{profile.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="text-sm bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">edit</span>
                            Editar
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 border-b border-slate-800 divide-x divide-slate-800">
                    <div className="p-6 text-center hover:bg-white/[0.02] transition-colors">
                        <div className="text-gold-500 font-bold text-2xl">{profile.stamps_count || 0}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Sellos Imperiales</div>
                    </div>
                    <div className="p-6 text-center hover:bg-white/[0.02] transition-colors">
                        <div className="text-white font-bold text-2xl">24</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Visitas Totales</div>
                    </div>
                    <div className="p-6 text-center hover:bg-white/[0.02] transition-colors">
                        <div className="text-white font-bold text-2xl">$3.2k</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">LTV Estimado</div>
                    </div>
                </div>

                {/* History Timeline (Mock Data) */}
                <div className="p-8">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Historial Reciente</h3>

                    <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-slate-800/50">
                        {/* Item 1 */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-0 top-1 h-10 w-10 flex items-center justify-center z-10">
                                <div className="h-3 w-3 rounded-full bg-gold-500 ring-4 ring-surface-dark group-hover:ring-gold-500/20 transition-all"></div>
                            </div>
                            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-800 group-hover:border-slate-700 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-white text-base">Latte Vainilla (Magnus)</span>
                                    <span className="text-xs text-slate-500">Hoy, 09:30 AM</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-3">Sucursal Centro • Para llevar</p>
                                <div className="flex items-center gap-3 text-xs">
                                    <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded border border-green-500/20 font-medium">Pagado $55.00</span>
                                    <span className="text-gold-500 flex items-center gap-1 font-medium bg-gold-500/10 px-2 py-1 rounded border border-gold-500/20">
                                        <span className="material-symbols-outlined text-[14px]">verified</span>
                                        +1 Sello
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-0 top-1 h-10 w-10 flex items-center justify-center z-10">
                                <div className="h-3 w-3 rounded-full bg-slate-700 ring-4 ring-surface-dark group-hover:ring-slate-600 transition-all"></div>
                            </div>
                            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-800 group-hover:border-slate-700 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-white text-base">Americano + Croissant</span>
                                    <span className="text-xs text-slate-500">Ayer, 16:45 PM</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-3">Sucursal Norte • Mesa 4</p>
                                <div className="flex items-center gap-3 text-xs">
                                    <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded border border-green-500/20 font-medium">Pagado $85.00</span>
                                    <span className="text-gold-500 flex items-center gap-1 font-medium bg-gold-500/10 px-2 py-1 rounded border border-gold-500/20">
                                        <span className="material-symbols-outlined text-[14px]">verified</span>
                                        +1 Sello
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
