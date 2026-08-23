export default function Education() {
    return (
        <section id="education" className="wrap section divider">
            <p className="eyebrow mb-6">Education</p>

            <div className="grid md:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
                <p className="font-mono text-xs text-faint pt-1">Aug 2023 – Jun 2028</p>
                <div>
                    <h3 className="text-sm font-medium text-ink">
                        Birla Institute of Technology and Science, Pilani, Goa, India
                    </h3>
                    <p className="text-sm text-muted mt-1">
                        B.E. (Hons.) in Electronics and Communication, Masters in Economics
                    </p>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                        Coursework: Linear Algebra, Probability &amp; Statistics, Differential Equations,
                        Control Theory, Signals and Systems, Digital Design, Operating Systems, Functional
                        Analysis, Data Structures &amp; Algorithms.
                    </p>
                </div>
            </div>
        </section>
    );
}
