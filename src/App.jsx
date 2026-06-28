import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Catalog from './components/Catalog'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-palm selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Catalog />
        <Gallery />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
