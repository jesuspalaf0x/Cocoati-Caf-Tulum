import { createClient } from "@/utils/supabase/server";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export const metadata = {
    title: "Menú Imperial | COCOATI",
    description: "Descubre nuestro menú imperial de cafés, frappés y repostería.",
};

export default async function MenuPage() {
    const supabase = await createClient();
    // Helper for timeout
    const fetchWithTimeout = async (promise: any, ms = 5000) => {
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => reject(new Error("Request timed out")), ms);
        });
        try {
            const res = await Promise.race([promise, timeoutPromise]);
            clearTimeout(timeoutId);
            return res;
        } catch (error) {
            clearTimeout(timeoutId);
            console.error("Supabase fetch error/timeout:", error);
            return { data: [] }; // Fallback
        }
    };

    const productsQuery = supabase.from("products").select("*");
    const { data: products } = await fetchWithTimeout(productsQuery);

    // Group products by category
    const groupedProducts = (products || []).reduce((acc: any, product: any) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    const categories = [
        { id: "cafe", name: "Café Clásicos", key: "Café Clásicos" },
        { id: "frappes", name: "Frappés Imperator", key: "Frappés Imperator" },
        { id: "refrescantes", name: "Refrescantes", key: "Refrescantes" },
        { id: "smoothies", name: "Smoothies", key: "Smoothies" },
        { id: "reposteria", name: "Repostería", key: "Repostería" }, // Waffles & Mini Hotcakes
        { id: "crepas", name: "Crepas Dulces", key: "Crepas Dulces" },
        { id: "salados", name: "Especialidades Saladas", key: "Especialidades Saladas" },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/30 to-transparent dark:from-background-dark dark:via-background-dark/95 dark:to-transparent z-10"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUGsUtgkcZvA78O9zJB5zMZU9IP_4DWJhosYjwAkjUjFXpfyzxWISCU0SgI4NJz7Gza9KNZKBaZ392P_GboZH86ijp7e8ZU-zlQUTfH4sGxM8kJ44Ee-FDYo7SEGXPtXakWbJtMvmLzxEsh9waAVjxzyR61PYM1oaH_EtMiy-fZB5aPohjIcS07n3sqdmR-kbN2TuQRZQDMZJAyufzbGV_BuP3tPqszoI86_G_TsZj1e7oSBLS5k0vtUGOS3r5pPRKWli8tToXZUA"
                        alt="Granos de café tostados"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center w-full animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 shadow-lg backdrop-blur-md">
                        <span className="material-symbols-outlined text-sm">stars</span>
                        Experiencia de Autor
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-[1.1] hero-text drop-shadow-sm mb-6">
                        Menú <span className="text-primary italic">Imperial</span>
                    </h1>
                    <p className="text-slate-600 dark:text-cream/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
                        Descubre la armonía entre granos selectos y repostería artesanal,
                        diseñado para el paladar más exigente.
                    </p>
                </div>
            </section>

            {/* Category Shortcuts */}
            <div className="sticky top-20 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-4 mb-12 border-b border-primary/10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex gap-4 md:justify-center min-w-max">
                        <a
                            href="#cafe"
                            className="px-5 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                        >
                            Café
                        </a>
                        <a
                            href="#frappes"
                            className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
                        >
                            Frappés
                        </a>
                        <a
                            href="#refrescantes"
                            className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
                        >
                            Refrescantes
                        </a>
                        <a
                            href="#reposteria"
                            className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
                        >
                            Repostería
                        </a>
                        <a
                            href="#salados"
                            className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
                        >
                            Salados
                        </a>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 pb-24">
                {categories.map((cat) => {
                    const productsInCategory = groupedProducts[cat.key] || [];
                    if (productsInCategory.length === 0) return null;

                    return (
                        <section key={cat.id} id={cat.id} className="mb-24 scroll-mt-40">
                            <div className="flex items-end gap-6 mb-12">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold hero-text text-slate-900 dark:text-white">
                                        {cat.name}
                                    </h2>
                                    <div className="h-1.5 w-24 bg-primary rounded-full mt-2"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {productsInCategory.map((product: any) => (
                                    <ProductCard
                                        key={product.id}
                                        name={product.name}
                                        category={product.category}
                                        price_standard={product.price_standard}
                                        price_magnus={product.price_magnus}
                                        price_imperator={product.price_imperator}
                                        image_url={product.image_url}
                                        description={product.modifiers?.description}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </main>
        </div>
    );
}
