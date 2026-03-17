import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Club de Emperadores | COCOATI Tulum",
    description: "Únete a nuestra élite y disfruta de recompensas exclusivas. Tu lealtad es recompensada con honores imperiales.",
};

export default function ClubPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-cream transition-colors duration-300">

            {/* Hero Section: Tu Ascenso al Trono */}
            <section className="relative py-32 bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Dark Professional Overlay */}
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/0 via-background-dark/50 to-background-dark z-20"></div>

                    {/* High Quality Luxury Background */}
                    <Image
                        src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2560&auto=format&fit=crop"
                        alt="Luxury Imperial Background"
                        fill
                        className="object-cover object-center transition-opacity duration-1000"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
                        <span className="material-symbols-outlined !text-sm">crown</span>
                        Programa de Lealtad Exclusivo
                    </div>

                    <h1 className="text-white text-5xl md:text-7xl font-black hero-text mb-8 leading-tight">
                        Tu Ascenso al <br />
                        <span className="text-primary italic">Trono Digital</span>
                    </h1>

                    <p className="text-cream/70 text-lg md:text-xl font-light leading-relaxed mb-10">
                        En COCOATI, tu lealtad es recompensada con honores imperiales. Por cada <span className="text-primary font-bold">$100 MXN</span> de compra, recibe <span className="text-primary font-bold">1 Sello Imperial</span> y avanza hacia la gloria.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/30 uppercase tracking-widest flex items-center gap-2">
                            Registrarme en la Corte
                            <span className="material-symbols-outlined">how_to_reg</span>
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-cream border border-white/20 px-8 py-3.5 rounded-full text-sm font-bold transition-all uppercase tracking-widest flex items-center gap-2">
                            Ya soy miembro
                            <span className="material-symbols-outlined">login</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Dashboard Section: Levels & Card */}
            <section className="py-24 bg-marble dark:bg-marble-dark bg-cover bg-fixed transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                        {/* Column Left: Progress & Levels */}
                        <div className="lg:col-span-7 space-y-10">
                            {/* Level 1: Aspirante (Active) */}
                            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                    <span className="material-symbols-outlined !text-[150px] text-slate-800 dark:text-white rotate-12">military_tech</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-1 block">Nivel 1</span>
                                            <h3 className="text-3xl font-bold hero-text text-slate-900 dark:text-white">Aspirante Imperial</h3>
                                        </div>
                                        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary">
                                            <span className="material-symbols-outlined">start</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-cream/80 mb-8 italic text-lg text-pretty">"Tu viaje imperial comienza aquí. Demuestra tu valía."</p>

                                    {/* Progress Bar Container */}
                                    <div className="bg-slate-100 dark:bg-black/30 rounded-2xl p-6 mb-8 border border-slate-200 dark:border-white/5 shadow-inner">
                                        <div className="flex justify-between text-xs text-slate-500 dark:text-cream/50 uppercase tracking-wider mb-3 font-bold">
                                            <span>Progreso Actual</span>
                                            <span>10 Sellos Meta</span>
                                        </div>

                                        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden mb-4">
                                            <div className="h-full w-[0%] bg-gradient-to-r from-primary to-[#E5C578] rounded-full shadow-[0_0_15px_rgba(190,157,85,0.5)]"></div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex -space-x-2">
                                                <div className="size-8 rounded-full bg-slate-300 dark:bg-black/50 border border-white dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/20 text-[10px] font-bold">1</div>
                                                <div className="size-8 rounded-full bg-slate-300 dark:bg-black/50 border border-white dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/20 text-[10px] font-bold">2</div>
                                                <div className="size-8 rounded-full bg-slate-300 dark:bg-black/50 border border-white dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/20 text-[10px] font-bold">3</div>
                                                <div className="size-8 rounded-full bg-slate-300 dark:bg-black/50 border border-white dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/20 text-[10px] font-bold">...</div>
                                            </div>
                                            <span className="text-primary text-sm font-bold">0 / 10 Sellos</span>
                                        </div>
                                    </div>

                                    {/* Reward Highlight */}
                                    <div className="flex items-start gap-4 bg-primary/10 rounded-xl p-5 border border-primary/20">
                                        <span className="material-symbols-outlined text-primary mt-1">redeem</span>
                                        <div>
                                            <h4 className="text-slate-900 dark:text-white font-bold mb-1">Recompensa Inmediata</h4>
                                            <p className="text-slate-600 dark:text-cream/70 text-sm">Completa tus primeros 10 sellos y recibe tu primera <span className="text-slate-900 dark:text-white font-bold">bebida de la corte GRATIS</span>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Level 2: Centurión (Locked) */}
                            <div className="bg-background-dark border border-primary/20 rounded-[2rem] p-8 relative overflow-hidden text-white shadow-2xl">
                                {/* Locked Badge */}
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 z-10">
                                    <span className="material-symbols-outlined text-white/50 !text-sm">lock</span>
                                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Bloqueado</span>
                                </div>

                                <div className="mb-8 relative z-10">
                                    <span className="text-primary/70 text-xs font-bold tracking-widest uppercase mb-1 block">Nivel Élite</span>
                                    <h3 className="text-3xl font-bold hero-text text-white/90">Centurión</h3>
                                    <p className="text-cream/50 text-sm mt-2">Se desbloquea tras canjear tu primera bebida gratis.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                    <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/5">
                                        <div className="size-10 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-white mb-4 shadow-lg">
                                            <span className="material-symbols-outlined">percent</span>
                                        </div>
                                        <h4 className="text-white font-bold mb-2">Descuentos Reales</h4>
                                        <p className="text-cream/60 text-sm">Precios especiales permanentes en todo el menú de la cafetería.</p>
                                    </div>
                                    <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/5">
                                        <div className="size-10 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-white mb-4 shadow-lg">
                                            <span className="material-symbols-outlined">mark_email_unread</span>
                                        </div>
                                        <h4 className="text-white font-bold mb-2">Edictos Secretos</h4>
                                        <p className="text-cream/60 text-sm">Promociones exclusivas enviadas a tu correo, no publicadas en redes.</p>
                                    </div>
                                    <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/5 md:col-span-2 flex items-center gap-4">
                                        <div className="size-10 shrink-0 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-white shadow-lg">
                                            <span className="material-symbols-outlined">local_shipping</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Carruajes Gratuitos</h4>
                                            <p className="text-cream/60 text-sm">Envíos sin costo en zonas centro para pedidos a domicilio.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column Right: Digital Card */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-32">
                                <div className="relative group perspective-1000">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-yellow-300 to-primary rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

                                    {/* Card Body */}
                                    <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#000000] rounded-[2.2rem] p-8 border border-primary/40 shadow-2xl aspect-[3/4.5] flex flex-col justify-between overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                                        {/* Decorative Curves */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-tr-full pointer-events-none"></div>

                                        {/* Header */}
                                        <div className="text-center space-y-2 relative z-10">
                                            <div className="inline-flex p-3 rounded-full border border-primary/30 bg-primary/10 mb-2">
                                                <span className="material-symbols-outlined text-primary !text-3xl">coffee</span>
                                            </div>
                                            <h3 className="hero-text text-2xl text-white tracking-wide">COCOATI</h3>
                                            <p className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold">Club de Emperadores</p>
                                        </div>

                                        {/* QR Section */}
                                        <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8 relative z-10">
                                            <div className="p-4 bg-white rounded-2xl shadow-[0_0_30px_rgba(190,157,85,0.3)]">
                                                <span className="material-symbols-outlined !text-[140px] text-zinc-900">qr_code_2</span>
                                            </div>
                                            <p className="text-cream/40 text-[10px] text-center max-w-[200px] uppercase tracking-wide">
                                                Escanea este código en caja para acumular sellos imperiales.
                                            </p>
                                        </div>

                                        {/* Footer Info */}
                                        <div className="space-y-4 relative z-10">
                                            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                                <div>
                                                    <p className="text-[10px] text-cream/40 uppercase tracking-wider mb-1 font-bold">Miembro</p>
                                                    <p className="text-lg text-white hero-text">Invitado Real</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] text-cream/40 uppercase tracking-wider mb-1 font-bold">ID</p>
                                                    <p className="text-sm text-primary font-mono bg-black/30 px-2 py-0.5 rounded">CC-8821-X</p>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[10px] text-cream/20 font-bold tracking-widest">EST. 2024 • MÉXICO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Below Card */}
                                <div className="mt-8 text-center space-y-4">
                                    <button className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-xl shadow-primary/20 uppercase tracking-widest transform hover:-translate-y-1">
                                        Registrarme en la Corte
                                    </button>
                                    <p className="text-slate-500 dark:text-cream/40 text-sm">
                                        ¿Ya tienes cuenta? <Link href="#" className="text-primary hover:underline font-bold">Inicia Sesión</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
