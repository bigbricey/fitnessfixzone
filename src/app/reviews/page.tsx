import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Supplement & Gear Reviews — Honest Testing | FitnessFixZone",
    description: "Honest, tested reviews of supplements, home gym equipment, and fitness gear. We buy, test, and tell you what's worth your money.",
    alternates: { canonical: "https://www.fitnessfixzone.com/reviews" },
    openGraph: {
        images: [{ url: "https://www.fitnessfixzone.com/images/og-image.png", width: 1200, height: 630 }],
    },
};

const reviews = [
    {
        href: "/reviews/weight-loss-supplements",
        category: "Supplements",
        title: "Best Weight Loss Supplements in 2026: An Honest Review",
        excerpt: "We compared the top-selling weight loss supplements for ingredients, value, and real user feedback.",
        readTime: "12 min",
        image: "/images/supplements-review.png",
    },
    {
        href: "/reviews/best-home-gym-under-500",
        category: "Home Gym",
        title: "Best Home Gym Equipment Under $500 (2026)",
        excerpt: "Build a complete home gym without breaking the bank. We compared 30+ options to find the best value setups.",
        readTime: "9 min",
        image: "/images/home-gym.png",
    },
    {
        href: "/reviews/best-pre-workout",
        category: "Pre-Workout",
        title: "Best Pre-Workout Supplements: Tested & Ranked",
        excerpt: "Not all pre-workouts are created equal. We break down ingredients, dosing, and which ones actually deliver.",
        readTime: "11 min",
        image: "/images/pre-workout.png",
    },
    {
        href: "/reviews/creatine-monohydrate-guide",
        category: "Recovery",
        title: "Creatine Monohydrate: The Only Supplement You Need?",
        excerpt: "The most researched supplement in history. Here\u2019s what it does, how to take it, and whether you should bother.",
        readTime: "7 min",
        image: "/images/creatine.png",
    },
];

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
                    {reviews.map((r) => (
                        <a key={r.href} href={r.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="content-card">
                                <div className="card-image" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <Image
                                        src={r.image}
                                        alt={r.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="card-category">{r.category}</div>
                                </div>
                                <div className="card-body">
                                    <h3>{r.title}</h3>
                                    <p>{r.excerpt}</p>
                                    <div className="card-meta">
                                        <span>{r.readTime} read</span>
                                        <span className="read-more">Read More →</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
