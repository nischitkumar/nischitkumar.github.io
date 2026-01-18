import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
    title: 'Nischit Kumar | ML Research',
    description: 'Machine Learning Researcher exploring deep learning, systems, and intelligent systems.',
    keywords: 'machine learning, research, AI, deep learning, NLP, computer vision, reinforcement learning',
    authors: [{ name: 'Nischit Kumar' }],
    creator: 'Nischit Kumar',
    icons: {
        icon: '/icon.svg',
        shortcut: '/icon.svg',
        apple: '/icon.svg',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nischitkumar.com',
        title: 'Nischit Kumar | ML Research',
        description: 'Machine Learning Researcher exploring deep learning, systems, and intelligent systems.',
        siteName: 'Nischit Kumar',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@nischitkumar',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-dark-bg text-text-primary antialiased transition-colors duration-500 min-h-screen relative overflow-x-hidden">
                {/* Background gradient mesh */}
                <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" aria-hidden="true" />

                {/* Decorative orbs */}
                <div className="glow-orb w-[600px] h-[600px] -top-[200px] -right-[200px] bg-accent-primary/20" aria-hidden="true" />
                <div className="glow-orb w-[500px] h-[500px] top-[40%] -left-[200px] bg-accent-secondary/15 animation-delay-2000" aria-hidden="true" />
                <div className="glow-orb w-[400px] h-[400px] bottom-[10%] right-[10%] bg-accent-primary/10 animation-delay-4000" aria-hidden="true" />

                {/* Main content */}
                <ThemeProvider>
                    <main className="relative z-10">
                        {children}
                    </main>
                </ThemeProvider>

                {/* Noise overlay for texture */}
                <div className="noise-overlay" aria-hidden="true" />
            </body>
        </html>
    );
}
