import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Historia | COCOATI Tulum",
    description: "Desde 2022, de la cocina al corazón de Tulum. Conoce nuestra historia de tradición y pasión por el café.",
};

export default function HistoriaPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-cream transition-colors duration-300">

            {/* Hero Section: El Origen del Sueño */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background-light/90 dark:bg-background-dark/85 z-10"></div>
                    {/* Using a warm interior image */}
                    <Image
                        src="https://lh3.googleusercontent.com/d/18GAdUitPBlSGYB_wxFrb06qKzN0v4ow1"
                        alt="Interior de Cocoati Café"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                            <span className="material-symbols-outlined text-sm">history_edu</span>
                            Desde 2022
                        </div>

                        <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-[1.1] hero-text">
                            De la Cocina al <br />
                            <span className="text-primary italic">Corazón de Tulum</span>
                        </h1>

                        <p className="text-slate-600 dark:text-cream/70 text-lg leading-relaxed max-w-lg">
                            Somos un negocio familiar con 3 años de historia en Tulum. Como emprendedores amantes de los retos, nuestra travesía comenzó en la calidez de la cocina de nuestro hogar.
                        </p>

                        <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border-l-4 border-primary backdrop-blur-sm">
                            <p className="text-slate-800 dark:text-cream/90 italic font-serif text-lg">
                                "Materializando sueños compartidos con la esperanza de llevar ricos antojos a parejas, familias y amigos."
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                                <span className="material-symbols-outlined">calendar_month</span>
                                Junio 2026: Primer Aniversario
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                        <Image
                            src="https://lh3.googleusercontent.com/d/18cRFdmTbFmVdAcd_ACP3HesoGlWvElyL"
                            alt="Nuestra Historia"
                            width={600}
                            height={600}
                            unoptimized
                            className="relative z-10 w-full aspect-square object-cover rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-white/10 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section: Eventos y Celebraciones */}
            <section className="py-24 bg-marble dark:bg-marble-dark bg-cover bg-fixed transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold hero-text text-slate-900 dark:text-white">
                            Eventos y <span className="text-primary italic">Celebraciones</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Service 1: Real Estate */}
                        <div className="group bg-white dark:bg-white/5 rounded-[2rem] p-8 lg:p-12 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-primary/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined !text-4xl">apartment</span>
                            </div>

                            <h3 className="text-2xl font-bold hero-text text-slate-900 dark:text-white mb-4">Corporativo & Real Estate</h3>
                            <p className="text-slate-600 dark:text-cream/60 leading-relaxed mb-6">
                                Elevamos el estándar de tus eventos inmobiliarios. Ofrecemos un servicio de <strong>Coffee Breaks de alta gama</strong> diseñado específicamente para agentes de Real Estate, creando el ambiente perfecto para cerrar tratos exitosos.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-cream/80 text-sm">
                                    <span className="material-symbols-outlined text-primary !text-lg">check_circle</span>
                                    Catering ejecutivo
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-cream/80 text-sm">
                                    <span className="material-symbols-outlined text-primary !text-lg">check_circle</span>
                                    Barra de café móvil
                                </li>
                            </ul>
                        </div>

                        {/* Service 2: Weddings */}
                        <div className="group bg-white dark:bg-white/5 rounded-[2rem] p-8 lg:p-12 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-primary/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined !text-4xl">favorite</span>
                            </div>

                            <h3 className="text-2xl font-bold hero-text text-slate-900 dark:text-white mb-4">Bodas y Sociales</h3>
                            <p className="text-slate-600 dark:text-cream/60 leading-relaxed mb-6">
                                El toque dulce para tu día especial. Nos especializamos en <strong>panadería fina y repostería artesanal</strong> (no pasteles), complementada con nuestras bebidas firma para deleitar a tus invitados.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-cream/80 text-sm">
                                    <span className="material-symbols-outlined text-primary !text-lg">check_circle</span>
                                    Smoothies exóticos
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-cream/80 text-sm">
                                    <span className="material-symbols-outlined text-primary !text-lg">check_circle</span>
                                    Cafés Fríos de especialidad
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alliances Section: Creciendo en Comunidad */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-primary/10 dark:bg-primary/5 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden">
                        {/* Decor elements */}
                        <div className="absolute -top-20 -right-20 text-primary/5 rotate-12">
                            <span className="material-symbols-outlined !text-[400px]">handshake</span>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-bold hero-text text-slate-900 dark:text-white">
                                    Creciendo en <br /><span className="text-primary italic">Comunidad</span>
                                </h2>
                                <p className="text-slate-700 dark:text-cream/80 text-lg leading-relaxed">
                                    En Cocoati creemos en el talento local. Si eres distribuidor de insumos o artesano con productos únicos que capturen la esencia de Tulum, queremos conocerte.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <div className="flex items-center gap-3 bg-white dark:bg-white/5 px-4 py-3 rounded-xl border border-primary/20">
                                        <span className="material-symbols-outlined text-primary">inventory_2</span>
                                        <span className="text-sm font-bold text-slate-800 dark:text-white">Proveedores de Insumos</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white dark:bg-white/5 px-4 py-3 rounded-xl border border-primary/20">
                                        <span className="material-symbols-outlined text-primary">palette</span>
                                        <span className="text-sm font-bold text-slate-800 dark:text-white">Artesanos Locales</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-end">
                                <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-primary/30 uppercase tracking-widest flex items-center gap-3 hover:scale-105">
                                    <span className="material-symbols-outlined">mail</span>
                                    Colaboremos Juntos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof & Reviews */}
            <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Column Left: Google Maps Style Reviews */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-bold hero-text text-slate-900 dark:text-white">
                                    Lo que dicen nuestros <span className="text-primary italic">visitantes</span>
                                </h2>
                                <div className="flex items-center gap-2 bg-white dark:bg-white/10 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                        alt="Google"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                    <span className="font-bold text-sm text-slate-700 dark:text-white">4.9/5</span>
                                </div>
                            </div>

                            {/* Review Cards */}
                            <div className="space-y-4">
                                {/* Review 1 */}
                                <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-md">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">LR</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Laura Roberts</h4>
                                                <div className="flex text-amber-400 text-xs">★★★★★</div>
                                            </div>
                                        </div>
                                        <span className="text-slate-400 text-xs">Hace 2 días</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-cream/70 text-sm leading-relaxed">
                                        "La atención es inmejorable y el ambiente te hace sentir como en casa. Definitivamente el mejor lugar para trabalhar o relajarse en Tulum."
                                    </p>
                                </div>

                                {/* Review 2 */}
                                <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-md">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">MA</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Marco Antonio</h4>
                                                <div className="flex text-amber-400 text-xs">★★★★★</div>
                                            </div>
                                        </div>
                                        <span className="text-slate-400 text-xs">Hace 1 semana</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-cream/70 text-sm leading-relaxed">
                                        "Sus smoothies son deliciosos y refrescantes. Me encantó la vibra del lugar y la decoración."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column Right: Facebook Feed Simulation */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold hero-text text-slate-900 dark:text-white mb-6">
                                Síguenos en <span className="text-[#1877F2]">Facebook</span>
                            </h2>

                            <div className="bg-white dark:bg-[#18191a] rounded-xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden max-w-md mx-auto">
                                {/* Facebook Header */}
                                <div className="h-32 bg-primary/20 relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/d/18cRFdmTbFmVdAcd_ACP3HesoGlWvElyL"
                                        className="w-full h-full object-cover"
                                        alt="Cover"
                                        fill
                                        unoptimized
                                    />
                                    <div className="absolute -bottom-8 left-4">
                                        <div className="w-20 h-20 rounded-full bg-white border-4 border-white dark:border-[#18191a] flex items-center justify-center shadow-lg overflow-hidden">
                                            <Image
                                                src="https://lh3.googleusercontent.com/d/1YjwTftIDVYukpX5OpCH8t8DHent6jxat"
                                                alt="Logo Cocoati"
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10 px-4 pb-4 border-b border-slate-100 dark:border-white/10">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-1">
                                        Cocoati Café Tulum
                                        <span className="material-symbols-outlined text-blue-500 !text-sm">verified</span>
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">@cocoati.cafe • Crepería</p>
                                </div>

                                {/* Post 1 */}
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden border border-slate-100">
                                            <Image
                                                src="https://lh3.googleusercontent.com/d/1YjwTftIDVYukpX5OpCH8t8DHent6jxat"
                                                alt="Logo Cocoati"
                                                width={32}
                                                height={32}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">Cocoati Café Tulum</span>
                                            <span className="text-[10px] text-slate-400">Ayer a las 11:39 AM</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-800 dark:text-slate-200 mb-3">
                                        ¡Gracias a todos por acompañarnos en este maravilloso viaje, estamos felices de estar aquí ahora y siempre, para todo lo demás, Cocoatí Tulum, siempre presente! ☕✨ #Tulum #CoffeeLovers
                                    </p>
                                    <div className="rounded-lg overflow-hidden h-48 bg-slate-100 dark:bg-white/5 mb-3 relative">
                                        <Image
                                            src="https://lh3.googleusercontent.com/d/18GAdUitPBlSGYB_wxFrb06qKzN0v4ow1"
                                            className="object-cover"
                                            alt="Post Image"
                                            fill
                                            unoptimized
                                        />
                                    </div>
                                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs border-t border-slate-100 dark:border-white/5 pt-2">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-sm">thumb_up</span> 45</span>
                                        <span className="flex items-center gap-1">3 Comentarios</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
