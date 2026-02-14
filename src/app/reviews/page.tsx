import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Supplement & Gear Reviews — Honest Testing | FitnessFixZone",
    description: "Honest, tested reviews of supplements, home gym equipment, and fitness gear. We buy, test, and tell you what's worth your money.",
    alternates: { canonical: "https://www.fitnessfixzone.com/reviews" },
};

export default function ReviewsIndex() {
    return (
        <section className="legal-page">
            <div className="container">
                <span className="category-tag">REVIEWS</span>
                <h1 className="article-title">
                    Honest <span className="accent">Reviews</span>
                </h1>
                <p className="article-intro">
                    We buy it, test it, and tell you if it&apos;s worth your money. No sponsored rankings — just honest opinions backed by testing.
                </p>

                <div className="content-grid" style={{ marginTop: 'var(--space-2xl)' }}>
                    <a href="/reviews/weight-loss-supplements" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="content-card">
                            <div className="card-image">
                                <div className="card-category">Supplements</div>
                            </div>
                            <div className="card-body">
                                <h3>Best Weight Loss Supplements in 2026: An Honest Review</h3>
                                <p>We compared the top-selling weight loss supplements for ingredients, value, and real user feedback.</p>
                                <div className="card-meta">
                                    <span>12 min read</span>
                                    <span className="read-more">Read More →</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/reviews/best-home-gym-under-500" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="content-card">
                            <div className="card-image">
                                <div className="card-category">Home Gym</div>
                            </div>
                            <div className="card-body">
                                <h3>Best Home Gym Equipment Under $500 (2026)</h3>
                                <p>Build a complete home gym without breaking the bank. We compared 30+ options to find the best value setups.</p>
                                <div className="card-meta">
                                    <span>9 min read</span>
                                    <span className="read-more">Read More →</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/reviews/best-pre-workout" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="content-card">
                            <div className="card-image">
                                <div className="card-category">Pre-Workout</div>
                            </div>
                            <div className="card-body">
                                <h3>Best Pre-Workout Supplements: Tested &amp; Ranked</h3>
                                <p>Not all pre-workouts are created equal. We break down ingredients, dosing, and which ones actually deliver.</p>
                                <div className="card-meta">
                                    <span>11 min read</span>
                                    <span className="read-more">Read More →</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/reviews/creatine-monohydrate-guide" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="content-card">
                            <div className="card-image">
                                <div className="card-category">Recovery</div>
                            </div>
                            <div className="card-body">
                                <h3>Creatine Monohydrate: The Only Supplement You Need?</h3>
                                <p>The most researched supplement in history. Here&apos;s what it does, how to take it, and whether you should bother.</p>
                                <div className="card-meta">
                                    <span>7 min read</span>
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
