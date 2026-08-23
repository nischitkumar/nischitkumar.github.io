'use client';

import { useTheme } from './ThemeProvider';

const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
    const { isDark, toggle } = useTheme();

    return (
        <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
            <nav className="wrap flex items-center justify-between h-14">
                <a href="#top" className="font-mono text-sm font-medium tracking-tight">
                    nischit kumar
                </a>
                <div className="flex items-center gap-5">
                    <ul className="hidden sm:flex items-center gap-5">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-sm text-muted hover:text-ink transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={toggle}
                        aria-label="Toggle color theme"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted hover:text-ink hover:border-faint transition-colors"
                    >
                        {isDark ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}
