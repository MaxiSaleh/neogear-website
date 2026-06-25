import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import galeriaData from '../data/galeria.json'

export default function Gallery() {
  const BASE = import.meta.env.BASE_URL
  const [selectedImage, setSelectedImage] = useState(null)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="galeria" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 right-[20%] w-[30rem] h-[30rem] rounded-full bg-brand-blue/3 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">
            Comunidad NeoGear
          </h2>
          <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-4">
            Galería de Equipamiento
          </h3>
          <p className="text-gray-400 font-light text-sm sm:text-base">
            Explora setups, torneos y el hardware de máxima calidad que nuestros clientes disfrutan en sus combates diarios.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {galeriaData.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(img)}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-brand-card flex flex-col justify-end p-4 hover:border-brand-blue/30 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-brand-blue/10"
            >
              {/* Image Container with aspect crop */}
              <div className="absolute inset-0 z-0">
                <img
                  src={`${BASE}${img.url.split('/').map(encodeURIComponent).join('/')}`}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-75"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Text Hover Content */}
              <div className="relative z-10 text-left transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="font-display font-bold text-sm text-white line-clamp-2">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
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
              aria-label="Cerrar galería"
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
                src={`${BASE}${selectedImage.url.split('/').map(encodeURIComponent).join('/')}`}
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
