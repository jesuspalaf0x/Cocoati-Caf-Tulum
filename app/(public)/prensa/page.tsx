
import Image from "next/image";

export default function PressPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-zinc-800 dark:text-cream transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent z-10"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzBp1Bpl-JnESjKDMnM3tyXjb67L1nkXDXOu9lwoJartCCIOMp3Dwv1S3HEO2G2hYto58VgxBkuzQ0xsBuC9o-gV2n-4VZqW_ATf2tKTUefjxeA9Qo7coIRnZC2GZ9gjZjGMY1Fpy9v_K_kA9la72SfoMMpqK-kapPB4asGTN3kOgSWhcGX5BzNFlLJYPtOdoBAR4W3LiY0M-BWRJKjKrnFOSmFFZf1O-B0LGmyei6H9Eo4UtpEbojzO-KwKZnDol6R6CrunQg9yw"
                        alt="Interior de la cafetería elegante"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                            <span className="material-symbols-outlined text-sm">newsmode</span>
                            Sala de Prensa
                        </div>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] hero-text">
                            Crónicas de la Corte: <br />
                            <span className="text-primary italic">Prensa e Influencers</span>
                        </h1>
                        <p className="text-cream/70 text-lg md:text-xl max-w-lg leading-relaxed font-light">
                            Donde la elegancia de COCOATI resuena en los ecos del mundo. Descubre lo que dicen los cronistas
                            modernos sobre nuestra experiencia imperial.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-20"></div>
            </section>

            {/* Press Kit Section */}
            <section className="py-24 marble-bg dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-12 md:p-16 border border-slate-200 dark:border-primary/20 shadow-2xl relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold hero-text text-zinc-900 dark:text-white">
                                    Kit de Prensa Imperial
                                </h2>
                                <p className="text-slate-600 dark:text-cream/70 text-lg leading-relaxed">
                                    Accede a nuestros recursos oficiales. Hemos preparado una selección de materiales de
                                    alta resolución para uso editorial, incluyendo logotipos, fotografías de nuestras
                                    sucursales y la historia de nuestra marca.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-cream/80">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span>Logotipos en vectores y PNG</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-cream/80">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span>Fotografías de alta resolución</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 dark:text-cream/80">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span>Hoja de datos y Brand Book</span>
                                    </li>
                                </ul>
                                <div className="pt-4">
                                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl text-md font-bold transition-all shadow-xl shadow-primary/20 flex items-center gap-2 uppercase tracking-wide">
                                        <span className="material-symbols-outlined">download</span>
                                        Descargar Kit Imperial
                                    </button>
                                </div>
                            </div>
                            <div className="relative h-full min-h-[300px] flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700">
                                <div className="grid grid-cols-2 gap-4 w-full max-w-sm rotate-3 transform hover:rotate-0 transition-transform duration-500">
                                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg flex items-center justify-center aspect-square border border-zinc-100 dark:border-zinc-800">
                                        <span className="material-symbols-outlined !text-6xl text-primary">coffee</span>
                                    </div>
                                    <div className="bg-zinc-900 p-4 rounded-lg shadow-lg flex items-center justify-center aspect-square">
                                        <span className="material-symbols-outlined !text-6xl text-white">coffee</span>
                                    </div>
                                    <div className="col-span-2 bg-primary p-6 rounded-lg shadow-lg flex items-center justify-between text-white">
                                        <span className="font-bold tracking-widest text-lg">COCOATI</span>
                                        <span className="text-xs opacity-75">BRAND ASSETS 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Recognized by Section */}
            <section className="py-20 bg-zinc-900 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold hero-text mb-12 uppercase tracking-widest text-primary/80">
                        Reconocidos por la Corte
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
                        <div className="h-16 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30">
                            <span className="font-serif font-bold italic text-xl">Vogue</span>
                        </div>
                        <div className="h-16 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30">
                            <span className="font-serif font-bold text-xl tracking-tight">GQ</span>
                        </div>
                        <div className="h-16 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30">
                            <span className="font-sans font-black text-lg">FORBES</span>
                        </div>
                        <div className="h-16 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30">
                            <span className="font-serif italic text-lg">Food & Wine</span>
                        </div>
                        <div className="h-16 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30">
                            <span className="font-sans font-bold text-lg tracking-widest">ELLE</span>
                        </div>
                        <div className="h-16 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30">
                            <span className="font-serif font-bold text-xl">Robb Report</span>
                        </div>
                    </div>
                    <div className="mt-12 text-sm text-zinc-400 italic">
                        &quot;Cocoati redefine el lujo accesible con una taza de café que es pura poesía.&quot; — Food & Wine México
                    </div>
                </div>
            </section>

            {/* Ambassador Program Section */}
            <section className="py-24 marble-bg dark:bg-background-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        <div className="lg:col-span-5 space-y-8">
                            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                                <span className="w-8 h-[1px] bg-primary"></span>
                                Programa de Embajadores
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold hero-text text-zinc-900 dark:text-white leading-tight">
                                Conviértete en <br />
                                <span className="text-primary italic">Embajador Imperial</span>
                            </h2>
                            <p className="text-slate-600 dark:text-cream/70 text-lg leading-relaxed">
                                Buscamos voces auténticas que compartan nuestra pasión por la excelencia. Si tu contenido
                                inspira y celebra el buen vivir, queremos invitarte a nuestra mesa.
                            </p>
                            <div className="space-y-6 pt-4">
                                <div className="flex gap-4">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">diamond</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold hero-text text-zinc-900 dark:text-white">
                                            Acceso Exclusivo
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-cream/50">
                                            Invitaciones VIP a inauguraciones y eventos de temporada.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">wine_bar</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold hero-text text-zinc-900 dark:text-white">
                                            Catas Privadas
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-cream/50">
                                            Sesiones de degustación con nuestros baristas expertos antes del lanzamiento
                                            al público.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">redeem</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold hero-text text-zinc-900 dark:text-white">
                                            Kit de Bienvenida
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-cream/50">
                                            Recibe mensualmente nuestra selección de granos premium y merchandising
                                            oficial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 uppercase tracking-widest">
                                    Solicitud de Colaboración
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <p className="text-xs text-slate-400 dark:text-cream/30 mt-4 text-center sm:text-left">
                                    *Sujeto a revisión de perfil y métricas de engagement.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-7 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="relative w-full h-64 rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE8s0xHXDN_xKzpUfj3slUzlQqWw6wJFvKrwSFbts2xF_WhRNsDPkV3Wlozp8N0kX73YKr-_TBsUDhiO6TuxyjZnMoUTp0rdOCnGUSDeyovmj1bjwE3Ww1zlHrBKk0fRav9sh_TfHB1XYEcDWOWRikU_UI-gFi5oq5NP2-f2eFZC2vdpIKUqfOmeY0ah6k6-HsB47Cw2pUyOL2F2mjdxZwAGhVCXgnRTF1dq9ZJLFBS3TrLHYpkFb82StBdEFXkgdcBl14iYr0bw"
                                            alt="Influencer disfrutando café"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative w-full h-48 rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJzth4uswhEXGLJDMh35i6Xxt5cfafUtf-2L3SInPBGhVa__64u2Mc1-YwYt7PzlC3o61PJw4LeddJ1ILNMYPYsn0bA3LKvyXTN-QYYAnJsDWOtobeUML7oiknWQsj6tLDW8jsIz0GlbBUpWifQ-2pFhDr3v8ZzDIM2CntddOzMDlPay_58pqQFFYReJLbjpXSDMDTCfmXsClr_x8gDYGf1kw2TiUM69x88y2f5hHtq6I_HaqYIUE5v5lFLVAkpFmVEe-sP2k4aCM"
                                            alt="Detalle de producto"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative w-full h-48 rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE8s0xHXDN_xKzpUfj3slUzlQqWw6wJFvKrwSFbts2xF_WhRNsDPkV3Wlozp8N0kX73YKr-_TBsUDhiO6TuxyjZnMoUTp0rdOCnGUSDeyovmj1bjwE3Ww1zlHrBKk0fRav9sh_TfHB1XYEcDWOWRikU_UI-gFi5oq5NP2-f2eFZC2vdpIKUqfOmeY0ah6k6-HsB47Cw2pUyOL2F2mjdxZwAGhVCXgnRTF1dq9ZJLFBS3TrLHYpkFb82StBdEFXkgdcBl14iYr0bw"
                                            alt="Interior lujoso"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative w-full h-80 rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH1I6E_Y5_w_8K9H9G7B6z9M9N9L9K9J9I9H9G9F9E9D9C9B9A9_8"
                                            alt="Influencer lifestyle"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 p-6 rounded-full shadow-2xl border-4 border-primary/20 z-20">
                                <div className="text-center">
                                    <span className="block text-3xl font-bold hero-text text-primary">50+</span>
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-cream/50">
                                        Embajadores
                                        <br />
                                        Activos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4 text-zinc-900 dark:text-white">
                            Galería de <span className="text-primary italic">Embajadores</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE8s0xHXDN_xKzpUfj3slUzlQqWw6wJFvKrwSFbts2xF_WhRNsDPkV3Wlozp8N0kX73YKr-_TBsUDhiO6TuxyjZnMoUTp0rdOCnGUSDeyovmj1bjwE3Ww1zlHrBKk0fRav9sh_TfHB1XYEcDWOWRikU_UI-gFi5oq5NP2-f2eFZC2vdpIKUqfOmeY0ah6k6-HsB47Cw2pUyOL2F2mjdxZwAGhVCXgnRTF1dq9ZJLFBS3TrLHYpkFb82StBdEFXkgdcBl14iYr0bw"
                                alt="Embajador Cocoati 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold hero-text text-lg">@sofia_lifestyle</p>
                                    <p className="text-xs text-primary font-bold tracking-widest uppercase">
                                        Lifestyle
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH1I6E_Y5_w_8K9H9G7B6z9M9N9L9K9J9I9H9G9F9E9D9C9B9A9_8"
                                alt="Embajador Cocoati 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold hero-text text-lg">@carlos_gourmet</p>
                                    <p className="text-xs text-primary font-bold tracking-widest uppercase">Foodie</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBXVlzom3tJw8B5etKa51ObJRR3d7RwpTo_Gr0BQ9UA0LOVB7aan_VNrzZCXl-9HdmV5ZCRbdxA5nVkOfqiureM1TZRzwcLZR5SxbiNaa14_EmU9Jm2WVuu1DBOl-7y48WORMxmrdYcGMa0u_q0rUgtake6plEJ2KgG2zC2aApX9lEqwGxjsXVe0h2yKZ5j6KhVIt7aPd7uPgtkwFceGv1VviNOSb57hdOQc5q-RhR0U0P2hpP3YySD_n7BJpC5wn-DVEbRLD1vYs"
                                alt="Embajador Cocoati 3"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold hero-text text-lg">@ana_travels</p>
                                    <p className="text-xs text-primary font-bold tracking-widest uppercase">Travel</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzBp1Bpl-JnESjKDMnM3tyXjb67L1nkXDXOu9lwoJartCCIOMp3Dwv1S3HEO2G2hYto58VgxBkuzQ0xsBuC9o-gV2n-4VZqW_ATf2tKTUefjxeA9Qo7coIRnZC2GZ9gjZjGMY1Fpy9v_K_kA9la72SfoMMpqK-kapPB4asGTN3kOgSWhcGX5BzNFlLJYPtOdoBAR4W3LiY0M-BWRJKjKrnFOSmFFZf1O-B0LGmyei6H9Eo4UtpEbojzO-KwKZnDol6R6CrunQg9yw"
                                alt="Embajador Cocoati 4"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold hero-text text-lg">@marco_coffee</p>
                                    <p className="text-xs text-primary font-bold tracking-widest uppercase">
                                        Barista
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-primary/5 dark:bg-zinc-900 border-y border-primary/10 mb-[-5rem] relative z-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-6">
                        <span className="material-symbols-outlined !text-3xl">mail</span>
                    </div>
                    <h2 className="text-3xl font-bold hero-text text-zinc-900 dark:text-white mb-8">
                        Contacto de Prensa
                    </h2>
                    <div className="bg-white dark:bg-black/20 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                                Directora de Comunicación
                            </p>
                            <h4 className="text-xl font-bold text-zinc-900 dark:text-white">Valentina Romano</h4>
                            <p className="text-slate-500 dark:text-cream/50 text-sm mt-2">
                                Para consultas de prensa, entrevistas y colaboraciones.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 w-full md:w-auto">
                            <a
                                href="mailto:prensa@cocoati.com"
                                className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                            >
                                <span className="material-symbols-outlined !text-lg">send</span>
                                prensa@cocoati.com
                            </a>
                            <p className="text-xs text-center text-slate-400">Tiempo de respuesta: 24-48 horas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
