import { createClient } from "@/utils/supabase/server";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "COCOATI | Despierta tus Sentidos Divinos",
  description: "Una experiencia imperial en cada sorbo. Descubre el arte del café inspirado en la grandeza de los antiguos césares.",
};

export default async function Home() {
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

  // Fetch a few products for the "Favoritos del Imperio" section
  // We'll just take 4 items for now
  const productsQuery = supabase
    .from("products")
    .select("*")
    .limit(4);

  const { data: featuredProducts } = await fetchWithTimeout(productsQuery);

  // Fetch 3 recent blog posts
  const postsQuery = supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .limit(3);

  const { data: recentPosts } = await fetchWithTimeout(postsQuery);

  return (
    <div className="bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-light/90 via-background-light/70 to-transparent dark:from-background-dark dark:via-background-dark/80 dark:to-transparent z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzBp1Bpl-JnESjKDMnM3tyXjb67L1nkXDXOu9lwoJartCCIOMp3Dwv1S3HEO2G2hYto58VgxBkuzQ0xsBuC9o-gV2n-4VZqW_ATf2tKTUefjxeA9Qo7coIRnZC2GZ9gjZjGMY1Fpy9v_K_kA9la72SfoMMpqK-kapPB4asGTN3kOgSWhcGX5BzNFlLJYPtOdoBAR4W3LiY0M-BWRJKjKrnFOSmFFZf1O-B0LGmyei6H9Eo4UtpEbojzO-KwKZnDol6R6CrunQg9yw"
            alt="Roman statue holding coffee"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm">stars</span>
              Tradición Imperial
            </div>

            <h1 className="text-slate-900 dark:text-white text-6xl md:text-8xl font-black leading-[1.1] hero-text drop-shadow-sm">
              Despierta tus <br />
              <span className="text-primary italic">Sentidos</span> Divinos
            </h1>

            <p className="text-slate-600 dark:text-cream/70 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Una experiencia imperial en cada sorbo. Descubre el arte del café inspirado en la grandeza de los
              antiguos césares.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/menu"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20 flex items-center gap-2 hover:-translate-y-1"
              >
                Explorar el Menú
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/club-emperadores"
                className="bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/20 backdrop-blur-md px-10 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-1"
              >
                Unirme al Club
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-20"></div>
      </section>

      {/* Products Grid: Favoritos del Imperio */}
      <section className="py-24 bg-marble dark:bg-marble-dark bg-cover bg-fixed transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4 text-slate-900 dark:text-white">Favoritos del Imperio</h2>
              <div className="h-1.5 w-32 bg-primary rounded-full"></div>
            </div>
            <p className="text-slate-600 dark:text-cream/60 max-w-md italic">
              "Las joyas de nuestra corona. Seleccionadas por su sabor exquisito y presentación digna de un banquete real."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts && featuredProducts.map((product: any) => (
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
        </div>
      </section>

      {/* Loyalty Program: Club Imperadores */}
      <section className="py-24 bg-slate-100 dark:bg-background-dark relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 dark:opacity-10 pointer-events-none">
          <span className="material-symbols-outlined !text-[500px] text-primary">shield</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold hero-text leading-tight text-slate-900 dark:text-white">
                  Club de <span className="text-primary italic">Emperadores</span>
                </h2>
                <p className="text-slate-600 dark:text-cream/70 text-lg leading-relaxed max-w-lg">
                  Cada sorbo te acerca a la gloria. Únete a nuestra élite y disfruta de recompensas exclusivas reservadas solo para los más fieles.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 group cursor-default">
                  <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <span className="material-symbols-outlined">confirmation_number</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold hero-text text-slate-900 dark:text-white">Acumula Sellos</h4>
                    <p className="text-slate-500 dark:text-cream/50 text-sm">Obtén un sello por cada visita. Al llegar a 10, la siguiente bebida es cortesía del Imperio.</p>
                  </div>
                </div>

                <div className="flex gap-4 group cursor-default">
                  <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <span className="material-symbols-outlined">military_tech</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold hero-text text-slate-900 dark:text-white">Nivel Centurión</h4>
                    <p className="text-slate-500 dark:text-cream/50 text-sm">Desbloquea descuentos permanentes y una mesa preferencial en todas nuestras sucursales.</p>
                  </div>
                </div>

                <div className="flex gap-4 group cursor-default">
                  <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold hero-text text-slate-900 dark:text-white">Beneficios Reales</h4>
                    <p className="text-slate-500 dark:text-cream/50 text-sm">Acceso anticipado a lanzamientos de temporada y catas privadas.</p>
                  </div>
                </div>
              </div>

              <Link href="/club-emperadores" className="inline-block bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/30 uppercase tracking-widest hover:scale-105">
                Saber más
              </Link>
            </div>

            {/* Right: Card Visual */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-2xl relative overflow-hidden">
                {/* Card decoration */}
                <div className="absolute -top-10 -right-10 size-40 bg-primary/5 rounded-full blur-2xl"></div>

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Tarjeta Digital</p>
                    <h5 className="text-2xl font-bold hero-text text-slate-900">César Augusto</h5>
                  </div>
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">qr_code_2</span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-4 italic">7 / 10 sellos acumulados</p>

                <div className="grid grid-cols-5 gap-3 relative z-10">
                  {/* Active Stamps */}
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40">
                      <span className="material-symbols-outlined !text-lg">check</span>
                    </div>
                  ))}
                  {/* Empty Stamps */}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-full border-2 border-dashed border-slate-200 bg-slate-50"></div>
                  ))}
                  {/* Prize Stamp */}
                  <div className="aspect-square rounded-full border-2 border-primary/30 bg-primary/5 flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-primary">card_giftcard</span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex justify-between items-center relative z-10">
                  <span className="text-slate-400 text-[10px] uppercase tracking-tighter">COCOATI EXCLUSIVE LOYALTY</span>
                  <div className="flex gap-1">
                    <div className="w-6 h-4 bg-primary/20 rounded-sm"></div>
                    <div className="w-6 h-4 bg-primary rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Calidad en Cada Grano */}
      <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-white/5 rounded-[3rem] p-8 md:p-20 relative overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Excelencia Mexicana
                </div>
                <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-bold hero-text leading-tight">
                  Calidad en <br />
                  <span className="text-primary italic">Cada Grano</span>
                </h2>
                <p className="text-slate-600 dark:text-cream/70 text-lg leading-relaxed">
                  En COCOATI, la perfección comienza en el origen. Seleccionamos únicamente granos 100% mexicanos de estricta altura, cultivados bajo sombra y cosechados a mano. Cada lote es tostado artesanalmente para garantizar frescura.
                </p>

                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-bold text-3xl hero-text">100%</span>
                    <span className="text-slate-400 dark:text-cream/40 text-xs uppercase tracking-widest">Orgánico</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-bold text-3xl hero-text">1200m</span>
                    <span className="text-slate-400 dark:text-cream/40 text-xs uppercase tracking-widest">Altitud</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-bold text-3xl hero-text">Tueste</span>
                    <span className="text-slate-400 dark:text-cream/40 text-xs uppercase tracking-widest">Diario</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full aspect-square max-w-md group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                  <Image
                    src="https://lh3.googleusercontent.com/d/14p7bbuIi5AogYxr8d3qElxRezFI46Rek"
                    alt="Granos de café"
                    fill
                    className="relative z-10 object-cover rounded-[2.5rem] border-8 border-white dark:border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-6 -right-6 size-32 bg-primary rounded-full flex items-center justify-center text-white shadow-xl z-20 animate-bounce-slow">
                    <span className="material-symbols-outlined !text-5xl">workspace_premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed: Momentos en TikTok (Keeping it static images as placeholders for now) */}
      <section className="py-24 bg-marble dark:bg-marble-dark bg-cover bg-fixed transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4 text-slate-900 dark:text-white">
                Momentos en <span className="text-primary italic">TikTok</span>
              </h2>
              <div className="h-1.5 w-32 bg-primary rounded-full"></div>
            </div>
            <p className="text-slate-600 dark:text-cream/60 max-w-md italic">
              "Únete a nuestra comunidad imperial. Descubre el arte detrás de cada taza y comparte tu experiencia con #COCOATI."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="#" className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-2 hover:border-primary/50 relative block aspect-[9/16]">
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <video
                  src="https://yrxnpmaqyceoysawpdtf.supabase.co/storage/v1/object/public/Videos-sitio-web/Video_1.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white z-20">
                  <p className="font-bold mb-1">@cocoati.cafe</p>
                  <p className="text-xs opacity-80">La altura de las montañas en Chiapas y Oaxaca no es solo paisaje; es el ingrediente secreto que hace que tu taza en Cocoati sea inigualable. ☕️✨</p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="#" className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-2 hover:border-primary/50 relative block aspect-[9/16]">
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <video
                  src="https://yrxnpmaqyceoysawpdtf.supabase.co/storage/v1/object/public/Videos-sitio-web/Video_2.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white z-20">
                  <p className="font-bold mb-1">@cocoati.cafe</p>
                  <p className="text-xs opacity-80">Nos presentamos en el carnaval Tulum 2026, ven a disfrutar del ambiente de la fiesta con los amigos, la familia, y con las personas que más quieres. Te esperamos. 🧇🍓</p>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="#" className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-2 hover:border-primary/50 relative block aspect-[9/16]">
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <video
                  src="https://yrxnpmaqyceoysawpdtf.supabase.co/storage/v1/object/public/Videos-sitio-web/Video_3.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white z-20">
                  <p className="font-bold mb-1">@cocoati.cafe</p>
                  <p className="text-xs opacity-80">Todos los días abrimos y desde que el sol está en su punto más alto, Cocoati Cafe abre sus puertas para invitarlos a disfrutar de ricos postres y bebidas unicas. ☀️🥭</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section: Crónicas del Imperio */}
      <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4 text-slate-900 dark:text-white">Crónicas del Imperio</h2>
              <div className="h-1.5 w-32 bg-primary rounded-full"></div>
            </div>
            <p className="text-slate-600 dark:text-cream/60 max-w-md italic">
              "Explora el mundo del café a través de nuestros relatos, desde la mística de los granos hasta el arte de la preparación imperial."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts && recentPosts.map((post: any) => (
              <article key={post.id} className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  {post.image_url && (
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                    {post.category || 'Cultura'}
                  </span>
                  <h3 className="text-2xl font-bold hero-text text-slate-900 dark:text-white mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-cream/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.content}
                  </p>
                  <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                    Leer más
                    <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold hero-text text-slate-900 dark:text-white">
                Encuentra tu <br />
                <span className="text-primary italic">Palacio</span>
              </h2>
              <p className="text-slate-600 dark:text-cream/70 text-lg leading-relaxed">
                Visítanos en el corazón de Tulum. Un espacio diseñado para la contemplación, la charla amena y el disfrute de los sentidos.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold hero-text text-slate-900 dark:text-white">Tulum Centro</h4>
                    <p className="text-slate-500 dark:text-cream/50">Calle Tun-kul entre Av. Satélite y C. Centauro</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold hero-text text-slate-900 dark:text-white">Horario Real</h4>
                    <p className="text-slate-500 dark:text-cream/50">Lunes a Domingo: 7:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.264663187687!2d-87.46454792415124!3d20.20857508124584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd1905668efdd%3A0x673c683833d71217!2sCocoati%20Cafe!5e0!3m2!1sen!2smx!4v1709664585123!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[10px] border-white/20 rounded-[2.5rem]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
