const interests = [
    'Systems for machine learning: efficient inference and training',
    'Reinforcement learning for combinatorial optimization',
    'High performance and distributed computing',
];

const current = [
    {
        title: 'Router-guided expert tiering for HBM+CXL MoE inference',
        detail:
            'Profiling how mixture-of-experts models access memory under a fixed budget, then building a prefetch policy that predicts which experts to keep close to the GPU.',
    },
    {
        title: 'PyTorch checkpoint compression and deduplication',
        detail:
            'A drop-in engine that hooks into torch.distributed.checkpoint to compress and deduplicate distributed training checkpoints, without any changes to existing training code.',
    },
];

export default function About() {
    return (
        <section id="about" className="wrap section divider">
            <p className="eyebrow mb-6">About</p>

            <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted">
                <p>
                    I&apos;m an undergraduate researcher at BITS Pilani, Goa, and I work on the systems side of
                    machine learning: the layer that sits between a model and the hardware it runs on. What
                    interests me most is where large models get expensive, whether that means moving memory
                    around during inference or writing out checkpoints during training.
                </p>
                <p>
                    Before this, I worked on reinforcement learning for combinatorial optimization and on
                    sequence modeling with structured state spaces.
                </p>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                    <h3 className="text-sm font-medium text-ink mb-3">Research interests</h3>
                    <ul className="space-y-2 text-sm text-muted list-disc marker:text-faint pl-4">
                        {interests.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-ink mb-3">Currently working on</h3>
                    <ul className="space-y-4">
                        {current.map((item) => (
                            <li key={item.title}>
                                <p className="text-sm font-medium text-ink">{item.title}</p>
                                <p className="text-sm text-muted mt-1 leading-relaxed">{item.detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
