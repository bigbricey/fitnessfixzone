import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — FitnessFixZone",
    description:
        "Learn about FitnessFixZone: a science-backed fitness resource providing evidence-based workout guides, honest supplement reviews, and free training tools.",
};

export default function AboutPage() {
    return (
        <section style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}>
            <div className="container">
                <div className="section-header">
                    <span className="label">About Us</span>
                    <h2>Your Fitness, Fixed</h2>
                </div>

                <div style={{ maxWidth: "700px" }}>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        <strong style={{ color: "var(--text-primary)" }}>FitnessFixZone</strong> was
                        founded in 2011 with a simple mission: cut through the noise in the fitness
                        industry and deliver evidence-based information that actually helps people
                        reach their goals.
                    </p>

                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        We&apos;re tired of bro-science, fad diets, and supplement hype. Every guide
                        we publish is backed by peer-reviewed research. Every product we review is
                        honestly assessed — if it&apos;s garbage, we&apos;ll tell you.
                    </p>

                    <h3 style={{ marginTop: "var(--space-2xl)", marginBottom: "var(--space-md)" }}>
                        What We Cover
                    </h3>

                    <ul
                        style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "var(--space-md)",
                        }}
                    >
                        {[
                            "🏋️ Strength training and workout programming",
                            "🥤 Honest supplement reviews (protein, creatine, pre-workout)",
                            "📊 Free fitness tools and calculators",
                            "🍎 Evidence-based nutrition guides",
                            "🏠 Home gym equipment reviews and buying guides",
                        ].map((item) => (
                            <li
                                key={item}
                                style={{
                                    padding: "var(--space-md)",
                                    background: "var(--bg-card)",
                                    borderRadius: "var(--radius-sm)",
                                    border: "1px solid rgba(245, 240, 235, 0.06)",
                                    color: "var(--text-secondary)",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 style={{ marginTop: "var(--space-2xl)", marginBottom: "var(--space-md)" }}>
                        Affiliate Disclosure
                    </h3>
                    <p>
                        Some links on this site are affiliate links, meaning we may earn a commission
                        if you purchase through them at no extra cost to you. This helps us keep the
                        site running and continue providing free content and tools. We only recommend
                        products we genuinely believe in.
                    </p>
                </div>
            </div>
        </section>
    );
}
