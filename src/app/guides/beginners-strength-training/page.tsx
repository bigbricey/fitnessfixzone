import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Beginner's Guide to Strength Training (2026) | FitnessFixZone",
    description: "Everything you need to start lifting weights safely and build real muscle. Covers equipment, exercises, programming, and common mistakes beginners make.",
    alternates: { canonical: "https://www.fitnessfixzone.com/guides/beginners-strength-training" },
};

export default function BeginnersStrengthTraining() {
    return (
        <main>
            <section className="article-hero">
                <div className="container">
                    <span className="category-tag">STRENGTH TRAINING</span>
                    <h1 className="article-title">
                        The Complete Beginner&apos;s Guide to
                        <span className="accent"> Strength Training</span>
                    </h1>
                    <p className="article-meta">Updated February 2026 · 12 min read · By the FitnessFixZone Team</p>
                    <p className="article-intro">
                        You don&apos;t need to be jacked to start lifting. This guide covers everything a total beginner
                        needs: equipment, exercises, programming, and the mistakes that slow people down.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-heading">Why Strength Training?</h2>
                    <p>
                        Strength training isn&apos;t just about building muscle. It increases bone density, improves
                        insulin sensitivity, boosts metabolism, and reduces the risk of injury in daily life.
                        A 2023 meta-analysis in <em>British Journal of Sports Medicine</em> found that resistance
                        training reduces all-cause mortality by 15%.
                    </p>
                    <p>
                        You don&apos;t need a gym membership. A set of adjustable dumbbells and a bench can take you
                        surprisingly far. But if you have gym access, that opens up even more options.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>The Essential Equipment</h2>
                    <p>At minimum, you need:</p>
                    <ul className="ingredient-list">
                        <li><strong>A barbell + weight plates</strong> — or adjustable dumbbells</li>
                        <li><strong>A flat/adjustable bench</strong> — for pressing movements</li>
                        <li><strong>A squat rack or power cage</strong> — for safe squatting (gym)</li>
                        <li><strong>Proper shoes</strong> — flat-soled shoes or barefoot for stability</li>
                    </ul>
                    <p style={{ marginTop: 'var(--space-md)' }}>
                        Building a home setup? Check our{' '}
                        <a href="/reviews/best-home-gym-under-500">best home gym under $500 guide</a>.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>The 5 Foundational Movement Patterns</h2>
                    <p>Every good strength program is built around five movement patterns:</p>
                    <ul className="ingredient-list">
                        <li><strong>Squat</strong> — Barbell back squat, goblet squat, or leg press</li>
                        <li><strong>Hinge</strong> — Deadlift, Romanian deadlift, or hip thrust</li>
                        <li><strong>Push</strong> — Bench press, overhead press, or push-ups</li>
                        <li><strong>Pull</strong> — Barbell row, pull-ups, or cable rows</li>
                        <li><strong>Carry/Core</strong> — Farmer&apos;s walks, planks, or pallof press</li>
                    </ul>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>A Simple 3-Day Beginner Program</h2>
                    <p>
                        As a beginner, you don&apos;t need a complicated split. A full-body routine 3 days per week
                        with progressive overload is the fastest way to build a foundation.
                    </p>
                    <div style={{ background: 'var(--bg-secondary)', padding: 'var(--space-xl)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-md)' }}>
                        <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: 'var(--space-md)' }}>Day A (Monday / Friday)</p>
                        <ul className="ingredient-list">
                            <li>Barbell Squat — 3 sets × 8 reps</li>
                            <li>Bench Press — 3 sets × 8 reps</li>
                            <li>Barbell Row — 3 sets × 8 reps</li>
                            <li>Plank — 3 sets × 30-60 seconds</li>
                        </ul>
                        <p style={{ color: 'var(--accent)', fontWeight: 700, margin: 'var(--space-lg) 0 var(--space-md)' }}>Day B (Wednesday)</p>
                        <ul className="ingredient-list">
                            <li>Deadlift — 3 sets × 5 reps</li>
                            <li>Overhead Press — 3 sets × 8 reps</li>
                            <li>Pull-ups or Lat Pulldown — 3 sets × 8 reps</li>
                            <li>Farmer&apos;s Walk — 3 sets × 40 meters</li>
                        </ul>
                    </div>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>Progressive Overload: The Key to Growth</h2>
                    <p>
                        The single most important concept in strength training: do more over time.
                        Add 5 lbs to the bar each session for lower body exercises, and 2.5 lbs for upper body.
                        When you can&apos;t add weight, add a rep. When you can&apos;t add a rep, improve your form.
                    </p>
                    <p>
                        Track every workout in a notebook or app. If you&apos;re not tracking, you&apos;re guessing.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>Common Beginner Mistakes</h2>
                    <ul className="ingredient-list">
                        <li><strong>Too much weight, too fast</strong> — Start lighter than you think. Form first.</li>
                        <li><strong>Skipping warm-ups</strong> — 5 minutes of light cardio + warm-up sets prevent injury.</li>
                        <li><strong>Program hopping</strong> — Pick one program and stick with it for 12 weeks minimum.</li>
                        <li><strong>Ignoring nutrition</strong> — You can&apos;t out-train a bad diet. Protein matters.</li>
                        <li><strong>Comparing to others</strong> — Everyone starts somewhere. Focus on your own progress.</li>
                    </ul>

                    <div style={{
                        marginTop: 'var(--space-2xl)',
                        padding: 'var(--space-xl)',
                        background: 'var(--accent-subtle)',
                        border: '1px solid rgba(204, 255, 0, 0.15)',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ fontFamily: "'DM Sans', sans-serif", textTransform: 'none', fontWeight: 700, marginBottom: 'var(--space-md)' }}>
                            Fuel Your Training Right
                        </h3>
                        <p style={{ marginBottom: 'var(--space-md)' }}>
                            Need help with nutrition? Find your calorie and protein targets with our free calculator.
                        </p>
                        <a href="/#calculator" className="cta-button">Calculate Your Calories →</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
