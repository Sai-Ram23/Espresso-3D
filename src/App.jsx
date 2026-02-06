import Navbar from './components/Navbar'
import ScrollHero from './components/ScrollHero'
import ProductsSection from './components/ProductsSection'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-off-white">
            <Navbar />
            <section id="home">
                <ScrollHero />
            </section>
            <section id="products">
                <ProductsSection />
            </section>
            <section id="about">
                {/* About section - can be expanded later */}
            </section>
            <section id="connect">
                <Footer />
            </section>
        </div>
    )
}

export default App
