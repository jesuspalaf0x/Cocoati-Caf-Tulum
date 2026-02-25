"use client";

import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
    title: string;
    content: string;
    image_url: string;
    created_at?: string;
}

export default function ArticleCard({
    title,
    content,
    image_url,
    created_at,
}: ArticleProps) {
    return (
        <article className="group flex flex-col h-full bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg dark:shadow-none hover:shadow-xl hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
                <span className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur text-xs uppercase tracking-wider text-white px-3 py-1 rounded border border-white/10 font-bold">
                    Crónica
                </span>
                <div className="relative w-full h-full">
                    <Image
                        src={image_url}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-primary mb-3 font-bold uppercase tracking-wider">
                    {created_at ? new Date(created_at).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }) : "Reciente"} • Por Cronista Imperial
                </div>
                <h4 className="text-2xl text-slate-900 dark:text-white mb-3 italic font-bold hero-text group-hover:text-primary transition-colors">
                    {title}
                </h4>
                <p className="text-slate-500 dark:text-cream/60 text-base mb-6 flex-1 leading-relaxed line-clamp-3">
                    {content}
                </p>
                <div className="mt-auto">
                    <Link
                        href="#"
                        className="text-sm text-slate-900 dark:text-white hover:text-primary font-bold underline decoration-primary/50 underline-offset-4 transition-colors flex items-center gap-1"
                    >
                        Continuar leyendo{" "}
                        <span className="material-symbols-outlined text-sm">
                            arrow_forward
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
