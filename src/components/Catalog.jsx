import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import productosData from '../data/productos.json'
import ProductCard from './ProductCard'

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState(null)
  const BASE = import.meta.env.BASE_URL

  const categories = ['Todos', 'Hitbox', 'Arcade Sticks', 'Joysticks', 'Repuestos', 'Tecnología']

  const filteredProducts = activeFilter === 'Todos'
    ? productosData
    : productosData.filter(p => p.categoria.toLowerCase() === activeFilter.toLowerCase())

  const handleImageClick = (url, title) => {
    setSelectedImage({ url, title })
  }

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
              <ProductCard key={prod.id} prod={prod} onImageClick={handleImageClick} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-brand-blue text-white transition-colors duration-300 z-50"
              aria-label="Cerrar vista ampliada"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            >
              <img
                src={`${BASE}${selectedImage.url.replace(/^\//, '').split('/').map(encodeURIComponent).join('/')}`}
                alt={selectedImage.title}
                className="w-full h-full object-contain filter drop-shadow-2xl rounded-lg"
              />
              <div className="absolute bottom-[-40px] text-center text-white/70 text-sm tracking-widest uppercase font-bold">
                {selectedImage.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
