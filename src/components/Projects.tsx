import ProjectCard from './ProjectCard';

const current = [
    {
        title: 'Router-Guided Expert Tiering for HBM+CXL MoE Inference',
        period: 'Aug 2026 – Present',
        summary: 'Predicting which experts a mixture-of-experts model will need next, so the right ones are already close to the GPU.',
        details: [
            'I profiled expert access patterns on OLMoE-1B-7B and Mixtral-8x7B under a 25% memory budget. OLMoE only reached 52.2% coverage while Mixtral reached 28.7%, which was the opposite of what I expected going in.',
            "I'm now building a prefetch policy that looks one layer ahead. At a 2k-token window it gets 55 to 62% next-layer recall, and it turns out the real bottleneck is hiding the transfer time, not predicting more accurately.",
        ],
        tags: ['PyTorch', 'MoE inference', 'CXL'],
    },
    {
        title: 'PyTorch Checkpoint Compression & Deduplication Engine',
        period: 'Jun 2026 – Present',
        summary: 'A drop-in tool that compresses and deduplicates PyTorch training checkpoints without touching the training code.',
        details: [
            'It hooks directly into the torch.distributed.checkpoint StorageWriter layer, so it works with an existing training pipeline as is.',
            'The GPU side uses Triton for byte-plane transforms, paired with Rust for parallel BLAKE3 hashing and zstd compression. On Pythia-410M checkpoints that gets 3.13x compression at 1,142 MB/s, and every checkpoint round-trips bit for bit.',
        ],
        tags: ['Triton', 'Rust', 'Distributed training'],
    },
    {
        title: 'Intrinsic Curiosity Module (ICM) with DQN',
        period: 'Mar 2026',
        summary: 'Added curiosity-driven exploration to a DQN agent so it learns faster with sparse rewards.',
        details: [
            'Built for the MuJoCo Hopper-v4 environment: I discretized the continuous action space into 27 bins and compressed the 11-dimensional state into a 64-dimensional latent using an MLP encoder.',
            'The intrinsic rewards stabilized learning noticeably, taking the final moving average reward from 245.38, well above the single-frame baseline.',
        ],
        tags: ['Reinforcement learning', 'PyTorch', 'MuJoCo'],
    },
    {
        title: 'Structured State Space Sequence (S4) Modeling',
        period: 'Mar 2026',
        summary: 'A from-scratch PyTorch implementation of S4D, tested on sequential CIFAR-10.',
        details: [
            'Used FFT-based convolutions to keep it efficient, then compared three discretization methods: bilinear, zero-order hold, and forward Euler. Adding magnitude clamping to the Euler method gave the fastest convergence and the best accuracy, 19.2% on a constrained version of the model.',
            "I also wrote a second version using only NumPy and SciPy's L-BFGS-B optimizer, with no autograd, mostly to see if it could be done.",
        ],
        tags: ['Sequence modeling', 'NumPy', 'SciPy'],
    },
];

const earlier = [
    {
        title: 'Twin Delayed DDPG (TD3)',
        summary: 'Implemented TD3 in the Hopper-v5 environment to fix the overestimation bias that plain DDPG suffers from.',
        details: [
            'Used clipped double Q-learning and target policy smoothing. That gave 25 to 35% higher peak reward and noticeably steadier training than the DDPG baseline.',
        ],
        tags: ['PyTorch', 'Reinforcement learning'],
        links: [
            { label: 'Code', href: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/TD3' },
            { label: 'Paper', href: 'https://arxiv.org/abs/1802.09477' },
        ],
    },
    {
        title: 'Proximal Policy Optimization (PPO)',
        summary: 'Implemented PPO for CartPole-v1 to get a feel for how clipped objectives control policy gradient variance.',
        details: [
            'A clipping value of 0.2 alongside an adaptive KL penalty kept training stable, averaging around 9.5 to 9.7 reward per episode over 300+ episodes.',
        ],
        tags: ['PyTorch', 'Reinforcement learning'],
        links: [
            { label: 'Code', href: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/PPO' },
            { label: 'Paper', href: 'https://arxiv.org/abs/1707.06347' },
        ],
    },
    {
        title: 'Generative Adversarial Network',
        summary: 'Built a GAN from scratch and trained it on MNIST.',
        details: [
            "Discriminator loss dropped by about 50% and the generator's objective improved by about 68% over the course of training.",
        ],
        tags: ['PyTorch', 'MNIST'],
        links: [
            { label: 'Code', href: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/GAN' },
            { label: 'Paper', href: 'https://arxiv.org/abs/1406.2661' },
        ],
    },
    {
        title: 'Variational Autoencoder',
        summary: 'Built a VAE from scratch, also trained and validated on MNIST.',
        details: ['Average loss fell by about 39%, and reconstruction loss specifically improved by about 46%.'],
        tags: ['PyTorch', 'MNIST'],
        links: [
            { label: 'Code', href: 'https://github.com/nischitkumar/Paper-Implementations/tree/main/VAE' },
            { label: 'Paper', href: 'https://arxiv.org/abs/1312.6114' },
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="wrap section divider">
            <p className="eyebrow mb-2">Selected projects</p>
            <p className="text-sm text-muted mb-6">Click a project to read more.</p>
            <div>
                {current.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            <p className="eyebrow mt-12 mb-2">Paper implementations</p>
            <p className="text-sm text-muted mb-6">
                Earlier work from reading and reimplementing papers I found interesting.
            </p>
            <div>
                {earlier.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}
