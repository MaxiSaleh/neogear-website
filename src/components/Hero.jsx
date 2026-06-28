import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #03060f 0%, #05132e 45%, #040811 100%)' }}
    >
      {/* Retro perspective grid plane */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', overflow: 'hidden', zIndex: 1 }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '200%',
          height: '100%',
          transform: 'translateX(-50%) perspective(400px) rotateX(60deg)',
          transformOrigin: 'top center',
          backgroundImage: 'linear-gradient(to bottom, rgba(0,85,212,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(0,85,212,0.15) 1px, transparent 1px)',
          backgroundSize: '45px 45px',
          borderTop: '1px solid rgba(0,85,212,0.3)',
        }} />
      </div>

      {/* Radial fade mask over grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse at 50% 60%, transparent 20%, #040811 80%)',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 2,
        background: 'linear-gradient(to top, #040811, transparent)',
      }} />

      {/* Ambient glow — blue */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%', zIndex: 2,
        width: '35rem', height: '35rem', borderRadius: '50%',
        background: 'rgba(0, 85, 212, 0.08)',
        filter: 'blur(120px)',
      }} />

      {/* Ambient glow — orange */}
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%', zIndex: 2,
        width: '30rem', height: '30rem', borderRadius: '50%',
        background: 'rgba(255, 69, 0, 0.08)',
        filter: 'blur(100px)',
      }} />

      {/* Content — above all backgrounds */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" style={{ position: 'relative', zIndex: 10 }}>
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider">
              Córdoba, Argentina
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-wider font-display">
              BOARD TYPE: SYSTEM M2
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Controles que definen el <span className="text-gradient">siguiente nivel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl font-light leading-relaxed"
          >
            Importamos y distribuimos Hitboxes, Arcade Sticks y Joysticks de alta performance de marcas líderes como Razer, Qanba, Haute42, Cosmox y Mayflash. Calidad premium garantizada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#catalogo"
              className="group px-6 py-3.5 rounded-full bg-brand-blue text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/15 glow-blue-hover"
            >
              Ver Productos
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.instagram.com/neogearcba/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              Instagram
            </a>
          </motion.div>
        </div>

        {/* Right Side Image Showcase */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
          >
            {/* Glowing Ring Background - inline keyframe animations via style */}
            <div
              className="absolute inset-4 rounded-full border border-brand-blue/15 -z-10"
              style={{ animation: 'spin 40s linear infinite' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-yellow/50" style={{ filter: 'blur(2px)' }}></div>
            </div>
            <div
              className="absolute inset-16 rounded-full border border-white/5 -z-10"
              style={{ animation: 'spin 20s linear infinite reverse' }}
            ></div>

            {/* Glowing Tech Plate Backdrop */}
            <div className="absolute w-4/5 h-4/5 rounded-[2rem] border border-white/5 -z-10 rotate-12 glow-blue" style={{ background: 'linear-gradient(to top right, rgba(0,85,212,0.10), rgba(255,69,0,0.05))' }}></div>

            {/* Featured Product Image */}
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              src={`${import.meta.env.BASE_URL}${'productos/Qanba Sapphire/sapphire3.png'.split('/').map(encodeURIComponent).join('/')}`}
              alt="Qanba Sapphire"
              className="w-[90%] h-auto rounded-3xl border border-white/10 object-cover shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 50px rgba(0,85,212,0.25))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
