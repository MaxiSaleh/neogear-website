import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Categorías', href: '#categorias' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Image */}
        <a href="#inicio" className="flex items-center group transition-transform duration-300 hover:scale-105">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="NeoGear" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://www.instagram.com/neogearcba/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-brand-blue/30 text-brand-blue text-xs font-semibold uppercase tracking-wider hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
          >
            Instagram
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-brand-blue transition-colors focus:outline-none"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-brand-dark/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out border-t border-white/5 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-brand-yellow font-display font-medium text-2xl tracking-wider transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/neogearcba/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="mt-4 px-8 py-3 rounded-full bg-brand-blue text-white font-bold text-sm uppercase tracking-wider hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20"
          >
            Seguinos en Instagram
          </a>
        </div>
      </div>
    </nav>
  )
}
