import { useState, useEffect, useRef } from 'react'

const TOTAL_FRAMES = 192
const SCROLL_HEIGHT_MULTIPLIER = 5 // How many viewport heights to scroll through all frames

// Text overlays that appear at specific frame ranges
const textOverlays = [
    {
        id: 1,
        startFrame: 1,
        endFrame: 40,
        title: "Crafted with Passion",
        subtitle: "Premium Artisan Coffee",
        position: "left"
    },
    {
        id: 2,
        startFrame: 50,
        endFrame: 100,
        title: "Every Drop Matters",
        subtitle: "Precision in Every Pour",
        position: "right"
    },
    {
        id: 3,
        startFrame: 110,
        endFrame: 160,
        title: "The Perfect Splash",
        subtitle: "Where Art Meets Craft",
        position: "left"
    },
    {
        id: 4,
        startFrame: 170,
        endFrame: 192,
        title: "Your Moment Awaits",
        subtitle: "Experience Espresso",
        position: "center"
    }
]

export default function ScrollHero() {
    const [currentFrame, setCurrentFrame] = useState(1)
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [loadProgress, setLoadProgress] = useState(0)
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const imagesRef = useRef([])

    // Preload all frames
    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = []

            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image()
                const frameNumber = String(i).padStart(4, '0')
                img.src = `/frames/${frameNumber}.jpg`

                const promise = new Promise((resolve) => {
                    img.onload = () => {
                        setLoadProgress(prev => Math.min(prev + (100 / TOTAL_FRAMES), 100))
                        resolve(img)
                    }
                    img.onerror = () => resolve(null)
                })

                imagePromises.push(promise)
                imagesRef.current[i] = img
            }

            await Promise.all(imagePromises)
            setImagesLoaded(true)
        }

        loadImages()
    }, [])

    // Handle scroll and update frame
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return

            const container = containerRef.current
            const rect = container.getBoundingClientRect()
            const scrollableHeight = container.offsetHeight - window.innerHeight

            // Calculate how far we've scrolled into the container
            const scrolled = -rect.top
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight))

            // Map progress to frame number
            const frame = Math.floor(progress * (TOTAL_FRAMES - 1)) + 1
            setCurrentFrame(Math.max(1, Math.min(TOTAL_FRAMES, frame)))
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial call

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Draw current frame to canvas
    useEffect(() => {
        if (!canvasRef.current || !imagesLoaded) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const img = imagesRef.current[currentFrame]

        if (img && img.complete) {
            // Set canvas size to match window
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            // Calculate aspect ratio to cover the canvas
            const imgRatio = img.width / img.height
            const canvasRatio = canvas.width / canvas.height

            let drawWidth, drawHeight, drawX, drawY

            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width
                drawHeight = canvas.width / imgRatio
                drawX = 0
                drawY = (canvas.height - drawHeight) / 2
            } else {
                drawHeight = canvas.height
                drawWidth = canvas.height * imgRatio
                drawX = (canvas.width - drawWidth) / 2
                drawY = 0
            }

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)
        }
    }, [currentFrame, imagesLoaded])

    // Get visible text overlay based on current frame
    const getVisibleOverlay = () => {
        return textOverlays.find(
            overlay => currentFrame >= overlay.startFrame && currentFrame <= overlay.endFrame
        )
    }

    const visibleOverlay = getVisibleOverlay()

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ height: `${SCROLL_HEIGHT_MULTIPLIER * 100}vh` }}
        >
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-espresso">
                {/* Loading Screen */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-espresso">
                        <div className="text-cream text-xl mb-4 font-display">Loading Experience...</div>
                        <div className="w-64 h-2 bg-coffee-bean rounded-full overflow-hidden">
                            <div
                                className="h-full bg-caramel transition-all duration-300 rounded-full"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <div className="text-cream/60 mt-2 text-sm">{Math.round(loadProgress)}%</div>
                    </div>
                )}

                {/* Canvas for frame animation */}
                <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

                {/* Text Overlays */}
                {visibleOverlay && imagesLoaded && (
                    <div
                        className={`absolute inset-0 flex items-center pointer-events-none transition-all duration-700 ${visibleOverlay.position === 'left' ? 'justify-start pl-8 md:pl-16 lg:pl-24' :
                                visibleOverlay.position === 'right' ? 'justify-end pr-8 md:pr-16 lg:pr-24' :
                                    'justify-center text-center'
                            }`}
                    >
                        <div className="max-w-xl animate-fadeIn">
                            <span className="inline-block px-4 py-2 mb-4 text-sm md:text-base font-medium tracking-widest uppercase text-cream bg-espresso/60 backdrop-blur-sm rounded-full">
                                {visibleOverlay.subtitle}
                            </span>
                            <h1 className="font-display text-[clamp(40px,7vw,80px)] leading-[1.1] tracking-[-0.02em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]">
                                {visibleOverlay.title}
                            </h1>
                        </div>
                    </div>
                )}

                {/* Frame Counter (for debug - can be removed) */}
                <div className="absolute bottom-6 left-6 text-white/40 text-xs font-mono hidden">
                    Frame: {currentFrame} / {TOTAL_FRAMES}
                </div>

                {/* Scroll Indicator */}
                {currentFrame < 10 && imagesLoaded && (
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
                        <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                )}

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div
                        className="h-full bg-caramel transition-all duration-100"
                        style={{ width: `${(currentFrame / TOTAL_FRAMES) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    )
}
