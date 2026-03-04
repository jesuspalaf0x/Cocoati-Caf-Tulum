'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

interface CRMLevel {
    id: string
    name: string
    color: string
    icon: string
}

const PRESET_COLORS = [
    '#FFD700', // Imperial Gold
    '#94a3b8', // Slate 400
    '#a855f7', // Purple 500
    '#ef4444', // Red 500
    '#10b981', // Emerald 500
    '#3b82f6', // Blue 500
    '#f59e0b', // Amber 500
    '#ec4899', // Pink 500
]

const AVAILABLE_ICONS = [
    'shield', 'military_tech', 'crown', 'star', 'diamond', 'workspace_premium', 'verified', 'local_fire_department'
]

export default function CRMLevelsPage() {
    const supabase = createClient()
    const [levels, setLevels] = useState<CRMLevel[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentLevel, setCurrentLevel] = useState<Partial<CRMLevel>>({})

    useEffect(() => {
        fetchLevels()
    }, [])

    const fetchLevels = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('crm_levels')
            .select('*')
            .order('created_at', { ascending: true })

        if (error) console.error('Error fetching levels:', error)
        else setLevels(data || [])
        setLoading(false)
    }

    const handleEdit = (level: CRMLevel) => {
        setCurrentLevel(level)
        setIsEditing(true)
    }

    const handleCreate = () => {
        setCurrentLevel({ color: '#FFD700', icon: 'shield' })
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar este nivel imperial?')) return

        const { error } = await supabase.from('crm_levels').delete().eq('id', id)
        if (error) alert('Error: ' + error.message)
        else fetchLevels()
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, color, icon } = currentLevel

        if (!name) return alert('El nombre es obligatorio')

        if (currentLevel.id) {
            // Update
            const { error } = await supabase
                .from('crm_levels')
                .update({ name, color, icon })
                .eq('id', currentLevel.id)

            if (error) alert('Error al actualizar: ' + error.message)
        } else {
            // Create
            const { error } = await supabase
                .from('crm_levels')
                .insert({ name, color, icon })

            if (error) alert('Error al crear: ' + error.message)
        }

        setIsEditing(false)
        fetchLevels()
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-6">
                <Link href="/admin/crm" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold-500 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Volver al Directorio
                </Link>
            </div>

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-2">Configuración de Niveles</h2>
                    <p className="text-slate-400 text-sm">Gestiona los rangos del Club de Emperadores.</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Nuevo Nivel
                </button>
            </div>

            {loading ? (
                <div className="text-center py-20 text-slate-500 flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gold-500"></div>
                    Cargando rangos imperiales...
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {levels.map((level) => (
                        <div key={level.id} className="bg-surface-dark border border-slate-800 rounded-xl p-6 hover:border-gold-500/50 transition-colors group relative shadow-xl">
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(level)} className="p-1.5 text-slate-400 hover:text-white bg-black/50 rounded-lg hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button onClick={() => handleDelete(level.id)} className="p-1.5 text-slate-400 hover:text-red-400 bg-black/50 rounded-lg hover:bg-red-900/30 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                            </div>

                            <div className="flex items-center gap-4 mb-2">
                                <div
                                    className="size-12 rounded-xl flex items-center justify-center shadow-lg border border-white/10"
                                    style={{ backgroundColor: `${level.color}20`, color: level.color, borderColor: `${level.color}40` }}
                                >
                                    <span className="material-symbols-outlined text-2xl">{level.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">{level.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="size-3 rounded-full" style={{ backgroundColor: level.color }}></div>
                                        <span className="text-xs text-slate-400 font-mono">{level.color}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isEditing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-surface-dark w-full max-w-md rounded-2xl border border-slate-700 p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-gold-500">military_tech</span>
                            {currentLevel.id ? 'Editar Nivel' : 'Nuevo Nivel'}
                        </h3>
                        <form onSubmit={handleSave} className="space-y-6">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Nombre del Rango</label>
                                <input
                                    type="text"
                                    value={currentLevel.name || ''}
                                    onChange={e => setCurrentLevel({ ...currentLevel, name: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                                    placeholder="Ej: Centurión"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Color Distintivo</label>
                                <div className="flex flex-wrap gap-3">
                                    {PRESET_COLORS.map(color => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setCurrentLevel({ ...currentLevel, color })}
                                            className={`size-8 rounded-full border-2 transition-all ${currentLevel.color === color ? 'border-white scale-110 shadow-glow' : 'border-transparent hover:scale-110'}`}
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Ícono</label>
                                <div className="grid grid-cols-4 gap-3">
                                    {AVAILABLE_ICONS.map(icon => (
                                        <button
                                            key={icon}
                                            type="button"
                                            onClick={() => setCurrentLevel({ ...currentLevel, icon })}
                                            className={`p-3 rounded-xl border flex items-center justify-center transition-all ${currentLevel.icon === icon ? 'border-gold-500 bg-gold-500/10 text-gold-500' : 'border-slate-800 bg-black/20 text-slate-400 hover:border-slate-600 hover:text-white'}`}
                                            title={icon}
                                        >
                                            <span className="material-symbols-outlined">{icon}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 pt-6 border-t border-slate-800">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 py-3 rounded-lg text-slate-400 font-semibold hover:text-white hover:bg-slate-800 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-bold py-3 rounded-lg shadow-lg shadow-gold-500/20 transition-all"
                                >
                                    Guardar Nivel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
