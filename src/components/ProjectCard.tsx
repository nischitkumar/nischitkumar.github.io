type Project = {
    title: string;
    period?: string;
    summary: string;
    details: string[];
    tags: string[];
    links?: { label: string; href: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <details className="group py-5 border-b border-border last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
                <div className="min-w-0">
                    <h3 className="text-sm font-medium text-ink">{project.title}</h3>
                    <p className="text-sm text-muted mt-1">{project.summary}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0 pt-0.5">
                    {project.period && (
                        <span className="font-mono text-xs text-faint whitespace-nowrap hidden sm:inline">
                            {project.period}
                        </span>
                    )}
                    <span className="text-faint text-xs transition-transform group-open:rotate-45">
                        [+]
                    </span>
                </div>
            </summary>

            <div className="mt-3 pl-0">
                <ul className="space-y-1.5 list-disc marker:text-faint pl-4">
                    {project.details.map((line) => (
                        <li key={line} className="text-sm text-muted leading-relaxed">
                            {line}
                        </li>
                    ))}
                </ul>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-[11px] text-muted border border-border rounded px-1.5 py-0.5"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.links?.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-quiet text-xs ml-1"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </details>
    );
}
