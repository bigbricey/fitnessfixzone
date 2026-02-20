"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/images/hero.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.25,
            zIndex: 0,
          }}
        />
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="dot" />
              Science-Backed Fitness
            </div>
            <h1>
              Fix Your <span className="highlight">Fitness</span>
              <br />
              {' '}Start Today
            </h1>
            <p>
              No bro-science. No fad diets. Just evidence-based workout guides,
              honest supplement reviews, and free tools to help you reach your
              goals faster.
            </p>
            <div className="hero-buttons">
              <a href="/#calculator" className="btn btn-primary">
                Free Calorie Calculator →
              </a>
              <a href="/guides" className="btn btn-secondary">
                Browse Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section>
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">In-Depth Guides</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Evidence-Based</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">Bro-Science</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Free</div>
              <div className="stat-label">All Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED TOOL: CALORIE CALCULATOR ===== */}
      <section id="calculator">
        <div className="container">
          <div className="tool-section featured">
            <div className="section-header">
              <span className="label">Free Tool</span>
              <h2>Calorie Deficit Calculator</h2>
              <p>
                Find out exactly how many calories you need to eat to reach your
                goal weight. Enter your stats below.
              </p>
            </div>
            <CalorieCalculator />
          </div>
        </div>
      </section>

      {/* ===== LATEST GUIDES ===== */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="label">Latest Guides</span>
            <h2>Fix Your Training</h2>
            <p>
              In-depth, evidence-based guides to help you train smarter and see
              real results.
            </p>
          </div>
          <div className="content-grid">
            <ArticleCard
              category="Weight Loss"
              title="5 Biggest Mistakes People Make When Trying to Lose Weight"
              excerpt="Most people sabotage their fat loss without realizing it. Here's what science says you should actually do."
              readTime="8 min"
              href="/guides/weight-loss-mistakes"
              image="/images/weight-loss-mistakes.png"
            />
            <ArticleCard
              category="Strength"
              title="The Complete Beginner's Guide to Strength Training"
              excerpt="Everything you need to know to start lifting weights safely and build real muscle, even if you've never touched a barbell."
              readTime="12 min"
              href="/guides/beginners-strength-training"
              image="/images/strength-training.png"
            />
            <ArticleCard
              category="Supplements"
              title="Best Weight Loss Supplements in 2026: An Honest Review"
              excerpt="We compared the top-selling weight loss supplements for ingredients, value, and real user feedback. Here's what stood out."
              readTime="12 min"
              href="/reviews/weight-loss-supplements"
              image="/images/supplements-review.png"
            />
          </div>
        </div>
      </section>

      {/* ===== TOP REVIEWS ===== */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="label">Reviews</span>
            <h2>Gear That Actually Works</h2>
            <p>
              Honest, tested reviews of the supplements and equipment that are
              worth your money.
            </p>
          </div>
          <div className="content-grid">
            <ArticleCard
              category="Home Gym"
              title="Best Home Gym Equipment Under $500 (2026)"
              excerpt="Build a complete home gym without breaking the bank. We compared 30+ options to find the best value setups."
              readTime="9 min"
              href="/reviews/best-home-gym-under-500"
              image="/images/home-gym.png"
            />
            <ArticleCard
              category="Pre-Workout"
              title="Best Pre-Workout Supplements: Tested & Ranked"
              excerpt="Not all pre-workouts are created equal. We break down ingredients, dosing, and which ones actually deliver energy without the crash."
              readTime="11 min"
              href="/reviews/best-pre-workout"
              image="/images/pre-workout.png"
            />
            <ArticleCard
              category="Recovery"
              title="Creatine Monohydrate: The Only Supplement You Need?"
              excerpt="The most researched supplement in history. Here's what it does, how to take it, and whether you should bother."
              readTime="7 min"
              href="/reviews/creatine-monohydrate-guide"
              image="/images/creatine.png"
            />
          </div>
        </div>
      </section>

      {/* ===== FITNESS LIBRARY (Historical Articles) ===== */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="label">Fitness Library</span>
            <h2>Exercise Guides &amp; Tips</h2>
            <p>
              Our comprehensive library of exercise guides, bodybuilding tips, and
              fitness fundamentals — established since 2011.
            </p>
          </div>
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
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
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

      {/* ===== NEWSLETTER SIGNUP ===== */}
      <section className="newsletter-section">
        <div className="container">
          <span className="label" style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--accent)',
            marginBottom: 'var(--space-md)',
          }}>Free Weekly Tips</span>
          <h2>Get Smarter About <span style={{ color: 'var(--accent)' }}>Fitness</span></h2>
          <p>
            One email per week with science-backed tips, new guides, and supplement
            deals. No spam, unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <h2>
            Ready to Fix Your <span style={{ color: "var(--accent)" }}>Fitness</span>?
          </h2>
          <p>
            Use our free tools and evidence-based guides to train smarter
            and get real results — no fluff, no bro-science.
          </p>
          <a href="/tools" className="btn btn-primary">
            Try Our Free Tools →
          </a>
        </div>
      </section>
    </>
  );
}

/* ===== CALORIE CALCULATOR COMPONENT ===== */
function CalorieCalculator() {
  const [weight, setWeight] = useState("180");
  const [heightFeet, setHeightFeet] = useState("5");
  const [heightInches, setHeightInches] = useState("10");
  const [age, setAge] = useState("30");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("lose");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const w = parseFloat(weight);
    const h = (parseFloat(heightFeet) || 0) * 12 + (parseFloat(heightInches) || 0);
    const a = parseFloat(age);

    if (!w || w <= 0) { setError("Please enter a valid weight."); return; }
    if (!h || h <= 0) { setError("Please enter a valid height."); return; }
    if (!a || a <= 0 || a > 120) { setError("Please enter a valid age (1-120)."); return; }

    // Mifflin-St Jeor Equation
    let bmr =
      gender === "male"
        ? 10 * (w * 0.453592) + 6.25 * (h * 2.54) - 5 * a + 5
        : 10 * (w * 0.453592) + 6.25 * (h * 2.54) - 5 * a - 161;

    const multipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    let tdee = bmr * (multipliers[activity] || 1.55);

    if (goal === "lose") tdee -= 500;
    if (goal === "gain") tdee += 300;

    setResult(Math.round(tdee));
  }

  return (
    <form onSubmit={calculate} noValidate>
      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="calc-weight">Weight (lbs)</label>
          <input
            id="calc-weight"
            type="number"
            min="50"
            max="600"
            placeholder="180"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="calc-height-ft">Height (ft)</label>
            <input
              id="calc-height-ft"
              type="number"
              min="3"
              max="8"
              placeholder="5"
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="calc-height-in">Height (in)</label>
            <input
              id="calc-height-in"
              type="number"
              min="0"
              max="11"
              placeholder="10"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="calc-age">Age</label>
          <input
            id="calc-age"
            type="number"
            min="1"
            max="120"
            placeholder="30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="calc-gender">Gender</label>
          <select id="calc-gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="calc-activity">Activity Level</label>
          <select id="calc-activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="sedentary">Sedentary (desk job)</option>
            <option value="light">Light (1-2x/week)</option>
            <option value="moderate">Moderate (3-5x/week)</option>
            <option value="active">Active (6-7x/week)</option>
            <option value="veryActive">Very Active (athlete)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="calc-goal">Goal</label>
          <select id="calc-goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="lose">Lose Weight (-500 cal)</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Build Muscle (+300 cal)</option>
          </select>
        </div>
      </div>

      {error && (
        <div style={{ textAlign: 'center', marginTop: 'var(--space-md)', color: 'var(--fire)', fontSize: '0.9rem', fontWeight: 600 }}>
          ⚠️ {error}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
        <button type="submit" className="btn btn-primary">
          Calculate My Calories
        </button>
      </div>

      {result && (
        <div className="result-display">
          <div className="result-number">{result.toLocaleString()}</div>
          <div className="result-label">
            Daily Calories for{" "}
            {goal === "lose"
              ? "Fat Loss"
              : goal === "gain"
                ? "Muscle Gain"
                : "Maintenance"}
          </div>
          <p
            style={{
              marginTop: "var(--space-md)",
              fontSize: "0.9rem",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Based on the Mifflin-St Jeor equation.{" "}
            {goal === "lose"
              ? "This creates a 500-calorie deficit for safe, sustainable weight loss of about 1 lb per week."
              : goal === "gain"
                ? "This adds 300 calories above maintenance for lean muscle building."
                : "This is your estimated daily energy expenditure."}
          </p>
        </div>
      )}

      {result && goal === 'lose' && (
        <div style={{
          marginTop: 'var(--space-lg)',
          padding: 'var(--space-lg)',
          background: 'var(--accent-subtle)',
          border: '1px solid rgba(204, 255, 0, 0.15)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: '0 auto var(--space-md)', maxWidth: '500px' }}>
            Looking for supplements that may support your weight loss journey?
            We reviewed the top options for 2026.
          </p>
          <a href="/reviews/weight-loss-supplements" className="cta-button">
            See Our 2026 Supplement Review →
          </a>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
            Contains affiliate links · Individual results may vary
          </p>
        </div>
      )}
    </form>
  );
}

/* ===== NEWSLETTER FORM COMPONENT ===== */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/bigbricey@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "New FitnessFixZone subscriber!",
          _template: "table",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="newsletter-success">
        You&apos;re in! Check your inbox for a confirmation.
      </div>
    );
  }

  return (
    <>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Joining..." : "Join Free"}
        </button>
      </form>
      {status === "error" && (
        <div style={{ color: "var(--fire)", fontSize: "0.85rem", marginTop: "var(--space-sm)" }}>
          Something went wrong. Try again.
        </div>
      )}
      <div className="newsletter-privacy">
        No spam ever. Unsubscribe with one click.
      </div>
    </>
  );
}

/* ===== ARTICLE CARD COMPONENT ===== */
function ArticleCard({
  category,
  title,
  excerpt,
  readTime,
  href,
  image,
}: {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
  image?: string;
}) {
  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="content-card">
        <div className="card-image" style={{ position: 'relative', overflow: 'hidden' }}>
          {image && (
            <img
              src={image}
              alt={title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
          <div className="card-category">{category}</div>
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <div className="card-meta">
            <span>{readTime} read</span>
            <span className="read-more">Read More →</span>
          </div>
        </div>
      </div>
    </a>
  );
}
