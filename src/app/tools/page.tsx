import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Fitness Tools & Calculators | FitnessFixZone",
    description: "Free, science-backed fitness calculators: calorie deficit calculator, TDEE calculator, macro calculator. Get your numbers right.",
    alternates: { canonical: "https://www.fitnessfixzone.com/tools" },
};

export default function ToolsPage() {
    return (
        <section className="legal-page">
            <div className="container">
                <span className="category-tag">FREE TOOLS</span>
                <h1 className="article-title">
                    Fitness <span className="accent">Calculators</span>
                </h1>
                <p className="article-intro">
                    Skip the guesswork. Our free calculators use proven formulas to give you the numbers you need to reach your goals.
                </p>

                <div className="content-grid" style={{ marginTop: 'var(--space-2xl)' }}>
                    <a href="/#calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="content-card">
                            <div className="card-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="card-category">Calculator</div>
                                <span style={{ fontSize: '4rem' }}>🔥</span>
                            </div>
                            <div className="card-body">
                                <h3>Calorie Deficit Calculator</h3>
                                <p>Find out exactly how many calories you need to eat to lose weight, maintain, or build muscle — based on the Mifflin-St Jeor equation.</p>
                                <div className="card-meta">
                                    <span>Interactive tool</span>
                                    <span className="read-more">Use Now →</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div style={{ marginTop: 'var(--space-2xl)', padding: 'var(--space-xl)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245,240,235,0.06)' }}>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", textTransform: 'none', fontWeight: 700, marginBottom: 'var(--space-md)' }}>More Tools Coming Soon</h3>
                    <p>We&apos;re building macro calculators, 1RM estimators, and workout planners. Check back soon or bookmark this page.</p>
                </div>
            </div>
        </section>
    );
}
