import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
    title: 'Nischit Kumar',
    description:
        'Nischit Kumar is an undergraduate researcher working on systems for machine learning, including efficient LLM inference and distributed training.',
    keywords: 'Nischit Kumar, machine learning systems, distributed systems, reinforcement learning, BITS Pilani',
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
        title: 'Nischit Kumar',
        description:
            'Undergraduate researcher working on systems for machine learning, including efficient LLM inference and distributed training.',
        siteName: 'Nischit Kumar',
    },
    twitter: {
        card: 'summary',
        creator: '@nischitkumar',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased min-h-screen">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
