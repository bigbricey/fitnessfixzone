import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "5 Important Components of Physical Fitness Explained | FitnessFixZone",
    description: "Understand the 5 components of physical fitness: cardiovascular endurance, muscular strength, muscular endurance, flexibility, and body composition.",
    alternates: { canonical: "https://www.fitnessfixzone.com/5-important-components-of-physical-fitness" },
    openGraph: {
        title: "5 Important Components of Physical Fitness Explained",
        description: "A complete guide to the 5 pillars of physical fitness and how to train each one.",
        url: "https://www.fitnessfixzone.com/5-important-components-of-physical-fitness",
        type: "article",
    },
};

export default function ComponentsOfFitness() {
    return (
        <main>
            <section className="article-hero">
                <div className="container">
                    <span className="category-tag">FITNESS FUNDAMENTALS</span>
                    <h1 className="article-title">
                        5 Important Components
                        <span className="accent"> of Physical Fitness</span>
                    </h1>
                    <p className="article-meta">Updated February 2026 · 8 min read · By the FitnessFixZone Team</p>
                    <p className="article-intro">
                        Physical fitness isn&apos;t just about how much you can bench or how fast you can run.
                        True fitness encompasses five distinct components, and neglecting any one of them
                        creates weaknesses that limit your overall health and performance.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-heading">1. Cardiovascular Endurance</h2>
                    <p>
                        Cardiovascular endurance is your heart&apos;s and lungs&apos; ability to supply oxygen to
                        working muscles during sustained activity. It&apos;s arguably the most important component
                        of fitness because it directly affects your risk of heart disease, diabetes, and stroke
                        — the leading causes of death worldwide.
                    </p>
                    <h3>How to Train It</h3>
                    <ul>
                        <li>150+ minutes of moderate-intensity cardio per week (walking, cycling, swimming)</li>
                        <li>OR 75+ minutes of vigorous-intensity cardio (running, HIIT, rowing)</li>
                        <li>Progressive overload: gradually increase duration, intensity, or frequency</li>
                    </ul>
                    <p>
                        <strong>Key metric:</strong> VO2 max — the maximum amount of oxygen your body can use
                        during exercise. Higher VO2 max correlates with longer lifespan.
                        Learn more in our <a href="/cardio-exercise-tips">cardio tips guide</a>.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>2. Muscular Strength</h2>
                    <p>
                        Muscular strength is the maximum force a muscle or muscle group can produce in a single
                        effort. Think: how much you can squat, deadlift, or bench press for one rep. Strength
                        is foundational — it makes everything else easier, from carrying groceries to playing sports.
                    </p>
                    <h3>How to Train It</h3>
                    <ul>
                        <li>Lift heavy weights (70-95% of your 1-rep max)</li>
                        <li>Low reps (1-6 per set) with longer rest periods (2-5 minutes)</li>
                        <li>Focus on compound movements: squat, deadlift, bench press, overhead press, row</li>
                        <li>Progressive overload: add weight or reps systematically over time</li>
                    </ul>
                    <p>
                        Our <a href="/guides/beginners-strength-training">beginner strength training guide</a> covers
                        all the fundamentals.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>3. Muscular Endurance</h2>
                    <p>
                        Muscular endurance is how long a muscle can perform repeated contractions against resistance
                        before fatiguing. While strength is about maximum force, endurance is about sustained effort.
                        Think: how many pushups or squats you can do before failure, or holding a plank.
                    </p>
                    <h3>How to Train It</h3>
                    <ul>
                        <li>Higher rep ranges (12-25+ reps per set)</li>
                        <li>Shorter rest periods (30-60 seconds)</li>
                        <li>Circuit training — moving between exercises with minimal rest</li>
                        <li>Timed exercises (planks, wall sits, farmer&apos;s carries)</li>
                    </ul>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>4. Flexibility</h2>
                    <p>
                        Flexibility is the range of motion available at a joint. Poor flexibility increases injury
                        risk, limits exercise performance, and contributes to chronic pain — especially in the
                        lower back, hips, and shoulders. As we age, flexibility naturally decreases, making
                        deliberate stretching more important over time.
                    </p>
                    <h3>How to Train It</h3>
                    <ul>
                        <li>Static stretching after workouts (hold each stretch 15-60 seconds)</li>
                        <li>Dynamic stretching before workouts (leg swings, arm circles, walking lunges)</li>
                        <li>Yoga or dedicated mobility sessions 1-2 times per week</li>
                        <li>Foam rolling to release myofascial restrictions</li>
                    </ul>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>5. Body Composition</h2>
                    <p>
                        Body composition refers to the ratio of fat mass to lean mass (muscle, bone, water, organs)
                        in your body. Unlike body weight, which doesn&apos;t distinguish between muscle and fat,
                        body composition gives you the full picture. You can weigh 180 lbs at 15% body fat (athletic)
                        or 180 lbs at 30% body fat (overweight) — same scale weight, dramatically different health.
                    </p>
                    <h3>How to Improve It</h3>
                    <ul>
                        <li>Calorie management — <a href="/#calculator">calculate your TDEE</a> and adjust diet accordingly</li>
                        <li>Resistance training to build/preserve muscle mass</li>
                        <li>Adequate protein (0.7-1.0g per pound of body weight)</li>
                        <li>Consistent cardio for fat oxidation</li>
                    </ul>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>Building a Balanced Program</h2>
                    <p>
                        Most people overemphasize one component and neglect others. The bodybuilder with huge
                        muscles who can&apos;t run a mile. The marathon runner who can&apos;t do 5 pushups.
                        A well-rounded fitness program addresses all five components weekly:
                    </p>
                    <ul>
                        <li><strong>Monday/Thursday:</strong> Strength training (components 2 &amp; 3)</li>
                        <li><strong>Tuesday/Friday:</strong> Cardio (component 1)</li>
                        <li><strong>Wednesday/Saturday:</strong> Flexibility/mobility (component 4)</li>
                        <li><strong>Daily:</strong> Nutrition management (component 5)</li>
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
                            Start with the Basics
                        </h3>
                        <p style={{ marginBottom: 'var(--space-md)' }}>
                            Find out your daily calorie needs and build your fitness plan from there.
                        </p>
                        <a href="/#calculator" className="cta-button">Use the Calorie Calculator →</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
