'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

// Dynamically import RichTextEditor to avoid SSR issues with Tiptap
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false })

export default function NewPostPage() {
    const supabase = createClient()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState('draft')
    const [category, setCategory] = useState('Cultura')
    const [author, setAuthor] = useState('Maestro Barista')
    const [hashtags, setHashtags] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [categoriesList, setCategoriesList] = useState<{ id: string, name: string }[]>([])
    const [authorsList, setAuthorsList] = useState<{ id: string, name: string }[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const { data: cats } = await supabase.from('categories').select('id, name').order('name')
            const { data: auths } = await supabase.from('authors').select('id, name').order('name')

            if (cats) {
                setCategoriesList(cats)
                // Set default if empty and list available
                if (!category && cats.length > 0) setCategory(cats[0].name)
            }
            if (auths) {
                setAuthorsList(auths)
                // Set default if empty and list available
                if (!author && auths.length > 0) setAuthor(auths[0].name)
            }
        }
        fetchData()
    }, [])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setImage(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        let imageUrl = null

        if (image) {
            const fileExt = image.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const { error: uploadError, data } = await supabase.storage
                .from('blog-images')
                .upload(fileName, image)

            if (uploadError) {
                alert('Error subiendo imagen: ' + uploadError.message)
                setLoading(false)
                return
            }

            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(fileName)

            imageUrl = publicUrl
        }

        // Process hashtags from string to array
        const hashtagsArray = hashtags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')

        const { error } = await supabase.from('posts').insert({
            title,
            content,
            status,
            category,
            author,
            hashtags: hashtagsArray,
            image_url: imageUrl,
        })

        if (error) {
            alert('Error guardando post: ' + error.message)
        } else {
            router.push('/admin/blog')
            router.refresh()
        }
        setLoading(false)
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold text-white">Escribir Crónica</h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-surface-dark p-8 rounded-2xl border border-slate-800 shadow-xl space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Image Upload - Left Column */}
                    <div className="md:col-span-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Portada</label>
                        <div className="relative group cursor-pointer border-2 border-dashed border-slate-700 rounded-xl overflow-hidden hover:border-gold-500 transition-colors bg-black/20 aspect-[3/4] flex items-center justify-center">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                            />
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="text-center p-4">
                                    <span className="material-symbols-outlined text-4xl text-slate-500 mb-2 group-hover:text-gold-500 transition-colors">add_photo_alternate</span>
                                    <p className="text-slate-500 text-xs text-center">Click para subir portada</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Fields - Right Columns */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Título</label>
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="w-full bg-black/20 border border-slate-800 rounded-lg px-4 py-3 text-xl font-bold text-white focus:outline-none focus:border-gold-500 transition-colors"
                                placeholder="El Nuevo Amanecer del Imperio..."
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Categoría</label>
                                <select
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    className="w-full bg-black/20 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-gold-500 appearance-none"
                                >
                                    <option value="" disabled>Seleccionar...</option>
                                    {categoriesList.map(cat => (
                                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                                    ))}
                                    {categoriesList.length === 0 && <option value="Cultura">Cultura (Default)</option>}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Autor</label>
                                <select
                                    value={author}
                                    onChange={e => setAuthor(e.target.value)}
                                    className="w-full bg-black/20 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-gold-500 appearance-none"
                                >
                                    <option value="" disabled>Seleccionar...</option>
                                    {authorsList.map(auth => (
                                        <option key={auth.id} value={auth.name}>{auth.name}</option>
                                    ))}
                                    {authorsList.length === 0 && <option value="Admin">Admin (Default)</option>}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Hashtags (separados por coma)</label>
                            <input
                                type="text"
                                value={hashtags}
                                onChange={e => setHashtags(e.target.value)}
                                className="w-full bg-black/20 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-gold-500 transition-colors"
                                placeholder="ej. #cafe, #tulum, #evento"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contenido</label>
                    <RichTextEditor content={content} onChange={setContent} />
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-bold text-slate-400">Estado:</label>
                        <select
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            className="bg-black/20 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500"
                        >
                            <option value="draft">Borrador</option>
                            <option value="published">Publicado</option>
                        </select>
                    </div>

                    <div className="flex-1"></div>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-gold-600 hover:bg-gold-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-gold-500/20 transition-all hover:translate-y-[-2px] disabled:opacity-50 flex items-center gap-2"
                    >
                        {loading && <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>}
                        {loading ? 'Guardando...' : 'Guardar Crónica'}
                    </button>
                </div>

            </form>
        </div>
    )
}

