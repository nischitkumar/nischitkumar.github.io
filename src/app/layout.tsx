import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
    title: 'Nischit Kumar | ML Research',
    description: 'Machine Learning Researcher exploring deep learning, systems, and intelligent systems.',
    keywords: 'machine learning, research, AI, deep learning, NLP, computer vision',
    authors: [{ name: 'Nischit Kumar' }],
    creator: 'Nischit Kumar',
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
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400&family=Playfair+Display:wght@700&display=swap" rel="preload" as="style" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-cream text-charcoal antialiased dark:bg-charcoal dark:text-cream transition-colors duration-300">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
