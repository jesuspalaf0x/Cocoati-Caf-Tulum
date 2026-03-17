
import Image from "next/image";
import Link from "next/link";
import FaqTabs from "@/components/FaqTabs";

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

            {/* FAQ Tabs Section */}
            <FaqTabs />

            <section className="max-w-5xl mx-auto px-6 pb-16">
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
