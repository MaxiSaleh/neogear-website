import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import productosData from '../data/productos.json'
import ProductCard from './ProductCard'

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const categories = ['Todos', 'Hitbox', 'Arcade Sticks', 'Joysticks', 'Repuestos', 'Tecnología']

  const filteredProducts = activeFilter === 'Todos'
    ? productosData
    : productosData.filter(p => p.categoria.toLowerCase() === activeFilter.toLowerCase())

  return (
    <section id="catalogo" className="py-24 bg-brand-dark-20 relative">
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
                  : 'bg-brand-card hover:bg-brand-card-85 text-gray-400 hover:text-white border border-white/5'
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
              <ProductCard key={prod.id} prod={prod} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
