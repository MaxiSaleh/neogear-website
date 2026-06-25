import { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ prod }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const hasMultiple = prod.imagenes && prod.imagenes.length > 1;
  const images = prod.imagenes || [prod.imagen];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    }
  };

  const prevSlide = (e) => {
    e.preventDefault();
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  const nextSlide = (e) => {
    e.preventDefault();
    if (currentIndex < images.length - 1) scrollToIndex(currentIndex + 1);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-brand-card border border-white/5 rounded-3xl overflow-hidden hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Product Image Frame (Carousel) */}
      <div className="aspect-[4/3] bg-brand-dark/50 relative overflow-hidden flex items-center justify-center border-b border-white/5">
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((imgUrl, idx) => (
            <div key={idx} className="min-w-full flex-shrink-0 flex items-center justify-center snap-center p-6 relative">
              <img
                src={`${import.meta.env.BASE_URL}${imgUrl.replace(/^\//, '')}`}
                alt={`${prod.nombre} - vista ${idx + 1}`}
                loading="lazy"
                className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
              />
            </div>
          ))}
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-sm border border-white/5 text-[10px] font-bold uppercase tracking-wider text-brand-yellow">
            {prod.categoria}
          </span>
        </div>

        {/* Carousel Controls */}
        {hasMultiple && (
          <>
            {/* Arrows */}
            <button 
              onClick={prevSlide}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-brand-blue transition-all opacity-0 group-hover:opacity-100 ${currentIndex === 0 ? 'hidden' : ''}`}
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextSlide}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-brand-blue transition-all opacity-0 group-hover:opacity-100 ${currentIndex === images.length - 1 ? 'hidden' : ''}`}
            >
              <ChevronRight size={16} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.preventDefault(); scrollToIndex(idx); }}
                  className={`transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-4 h-1.5 bg-brand-blue' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Ir a la imagen ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
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
  );
}
