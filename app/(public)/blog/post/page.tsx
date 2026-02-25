"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

function BlogPostContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");
    const supabase = createClient();

    const [post, setPost] = useState<any>(null);
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            setError(null);

            try {
                let query = supabase.from("posts").select("*");

                if (id) {
                    query = query.eq("id", id);
                } else if (slug) {
                    query = query.eq("slug", slug);
                } else {
                    throw new Error("No post identifier provided");
                }

                const { data, error } = await query.single();

                if (error) {
                    throw error;
                }

                if (!data) {
                    throw new Error("Post not found");
                }

                setPost(data);

                // Fetch some related/recent posts
                const { data: relatedData } = await supabase
                    .from("posts")
                    .select("*")
                    .neq("id", data.id)
                    .order("created_at", { ascending: false })
                    .limit(3);

                setRelatedPosts(relatedData || []);

            } catch (err: any) {
                console.error("Error fetching post:", err);
                setError(err.message || "Failed to load post");
            } finally {
                setLoading(false);
            }
        };

        if (id || slug) {
            fetchPost();
        } else {
            setLoading(false);
            setError("No post ID or slug provided in the URL.");
        }
    }, [id, slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Crónica no encontrada</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-8">{error || "Lo sentimos, el registro imperial que buscas no existe."}</p>
                <Link href="/blog" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Volver a los Archivos
                </Link>
            </div>
        );
    }

    // Since we don't have author name or category hardcoded in the DB schema for this MVP yet, let's use some nice fallbacks
    const authorName = "Cronista Imperial";
    const authorRole = "Maestro del Conocimiento";
    const category = post.category || "Cultura"; // Assumes category might exist, otherwise fallback

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            {/* Sticky Reading Progress - Simplified version or we could leave it out. Let's omit for simplicity unless strictly requested */}

            <main className="relative">
                {/* Hero Section */}
                <section className="relative h-[70vh] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
                    <Image
                        src={post.image_url || "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80"}
                        alt={post.title}
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pb-20 px-4 text-center">
                        <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
                            <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">{category}</span>
                            <span className="text-white/60 text-sm">•</span>
                            <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
                                {new Date(post.created_at).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-bold max-w-5xl leading-tight mb-8 drop-shadow-2xl">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/90 bg-black/30 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                            <div className="size-10 rounded-full border border-primary p-0.5 overflow-hidden relative">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDurgYTY7KUlcSZDQxhoviTBpqNJWGAYqBP6j5r_M-Tn8dwUf9NSxTmBHGpNkvNxY8-e4FUPsr8p0iEgssJ8ej4aRZWQvX95uvu3PfXtYDle-H3y3-QDktg2zOkCFmz8plRxfxk7VHRFx7jqvQuzm6sKhcVANb9M2-eS_a-sMq0YTNNbOIGMOmZluh0QXocFE59vQzlFNCZyByCw_lDf5abpG2Pzoh7Via67g_Cil8h0u0xjq1gGJE--M0v757xSH5LngZkWuv61sg" alt="Author" fill className="object-cover rounded-full" />
                            </div>
                            <div className="text-left leading-tight">
                                <p className="font-bold text-sm text-white">{authorName}</p>
                                <p className="text-[10px] uppercase tracking-wider text-primary">{authorRole}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="relative z-30 -mt-12 max-w-4xl mx-auto px-4 pb-20">
                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-slate-100 dark:border-white/5">

                        {/* Breadcrumbs */}
                        <div className="px-8 py-6 border-b border-slate-100 dark:border-white/5 flex gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-primary">{category}</span>
                        </div>

                        {/* Main Content Area from TipTap */}
                        <div
                            className="px-8 md:px-16 py-12 prose prose-lg prose-stone dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg prose-img:max-w-full prose-img:h-auto prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Post Footer / Metadata */}
                        <div className="px-8 md:px-16 py-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                                {/* Hashtags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full text-xs font-bold text-slate-500 hover:text-primary hover:border-primary/50 transition-colors cursor-pointer">#COCOATI</span>
                                    <span className="px-3 py-1 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full text-xs font-bold text-slate-500 hover:text-primary hover:border-primary/50 transition-colors cursor-pointer">#{category.replace(/\s+/g, '')}</span>
                                </div>

                                {/* Share Buttons */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Compartir</span>
                                    <button className="h-9 w-9 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-lg">share</span>
                                    </button>
                                    <button className="h-9 w-9 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-lg">bookmark</span>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </article>

                {/* Related Posts Section */}
                {relatedPosts && relatedPosts.length > 0 && (
                    <section className="max-w-7xl mx-auto px-6 py-20">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex flex-col gap-2">
                                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Explora más</span>
                                <h3 className="font-display text-4xl text-slate-900 dark:text-white font-bold">Relacionados</h3>
                            </div>
                            <Link href="/blog" className="group flex items-center gap-2 text-primary font-bold">
                                Ver todo el blog
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((related: any) => (
                                <ArticleCard
                                    key={related.id}
                                    id={related.id}
                                    title={related.title}
                                    content={related.content.replace(/<[^>]+>/g, '')} // Strip HTML for summary
                                    image_url={related.image_url}
                                    created_at={related.created_at}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        }>
            <BlogPostContent />
        </Suspense>
    );
}
