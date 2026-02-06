import { useState, useEffect, useRef } from 'react'

const slides = [
    {
        id: 1,
        title: "Crafted with Passion",
        subtitle: "Premium Artisan Coffee",
        description: "Experience the perfect blend of tradition and innovation in every cup.",
        video: "/videos/Dark_Espresso.mp4",
        cta: "Explore Our Blends"
    },
    {
        id: 2,
        title: "From Bean to Cup",
        subtitle: "Single Origin Excellence",
        description: "Sourced from the finest coffee regions around the world.",
        video: "/videos/Dark_Espresso.mp4",
        cta: "Discover Origins"
    },
    {
        id: 3,
        title: "Roasted Fresh Daily",
        subtitle: "Small Batch Perfection",
        description: "Every roast tells a story of dedication and expertise.",
        video: "/videos/Dark_Espresso.mp4",
        cta: "Shop Now"
    }
]

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 7000)

        return () => clearInterval(timer)
    }, [currentSlide])

    const nextSlide = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setTimeout(() => setIsTransitioning(false), 1000)
    }

    const prevSlide = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setTimeout(() => setIsTransitioning(false), 1000)
    }

    const goToSlide = (index) => {
        if (isTransitioning || index === currentSlide) return
        setIsTransitioning(true)
        setCurrentSlide(index)
        setTimeout(() => setIsTransitioning(false), 1000)
    }

    return (
        <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
            {/* Video Background */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <video
                        ref={index === currentSlide ? videoRef : null}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={slide.video} type="video/mp4" />
                    </video>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <div className="max-w-4xl">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`transition-all duration-1000 ease-in-out ${index === currentSlide
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8 absolute'
                                }`}
                        >
                            {index === currentSlide && (
                                <>
                                    {/* Subtitle */}
                                    <span className="inline-block px-4 py-2 mb-6 text-sm md:text-base font-medium tracking-widest uppercase text-cream bg-espresso/80 backdrop-blur-sm rounded-full">
                                        {slide.subtitle}
                                    </span>

                                    {/* Title */}
                                    <h1 className="font-display text-[clamp(48px,8vw,96px)] leading-[1.05] tracking-[-0.02em] text-white text-shadow-hero mb-6">
                                        {slide.title}
                                    </h1>

                                    {/* Description */}
                                    <p className="text-lg md:text-xl text-cream/90 max-w-xl mb-8 text-shadow-sm">
                                        {slide.description}
                                    </p>

                                    {/* CTA Button */}
                                    <button className="group relative px-8 py-4 bg-caramel hover:bg-latte text-espresso font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                        <span className="relative z-10">{slide.cta}</span>
                                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-caramel w-8'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 z-30 hidden lg:flex flex-col items-center gap-2 text-white/70">
                <span className="text-xs uppercase tracking-widest rotate-90 origin-center translate-x-4">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
            </div>
        </section>
    )
}
