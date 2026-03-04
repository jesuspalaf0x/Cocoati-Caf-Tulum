'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

interface MenuCategory {
    id: string
    name: string
    slug: string
    order_index: number
}

export default function MenuCategoriesPage() {
    const supabase = createClient()
    const [categories, setCategories] = useState<MenuCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentCategory, setCurrentCategory] = useState<Partial<MenuCategory>>({})

    const fetchCategories = useCallback(async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('menu_categories')
            .select('*')
            .order('order_index', { ascending: true })

        if (error) console.error('Error fetching categories:', error)
        else setCategories(data || [])
        setLoading(false)
    }, [supabase])

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    const handleEdit = (category: MenuCategory) => {
        setCurrentCategory(category)
        setIsEditing(true)
    }

    const handleCreate = () => {
        setCurrentCategory({ order_index: categories.length })
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar esta categoría del menú?')) return

        const { error } = await supabase.from('menu_categories').delete().eq('id', id)
        if (error) alert('Error: ' + error.message)
        else fetchCategories()
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, slug, order_index } = currentCategory

        if (!name || !slug) return alert('Nombre y Slug son obligatorios')

        if (currentCategory.id) {
            // Update
            const { error } = await supabase
                .from('menu_categories')
                .update({ name, slug, order_index })
                .eq('id', currentCategory.id)

            if (error) alert('Error al actualizar: ' + error.message)
        } else {
            // Create
            const { error } = await supabase
                .from('menu_categories')
                .insert({ name, slug, order_index })

            if (error) alert('Error al crear: ' + error.message)
        }

        setIsEditing(false)
        fetchCategories()
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        if (!currentCategory.id) {
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
            setCurrentCategory({ ...currentCategory, name, slug })
        } else {
            setCurrentCategory({ ...currentCategory, name })
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
                    <h2 className="text-2xl font-serif font-bold text-white mb-2">Categorías del Menú</h2>
                    <p className="text-slate-400 text-sm">Gestiona las clasificaciones de tus productos.</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Nueva Categoría
                </button>
            </div>

            <div className="bg-surface-dark rounded-xl border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-black/20 text-xs uppercase tracking-wider text-slate-500 font-medium">
                                <th className="px-6 py-4">Orden</th>
                                <th className="px-6 py-4">Nombre</th>
                                <th className="px-6 py-4">Slug</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gold-500 mx-auto mb-3"></div>
                                        Cargando categorías...
                                    </td>
                                </tr>
                            ) : categories.length > 0 ? (
                                categories.map((cat) => (
                                    <tr key={cat.id} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 text-slate-400 font-mono">{cat.order_index}</td>
                                        <td className="px-6 py-4 font-bold text-white">{cat.name}</td>
                                        <td className="px-6 py-4 text-slate-400 text-sm bg-black/20 rounded px-2">{cat.slug}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEdit(cat)} className="p-2 text-slate-400 hover:text-white bg-black/50 rounded-lg hover:bg-slate-700 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button onClick={() => handleDelete(cat.id)} className="p-2 text-slate-400 hover:text-red-400 bg-black/50 rounded-lg hover:bg-red-900/30 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        No hay categorías configuradas.
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
                            <span className="material-symbols-outlined text-gold-500">category</span>
                            {currentCategory.id ? 'Editar Categoría' : 'Nueva Categoría'}
                        </h3>
                        <form onSubmit={handleSave} className="space-y-5">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Nombre</label>
                                <input
                                    type="text"
                                    value={currentCategory.name || ''}
                                    onChange={handleNameChange}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                                    placeholder="Ej: Bebidas Calientes"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Slug (URL)</label>
                                <input
                                    type="text"
                                    value={currentCategory.slug || ''}
                                    onChange={e => setCurrentCategory({ ...currentCategory, slug: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-slate-400 font-mono text-sm focus:border-gold-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Orden de Visualización</label>
                                <input
                                    type="number"
                                    value={currentCategory.order_index || 0}
                                    onChange={e => setCurrentCategory({ ...currentCategory, order_index: parseInt(e.target.value) })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                                />
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
