import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

interface Post {
    id: string
    title: string
    content: string
    image_url: string | null
    status: string
    created_at: string
}

export default async function BlogListPage() {
    const supabase = await createClient()
    const { data: posts } = await supabase.from('posts').select('*').order('created_at', { ascending: false }) as { data: Post[] | null }

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white">Crónicas de la Corte</h2>
                    <p className="text-slate-500 text-sm mt-1">Gestiona las noticias y eventos del imperio.</p>
                </div>
                <Link
                    href="/admin/blog/new"
                    className="bg-gold-600 hover:bg-gold-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-gold-500/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    Nueva Crónica
                </Link>
            </div>

            <div className="grid gap-6">
                {posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="bg-surface-dark p-6 rounded-xl border border-slate-800 flex gap-6 items-start hover:border-slate-700 transition-colors group">
                            {post.image_url && (
                                <div className="w-32 h-24 bg-black/20 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${post.status === 'published'
                                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                        : 'bg-slate-700/50 text-slate-400 border border-slate-700'
                                        }`}>
                                        {post.status === 'published' ? 'Publicado' : 'Borrador'}
                                    </span>
                                    <span className="text-xs text-slate-500">
                                        {new Date(post.created_at).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                                <p className="text-slate-400 text-sm line-clamp-2">{post.content}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">edit</span>
                                </button>
                                <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-400 transition-colors">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-surface-dark border border-slate-800 rounded-xl border-dashed">
                        <span className="material-symbols-outlined text-4xl text-slate-600 mb-4">article</span>
                        <p className="text-slate-400">Aún no hay crónicas escritas.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
