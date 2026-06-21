import { motion } from 'framer-motion'

export default function Gallery() {
  const BASE = import.meta.env.BASE_URL
  const images = [
    {
      url: `${BASE}productos/cosmoxt12-1.png`,
      title: 'Cosmox T12 Leverless',
      span: 'lg:col-span-8 lg:row-span-2'
    },
    {
      url: `${BASE}productos/haute16-black.png`,
      title: 'Haute42 C16 Negro',
      span: 'lg:col-span-4 lg:row-span-1'
    },
    {
      url: `${BASE}productos/guilekey16-white1.png`,
      title: 'GuileKey G16 Blanco',
      span: 'lg:col-span-4 lg:row-span-1'
    },
    {
      url: `${BASE}productos/sapphire3.png`,
      title: 'Sapphire Leverless',
      span: 'lg:col-span-4 lg:row-span-2'
    },
    {
      url: `${BASE}productos/brook-converter-ps5.png`,
      title: 'Brook Wingman FGC',
      span: 'lg:col-span-4 lg:row-span-1'
    },
    {
      url: `${BASE}productos/white-buttons.png`,
      title: 'Botones Premium',
      span: 'lg:col-span-4 lg:row-span-1'
    }
  ]

  return (
    <section id="galeria" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 right-[20%] w-[30rem] h-[30rem] rounded-full bg-brand-blue/3 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
            Product Showcase
          </h2>
          <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-4">
            Galería de Equipamiento
          </h3>
          <p className="text-gray-400 font-light text-sm sm:text-base">
            Echa un vistazo de cerca al hardware de máxima calidad que importamos. Componentes premium y periféricos listos para el juego competitivo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[220px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-brand-card flex flex-col justify-end p-6 hover:border-brand-blue/20 transition-all duration-500 ${img.span}`}
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-75"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Text Hover Content */}
              <div className="relative z-10 text-left transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] text-brand-yellow font-bold uppercase tracking-widest">
                  Importación Oficial
                </span>
                <h4 className="font-display font-bold text-lg text-white mt-1">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
