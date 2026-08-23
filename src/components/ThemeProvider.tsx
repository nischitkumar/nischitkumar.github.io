'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextValue = {
    isDark: boolean;
    toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({ isDark: false, toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggle }}>
            <script
                // Runs before hydration to avoid a light/dark flash on load.
                dangerouslySetInnerHTML={{
                    __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
                }}
            />
            {children}
        </ThemeContext.Provider>
    );
}
