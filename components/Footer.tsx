import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-zinc-950 pt-20 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 group">
                            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined !text-2xl">coffee</span>
                            </div>
                            <h2 className="text-2xl font-bold tracking-tighter hero-text text-slate-900 dark:text-white">
                                COCOATI
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-cream/50 text-sm leading-relaxed italic">
                            "Donde la tradición clásica se encuentra con el ritual contemporáneo del café."
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.tiktok.com/@cocoati.cafe?_r=1&_t=ZS-9402T17qg1x"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-cream/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <span className="material-symbols-outlined !text-xl">music_note</span>
                            </a>
                            <a
                                href="https://www.instagram.com/cocoati.cafe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-cream/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <span className="material-symbols-outlined !text-xl">camera_alt</span>
                            </a>
                            <a
                                href="https://www.facebook.com/cocoati.cafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-cream/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <span className="material-symbols-outlined !text-xl">public</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold hero-text mb-6 tracking-widest uppercase text-sm">
                            Explora
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/eventos"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Eventos relacionados
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/preguntas-frecuentes"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Preguntas frecuentes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/club-emperadores"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Club de Emperadores
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Contactanos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold hero-text mb-6 tracking-widest uppercase text-sm">
                            Compañía
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/historia"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Nuestra Historia
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Trabaja con nosotros
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/prensa"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Prensa e Influencers
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Sostenibilidad
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold hero-text mb-6 tracking-widest uppercase text-sm">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary !text-xl">location_on</span>
                                <span className="text-slate-500 dark:text-cream/50 text-sm">
                                    Calle Tun-kul entre Av. Satélite y C. Centauro,
                                    <br />
                                    Tulum, México
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary !text-xl">call</span>
                                <span className="text-slate-500 dark:text-cream/50 text-sm">+52 (984) 133-2337</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary !text-xl">mail</span>
                                <span className="text-slate-500 dark:text-cream/50 text-sm">imperio@cocoati.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 dark:text-cream/30 text-xs">
                        © 2024 COCOATI. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a
                            href="#"
                            className="text-slate-400 dark:text-cream/30 hover:text-primary transition-colors text-xs"
                        >
                            Términos de Servicio
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 dark:text-cream/30 hover:text-primary transition-colors text-xs"
                        >
                            Política de Privacidad
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 dark:text-cream/30 hover:text-primary transition-colors text-xs"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
