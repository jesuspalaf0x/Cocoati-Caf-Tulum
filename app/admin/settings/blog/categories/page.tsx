'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Category {
    id: string
    name: string
    slug: string
    description: string
    color: string
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

export default function CategoriesPage() {
    const supabase = createClient()
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentCategory, setCurrentCategory] = useState<Partial<Category>>({})

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .order('name', { ascending: true })

        if (error) console.error('Error fetching categories:', error)
        else setCategories(data || [])
        setLoading(false)
    }

    const handleEdit = (category: Category) => {
        setCurrentCategory(category)
        setIsEditing(true)
    }

    const handleCreate = () => {
        setCurrentCategory({})
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar esta categoría?')) return

        const { error } = await supabase.from('categories').delete().eq('id', id)
        if (error) alert('Error: ' + error.message)
        else fetchCategories()
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, slug, description } = currentCategory

        if (!name || !slug) return alert('Nombre y Slug son obligatorios')

        if (currentCategory.id) {
            // Update
            const { error } = await supabase
                .from('categories')
                .update({ name, slug, description, color: currentCategory.color || '#FFD700' })
                .eq('id', currentCategory.id)

            if (error) alert('Error al actualizar: ' + error.message)
        } else {
            // Create
            const { error } = await supabase
                .from('categories')
                .insert({ name, slug, description, color: currentCategory.color || '#FFD700' })

            if (error) alert('Error al crear: ' + error.message)
        }

        setIsEditing(false)
        fetchCategories()
    }

    // Auto-generate slug from name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        if (!currentCategory.id) {
            // Only auto-update slug if creating new
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
            setCurrentCategory({ ...currentCategory, name, slug })
        } else {
            setCurrentCategory({ ...currentCategory, name })
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-2">Categorías del Blog</h2>
                    <p className="text-slate-400 text-sm">Organiza tus entradas en categorías temáticas.</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                >
                    + Nueva Categoría
                </button>
            </div>

            {loading ? (
                <div className="text-center py-20 text-slate-500">Cargando categorías...</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-700 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <th className="py-4 px-4">Nombre</th>
                                <th className="py-4 px-4">Slug</th>
                                <th className="py-4 px-4">Descripción</th>
                                <th className="py-4 px-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {categories.map((cat) => (
                                <tr key={cat.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-3 h-3 rounded-full shadow-sm"
                                                style={{ backgroundColor: cat.color || '#FFD700' }}
                                            />
                                            <span className="font-bold text-white">{cat.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-slate-400 font-mono text-xs">{cat.slug}</td>
                                    <td className="py-4 px-4 text-slate-400 text-sm">{cat.description}</td>
                                    <td className="py-4 px-4 text-right flex justify-end gap-2">
                                        <button onClick={() => handleEdit(cat)} className="text-slate-500 hover:text-gold-500 transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </button>
                                        <button onClick={() => handleDelete(cat.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {isEditing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-surface-dark w-full max-w-md rounded-2xl border border-slate-700 p-6 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-6">{currentCategory.id ? 'Editar Categoría' : 'Nueva Categoría'}</h3>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Nombre</label>
                                <input
                                    type="text"
                                    value={currentCategory.name || ''}
                                    onChange={handleNameChange}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-gold-500 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Slug (URL)</label>
                                <input
                                    type="text"
                                    value={currentCategory.slug || ''}
                                    onChange={e => setCurrentCategory({ ...currentCategory, slug: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 focus:border-gold-500 outline-none font-mono text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Descripción</label>
                                <textarea
                                    value={currentCategory.description || ''}
                                    onChange={e => setCurrentCategory({ ...currentCategory, description: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-gold-500 outline-none h-24 resize-none"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Color Distintivo</label>
                                <div className="flex flex-wrap gap-3">
                                    {PRESET_COLORS.map(color => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setCurrentCategory({ ...currentCategory, color })}
                                            className={`size-8 rounded-full border-2 transition-all ${currentCategory.color === color || (!currentCategory.color && color === '#FFD700') ? 'border-white scale-110 shadow-glow' : 'border-transparent hover:scale-110'}`}
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 rounded-lg transition-colors"
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
