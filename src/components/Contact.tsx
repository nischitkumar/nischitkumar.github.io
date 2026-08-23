const links = [
    { label: 'Email', href: 'mailto:nischitkumar24@gmail.com', text: 'nischitkumar24@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/nischitkumar', text: 'github.com/nischitkumar' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nischitkumar', text: 'linkedin.com/in/nischitkumar' },
];

export default function Contact() {
    return (
        <section id="contact" className="wrap section divider">
            <p className="eyebrow mb-6">Contact</p>
            <p className="text-base text-muted max-w-xl leading-relaxed">
                I&apos;m happy to hear from people working on ML systems, or anything close to it. Reach out
                any time.
            </p>
            <div className="mt-6 space-y-2">
                {links.map((link) => (
                    <div key={link.label} className="flex gap-3 text-sm">
                        <span className="font-mono text-xs text-faint w-16 pt-0.5">{link.label}</span>
                        <a
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="link-quiet"
                        >
                            {link.text}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
