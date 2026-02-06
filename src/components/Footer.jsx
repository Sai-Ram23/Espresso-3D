export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-espresso text-cream pt-24 pb-12 overflow-hidden">
            {/* Large Brand Text Background */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
                <h2 className="font-display text-[clamp(80px,18vw,400px)] text-white/5 tracking-[-0.04em] whitespace-nowrap leading-none">
                    ESPRESSO
                </h2>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About Column */}
                    <div>
                        <h3 className="font-display text-2xl text-caramel mb-6">Espresso</h3>
                        <p className="text-cream/70 leading-relaxed mb-6">
                            Crafting exceptional coffee experiences since 1985.
                            Every cup tells a story of passion, precision, and the pursuit of perfection.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-coffee-bean hover:bg-caramel flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={social}
                                >
                                    <span className="text-xs uppercase">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Hours Column */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider">Hours</h4>
                        <ul className="space-y-3 text-cream/70">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>6am - 8pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>7am - 9pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>8am - 6pm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Our Story', 'Menu', 'Locations', 'Careers', 'Gift Cards', 'Wholesale'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-cream/70 hover:text-caramel transition-colors duration-300 inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-caramel group-hover:w-4 transition-all duration-300" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 text-cream/70">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1 text-caramel flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Coffee Street<br />Brewtown, BC 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:hello@espresso.com" className="hover:text-caramel transition-colors">
                                    hello@espresso.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+11234567890" className="hover:text-caramel transition-colors">
                                    (123) 456-7890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="border-t border-coffee-bean/50 pt-8 mb-8">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                            <div
                                key={method}
                                className="px-4 py-2 bg-coffee-bean/30 rounded-lg text-sm text-cream/50"
                            >
                                {method}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
                    <p>© 2026 Espresso Coffee Co. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-caramel transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-caramel transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-[900] w-14 h-14 rounded-full bg-caramel hover:bg-latte text-espresso shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-slow"
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    )
}
