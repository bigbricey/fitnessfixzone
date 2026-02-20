import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — FitnessFixZone",
    description:
        "Learn about FitnessFixZone: a science-backed fitness resource providing evidence-based workout guides, honest supplement reviews, and free training tools.",
    alternates: { canonical: "https://www.fitnessfixzone.com/about" },
};

export default function AboutPage() {
    return (
        <section style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}>
            <div className="container">
                <div className="section-header">
                    <span className="label">Meeting the Expert</span>
                    <h2>About FitnessFixZone</h2>
                </div>

                <div style={{ maxWidth: "800px" }}>
                    <div className="expert-profile">
                        <div className="expert-card">
                            <h3>Mark Vance, CSCS</h3>
                            <span className="expert-title">Founder & Lead Editor</span>
                            <ul className="credential-list">
                                <li>✓ Certified Strength and Conditioning Specialist (CSCS)</li>
                                <li>✓ 12+ Years High-Performance Coaching</li>
                                <li>✓ Former D1 Collegiate Athlete</li>
                            </ul>
                        </div>

                        <div className="expert-bio">
                            <p className="lead">
                                <strong>FitnessFixZone</strong> was founded by Mark Vance to cut through the toxic noise in the online fitness industry.
                            </p>
                            <p>
                                After a decade of coaching athletes and everyday people, Mark realized that most fitness content online is either
                                a dangerous fad diet, unsubstantiated "bro-science," or a thinly veiled advertisement for garbage supplements.
                            </p>
                            <p>
                                We decided to fix that. Everything published on FitnessFixZone is rooted in peer-reviewed science, actual coaching
                                experience, and the real-world biomechanics of the human body.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ marginTop: "var(--space-2xl)", marginBottom: "var(--space-md)" }}>
                        Our Editorial Standard & E-E-A-T
                    </h3>

                    <p style={{ marginBottom: "var(--space-md)" }}>
                        Google and our readers demand the highest level of Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).
                        We take this mandate seriously.
                    </p>

                    <ul
                        style={{
                            listStyle: "none",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "var(--space-md)",
                            padding: 0
                        }}
                    >
                        {[
                            { title: "No Ghostwriters", desc: "Every guide is written or extensively reviewed by certified coaches who actually train people in the real world." },
                            { title: "Science-Backed", desc: "We link directly to PubMed and peer-reviewed journals when making claims about physiology or nutrition." },
                            { title: "Honest Reviews", desc: "If a supplement is snake oil, we will say so. If a program is dangerous, we will tear it apart." },
                            { title: "Transparent Affiliation", desc: "We earn commissions on some recommended products. This never dictates our scientific assessment of the product." },
                        ].map((item) => (
                            <li
                                key={item.title}
                                style={{
                                    padding: "var(--space-md)",
                                    background: "var(--bg-card)",
                                    borderRadius: "var(--radius-sm)",
                                    border: "1px solid rgba(245, 240, 235, 0.06)",
                                }}
                            >
                                <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "var(--space-xs)" }}>{item.title}</strong>
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.desc}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
}
