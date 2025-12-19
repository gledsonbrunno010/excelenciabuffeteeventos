/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#fce4be',
                text: '#575048',
                accent: '#1c090b',
                white: '#fcfdff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
                'marquee': 'marquee 35s linear infinite',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
