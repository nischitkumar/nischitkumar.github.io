import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                serif: ['Merriweather', 'Georgia', 'serif'],
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            colors: {
                cream: '#FAFAF8',
                charcoal: '#1A1A1A',
                slate: '#6B7280',
                accent: '#0066CC',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            letterSpacing: {
                tighter: '-0.04em',
            },
        },
    },
    plugins: [],
};

export default config;
