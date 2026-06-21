import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import productosData from '../data/productos.json'

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const categories = ['Todos', 'Hitbox', 'Arcade Sticks', 'Joysticks', 'Repuestos', 'Tecnología']

  const filteredProducts = activeFilter === 'Todos'
    ? productosData
    : productosData.filter(p => p.categoria.toLowerCase() === activeFilter.toLowerCase())

  return (
    <section id="catalogo" className="py-24 bg-brand-dark/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
            Hardware & Accesorios
          </h2>
          <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-4">
            Catálogo de Productos
          </h3>
          <p className="text-gray-400 font-light text-sm sm:text-base">
            Todos nuestros productos son importados directamente de las mejores marcas del mundo (Razer, Qanba, Haute42, Mayflash, Cosmox y más). Hacé clic en "Ver en Instagram" para consultar stock e importaciones.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105'
                  : 'bg-brand-card hover:bg-brand-card/85 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={prod.id}
                className="group flex flex-col bg-brand-card border border-white/5 rounded-3xl overflow-hidden hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product Image Frame */}
                <div className="aspect-[4/3] bg-brand-dark/50 relative overflow-hidden flex items-center justify-center p-6 border-b border-white/5">
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    loading="lazy"
                    className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-sm border border-white/5 text-[10px] font-bold uppercase tracking-wider text-brand-yellow">
                      {prod.categoria}
                    </span>
                  </div>
                </div>

                {/* Product Text Content */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h4 className="font-display font-bold text-lg text-white mb-4 group-hover:text-brand-yellow transition-colors duration-200">
                    {prod.nombre}
                  </h4>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Consultar Venta</span>
                    <a
                      href={prod.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-yellow transition-colors group-hover:underline"
                    >
                      Ver en Instagram
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
