"use client";

import Image from "next/image";

interface ProductProps {
    name: string;
    price_standard?: number;
    price_magnus?: number;
    price_imperator?: number;
    image_url?: string;
    description?: string;
    category: string;
}

export default function ProductCard({
    name,
    price_standard,
    price_magnus,
    price_imperator,
    image_url,
    description,
    category,
}: ProductProps) {
    const isFrappe = category.includes("Frappés");
    const hasMultiplePrices = price_magnus && price_imperator;

    return (
        <div className="group bg-white dark:bg-white/5 rounded-2xl p-4 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-primary/50 relative overflow-hidden backdrop-blur-sm h-full flex flex-col">
            {image_url && (
                <div className="relative overflow-hidden rounded-xl aspect-square mb-6">
                    <Image
                        src={image_url}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {price_standard && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                            ${price_standard.toFixed(2)}
                        </div>
                    )}
                </div>
            )}

            {/* For text-only cards or cards without images like some refreshers */}
            {!image_url && (
                <div className="mb-4">
                    <div className="flex justify-between items-center pb-4 border-b border-dashed border-slate-200 dark:border-white/10">
                        <span className="text-slate-700 dark:text-cream/80 text-lg font-bold">{name}</span>
                        {price_standard && <span className="font-bold text-primary text-xl">${price_standard}</span>}
                    </div>
                </div>
            )}

            <div className={`space-y-2 ${!image_url ? '' : 'flex-1 flex flex-col'}`}>
                {image_url && (
                    <>
                        <h3 className="text-xl font-bold hero-text text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {name}
                        </h3>
                        {description && (
                            <p className="text-slate-500 dark:text-cream/50 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                                {description}
                            </p>
                        )}
                    </>
                )}

                {/* Helper for text-only description/subtitle */}
                {!image_url && description && (
                    <p className="text-slate-500 dark:text-cream/50 text-sm italic">{description}</p>
                )}

                {hasMultiplePrices && (
                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-white/10 pt-3 mt-auto">
                        <div>
                            <p className="text-[10px] text-primary uppercase font-bold tracking-wider">
                                Magnus
                            </p>
                            <p className="font-bold text-slate-800 dark:text-white">
                                ${price_magnus}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-primary uppercase font-bold tracking-wider">
                                Imperator
                            </p>
                            <p className="font-bold text-slate-800 dark:text-white">
                                ${price_imperator}
                            </p>
                        </div>
                    </div>
                )}

                {price_standard && image_url && (
                    <div className="mt-auto pt-4">
                        <button className="w-full py-2.5 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest">
                            <span className="material-symbols-outlined !text-base">add_shopping_cart</span>
                            Agregar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
