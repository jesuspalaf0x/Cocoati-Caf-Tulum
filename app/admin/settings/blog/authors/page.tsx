'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Author {
    id: string
    name: string
    role: string
    bio: string
    avatar_url: string
}

export default function AuthorsPage() {
    const supabase = createClient()
    const [authors, setAuthors] = useState<Author[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentAuthor, setCurrentAuthor] = useState<Partial<Author>>({})

    useEffect(() => {
        fetchAuthors()
    }, [])

    const fetchAuthors = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('authors')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) console.error('Error fetching authors:', error)
        else setAuthors(data || [])
        setLoading(false)
    }

    const handleEdit = (author: Author) => {
        setCurrentAuthor(author)
        setIsEditing(true)
    }

    const handleCreate = () => {
        setCurrentAuthor({})
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar este autor?')) return

        const { error } = await supabase.from('authors').delete().eq('id', id)
        if (error) alert('Error: ' + error.message)
        else fetchAuthors()
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, role, bio, avatar_url } = currentAuthor

        if (!name) return alert('El nombre es obligatorio')

        if (currentAuthor.id) {
            // Update
            const { error } = await supabase
                .from('authors')
                .update({ name, role, bio, avatar_url })
                .eq('id', currentAuthor.id)

            if (error) alert('Error al actualizar: ' + error.message)
        } else {
            // Create
            const { error } = await supabase
                .from('authors')
                .insert({ name, role, bio, avatar_url })

            if (error) alert('Error al crear: ' + error.message)
        }

        setIsEditing(false)
        fetchAuthors()
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-2">Autores del Blog</h2>
                    <p className="text-slate-400 text-sm">Gestiona los perfiles que aparecen en las entradas del blog.</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
                >
                    + Nuevo Autor
                </button>
            </div>

            {loading ? (
                <div className="text-center py-20 text-slate-500">Cargando autores...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {authors.map((author) => (
                        <div key={author.id} className="bg-black/20 border border-slate-800 rounded-xl p-6 hover:border-gold-500/50 transition-colors group relative">
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(author)} className="p-1 text-slate-400 hover:text-white bg-black/50 rounded">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button onClick={() => handleDelete(author.id)} className="p-1 text-slate-400 hover:text-red-400 bg-black/50 rounded">
                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="size-12 rounded-full overflow-hidden bg-slate-700 border border-slate-600">
                                    {author.avatar_url ? (
                                        <img src={author.avatar_url} alt={author.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                                            {author.name[0]}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{author.name}</h3>
                                    <p className="text-xs text-gold-500 uppercase tracking-wider">{author.role || 'Colaborador'}</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 line-clamp-3">{author.bio || 'Sin biografía'}</p>
                        </div>
                    ))}
                </div>
            )}

            {isEditing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-surface-dark w-full max-w-md rounded-2xl border border-slate-700 p-6 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-6">{currentAuthor.id ? 'Editar Autor' : 'Nuevo Autor'}</h3>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Nombre</label>
                                <input
                                    type="text"
                                    value={currentAuthor.name || ''}
                                    onChange={e => setCurrentAuthor({ ...currentAuthor, name: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-gold-500 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Rol / Título</label>
                                <input
                                    type="text"
                                    value={currentAuthor.role || ''}
                                    onChange={e => setCurrentAuthor({ ...currentAuthor, role: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-gold-500 outline-none"
                                    placeholder="ej. Maestro Barista"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Avatar URL</label>
                                <input
                                    type="text"
                                    value={currentAuthor.avatar_url || ''}
                                    onChange={e => setCurrentAuthor({ ...currentAuthor, avatar_url: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-gold-500 outline-none"
                                    placeholder="https://..."
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Biografía</label>
                                <textarea
                                    value={currentAuthor.bio || ''}
                                    onChange={e => setCurrentAuthor({ ...currentAuthor, bio: e.target.value })}
                                    className="w-full bg-black/20 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-gold-500 outline-none h-24 resize-none"
                                />
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
