
import Image from "next/image";
import Link from "next/link";
import FaqItem from "@/components/FaqItem";

export const metadata = {
    title: "Preguntas Frecuentes | COCOATI",
    description: "Asistencia Imperial y respuestas a tus dudas sobre COCOATI.",
};

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-background-dark text-white">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark"></div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm_qd0PivhO-9r5Afq3lzGzpbTQgDC3V8SvEeU3kpBulMPfZ53jyQZxrkzQy4S17Su-mbPDXnx5be1olan4AGtfwZCDiXXGLWmy7qFig1eLE1x0lw5kwD323yJ5mEMNXcIXKssOKC2KOft6toSmyWnh2wV8kkT9Ow6SHvmQ26dV5rWOHU_G6u62E4Y9IS8uAX59PWYBuIOwDaSNQeXSyITWkgYfp1wdjEdL0M46JQAZhjnU6tDrDcqsai9ddNDzJrUFbdvBnVaP-0"
                        alt="Coffee background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 text-center z-10 animate-fade-in-up">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                        Asistencia Imperial
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight hero-text text-white">
                        Preguntas Frecuentes
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                        Descubre todo lo que necesitas saber sobre la experiencia COCOATI. Desde nuestro exclusivo programa de lealtad hasta servicios para eventos imperiales.
                    </p>
                </div>
            </section>

            {/* FAQ Categories Navigation */}
            <div className="sticky top-20 z-40 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-start md:justify-center gap-8 overflow-x-auto no-scrollbar py-4">
                        <button className="whitespace-nowrap px-4 py-2 text-sm font-bold border-b-2 border-primary text-primary">
                            General
                        </button>
                        <button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-600 dark:text-cream/60 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/30">
                            Club de Emperadores
                        </button>
                        <button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-600 dark:text-cream/60 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/30">
                            Servicios & Eventos
                        </button>
                        <button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-600 dark:text-cream/60 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/30">
                            Ubicaciones
                        </button>
                        <button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-600 dark:text-cream/60 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/30">
                            Sostenibilidad
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ Content Grid */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <div className="grid gap-6">
                    {/* FAQ Items */}
                    <FaqItem
                        question="¿Qué es el Club de Emperadores?"
                        answer="Es nuestro programa de lealtad exclusivo diseñado para premiar a nuestros clientes más distinguidos. Como miembro, disfrutas de beneficios únicos como catas privadas dirigidas por nuestros maestros baristas, acceso anticipado a nuevas mezclas de temporada y una invitación personal a eventos de gala imperial."
                        icon="workspace_premium"
                    />

                    <FaqItem
                        question="¿Cómo puedo ganar sellos por mis compras?"
                        answer="Por cada bebida artesanal o bolsa de café en grano que adquieras, recibirás un Sello Imperial en tu aplicación COCOATI. Al acumular 10 sellos, podrás canjearlos por cualquier bebida de nuestro menú de especialidad o recibir un descuento exclusivo en nuestra línea de accesorios premium."
                        icon="verified"
                    />

                    <FaqItem
                        question="¿Ofrecen servicios de catering para bodas?"
                        answer="Absolutamente. Llevamos la elegancia de COCOATI a tu día especial. Nuestro servicio de catering imperial incluye barras de café móviles con acabados en mármol y oro, baristas certificados y un menú personalizado que puede incluir maridajes con repostería fina. Contáctanos con al menos 3 meses de anticipación."
                        icon="celebration"
                    />

                    <FaqItem
                        question="¿Dónde se encuentra la ubicación de Tulum?"
                        answer="Nuestra sede insignia en Tulum se encuentra en el corazón de la Zona Hotelera, fusionando la selva maya con la arquitectura imperial contemporánea."
                        icon="location_on"
                    >
                        <div className="w-full h-48 rounded-lg overflow-hidden relative border border-primary/20 mt-4 group cursor-pointer">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6j_3cmgt2BcBsR3UDM_ADBqa3KEeMDisqLzQtq4OyxxtzjukKbhPMl3dmsVUsmbQJEmJYwK6DlvE7RAV4X2o7nijiCbgONKOy5mFK9DiCxpV7oqj4BYzWbZBR27speneZ2e9TSE16nFS-TmGwlYW82t10GxVl4vg3WDvT5gogksJbj8n7SqWnhnfxiL_bmdYQCMwP4zal9zM6As2zRQa8y9gCiViUdr_nCOOOPaxUHT6AGrmE50udE7ahM3bx6ARe951iureR6Z0"
                                alt="Ubicación Tulum"
                                fill
                                className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity group-hover:bg-black/10">
                                <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-primary">map</span>
                                    Ver en Google Maps
                                </span>
                            </div>
                        </div>
                    </FaqItem>

                    <FaqItem
                        question="¿Cuál es su compromiso con la sostenibilidad?"
                        answer="Creemos en la nobleza de la tierra. Trabajamos directamente con fincas éticas bajo el modelo 'Bean-to-Cup', asegurando pagos justos que superan los estándares del mercado. Además, utilizamos empaques 100% compostables y procesos de tostado de bajas emisiones de carbono para preservar el entorno de nuestras comunidades cafetaleras."
                        icon="eco"
                    />
                </div>

                {/* Contact Section */}
                <div className="mt-20 p-8 md:p-12 bg-primary/5 dark:bg-primary/10 rounded-3xl border border-primary/20 text-center">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 italic tracking-tight hero-text">
                        ¿Aún tienes dudas imperiales?
                    </h2>
                    <p className="text-slate-600 dark:text-cream/60 mb-8 max-w-xl mx-auto">
                        Si no encontraste la respuesta que buscabas, nuestro consejo de baristas está listo para asistirte personalmente.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">chat</span>
                            Contáctanos por WhatsApp
                        </button>
                        <button className="bg-white text-slate-900 dark:bg-white/10 dark:text-white border border-slate-200 dark:border-white/10 px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-white/20">
                            <span className="material-symbols-outlined">mail</span>
                            Enviar un Correo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
