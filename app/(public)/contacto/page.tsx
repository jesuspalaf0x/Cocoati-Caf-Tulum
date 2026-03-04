
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Contacto y Ubicación | COCOATI",
    description: "Contáctanos y encuentra tu Palacio en la Roma Norte.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
                        alt="Interior elegante de una cafetería"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                        Excelencia Imperial
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white hero-text leading-tight drop-shadow-md">
                        Contáctanos y Encuentra tu Palacio
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Address */}
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">location_on</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 hero-text text-slate-900 dark:text-white">Dirección</h3>
                        <p className="text-slate-600 dark:text-cream/70 text-sm leading-relaxed mb-4">
                            Calle Tun-kul entre Av. Satélite<br />y Calle Centauro Norte.
                        </p>
                        <a href="https://maps.app.goo.gl/qmSaL86h6QikyAsf9" target="_blank" rel="noopener noreferrer" className="mt-auto text-primary font-bold text-xs uppercase tracking-widest hover:text-primary/70 transition-colors border-b border-primary/20 pb-1">
                            Ver en Maps
                        </a>
                    </div>
                    {/* Phone */}
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">call</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 hero-text text-slate-900 dark:text-white">Teléfono</h3>
                        <p className="text-slate-600 dark:text-cream/70 text-sm leading-relaxed mb-4">
                            (984) 133 2337<br />Atención Preferencial
                        </p>
                        <a href="tel:9841332337" className="mt-auto text-primary font-bold text-xs uppercase tracking-widest hover:text-primary/70 transition-colors border-b border-primary/20 pb-1">
                            Llamar Ahora
                        </a>
                    </div>
                    {/* Email */}
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 hero-text text-slate-900 dark:text-white">Email</h3>
                        <p className="text-slate-600 dark:text-cream/70 text-sm leading-relaxed mb-4">
                            contacto@cocoati.com<br />Soporte 24/7
                        </p>
                        <a href="mailto:contacto@cocoati.com" className="mt-auto text-primary font-bold text-xs uppercase tracking-widest hover:text-primary/70 transition-colors border-b border-primary/20 pb-1">
                            Enviar Correo
                        </a>
                    </div>
                    {/* Hours */}
                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">schedule</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 hero-text text-slate-900 dark:text-white">Horarios</h3>
                        <p className="text-slate-600 dark:text-cream/70 text-sm leading-relaxed mb-4">
                            Jueves a Martes de 3:00 PM a 10:30 PM<br />
                            Miércoles cerrado.
                        </p>
                        <span className="mt-auto text-green-600 dark:text-green-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                            <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                            Abierto Hoy
                        </span>
                    </div>
                </div>
            </section>

            {/* Form and Map Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Contact Form */}
                <div className="bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/5">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold hero-text mb-4 text-slate-900 dark:text-white">Envía una Misiva</h2>
                        <p className="text-slate-600 dark:text-cream/60">
                            Nuestros escribas procesarán tu solicitud con la máxima prioridad imperial.
                        </p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-cream/50">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-cream/50">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-cream/50">
                                Asunto
                            </label>
                            <div className="relative">
                                <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none">
                                    <option>Reserva de Mesa</option>
                                    <option>Evento Privado</option>
                                    <option>Club de Emperadores</option>
                                    <option>Quejas o Sugerencias</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-cream/50">
                                Mensaje
                            </label>
                            <textarea
                                rows={4}
                                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <span>Enviar Mensaje Imperial</span>
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="h-full min-h-[500px] flex flex-col gap-6">
                    <div className="flex-grow rounded-3xl overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl relative min-h-[400px]">
                        <div className="absolute inset-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://lh3.googleusercontent.com/d/1Hik8sW2LDC6aVqAKXoKA3RAmtv6dSDWZ"
                                alt="Mapa estilizado de la ubicación"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </div>

                        {/* Simulated Pin */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex flex-col items-center -mt-12">
                                <div className="size-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce border-4 border-white dark:border-zinc-900">
                                    <span className="material-symbols-outlined text-3xl">local_cafe</span>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 px-4 py-2 rounded-lg shadow-xl mt-2 border border-slate-100 dark:border-white/10">
                                    <p className="text-xs font-black hero-text text-slate-900 dark:text-white whitespace-nowrap">COCOATI ROMA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-4 shadow-lg">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-2xl">directions_car</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">¿Cómo llegar?</h4>
                            <p className="text-slate-500 dark:text-cream/50 text-xs">
                                Visítanos en la sucursal del sabor y vive una experiencia inolvidable.
                            </p>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/qmSaL86h6QikyAsf9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto bg-slate-100 dark:bg-white/5 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            <span className="material-symbols-outlined text-slate-600 dark:text-white">navigation</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
