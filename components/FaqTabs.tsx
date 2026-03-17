"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";

interface FaqDataEntry {
    question: string;
    answer: string;
    icon?: string;
    list?: string[];
    postAnswer?: string;
}

const faqData: Record<string, FaqDataEntry[]> = {
    "General": [
        {
            question: "¿Cuál es el concepto detrás de nuestra propuesta gastronómica?",
            answer: "El concepto detrás de nuestra propuesta gastronómica se basa en la esencia romana clásica, buscando evocar el esplendor y la tradición de la cultura gastronómica de la antigua Roma para ofrecer una experiencia única y diferenciada.",
            icon: "restaurant"
        },
        {
            question: "¿En qué horarios están abiertos al público?",
            answer: "Nuestro horario de servicio es de 3:00 p.m. a 10:30 p.m., operando de miércoles a lunes. Los días martes permanecemos cerrados por descanso del personal y mantenimiento.",
            icon: "schedule"
        },
        {
            question: "¿Cuentan con opciones de menú para dietas especiales (veganas, sin gluten)?",
            answer: "Específicamente para nuestras bebidas contamos con leches vegetales a base de soya, almendras, nuez y coco para dietas especiales; en lugar de utilizar leches deslactosadas o enteras, optamos por incluir este tipo de leches en nuestro menú.",
            icon: "eco"
        },
        {
            question: "¿Cómo puedo ponerme en contacto directo con la administración?",
            answer: "Para obtener información directa, puedes contactar a nuestro personal enviando un correo electrónico a contacto@cocoati.com o llamando al (984) 133 2337.",
            icon: "contact_support"
        },
        {
            question: "¿Tienen Wi-Fi disponible para clientes?",
            answer: "Sí, ofrecemos Wi-Fi gratuito para nuestros clientes. Nuestra red se llama INFINITUM-D890. Por favor, pregunta a cualquiera de nuestro personal por la clave de acceso; con gusto te la proporcionarán.",
            icon: "wifi"
        },
        {
            question: "¿Se permiten mascotas en sus instalaciones (Pet Friendly)?",
            answer: "Sí, somos un establecimiento Pet Friendly. Las mascotas son bienvenidas en nuestra zona de terraza exterior. Les pedimos amablemente que se aseguren de que sus mascotas permanezcan con correa y bajo su supervisión en todo momento para garantizar la comodidad y seguridad de todos nuestros clientes.",
            icon: "pets"
        }
    ],
    "Club de Emperadores": [
        {
            question: "¿Qué es exactamente el Club de Emperadores y cómo me registro?",
            answer: "Actualmente, nuestro club está en fase de desarrollo, pero pronto podrás empezar a acumular Sellos Imperiales. Estos sellos se podrán canjear por alimentos o bebidas completamente gratis en Cocoati Café Tulum. Próximamente, el registro estará disponible a través del enlace cocoati.com/club. Además de inscribirte, este mismo link te permitirá ordenar a domicilio una vez que esté habilitado. ¡Estate atento!",
            icon: "workspace_premium"
        },
        {
            question: "¿Cuántos sellos necesito para subir de nivel a Centurión?",
            answer: "Para alcanzar el nivel Centurión, debes acumular tus primeros 10 sellos dentro de los 45 días siguientes a tu registro.",
            icon: "military_tech"
        },
        {
            question: "¿Cuál es la diferencia de beneficios entre el Nivel Aspirante y el Nivel Centurión?",
            answer: "Nivel Aspirante: Los iniciados reciben una bebida de cortesía al completar 10 sellos. Nivel Centurión: Se desbloquean beneficios exclusivos, tales como promociones y descuentos especiales, además de acceso a alimentos y bebidas de cortesía no disponibles en el nivel Aspirante.",
            icon: "stars"
        },
        {
            question: "¿Mis sellos acumulados tienen una fecha de caducidad?",
            answer: "No, tus Sellos Imperiales no tienen una fecha de caducidad específica que resulte en su pérdida total si no se utilizan. Sin embargo, sí existe una ventana de actividad de 75 días hábiles desde la última vez que acumulaste un sello. Si dentro de ese período de 75 días hábiles no realizas una nueva compra que genere sellos, el contador se reinicia a cero (0), marcando el inicio de una nueva fase de acumulación.",
            icon: "event"
        },
        {
            question: "¿Qué recompensas exclusivas obtengo al alcanzar el rango máximo?",
            answer: "Las ofertas exclusivas para los miembros del club imperial Cocoati se anuncian a través de nuestras redes sociales. Si ves una promoción, invariablemente indicará que está disponible únicamente para los niveles Centurión del club. Como cliente, siempre podrás ver en tu panel de control (dashboard) todas las promociones vigentes que te sean aplicables.",
            icon: "card_membership"
        },
        {
            question: "¿Puedo transferir mis beneficios o sellos a otra persona?",
            answer: "Sí, es posible, siempre que la persona mantenga un nivel de beneficios idéntico al del benefactor de los sellos.",
            icon: "swap_horiz"
        },
        {
            question: "¿Cómo puedo consultar mi progreso y el total de mis sellos acumulados?",
            answer: "En tu panel de control (dashboard), siempre tendrás visibilidad de tu progreso. Verás una barra que indica los días restantes desde tu última acumulación de sellos. Cada vez que acumulas un sello, esta barra se llena completamente a 75 días y comienza a reducirse diariamente. Una nueva compra que te genere sellos restablecerá la barra a 75 días. Debajo de esta barra, podrás consultar tus sellos acumulados y, en la parte superior del panel, se mostrará tu nivel actual dentro de la corte.",
            icon: "dashboard"
        }
    ],
    "Servicios & Eventos": [
        {
            question: "¿Qué tipo de eventos privados pueden organizar (bodas, corporativos, cumpleaños)?",
            answer: "Ofrecemos asistencia para una amplia gama de eventos, incluyendo retiros de bienestar o wellness, celebraciones sociales como cumpleaños y aniversarios, open house para agencias de bienes raíces, eventos gubernamentales, juntas, conferencias y bodas. Aunque estos son nuestros tipos de eventos principales, estamos siempre dispuestos a analizar y adaptarnos a cualquier otro tipo de evento que pueda requerir.",
            icon: "celebration"
        },
        {
            question: "¿Con cuánto tiempo de anticipación debo reservar para un evento?",
            answer: "Para eventos de escala baja o mediana, podemos ajustarnos con una antelación mínima de una semana. Sin embargo, para eventos de mayor magnitud, requerimos una notificación previa de hasta 25 días hábiles.",
            icon: "event_available"
        },
        {
            question: "¿Ofrecen servicios de catering fuera de sus instalaciones?",
            answer: "Por supuesto. Ofrecemos servicios de catering a domicilio; llevamos todo el equipo necesario a la ubicación de su evento.",
            icon: "local_shipping"
        },
        {
            question: "¿Qué capacidad máxima de personas tienen para eventos privados?",
            answer: "Ofrecemos un servicio con capacidad para atender hasta 150 personas en eventos de pequeña o mediana escala. Para eventos de mayor magnitud, elaboramos una cotización especializada y gestionamos la subcontratación de personal adicional, asegurando así la cobertura para la cantidad de asistentes que su evento requiera.",
            icon: "groups"
        },
        {
            question: "¿Cuáles son las políticas de cancelación o cambios de fecha?",
            answer: "Una vez entregado el primer anticipo, no se realizarán devoluciones o reembolsos en caso de cancelación. Esto se debe a que el pago inicial se destina a la adquisición de todos los materiales necesarios para la realización del evento y a la asignación de personal. Es fundamental que, al recibir la cotización, el cliente revise y acepte los términos y condiciones adjuntos. En este documento se detallan y acuerdan de manera explícita las fechas límite tanto para el pago del anticipo como para el finiquito.",
            icon: "rule"
        },
        {
            question: "¿Cuál es el proceso para solicitar una cotización?",
            answer: "A fin de elaborar una cotización precisa y personalizada, enviamos a nuestros clientes un formulario detallado. Este cuestionario nos permite recabar información esencial sobre el evento, incluyendo:",
            icon: "request_quote",
            list: [
                "Tipo y magnitud del evento: Detalles sobre la naturaleza y el alcance de la celebración.",
                "Formalidad: El nivel de etiqueta o requerimientos específicos del evento.",
                "Logística y horarios: El número de asistentes, así como las fechas y horarios de servicio.",
                "Menú: La selección de alimentos y bebidas requerida.",
                "Ubicación y montaje: Conocer el lugar donde se instalará el equipo de Cocoati Café Tulum (ej. ¿Cuenta con barra y cocina? ¿Es al aire libre?).",
                "Requerimientos de infraestructura: Las necesidades de mobiliario y montaje que debemos proporcionar."
            ],
            postAnswer: "La información recopilada mediante este formulario es crucial para determinar la cotización más adecuada para el evento y el cliente."
        }
    ]
};

export default function FaqTabs() {
    const [activeTab, setActiveTab] = useState<keyof typeof faqData>("General");
    const tabs = Object.keys(faqData) as Array<keyof typeof faqData>;

    return (
        <>
            {/* FAQ Categories Navigation */}
            <div className="sticky top-20 z-40 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-start md:justify-center gap-8 overflow-x-auto no-scrollbar py-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap px-4 py-2 text-sm font-bold border-b-2 transition-colors ${activeTab === tab
                                    ? "border-primary text-primary"
                                    : "text-slate-600 dark:text-cream/60 hover:text-primary border-transparent hover:border-primary/30"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Content Grid */}
            <section className="max-w-5xl mx-auto px-6 pt-16">
                <div className="grid gap-6">
                    {faqData[activeTab].map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            icon={item.icon}
                        >
                            {item.list && (
                                <ul className="list-disc ml-4 space-y-2 mt-2 text-slate-600 dark:text-cream/70">
                                    {item.list.map((li: string, idx: number) => {
                                        const splitPoint = li.indexOf(":");
                                        if (splitPoint === -1) {
                                            return <li key={idx}>{li}</li>;
                                        }
                                        const title = li.substring(0, splitPoint + 1);
                                        const content = li.substring(splitPoint + 1);
                                        return (
                                            <li key={idx} className="leading-relaxed">
                                                <span className="font-bold text-slate-800 dark:text-white">
                                                    {title}
                                                </span>
                                                {content}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                            {item.postAnswer && (
                                <p className="mt-4 text-slate-600 dark:text-cream/70 leading-relaxed">
                                    {item.postAnswer}
                                </p>
                            )}
                        </FaqItem>
                    ))}
                </div>
            </section>
        </>
    );
}
