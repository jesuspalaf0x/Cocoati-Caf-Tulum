'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

interface MenuModifier {
    id: string
    name: string
    price: number
    is_active: boolean
}

export default function MenuModifiersPage() {
    const supabase = createClient()
    const [modifiers, setModifiers] = useState<MenuModifier[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentModifier, setCurrentModifier] = useState<Partial<MenuModifier>>({})

    const fetchModifiers = useCallback(async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('menu_modifiers')
            .select('*')
            .order('name', { ascending: true })

        if (error) console.error('Error fetching modifiers:', error)
        else setModifiers(data || [])
        setLoading(false)
    }, [supabase])

    useEffect(() => {
        fetchModifiers()
    }, [fetchModifiers])

    const handleEdit = (modifier: MenuModifier) => {
        setCurrentModifier(modifier)
        setIsEditing(true)
    }

    const handleCreate = () => {
        setCurrentModifier({ price: 0, is_active: true })
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar este modificador?')) return

        const { error } = await supabase.from('menu_modifiers').delete().eq('id', id)
        if (error) alert('Error: ' + error.message)
        else fetchModifiers()
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, price, is_active } = currentModifier

        if (!name || price === undefined) return alert('Nombre y Precio son obligatorios')

        if (currentModifier.id) {
            // Update
            const { error } = await supabase
                .from('menu_modifiers')
                .update({ name, price, is_active })
                .eq('id', currentModifier.id)

            if (error) alert('Error al actualizar: ' + error.message)
        } else {
            // Create
            const { error } = await supabase
                .from('menu_modifiers')
                .insert({ name, price, is_active })

            if (error) alert('Error al crear: ' + error.message)
        }

        setIsEditing(false)
        fetchModifiers()
    }

    const toggleActive = async (modifier: MenuModifier) => {
        const { error } = await supabase
            .from('menu_modifiers')
            .update({ is_active: !modifier.is_active })
            .eq('id', modifier.id)

        if (!error) fetchModifiers()
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
                    <h2 className="text-2xl font-serif font-bold text-white mb-2">Modificadores de Producto</h2>
                    <p className="text-slate-400 text-sm">Gestiona extras, tipos de leche y personalizaciones.</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Nuevo Modificador
                </button>
            </div>

            <div className="bg-surface-dark rounded-xl border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-black/20 text-xs uppercase tracking-wider text-slate-500 font-medium">
                                <th className="px-6 py-4">Nombre</th>
                                <th className="px-6 py-4">Precio Extra</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gold-500 mx-auto mb-3"></div>
                                        Cargando modificadores...
                                    </td>
                                </tr>
                            ) : modifiers.length > 0 ? (
                                modifiers.map((mod) => (
                                    <tr key={mod.id} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 font-bold text-white">{mod.name}</td>
                                        <td className="px-6 py-4 text-emerald-400 font-mono">
                                            {mod.price > 0 ? `+$${mod.price.toFixed(2)}` : 'Gratis'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => toggleActive(mod)}
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${mod.is_active ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20' : 'bg-slate-700/30 text-slate-400 border-slate-700/50 hover:bg-slate-700/50'}`}
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full ${mod.is_active ? 'bg-green-400' : 'bg-slate-400'}`}></div>
                                                {mod.is_active ? 'Activo' : 'Inactivo'}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEdit(mod)} className="p-2 text-slate-400 hover:text-white bg-black/50 rounded-lg hover:bg-slate-700 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button onClick={() => handleDelete(mod.id)} className="p-2 text-slate-400 hover:text-red-400 bg-black/50 rounded-lg hover:bg-red-900/30 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                                        No hay modificadores configurados.
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
                            <span className="material-symbols-outlined text-gold-500">tune</span>
                            {currentModifier.id ? 'Editar Modificador' : 'Nuevo Modificador'}
                        </h3>
                        <form onSubmit={handleSave} className="space-y-5">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Nombre</label>
                                <input
                                    type="text"
                                    value={currentModifier.name || ''}
                                    onChange={e => setCurrentModifier({ ...currentModifier, name: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                                    placeholder="Ej: Leche de Almendras"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Precio Extra ($)</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={currentModifier.price || 0}
                                    onChange={e => setCurrentModifier({ ...currentModifier, price: parseFloat(e.target.value) })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between p-4 border border-slate-800 rounded-lg bg-black/20">
                                <div>
                                    <div className="text-sm font-bold text-white">Estado Activo</div>
                                    <div className="text-xs text-slate-500 mt-1">Disponible para agregar a productos</div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={currentModifier.is_active || false}
                                        onChange={e => setCurrentModifier({ ...currentModifier, is_active: e.target.checked })}
                                    />
                                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                                </label>
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
