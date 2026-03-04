'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

interface MenuTag {
    id: string
    name: string
    slug: string
    color: string
}

const PRESET_COLORS = [
    '#ef4444', // Red 500
    '#f59e0b', // Amber 500
    '#10b981', // Emerald 500
    '#3b82f6', // Blue 500
    '#8b5cf6', // Violet 500
    '#ec4899', // Pink 500
    '#64748b', // Slate 500
    '#FFD700', // Gold
]

export default function MenuTagsPage() {
    const supabase = createClient()
    const [tags, setTags] = useState<MenuTag[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentTag, setCurrentTag] = useState<Partial<MenuTag>>({})

    const fetchTags = useCallback(async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('menu_tags')
            .select('*')
            .order('name', { ascending: true })

        if (error) console.error('Error fetching tags:', error)
        else setTags(data || [])
        setLoading(false)
    }, [supabase])

    useEffect(() => {
        fetchTags()
    }, [fetchTags])

    const handleEdit = (tag: MenuTag) => {
        setCurrentTag(tag)
        setIsEditing(true)
    }

    const handleCreate = () => {
        setCurrentTag({ color: '#f59e0b' })
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar esta etiqueta?')) return

        const { error } = await supabase.from('menu_tags').delete().eq('id', id)
        if (error) alert('Error: ' + error.message)
        else fetchTags()
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, slug, color } = currentTag

        if (!name || !slug) return alert('Nombre y Slug son obligatorios')

        if (currentTag.id) {
            // Update
            const { error } = await supabase
                .from('menu_tags')
                .update({ name, slug, color })
                .eq('id', currentTag.id)

            if (error) alert('Error al actualizar: ' + error.message)
        } else {
            // Create
            const { error } = await supabase
                .from('menu_tags')
                .insert({ name, slug, color })

            if (error) alert('Error al crear: ' + error.message)
        }

        setIsEditing(false)
        fetchTags()
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        if (!currentTag.id) {
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
            setCurrentTag({ ...currentTag, name, slug })
        } else {
            setCurrentTag({ ...currentTag, name })
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <Link href="/admin/menu" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold-500 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Volver al Menú
                </Link>
            </div>

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-2">Etiquetas de Menú</h2>
                    <p className="text-slate-400 text-sm">Gestiona insignias como "Nuevo", "Más Vendido", "Vegano".</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Nueva Etiqueta
                </button>
            </div>

            <div className="bg-surface-dark rounded-xl border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-black/20 text-xs uppercase tracking-wider text-slate-500 font-medium">
                                <th className="px-6 py-4">Etiqueta</th>
                                <th className="px-6 py-4">Color</th>
                                <th className="px-6 py-4">Slug</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gold-500 mx-auto mb-3"></div>
                                        Cargando etiquetas...
                                    </td>
                                </tr>
                            ) : tags.length > 0 ? (
                                tags.map((tag) => (
                                    <tr key={tag.id} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4">
                                            <span
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border"
                                                style={{
                                                    backgroundColor: `${tag.color || '#f59e0b'}15`,
                                                    color: tag.color || '#f59e0b',
                                                    borderColor: `${tag.color || '#f59e0b'}30`
                                                }}
                                            >
                                                {tag.name}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="size-4 rounded-full border border-slate-700" style={{ backgroundColor: tag.color || '#f59e0b' }}></div>
                                                <span className="text-slate-400 font-mono text-sm">{tag.color}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-400 text-sm bg-black/20 rounded px-2">{tag.slug}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEdit(tag)} className="p-2 text-slate-400 hover:text-white bg-black/50 rounded-lg hover:bg-slate-700 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button onClick={() => handleDelete(tag.id)} className="p-2 text-slate-400 hover:text-red-400 bg-black/50 rounded-lg hover:bg-red-900/30 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        No hay etiquetas configuradas.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isEditing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-surface-dark w-full max-w-md rounded-2xl border border-slate-700 p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-gold-500">sell</span>
                            {currentTag.id ? 'Editar Etiqueta' : 'Nueva Etiqueta'}
                        </h3>
                        <form onSubmit={handleSave} className="space-y-5">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Nombre</label>
                                <input
                                    type="text"
                                    value={currentTag.name || ''}
                                    onChange={handleNameChange}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                                    placeholder="Ej: Nuevo, Vegano, Popular"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Slug (URL)</label>
                                <input
                                    type="text"
                                    value={currentTag.slug || ''}
                                    onChange={e => setCurrentTag({ ...currentTag, slug: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-slate-400 font-mono text-sm focus:border-gold-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Color de la Etiqueta</label>
                                <div className="flex flex-wrap gap-3">
                                    {PRESET_COLORS.map(color => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setCurrentTag({ ...currentTag, color })}
                                            className={`size-8 rounded-full border-2 transition-all ${currentTag.color === color || (!currentTag.color && color === '#f59e0b') ? 'border-white scale-110 shadow-glow' : 'border-transparent hover:scale-110'}`}
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
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
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
