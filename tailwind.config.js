/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                espresso: '#2C1810',
                latte: '#C4A484',
                caramel: '#D4A574',
                cream: '#F5F5DC',
                vanilla: '#F3E5AB',
                'coffee-bean': '#3B2F2F',
                'off-white': '#FAFAFA',
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
                mono: ['Inter', 'monospace'],
            },
            animation: {
                'bounce-slow': 'bounce 2s infinite',
            },
        },
    },
    plugins: [],
}
