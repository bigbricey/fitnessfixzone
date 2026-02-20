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
                <h2 className="section-heading" style={{ marginTop: 'var(--space-3xl)' }}>The Fitness Library</h2>
                <p style={{ marginBottom: 'var(--space-xl)' }}>
                    Browse our extensive archive of training principles, workout tips, and fitness fundamentals.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 'var(--space-md)',
                }}>
                    {[
                        { title: '9 Exercise Myths to Avoid', href: '/9-exercise-myths-to-avoid', tag: 'Myths' },
                        { title: 'Exercise at Home or the Gym?', href: '/exercise-at-home-or-the-gym', tag: 'Training' },
                        { title: 'Exercise and Your Complexion', href: '/exercise-and-your-complexion', tag: 'Health' },
                        { title: 'Exercise Back Pain Away', href: '/exercise-back-pain-away', tag: 'Recovery' },
                        { title: 'How to Choose an Exercise Bike', href: '/how-to-choose-an-exercise-bike', tag: 'Equipment' },
                        { title: 'Benefits of Water During Exercise', href: '/the-key-benefits-of-drinking-water-during-exercise', tag: 'Nutrition' },
                        { title: 'How to Quit Smoking with Exercise', href: '/how-to-quit-smoking-with-exercise', tag: 'Health' },
                        { title: 'Free Weights vs Machines', href: '/free-weights-vs-machines', tag: 'Training' },
                        { title: '5 Components of Physical Fitness', href: '/5-important-components-of-physical-fitness', tag: 'Fundamentals' },
                        { title: '5 Exercise Mistakes to Avoid', href: '/5-exercise-mistakes-and-misconceptions', tag: 'Mistakes' },
                        { title: 'Top Reasons to Exercise Regularly', href: '/top-reasons-to-exercise-regularly', tag: 'Motivation' },
                        { title: 'How to Exercise Properly', href: '/how-to-exercise-properly', tag: 'Fundamentals' },
                        { title: 'Bodybuilding Tips for Men', href: '/bodybuilding-tips-for-men', tag: 'Bodybuilding' },
                        { title: 'Top Bodybuilding Workout Tips', href: '/top-bodybuilding-workout-tips', tag: 'Bodybuilding' },
                        { title: 'Bodybuilding Tips for Women', href: '/the-best-bodybuilding-tips-for-female-bodybuilders', tag: 'Bodybuilding' },
                        { title: 'Best Abdominal Exercise Tips', href: '/best-abdominal-exercises-tips', tag: 'Core' },
                        { title: 'Is Bodybuilding a Sport?', href: '/is-bodybuilding-a-sport', tag: 'Bodybuilding' },
                        { title: 'Cardio Exercise Tips', href: '/cardio-exercise-tips', tag: 'Cardio' },
                        { title: 'Eating and Exercise', href: '/the-importance-of-eating-and-exercise', tag: 'Nutrition' },
                        { title: 'Exercise Videos & Resources', href: '/exercise-videos', tag: 'Resources' },
                    ].map((article) => (
                        <a
                            key={article.href}
                            href={article.href}
                            className="library-card-link"
                            style={{
                                display: 'block',
                                padding: 'var(--space-md) var(--space-lg)',
                                background: 'var(--surface)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--border)',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'border-color 0.2s, transform 0.2s',
                            }}
                        >
                            <span style={{
                                display: 'inline-block',
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                color: 'var(--accent)',
                                marginBottom: '4px',
                            }}>{article.tag}</span>
                            <div style={{
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                lineHeight: 1.3,
                            }}>{article.title}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
