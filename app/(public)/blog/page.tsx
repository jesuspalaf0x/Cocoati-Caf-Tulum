"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ArticleCard from "@/components/ArticleCard";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
    const supabase = createClient();

    const [posts, setPosts] = useState<any[]>([]);
    const [featuredPost, setFeaturedPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);

    const POSTS_PER_PAGE = 4;

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // First time, fetch the featured post
            let currentFeatured = featuredPost;
            if (!currentFeatured) {
                const { data: featuredData } = await supabase
                    .from("posts")
                    .select("*")
                    .eq("title", "El Ritual del Espresso de Medianoche")
                    .limit(1);

                currentFeatured = featuredData?.[0];

                if (!currentFeatured) {
                    const { data: latestData } = await supabase
                        .from("posts")
                        .select("*")
                        .order("created_at", { ascending: false })
                        .limit(1);
                    currentFeatured = latestData?.[0];
                }

                setFeaturedPost(currentFeatured);
            }

            // Now fetch paginated posts, excluding the featured post
            let query = supabase
                .from("posts")
                .select("*", { count: "exact" });

            if (currentFeatured) {
                query = query.neq("id", currentFeatured.id);
            }

            const from = (currentPage - 1) * POSTS_PER_PAGE;
            const to = from + POSTS_PER_PAGE - 1;

            const { data, count, error } = await query
                .order("created_at", { ascending: false })
                .range(from, to);

            if (error) throw error;

            setPosts(data || []);
            setTotalPosts(count || 0);

        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/30 to-transparent dark:from-background-dark dark:via-background-dark/95 dark:to-transparent z-10"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY68fKSxRZzztJxizYyD3aQiVB-ofHSbOQhAOz371Wv3TqIrdRHbso8HmGnp8U15vps5CukhAwWI8-wKdqCKiIfhg_UU4mXy9E1BnRdbMF4WDTGrgYhyA2HfhOfD4QYzTm0CSoq8zSG48eNZyua4KyBdJxR1SrWFug68gvHIfmZMyxawzAPLaUEUq3MQIV1E8kXcaixRYl6GklGacewrpCyd7SDqB8H2oV7AaSgRZbwk6sVfEWT6S2lVPY2-_1EN_DI3bh5lLg57s"
                        alt="Interior cafetería"
                        fill
                        className="object-cover object-center blur-sm scale-110"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center w-full animate-fade-in-up">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/30 text-primary">
                            <span className="material-symbols-outlined text-4xl">
                                auto_stories
                            </span>
                        </div>
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-[1.1] hero-text drop-shadow-sm mb-6">
                        Crónicas de la <span className="text-primary italic">Corte</span>
                    </h1>
                    <p className="text-slate-600 dark:text-cream/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
                        Historias sobre el arte del café, secretos de repostería y la cultura
                        que define el imperio COCOATI.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Column (Articles) */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Featured Article - only show on page 1 */}
                        {currentPage === 1 && featuredPost && (
                            <article className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/50 border border-slate-200 dark:border-white/5 bg-white dark:bg-background-dark/50 transition-all duration-500 hover:border-primary/30">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none transition-opacity duration-500 opacity-80 group-hover:opacity-90"></div>
                                <div className="relative h-[500px] overflow-hidden">
                                    <Image
                                        src={featuredPost.image_url || "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80"}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                                    <div className="flex items-center gap-4 text-sm tracking-wider uppercase mb-4 text-primary font-bold">
                                        <span className="bg-primary/20 px-3 py-1 rounded backdrop-blur-sm border border-primary/20">
                                            Edición Especial
                                        </span>
                                        <span>{new Date(featuredPost.created_at).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl text-white mb-6 italic leading-tight hero-text font-bold group-hover:text-primary transition-colors">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-gray-200 text-lg mb-8 line-clamp-2 md:line-clamp-none max-w-2xl font-light">
                                        {featuredPost.content}
                                    </p>
                                    <Link
                                        href={`/blog/${featuredPost.id}`}
                                        className="inline-flex items-center gap-2 text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-all group"
                                    >
                                        <span className="text-lg font-bold">
                                            Leer Crónica Completa
                                        </span>
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        )}

                        {/* Article Grid Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                            <h3 className="text-2xl text-slate-900 dark:text-white hero-text font-bold italic">
                                Últimos Manuscritos
                            </h3>
                            <div className="flex gap-2">
                                <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-white/5 rounded-full">
                                    <span className="material-symbols-outlined">grid_view</span>
                                </button>
                                <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-white/5 rounded-full">
                                    <span className="material-symbols-outlined">view_list</span>
                                </button>
                            </div>
                        </div>

                        {/* Article Grid */}
                        {loading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {posts.map((post: any) => (
                                    <ArticleCard
                                        key={post.id}
                                        title={post.title}
                                        content={post.content}
                                        image_url={post.image_url}
                                        created_at={post.created_at}
                                    />
                                ))}
                                {posts.length === 0 && (
                                    <div className="col-span-full text-center py-10 text-slate-500">
                                        No hay más crónicas por el momento.
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center pt-8">
                                <nav className="flex gap-2">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${currentPage === 1
                                                ? 'border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-600 bg-transparent opacity-50 cursor-not-allowed'
                                                : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:border-primary hover:text-primary bg-white dark:bg-white/5'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-base">arrow_back</span>
                                    </button>

                                    {Array.from({ length: totalPages }).map((_, index) => {
                                        const pageNumber = index + 1;
                                        return (
                                            <button
                                                key={pageNumber}
                                                onClick={() => handlePageChange(pageNumber)}
                                                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors font-bold ${currentPage === pageNumber
                                                        ? 'border border-primary bg-primary text-white'
                                                        : 'border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:border-primary hover:text-primary bg-white dark:bg-white/5'
                                                    }`}
                                            >
                                                {pageNumber}
                                            </button>
                                        );
                                    })}

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${currentPage === totalPages
                                                ? 'border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-600 bg-transparent opacity-50 cursor-not-allowed'
                                                : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:border-primary hover:text-primary bg-white dark:bg-white/5'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </button>
                                </nav>
                            </div>
                        )}
                    </div>

                    {/* Sidebar (Right) - Static for now as per HTML */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* Search Widget */}
                        <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
                            <h3 className="text-xl text-slate-900 dark:text-white mb-6 italic border-l-4 border-primary pl-3 hero-text font-bold">
                                Buscar en los Archivos
                            </h3>
                            <div className="relative">
                                <input
                                    className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="Buscar crónicas..."
                                    type="text"
                                />
                                <button className="absolute right-3 top-3 text-primary hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                            </div>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
                            <h3 className="text-xl text-slate-900 dark:text-white mb-6 italic border-l-4 border-primary pl-3 hero-text font-bold">
                                Categorías Reales
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="flex items-center justify-between text-slate-600 dark:text-cream/80 hover:text-primary transition-colors group">
                                        <span className="group-hover:translate-x-1 transition-transform font-medium">Secretos del Barista</span>
                                        <span className="text-xs bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded text-slate-500 dark:text-cream/50 group-hover:text-primary group-hover:bg-primary/10 font-bold">12</span>
                                    </a>
                                </li>
                                <div className="h-px bg-slate-100 dark:bg-white/5 w-full"></div>
                                {/* More categories from HTML could be added here */}
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
