import { useState } from 'react'

const products = [
    {
        id: 1,
        name: "Classic Espresso",
        description: "Our signature blend with notes of dark chocolate and caramel. Perfect for those who appreciate bold, rich flavors with a smooth finish.",
        price: "$18.99",
        badge: "Best Seller",
        image: "/images/Classic Espresso.png",
        category: "Espresso"
    },
    {
        id: 2,
        name: "Dark Roast Reserve",
        description: "Deep, smoky notes with hints of toasted walnut. A full-bodied experience for the true coffee connoisseur.",
        price: "$22.99",
        badge: "Staff Pick",
        image: "/images/Dark Roast Reserve.png",
        category: "Dark Roast"
    },
    {
        id: 3,
        name: "Swiss Water Decaf",
        description: "All the flavor, none of the caffeine. Naturally processed to preserve the complex taste profile.",
        price: "$19.99",
        badge: "New",
        image: "/images/Swiss Water Decaf.png",
        category: "Decaf"
    },
    {
        id: 4,
        name: "Morning Blend",
        description: "Bright and balanced with citrus undertones. The perfect way to start your day.",
        price: "$16.99",
        badge: null,
        image: "/images/Morning Blend.png",
        category: "Light Roast"
    },
    {
        id: 5,
        name: "Ethiopian Single Origin",
        description: "Floral and fruity with blueberry notes. A unique experience from the birthplace of coffee.",
        price: "$24.99",
        badge: "Limited",
        image: "/images/Ethiopian Single Origin.png",
        category: "Single Origin"
    },
    {
        id: 6,
        name: "House Blend",
        description: "Our everyday classic. Smooth, reliable, and always delicious.",
        price: "$14.99",
        badge: null,
        image: "/images/House Blend.png",
        category: "Medium Roast"
    }
]

export default function ProductsSection() {
    const [selectedProduct, setSelectedProduct] = useState(null)

    const closeModal = () => setSelectedProduct(null)

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream">
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-widest uppercase text-espresso bg-latte/50 rounded-full">
                    Our Collection
                </span>
                <h2 className="font-display text-[clamp(36px,5vw,64px)] text-espresso tracking-[-0.02em] mb-4">
                    Premium Blends
                </h2>
                <p className="text-lg text-coffee-bean/70 max-w-2xl mx-auto">
                    Each blend is carefully crafted to deliver an exceptional coffee experience.
                    Discover your perfect cup.
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 max-w-7xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="group relative bg-white rounded-[20px] overflow-hidden border border-espresso/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    >
                        {/* Product Image */}
                        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-latte/20 to-caramel/20">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                            />

                            {/* Badge */}
                            {product.badge && (
                                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-caramel rounded-full shadow-lg">
                                    {product.badge}
                                </span>
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all duration-300 flex items-center justify-center">
                                <span className="px-6 py-3 bg-white text-espresso font-semibold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    Quick View
                                </span>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                            <span className="text-sm text-caramel font-medium uppercase tracking-wider">
                                {product.category}
                            </span>
                            <h3 className="font-display text-2xl text-espresso mt-2 mb-2 group-hover:text-caramel transition-colors duration-300">
                                {product.name}
                            </h3>
                            <p className="text-coffee-bean/60 text-sm line-clamp-2 mb-4">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-espresso">
                                    {product.price}
                                </span>
                                <button className="w-12 h-12 rounded-full bg-espresso text-cream flex items-center justify-center hover:bg-caramel hover:scale-110 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-[24px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[scaleIn_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-espresso/10 hover:bg-espresso hover:text-white flex items-center justify-center transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Section */}
                            <div className="aspect-square bg-gradient-to-br from-latte/30 to-caramel/30 overflow-hidden">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info Section */}
                            <div className="p-8 flex flex-col justify-center">
                                {selectedProduct.badge && (
                                    <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-white bg-caramel rounded-full">
                                        {selectedProduct.badge}
                                    </span>
                                )}
                                <span className="text-sm text-caramel font-medium uppercase tracking-wider">
                                    {selectedProduct.category}
                                </span>
                                <h3 className="font-display text-3xl text-espresso mt-2 mb-4">
                                    {selectedProduct.name}
                                </h3>
                                <p className="text-coffee-bean/70 mb-6 leading-relaxed">
                                    {selectedProduct.description}
                                </p>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl font-bold text-espresso">
                                        {selectedProduct.price}
                                    </span>
                                    <span className="text-sm text-coffee-bean/50">per 12oz bag</span>
                                </div>
                                <button className="w-full py-4 bg-espresso hover:bg-caramel text-cream font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </section>
    )
}
