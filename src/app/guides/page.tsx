import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Fitness Guides — Evidence-Based Training Tips | FitnessFixZone",
    description: "In-depth, science-backed fitness guides covering weight loss, strength training, nutrition, and recovery. No bro-science — just evidence.",
    alternates: { canonical: "https://www.fitnessfixzone.com/guides" },
    openGraph: {
        images: [{ url: "https://www.fitnessfixzone.com/images/og-image.png", width: 1200, height: 630 }],
    },
};

const guides = [
    {
        href: "/guides/weight-loss-mistakes",
        category: "Weight Loss",
        title: "5 Biggest Mistakes People Make When Trying to Lose Weight",
        excerpt: "Most people sabotage their fat loss without realizing it. Here\u2019s what science says you should actually do.",
        readTime: "8 min",
        image: "/images/weight-loss-mistakes.png",
    },
    {
        href: "/guides/beginners-strength-training",
        category: "Strength",
        title: "The Complete Beginner\u2019s Guide to Strength Training",
        excerpt: "Everything you need to know to start lifting weights safely and build real muscle, even if you\u2019ve never touched a barbell.",
        readTime: "12 min",
        image: "/images/strength-training.png",
    },
];

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
                    {guides.map((g) => (
                        <a key={g.href} href={g.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="content-card">
                                <div className="card-image" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <Image
                                        src={g.image}
                                        alt={g.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="card-category">{g.category}</div>
                                </div>
                                <div className="card-body">
                                    <h3>{g.title}</h3>
                                    <p>{g.excerpt}</p>
                                    <div className="card-meta">
                                        <span>{g.readTime} read</span>
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
