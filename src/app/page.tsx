"use client";

import { useState } from "react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="dot" />
              Science-Backed Fitness
            </div>
            <h1>
              Fix Your <span className="highlight">Fitness</span>
              <br />
              Start Today
            </h1>
            <p>
              No bro-science. No fad diets. Just evidence-based workout guides,
              honest supplement reviews, and free tools to help you reach your
              goals faster.
            </p>
            <div className="hero-buttons">
              <a href="/tools" className="btn btn-primary">
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
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Guides</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Readers Helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2011</div>
              <div className="stat-label">Est. Since</div>
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
            />
            <ArticleCard
              category="Strength"
              title="The Complete Beginner's Guide to Strength Training"
              excerpt="Everything you need to know to start lifting weights safely and build real muscle, even if you've never touched a barbell."
              readTime="12 min"
              href="/guides/beginners-strength-training"
            />
            <ArticleCard
              category="Supplements"
              title="Best Protein Powders in 2026: An Honest Review"
              excerpt="We tested 15 protein powders for taste, mixability, macros, and value. Here are the ones actually worth buying."
              readTime="10 min"
              href="/reviews/best-protein-powder-2026"
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
            />
            <ArticleCard
              category="Pre-Workout"
              title="Best Pre-Workout Supplements: Tested & Ranked"
              excerpt="Not all pre-workouts are created equal. We break down ingredients, dosing, and which ones actually deliver energy without the crash."
              readTime="11 min"
              href="/reviews/best-pre-workout"
            />
            <ArticleCard
              category="Recovery"
              title="Creatine Monohydrate: The Only Supplement You Need?"
              excerpt="The most researched supplement in history. Here's what it does, how to take it, and whether you should bother."
              readTime="7 min"
              href="/reviews/creatine-monohydrate-guide"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <h2>
            Ready to Fix Your <span style={{ color: "var(--accent)" }}>Fitness</span>?
          </h2>
          <p>
            Join thousands of readers who use our free tools and evidence-based
            guides to train smarter and get real results.
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
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("lose");
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (!w || !h || !a) return;

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
    <>
      <div className="calculator-form">
        <div className="form-group">
          <label>Weight (lbs)</label>
          <input
            type="number"
            placeholder="180"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Height (inches)</label>
          <input
            type="number"
            placeholder="70"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            placeholder="30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Activity Level</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="sedentary">Sedentary (desk job)</option>
            <option value="light">Light (1-2x/week)</option>
            <option value="moderate">Moderate (3-5x/week)</option>
            <option value="active">Active (6-7x/week)</option>
            <option value="veryActive">Very Active (athlete)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Goal</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="lose">Lose Weight (-500 cal)</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Build Muscle (+300 cal)</option>
          </select>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
        <button className="btn btn-primary" onClick={calculate}>
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
}: {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
}) {
  return (
    <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="content-card">
        <div className="card-image">
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
