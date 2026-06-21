import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Categories() {
  const BASE = import.meta.env.BASE_URL
  const categories = [
    {
      name: 'Hitbox',
      desc: 'Controladores sin palanca (leverless) para máxima velocidad de ejecución y precisión de inputs.',
      image: `${BASE}productos/hitbox-cover.png`,
      size: 'md:col-span-6 lg:col-span-7'
    },
    {
      name: 'Arcade Sticks',
      desc: 'El feeling clásico del salón arcade combinado con tecnología competitiva moderna.',
      image: `${BASE}productos/sapphire1.png`,
      size: 'md:col-span-6 lg:col-span-5'
    },
    {
      name: 'Joysticks',
      desc: 'Palancas de alta gama, tensores y restrictores para una calibración milimétrica.',
      image: `${BASE}productos/sanwa-jlf-joy-white.png`,
      size: 'md:col-span-6 lg:col-span-4'
    },
    {
      name: 'Repuestos',
      desc: 'Botones premium, microswitches silenciosos, encoders USB y todo para tu modding.',
      image: `${BASE}productos/white-buttons&joy.png`,
      size: 'md:col-span-6 lg:col-span-4'
    },
    {
      name: 'Tecnología',
      desc: 'Accesorios inteligentes, adaptadores multi-consola y conversores para todas las plataformas.',
      image: `${BASE}productos/brook-converter-ps5.png`,
      size: 'md:col-span-12 lg:col-span-4'
    }
  ]


  return (
    <section id="categorias" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-brand-blue/2 blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
            Explora la Gama
          </h2>
          <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-4">
            Categorías de Equipamiento
          </h3>
          <p className="text-gray-400 font-light text-sm sm:text-base">
            Equipamiento de alta performance diseñado a medida para satisfacer las demandas de los jugadores más exigentes.
          </p>
        </div>

        {/* Categories Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {categories.map((cat, idx) => (
            <motion.a
              href="#catalogo"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-brand-card aspect-[4/3] md:aspect-auto md:h-[350px] flex flex-col justify-end p-6 sm:p-8 hover:border-brand-blue/30 transition-all duration-500 ${cat.size}`}
            >
              {/* Product Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-35 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-75"
                  loading="lazy"
                />
                {/* Dark gradient overlap */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
              </div>

              {/* Action Indicator Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-brand-dark/50 backdrop-blur-md text-white group-hover:text-brand-yellow group-hover:border-brand-blue/30 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 text-left">
                <h4 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                  {cat.name}
                </h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
                  {cat.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
