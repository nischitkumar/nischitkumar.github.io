const experience = [
    {
        role: 'Undergraduate Researcher',
        org: 'Data, Systems and High Performance Computing (DaSH) Lab',
        period: 'Sept 2024 – Present',
        points: [
            'Worked with e6data to integrate Relational Sum Product Networks (RSPN) in C++, streamlining CSV processing in a data pipeline.',
            'Studied benchmarking techniques for performance evaluation while reading through Mutable DB’s codebase.',
            'Supervised by Dr. Arnab K. Paul.',
        ],
    },
    {
        role: 'Research Assistant',
        org: 'Indian Institute of Management Bangalore',
        period: 'Oct 2025 – Jan 2026',
        points: [
            'Worked on optimizing the Traveling Thief Problem using deep reinforcement learning, including PPO, SAC, and DQN, alongside other combinatorial optimization techniques.',
            'Supervised by Dr. Abhay Sobhanan.',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="wrap section divider">
            <p className="eyebrow mb-6">Experience</p>

            <div className="space-y-10">
                {experience.map((job) => (
                    <div key={job.org} className="grid md:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
                        <p className="font-mono text-xs text-faint pt-1">{job.period}</p>
                        <div>
                            <h3 className="text-sm font-medium text-ink">
                                {job.role}, {job.org}
                            </h3>
                            <ul className="mt-2 space-y-1.5 list-disc marker:text-faint pl-4">
                                {job.points.map((point) => (
                                    <li key={point} className="text-sm text-muted leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
