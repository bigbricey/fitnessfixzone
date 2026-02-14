import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fitness Guides — Evidence-Based Training Tips | FitnessFixZone",
    description: "In-depth, science-backed fitness guides covering weight loss, strength training, nutrition, and recovery. No bro-science — just evidence.",
    alternates: { canonical: "https://www.fitnessfixzone.com/guides" },
};

export default function GuidesPage() {
    return (
        <section className="legal-page">
            <div className="container">
                <span className="category-tag">GUIDES</span>
                <h1 className="article-title">
                    Evidence-Based <span className="accent">Fitness Guides</span>
                </h1>
                <p className="article-intro">
                    In-depth guides backed by science — not bro-science. Each guide is researched, cited, and written to help you train smarter.
                </p>

                <div className="content-grid" style={{ marginTop: 'var(--space-2xl)' }}>
                    <a href="/guides/weight-loss-mistakes" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="content-card">
                            <div className="card-image">
                                <div className="card-category">Weight Loss</div>
                            </div>
                            <div className="card-body">
                                <h3>5 Biggest Mistakes People Make When Trying to Lose Weight</h3>
                                <p>Most people sabotage their fat loss without realizing it. Here&apos;s what science says you should actually do.</p>
                                <div className="card-meta">
                                    <span>8 min read</span>
                                    <span className="read-more">Read More →</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/guides/beginners-strength-training" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="content-card">
                            <div className="card-image">
                                <div className="card-category">Strength</div>
                            </div>
                            <div className="card-body">
                                <h3>The Complete Beginner&apos;s Guide to Strength Training</h3>
                                <p>Everything you need to know to start lifting weights safely and build real muscle, even if you&apos;ve never touched a barbell.</p>
                                <div className="card-meta">
                                    <span>12 min read</span>
                                    <span className="read-more">Read More →</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
