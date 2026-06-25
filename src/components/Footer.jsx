import { MessageCircle, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#02050b] border-t border-white/5 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand Info */}
        <div className="md:col-span-5 text-left flex flex-col items-start">
          <a href="#inicio" className="flex items-center mb-6 group transition-transform duration-300 hover:scale-105">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="NeoGear Logo" className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm mb-6">
            Venta de hitbox, arcade stick, repuestos arcade y tecnología. De Córdoba al resto del país.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <MapPin className="w-4 h-4 text-brand-blue" />
            <span>Córdoba, Argentina - Envíos a todo el país</span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="md:col-span-3 text-left">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
            Navegación
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: 'Inicio', href: '#inicio' },
              { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
              { name: 'Categorías', href: '#categorias' },
              { name: 'Catálogo', href: '#catalogo' },
              { name: 'Galería', href: '#galeria' }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Contact Links */}
        <div className="md:col-span-4 text-left">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
            Contacto & Pedidos
          </h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
            Las ventas y cotizaciones se realizan de forma directa y personalizada. Hablanos por nuestras redes para armar tu configuración ideal.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/neogearcba/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-card hover:bg-brand-blue/10 border border-white/5 hover:border-brand-blue/20 text-gray-300 hover:text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-dark group-hover:bg-brand-blue/20 group-hover:text-brand-yellow transition-colors">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Instagram</span>
                  <span className="text-sm font-medium">@neogearcba</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-brand-blue" />
            </a>

            <a
              href="https://wa.me/543513949988"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-card hover:bg-brand-blue/10 border border-white/5 hover:border-brand-blue/20 text-gray-300 hover:text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-dark group-hover:bg-brand-blue/20 group-hover:text-brand-yellow transition-colors">
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-brand-yellow animate-pulse" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">WhatsApp</span>
                  <span className="text-sm font-medium">+54 351 394-9988</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-brand-blue" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-gray-500">
          © {new Date().getFullYear()} NeoGear. Todos los derechos reservados.
        </span>
        <span className="text-xs text-gray-600 flex items-center gap-2">
          <span>Córdoba, Argentina.</span>
          <span className="text-[10px] bg-brand-blue/10 border border-brand-blue/20 px-2 py-0.5 rounded text-brand-blue font-bold tracking-widest uppercase">System M2</span>
        </span>
      </div>
    </footer>
  )
}
