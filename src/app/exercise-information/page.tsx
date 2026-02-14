import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Exercise Information: Everything You Need to Know | FitnessFixZone",
    description: "Your complete exercise information resource — covering exercise types, muscle groups, rep ranges, training frequency, and how to design your own program.",
    alternates: { canonical: "https://www.fitnessfixzone.com/exercise-information" },
    openGraph: {
        title: "Exercise Information: Everything You Need to Know",
        description: "Complete exercise reference guide covering types, muscle groups, and programming.",
        url: "https://www.fitnessfixzone.com/exercise-information",
        type: "article",
    },
};

export default function ExerciseInformation() {
    return (
        <main>
            <section className="article-hero">
                <div className="container">
                    <span className="category-tag">EXERCISE GUIDE</span>
                    <h1 className="article-title">
                        Exercise Information
                        <span className="accent"> Everything You Need to Know</span>
                    </h1>
                    <p className="article-meta">Updated February 2026 · 10 min read · By the FitnessFixZone Team</p>
                    <p className="article-intro">
                        This is your comprehensive exercise reference. Whether you need to understand exercise
                        types, learn about specific muscle groups, or design your own workout program — everything
                        is covered here. Bookmark this page and come back whenever you need it.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-heading">Types of Exercise</h2>

                    <h3>Aerobic (Cardiovascular) Exercise</h3>
                    <p>
                        Any sustained activity that raises your heart rate and breathing for an extended period.
                        Examples include running, cycling, swimming, walking, rowing, and dancing. Aerobic
                        exercise strengthens your heart and lungs, burns calories, improves mood, and reduces
                        the risk of chronic disease. See our <a href="/cardio-exercise-tips">cardio tips guide</a> for
                        detailed advice.
                    </p>

                    <h3>Anaerobic (Resistance) Exercise</h3>
                    <p>
                        Short, intense bursts of activity that challenge muscles against resistance. This includes
                        weight lifting, bodyweight exercises, sprinting, and plyometrics. Anaerobic exercise builds
                        muscle, increases strength, boosts metabolism, and improves bone density. Learn the
                        basics in our <a href="/guides/beginners-strength-training">strength training guide</a>.
                    </p>

                    <h3>Flexibility and Mobility</h3>
                    <p>
                        Stretching, yoga, and mobility work improve range of motion, prevent injury, and reduce
                        muscle tension. Static stretching (holding positions) is best after workouts; dynamic
                        stretching (movement-based) is best before.
                    </p>

                    <h3>Balance and Stability</h3>
                    <p>
                        Often overlooked, balance training prevents falls, improves athletic performance, and
                        strengthens core stabilizer muscles. Single-leg exercises, stability ball work, and
                        balance board training all fall into this category.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>Major Muscle Groups and How to Train Them</h2>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: 'var(--space-md) 0' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--accent)' }}>
                                    <th style={{ padding: 'var(--space-sm)', textAlign: 'left' }}>Muscle Group</th>
                                    <th style={{ padding: 'var(--space-sm)', textAlign: 'left' }}>Key Exercises</th>
                                    <th style={{ padding: 'var(--space-sm)', textAlign: 'left' }}>Weekly Sets</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: 'var(--space-sm)' }}>Chest</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Bench press, dumbbell press, pushups, flyes</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>10-16</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: 'var(--space-sm)' }}>Back</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Pull-ups, rows, lat pulldown, deadlift</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>10-16</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: 'var(--space-sm)' }}>Shoulders</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Overhead press, lateral raises, face pulls</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>10-16</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: 'var(--space-sm)' }}>Quads</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Squats, leg press, lunges, leg extensions</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>10-16</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: 'var(--space-sm)' }}>Hamstrings</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Romanian deadlift, leg curl, good mornings</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>8-12</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: 'var(--space-sm)' }}>Glutes</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Hip thrusts, squats, Bulgarian split squats</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>10-16</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <td style={{ padding: 'var(--space-sm)' }}>Biceps</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Barbell curls, dumbbell curls, hammer curls</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>6-10</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: 'var(--space-sm)' }}>Triceps</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>Dips, pushdowns, overhead extensions</td>
                                    <td style={{ padding: 'var(--space-sm)' }}>6-10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>Training Frequency Guidelines</h2>
                    <ul>
                        <li><strong>Beginners:</strong> 3 days per week (full body each session)</li>
                        <li><strong>Intermediate:</strong> 4-5 days per week (upper/lower or push/pull/legs split)</li>
                        <li><strong>Advanced:</strong> 5-6 days per week (push/pull/legs or specialized split)</li>
                    </ul>
                    <p>
                        Each muscle group should be trained at least 2x per week for optimal growth. Training
                        a muscle once per week is suboptimal unless you&apos;re doing very high volume per session.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>Rep Ranges for Different Goals</h2>
                    <ul>
                        <li><strong>Strength:</strong> 1-5 reps, heavy weight, long rest (2-5 min)</li>
                        <li><strong>Hypertrophy (muscle growth):</strong> 6-12 reps, moderate weight, moderate rest (60-120 sec)</li>
                        <li><strong>Endurance:</strong> 12-20+ reps, lighter weight, short rest (30-60 sec)</li>
                    </ul>
                    <p>
                        The best programs use all three ranges strategically. Learn more in
                        our <a href="/top-bodybuilding-workout-tips">bodybuilding workout tips</a>.
                    </p>

                    <h2 className="section-heading" style={{ marginTop: 'var(--space-2xl)' }}>Explore Our Guides</h2>
                    <ul>
                        <li><a href="/9-exercise-myths-to-avoid">9 Exercise Myths to Never Fall For</a></li>
                        <li><a href="/5-important-components-of-physical-fitness">5 Components of Physical Fitness</a></li>
                        <li><a href="/free-weights-vs-machines">Free Weights vs Machines</a></li>
                        <li><a href="/exercise-at-home-or-the-gym">Exercise at Home or the Gym?</a></li>
                        <li><a href="/how-to-choose-an-exercise-bike">How to Choose an Exercise Bike</a></li>
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
                            Get Started Today
                        </h3>
                        <p style={{ marginBottom: 'var(--space-md)' }}>
                            Calculate your daily calorie needs and build your exercise plan from there.
                        </p>
                        <a href="/#calculator" className="cta-button">Use the Calorie Calculator →</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
