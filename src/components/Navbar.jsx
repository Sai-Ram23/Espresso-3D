import { useState, useEffect } from 'react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Connect', href: '#connect' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileMenuOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled
                    ? 'py-3 bg-espresso/70 backdrop-blur-xl shadow-lg'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                        className="font-display text-2xl md:text-3xl text-white tracking-tight hover:text-caramel transition-colors duration-300"
                    >
                        Espresso
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-full ${link.name === 'Connect'
                                        ? 'bg-caramel text-espresso hover:bg-latte hover:scale-105'
                                        : 'text-cream/80 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-espresso/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-xl ${link.name === 'Connect'
                                        ? 'bg-caramel text-espresso text-center mt-2'
                                        : 'text-cream/80 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
