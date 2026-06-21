import { motion } from 'framer-motion'
import { Cpu, Sliders, Shield } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      icon: <Sliders className="w-6 h-6 text-brand-blue" />,
      title: 'Ergonomía y Precisión',
      desc: 'Controladores diseñados por marcas líderes del fighting game. Switches y layouts optimizados para la máxima velocidad y comodidad.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-blue" />,
      title: 'Compatibilidad Amplia',
      desc: 'Soporte multiconsola de última generación. Conexiones estables de latencia ultra baja para PC, PS4, PS5, Xbox y Nintendo Switch.'
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-blue" />,
      title: 'Garantía y Soporte Local',
      desc: 'Comprá con tranquilidad. Ofrecemos hardware 100% original, importado de manera oficial con soporte preventa y posventa en Argentina.'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="sobre-nosotros" className="py-24 bg-brand-dark/40 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 text-left">
            <h2 className="font-display text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
              Sobre NeoGear
            </h2>
            <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Equipamiento premium para la escena competitiva mundial
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Nacidos en Córdoba, Argentina, NeoGear surge de la pasión por los fighting games y la necesidad de acercar periféricos importados de primera línea a la comunidad de juegos de pelea del país.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Nos especializamos en la importación y distribución de las marcas más respetadas del sector global, tales como Razer, Qanba, Haute42, Cosmox y Mayflash. Ya sea que busques un leverless ultradelgado con switches mecánicos o un stick arcade clásico de calidad de torneo, nos aseguramos de que tengas acceso al mejor hardware disponible.
            </p>
            <div className="flex items-center gap-6 border-t border-white/5 pt-8">
              <div>
                <span className="block text-3xl font-display font-bold text-white">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Originales</span>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <span className="block text-3xl font-display font-bold text-white">Córdoba</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Soporte Local</span>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-col gap-6"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass p-6 rounded-2xl flex gap-6 items-start text-left hover:border-brand-blue/20 hover:bg-brand-card/50 transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-xl bg-brand-dark border border-white/5 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-yellow transition-colors duration-200">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
