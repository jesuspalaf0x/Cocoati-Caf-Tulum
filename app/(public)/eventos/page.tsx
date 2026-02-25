
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Eventos y Catering | COCOATI",
    description: "Arte Culinario en tu Evento. Experiencias gastronómicas inolvidables y sofisticadas.",
};

export default function EventosPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
            {/* 1. Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjUs_QD08gpoz1vyzvSMrqBPuGepjSapm7VKDbco2eMp7upUnWBMa6p50ogSP92f9Bcp3AXHex_HtPzh_JhBg6mu2A4E9QhL9V5N-XNqs-3kNKIFGc_dFzfJuKL9mHszkbS3s1hqxvaZ_zt8mudfEjOIZoaQrQQdXW65JBEOYfqLiu8JtK1o63hisaTZooR9J4gKtYeeIdOx-4Yey_T5RN_ZY84I6bA9s1j3UqtUvkh04PV-WmAKzfjufXxhB0vtoJuemAihf4wo"
                        alt="Cinematic dark food video background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
                    <div className="flex items-center justify-center gap-3 text-primary mb-4">
                        <span className="h-[1px] w-12 bg-primary"></span>
                        <span className="text-sm font-medium tracking-[0.2em] uppercase">Catering de Alta Costura</span>
                        <span className="h-[1px] w-12 bg-primary"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-white drop-shadow-lg">
                        ARTE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#b88a0e]">CULINARIO</span> <br />
                        EN TU EVENTO
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mt-6 tracking-wide">
                        Experiencias gastronómicas inolvidables y sofisticadas, donde cada detalle es una declaración de estilo.
                    </p>
                    <div className="mt-12 animate-bounce">
                        <span className="material-symbols-outlined text-white text-4xl opacity-70">keyboard_arrow_down</span>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy Section */}
            <section className="py-24 px-6 bg-white dark:bg-background-dark">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                    <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold">Nuestra Filosofía</span>
                    <h2 className="text-3xl md:text-5xl font-light leading-snug text-slate-900 dark:text-white hero-text">
                        "No servimos solo café; orquestamos momentos de pausa y deleite en medio de la euforia."
                    </h2>
                    <div className="w-24 h-[1px] bg-primary mt-4"></div>
                    <p className="text-slate-600 dark:text-cream/70 text-lg font-light leading-relaxed max-w-2xl">
                        En Cocoati Eventos, creemos que el catering debe ser una extensión de la elegancia de su evento.
                        Cada taza es preparada con precisión barista, utilizando granos de origen único y técnicas artesanales.
                    </p>
                </div>
            </section>

            {/* 3. Excellence Section */}
            <section className="relative py-24 bg-zinc-900 overflow-hidden">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPMXtsUAIKjSrMHRAlIpo4064J8dBcSv_-Ky2eMar2EdZKSx4_z_ryGFi-m_ycUKg0Frw4GYl79BHkyV_6KVwE8aCtFJwHC5tb-Ek2OpMyYLvy6-CeIB502usNUi0m7DxLxSreRHWk-F97UOIScfSmuJGIFt3CK6ULr3Jclt5wUSS4OrX6HDOE78Wueq3VapOIkzZx4DGw4M_ry_OKcdyO5RMkXJjbLLdeq_4JC6Neo11PqGeznne4VUfkz-YMaqxknDL2qmFmJmo')" }}></div>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left: Artistic Image */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative overflow-hidden rounded-lg aspect-[4/5] shadow-2xl">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3USDmQd3BJZajzGGZyFLU67VroVHiA9h98Bfu409lmaJAogZsoshPuX9xKP2kGBbn8t1VrHnyEGcaq99RRYcdmgJ6rux4gWHQx4ccyhZaUFZEgLM6O2EKZpBtk5_RNGTiDC2pUuWDLAyex4uKeSYEgglJgv_rgTxYxq08iU1uTPwhG4KYlNqgPGBgYPJYy7neqfALOO1BmBnLVjMQbKh_5NW7XinH8SA2RAb3HmuT9RQ_pRYkV4oIW8Bpu_HbdDD-Szv6FIaebA"
                                    alt="Artistic croissant photography"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/70 backdrop-blur-md p-6 rounded border border-primary/20">
                                        <p className="text-primary text-xs tracking-widest uppercase mb-1 font-bold">Ingredientes de Origen</p>
                                        <p className="text-white text-sm font-light">Mantequilla francesa A.O.P. y harinas seleccionadas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right: Text Content */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white hero-text">
                                La Excelencia <br />
                                <span className="italic font-light text-primary">del Detalle</span>
                            </h2>
                            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                                <p>
                                    No servimos comida, curamos experiencias. En COCOATI, entendemos que la gastronomía es el hilo conductor de cualquier celebración memorable.
                                </p>
                                <p>
                                    Cada croissant, cada canapé es una obra de arte esculpida con pasión. Fusionamos la estética editorial con sabores profundos para crear momentos que perduran mucho después del último bocado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Services Presentation */}
            <section className="w-full bg-background-light dark:bg-background-dark">
                {/* Service 1 */}
                <div className="flex flex-col md:flex-row w-full min-h-[500px]">
                    <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-auto">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdAcCgmeGN2brT_ZmG4CKQYbrY_Ar-aNbvVhina11yULlAdFNCot_uiN_-gfbpIPR5AHSNtXjBpmr169IGw04lHGVwj7CZ_qQZ3dgEYVvKPK2tBIi1mE_cO74eXBN-IEHRhcxs2LuQzGlFYa6UWXVZDZq_AOKBYwIjdqqOZ-6-6C9hXXe1CbJOWt3e31Z0g84gX-OD6M_K8G5p5LvP47vl0_XKnRiNbu05Exry7Ia-eVdBCH_k75kzdwNcn007kzyGVg5ckdiBsE"
                            alt="Barista pouring latte art"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-white dark:bg-[#1a1814]">
                        <div className="flex flex-col gap-6 max-w-md">
                            <span className="text-primary text-xs uppercase tracking-widest font-bold">01 — Corporativo</span>
                            <h3 className="text-4xl text-slate-900 dark:text-white font-medium hero-text">Coffee Break Ejecutivo</h3>
                            <p className="text-slate-600 dark:text-cream/60 font-light leading-relaxed">
                                Eleve el nivel de sus reuniones de negocios. Ofrecemos estaciones de café completas con baristas profesionales, selección de pastelería francesa y opciones saludables para mantener a su equipo inspirado.
                            </p>
                            <a href="#" className="text-slate-900 dark:text-white border-b border-primary w-max pb-1 text-sm hover:text-primary transition-colors font-bold uppercase tracking-widest">VER DETALLES</a>
                        </div>
                    </div>
                </div>
                {/* Service 2 */}
                <div className="flex flex-col md:flex-row-reverse w-full min-h-[500px]">
                    <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-auto">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSt_5rg4gLKw00bkNsNhIBk4u5OTkV7uiJ785VE6RPd-qeuaZUwdW6nFRvfRX000vIjo3DKoD1J8mBZ8bzGUZzP9iJ65rLyW62ViFQz65rYCROUa5hJQJDIzX5FkM6OY0xf10PrKTW5MuZrnO0nFzOqyMT8xQ2YmN5bC9bpJoYWUIFAMpL61Lx2A_mZKNkeQ4j1IpG534nEt9wI6j17WQY_ef4WAgju9h63PtiBKEbfbeKGyeiYakA8mrcPut5K2udgwQ5jdpKmqM"
                            alt="Elegant wedding table"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-slate-50 dark:bg-[#15120d]">
                        <div className="flex flex-col gap-6 max-w-md">
                            <span className="text-primary text-xs uppercase tracking-widest font-bold">02 — Celebraciones</span>
                            <h3 className="text-4xl text-slate-900 dark:text-white font-medium hero-text">Bodas y Eventos Sociales</h3>
                            <p className="text-slate-600 dark:text-cream/60 font-light leading-relaxed">
                                El cierre perfecto para una noche inolvidable. Nuestro "Late Night Coffee Bar" ofrece cócteles a base de café, espressos para recargar energía y una mesa dulce que deslumbra a los invitados.
                            </p>
                            <a href="#" className="text-slate-900 dark:text-white border-b border-primary w-max pb-1 text-sm hover:text-primary transition-colors font-bold uppercase tracking-widest">VER DETALLES</a>
                        </div>
                    </div>
                </div>
                {/* Service 3 */}
                <div className="flex flex-col md:flex-row w-full min-h-[500px]">
                    <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-auto">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCht5Ic216GdK7v9G0ACYu2BavG0hXsebiWje5O9OcZin6whgU-Sspj91t2uau5n_AmBn7_kY4un_7N3IT0lfiVsDU3kDguUjYDmJD5gz9rdYZBD58tyjmy0xjMNaYlG27NKltjc8s7Dn35ykK0cKTdjUgLdISbMKddXE2J_ZcJmeW-gXJKafFrM6AFDv5Hoh0xosCI3FFc9Nqv6DoQxb7UB-yl0SwPrFNu3ifpBi0cErfrux-k_U3MLyeQDv_qvg9C-vQTByFQQv0"
                            alt="Bartender preparing fancy cocktails"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-white dark:bg-[#1a1814]">
                        <div className="flex flex-col gap-6 max-w-md">
                            <span className="text-primary text-xs uppercase tracking-widest font-bold">03 — Exclusivo</span>
                            <h3 className="text-4xl text-slate-900 dark:text-white font-medium hero-text">Catering Privado</h3>
                            <p className="text-slate-600 dark:text-cream/60 font-light leading-relaxed">
                                Lleve la experiencia COCOATI a la intimidad de su hogar. Diseñamos menús de brunch o merienda a medida, con un servicio discreto y una presentación impecable.
                            </p>
                            <a href="#" className="text-slate-900 dark:text-white border-b border-primary w-max pb-1 text-sm hover:text-primary transition-colors font-bold uppercase tracking-widest">VER DETALLES</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Experiences a Medida */}
            <section className="py-24 px-6 md:px-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mb-4 hero-text">Experiencias a Medida</h2>
                        <p className="text-slate-600 dark:text-cream/60 font-light max-w-2xl">Adaptamos nuestro arte a la escala y tono de su evento.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Item 1 */}
                        <div className="group border border-slate-200 dark:border-[#393528] p-8 hover:border-primary/50 transition-all duration-300 rounded-2xl bg-white dark:bg-[#221d10] hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">local_cafe</span>
                            </div>
                            <h4 className="text-xl text-slate-900 dark:text-white mb-2 font-bold">Barra de Espresso</h4>
                            <p className="text-sm text-slate-500 dark:text-cream/50 font-light">Molinos de alta gama y baristas certificados preparando lattes y cappuccinos al momento.</p>
                        </div>
                        {/* Item 2 */}
                        <div className="group border border-slate-200 dark:border-[#393528] p-8 hover:border-primary/50 transition-all duration-300 rounded-2xl bg-white dark:bg-[#221d10] hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">bakery_dining</span>
                            </div>
                            <h4 className="text-xl text-slate-900 dark:text-white mb-2 font-bold">Pastelería de Autor</h4>
                            <p className="text-sm text-slate-500 dark:text-cream/50 font-light">Croissants, macarons y tortas artesanales horneadas el mismo día del evento.</p>
                        </div>
                        {/* Item 3 */}
                        <div className="group border border-slate-200 dark:border-[#393528] p-8 hover:border-primary/50 transition-all duration-300 rounded-2xl bg-white dark:bg-[#221d10] hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">wine_bar</span>
                            </div>
                            <h4 className="text-xl text-slate-900 dark:text-white mb-2 font-bold">Coffee Cocktails</h4>
                            <p className="text-sm text-slate-500 dark:text-cream/50 font-light">Una fusión sofisticada. Espresso Martinis, Carajillos y creaciones de autor para el brindis.</p>
                        </div>
                        {/* Item 4 */}
                        <div className="group border border-slate-200 dark:border-[#393528] p-8 hover:border-primary/50 transition-all duration-300 rounded-2xl bg-white dark:bg-[#221d10] hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">workspace_premium</span>
                            </div>
                            <h4 className="text-xl text-slate-900 dark:text-white mb-2 font-bold">Servicio Premium</h4>
                            <p className="text-sm text-slate-500 dark:text-cream/50 font-light">Vajilla de porcelana, cristalería fina y un equipo de servicio atento a cada detalle.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Gallery: Masonry */}
            <section className="py-24 px-6 md:px-10 bg-zinc-900" id="galeria">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-primary text-sm tracking-[0.2em] uppercase block mb-2 font-bold">Portfolio Visual</span>
                            <h2 className="text-4xl md:text-5xl font-light text-white hero-text">Momentos Capturados</h2>
                        </div>
                        <a href="#" className="text-white flex items-center gap-2 hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
                            Ver galería completa <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {/* Image 1 */}
                        <div className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF5cHHJk3qracwD1c2oLILs6tKfEEjxJTtCd36o63GqaE7Yu6TinpvFlWMMd3LusHPTTEna212K1qZOo0EQ4v7HeHN5PifVZvnNJUh-hHseKYIeMm6WMKMv0w0iVtUNfL6sOtwN_GnwQQV_mweOOuyOanshmzu8uN8Vi2lkcJXkqG0qQBJ6D1tSHrFnjtlhDyZU0PRXJFqtkdLwGJkm3bzMpLGiQqa6Uia4qpZzaL7nNHtgdAnfWC65WffNRRWla9huf8pBtw4Bi0"
                                alt="Top down view of coffee cups"
                                width={500}
                                height={600}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-medium tracking-widest uppercase">Social</span>
                            </div>
                        </div>
                        {/* Image 2 */}
                        <div className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkRZDLFdI1fAiP0n1i8N4LIyOLIif4APehtMyE7JwmVdZFDho2KBAem3GX7Q_ChiPeVhTkNHzXCH4k-2pDCJb43rSEoB3-HC89APYNuqh6I0elvBrlmBjpZONT2W4Lw4Zi2yIXzh-7tPcPjE_BSiemW1FB8Tl5qfJPr3j1hLusKGxhQkPMEeNWvtInJIGHejtmpu7VLZCvjRMuBu4USEbTQVXszikjvC_mQBWZnIFsMVt55yXuzBjdj1gkvGfdb8ODht7Y_ZrDxfs"
                                alt="Barista brewing"
                                width={500}
                                height={600}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-medium tracking-widest uppercase">Brew Bar</span>
                            </div>
                        </div>
                        {/* Image 3 */}
                        <div className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhfEHEKMriKuUVdld7bIWS6AXCrxNuDp6_iwre2qxo2fLgqHEJZwPNnpal6Uq00HiIeeuUcYbqaep3u05d8cIYq8XurGoJbMFmyyssBZ24bLkE1HGJqoZqNtOUPkFsyOpDSkz_nTw1vYNiAMtM_2H4dBxqrjQyVPTeMBugsKuOP-L8oBgyatIzn7uYbooFeqrWJfFQpkhwbO4EBZdxL7r5V2psq3Ng-pm9rmbl15w2zBNsukMdVkEpOlTG-uBdy-ikobBpQt_M9E4"
                                alt="Wedding catering"
                                width={500}
                                height={600}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-medium tracking-widest uppercase">Bodas</span>
                            </div>
                        </div>
                        {/* Image 4 */}
                        <div className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmtPxztz4uJ4Rqb0lpQiVoul04OwD7l6H3zD3pKV5SSVGLN12OQiDUpnIqB6Zcynb4xWEaZrDvALZf3J51Iz4460sTZn4T2AK7tD8IzD_wXPB6cM0bRHAbkjtOkOely8hP5pm2LHIx2j8vs_xDCA_O_OSfVaWFACe7Gxgj1_R-8bd4NE6ctsDVGgPN5YfpmZHuzmMg6ZJPrmzYcSqsefABol0JMNmdCQZAWKKzVKG5knBHEnqZeUIGgVFVf9-tAzYAq-hOrScQwyk"
                                alt="Pastries"
                                width={500}
                                height={600}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-medium tracking-widest uppercase">Bakery</span>
                            </div>
                        </div>
                        {/* Image 5 */}
                        <div className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2vecq_TxnJQPONYdyffR35-oND4Ev-hXSOgJmhQ9iBSqBaTolaTnWCJpjU_2ErglQ5Rk3o4M-b5vH_EcU0w9QwgkDw4I-UEHNkuArGQz6I0cbWVgBhaXHTc44Nag6k1C1bQ3cfPObovCWJ81fxlGiwoHcE1xf5WVZM4WHAYlYPmtad5HTNQ21cI3qAcoy03ZLQ8wcx_3TasTZJucrZrfAFrtCg8-9UPAYnG6E4OO9PVamuJwxTwP0zwAdKFrKpXHZFAbNkI8Tzkw"
                                alt="Latte art macro"
                                width={500}
                                height={600}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-medium tracking-widest uppercase">Detalles</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Cocoati Moments - Reel Section */}
            <section className="py-24 bg-background-dark bg-[#1c1810]" id="moments">
                <div className="container mx-auto px-6 md:px-20 mb-10 flex justify-between items-end max-w-[1440px]">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white hero-text">#COCOATIMoments</h2>
                        <p className="text-gray-400 mt-2">Síguenos en nuestra jornada culinaria.</p>
                    </div>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-10 px-6 md:px-20 no-scrollbar snap-x">
                    {[
                        {
                            bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxJDutsTQdTBGy6SzMhHlF3q-R-0SqlOoCU35RDhocO542JG1DkidP7jywxh0KJTaYnLecL7JPwh4SskwfLoiUlckMFM-17K0FEVzW3-cVwuLqv8a8y8zaUsnJlOowCuEXvgI2GeSGde-ZlF4wTHC5a3bfWhEMyWkXfF6oIMaV6isxMCUdUxVZZ1q7d2mSfsSjyazMTtsC0QR_0d5KW1xo_Uu_JdBJsTwnUnUDzfMg3ms8j3SoIjst-iItuweFMbEC8eiSlSdpXGc",
                            text: "Celebrando el amor con estilo 🥂 #boda #catering",
                            icon: "videocam"
                        },
                        {
                            bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC53S1eV_tT40LrBh6FOX787JngkOvTWr3SLvRFE5HE9H5a5ZhyOlSGt7VCRjnXKOecrXX772-dPVx4rmXq5QUKs1fwyTdumo3mOSk9CplWB5xyVaULEl5gxdi2Eiliz1D6wYoSodVTGx6qrQJErAzLzx3UmKoWwlhnV8D_mly-Nu1RkboI1czGryB83OB8cJGwat3yhyN6TRTKpY5y-m8z_pltIPhI-MpqXeI_YLH5s4F0Z1FgUcza_-LEJCYey1Jsuu-0EJQoDqg",
                            text: "Detalles que marcan la diferencia en cada plato.",
                            icon: "play_arrow"
                        },
                        {
                            bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4xZBFtC65-8sBgnLnNmDpObPGXngxV31ApZ9174iFVGW-bWFuUFe1DMTnXTpdBo7LUL-OoTjo3srRDSgvstMOkI2k-MsJjog95zqJi1XNKeerxWR209jD8QMa0NX3WFbLTw6EAjt7M3PkT-pKfS3e2E_VIiATlqXYjKbDalqq12V9bjl3n6fX34SlZDb2lmHqGmjrHV2u8tQ9s1MKPp3sKd4BDmtHg9B6awb9oVgKPtzlrW460vMeZmvEwfItt6-OcQrivIsVjPE",
                            text: "El arte del café en tu evento corporativo ☕️",
                            icon: "videocam"
                        },
                        {
                            bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgw49z2Dh00fuFu2usm98fQR8P9BJp0WLH-2tkxacvCtOlXTp4Tv7-rSwgpVbkIwYg5nW4jAmQirf7bxGuJqwU66b4_-tL1QSc28-fp7evwIKHhRiz7thtLjXdZts-OpMEzsv5VQo2dp1uUWKip8p0z3OymJXQmwF3LxJEdINo7_2_sU852pI7x-YBcHRSO9eBTrD-_UQUpIIK65CuMadggcmLiT-7aHGFOi9SaQyAsM0dLCP--veFGGxakaaCVKUl1S4MRcdTKbA",
                            text: "Momentos inolvidables con amigos y familia.",
                            icon: "videocam"
                        }
                    ].map((item, index) => (
                        <div key={index} className="min-w-[280px] h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 snap-center shrink-0">
                            <Image
                                src={item.bg}
                                alt="Insta moment"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur rounded-full p-2">
                                <span className="material-symbols-outlined text-white text-sm">{item.icon}</span>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-slate-900 font-bold text-xs">C</div>
                                    <span className="text-white text-xs font-bold">@cocoati_mx</span>
                                </div>
                                <p className="text-white text-sm line-clamp-2">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Final Form & Contact */}
            <section className="bg-[#181611] border-t border-[#393528] relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#181611] via-primary to-[#181611]"></div>
                <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hero-text">Diseñemos tu menú ideal</h2>
                            <p className="text-gray-400 mb-8 max-w-md">Cuéntanos sobre tu evento y nos pondremos en contacto contigo en menos de 24 horas.</p>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input className="w-full bg-[#221e10] border border-[#393528] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-500" placeholder="Nombre" type="text" />
                                    <input className="w-full bg-[#221e10] border border-[#393528] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-500" placeholder="Email" type="email" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input className="w-full bg-[#221e10] border border-[#393528] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-400" type="date" />
                                    <div className="relative">
                                        <select className="w-full bg-[#221e10] border border-[#393528] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-400 appearance-none">
                                            <option>Tipo de Evento</option>
                                            <option>Boda</option>
                                            <option>Corporativo</option>
                                            <option>Social</option>
                                        </select>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </span>
                                    </div>
                                </div>
                                <textarea className="w-full bg-[#221e10] border border-[#393528] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-500" placeholder="Detalles adicionales (número de invitados, alergias, etc.)" rows={4}></textarea>
                                <button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-colors mt-2 shadow-lg" type="button">
                                    Enviar Solicitud
                                </button>
                            </form>
                        </div>
                        {/* Contact Info */}
                        <div className="flex flex-col justify-center lg:items-end">
                            <div className="bg-[#221e10] p-8 md:p-10 rounded-2xl border border-[#393528] max-w-md w-full shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-6 hero-text">Contacto Directo</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <span className="material-symbols-outlined text-primary">location_on</span>
                                        <span>Av. Presidente Masaryk, Polanco, CDMX</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <span className="material-symbols-outlined text-primary">mail</span>
                                        <span>eventos@cocoati.mx</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <span className="material-symbols-outlined text-primary">call</span>
                                        <span>+52 55 1234 5678</span>
                                    </li>
                                </ul>
                                <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-900/20">
                                    <span className="material-symbols-outlined">chat</span>
                                    Cotizar por WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
