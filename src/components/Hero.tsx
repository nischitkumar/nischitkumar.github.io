export default function Hero() {
    return (
        <section id="top" className="wrap pt-14 pb-10 md:pt-20 md:pb-14">
            <p className="eyebrow mb-4">Bangalore, India</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-xl">
                Nischit Kumar
            </h1>
            <p className="mt-4 text-lg text-muted max-w-xl leading-relaxed">
                I work on systems for machine learning, trying to make inference and training on large
                models faster and cheaper. I&apos;m an undergraduate researcher at the{' '}
                <span className="text-ink">DaSH Lab</span>, BITS Pilani.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href="mailto:nischitkumar24@gmail.com" className="link-quiet">
                    nischitkumar24@gmail.com
                </a>
                <a href="https://github.com/nischitkumar" target="_blank" rel="noopener noreferrer" className="link-quiet">
                    github
                </a>
                <a href="https://linkedin.com/in/nischitkumar" target="_blank" rel="noopener noreferrer" className="link-quiet">
                    linkedin
                </a>
            </div>
        </section>
    );
}
