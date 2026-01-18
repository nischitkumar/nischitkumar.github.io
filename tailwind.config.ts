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
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            colors: {
                // Dark mode palette
                dark: {
                    bg: '#0A0A0B',
                    'bg-alt': '#111113',
                    surface: '#18181B',
                    'surface-hover': '#27272A',
                    border: '#27272A',
                    'border-light': '#3F3F46',
                },
                // Light mode palette
                light: {
                    bg: '#FAFAFA',
                    'bg-alt': '#F4F4F5',
                    surface: '#FFFFFF',
                    'surface-hover': '#F4F4F5',
                    border: '#E4E4E7',
                    'border-light': '#D4D4D8',
                },
                // Text colors
                text: {
                    primary: '#FAFAFA',
                    secondary: '#A1A1AA',
                    muted: '#71717A',
                    'primary-light': '#09090B',
                    'secondary-light': '#52525B',
                    'muted-light': '#A1A1AA',
                },
                // Accent colors
                accent: {
                    primary: '#3B82F6',
                    secondary: '#8B5CF6',
                    glow: 'rgba(59, 130, 246, 0.5)',
                    'glow-violet': 'rgba(139, 92, 246, 0.5)',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.15) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(256, 90%, 65%, 0.15) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(215, 98%, 61%, 0.1) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 90%, 65%, 0.1) 0px, transparent 50%)',
                'gradient-mesh-light': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.08) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(256, 90%, 65%, 0.08) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(215, 98%, 61%, 0.05) 0px, transparent 50%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'gradient': 'gradient 8s ease infinite',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.95)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            letterSpacing: {
                tighter: '-0.04em',
                tight: '-0.02em',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
                'glow-lg': '0 0 60px -15px rgba(59, 130, 246, 0.4)',
                'glow-violet': '0 0 40px -10px rgba(139, 92, 246, 0.3)',
                'inner-glow': 'inset 0 0 30px -10px rgba(59, 130, 246, 0.2)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
