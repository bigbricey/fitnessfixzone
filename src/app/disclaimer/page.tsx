import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer — FitnessFixZone",
    description: "FitnessFixZone affiliate and medical disclaimer.",
};

export default function DisclaimerPage() {
    return (
        <section style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}>
            <div className="container">
                <div style={{ maxWidth: "700px" }}>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "var(--space-xl)" }}>
                        Disclaimer
                    </h1>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>Medical Disclaimer</h3>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        The content on FitnessFixZone.com is for informational purposes only and is
                        not intended as medical advice, diagnosis, or treatment. Always consult a
                        qualified healthcare professional before starting any exercise program, diet
                        plan, or supplement regimen. If you experience pain, dizziness, or discomfort,
                        stop exercising immediately and seek medical attention.
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>
                        Affiliate &amp; Earnings Disclaimer
                    </h3>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        FitnessFixZone.com is a participant in the Amazon Services LLC Associates
                        Program, the ClickBank affiliate network, and other affiliate programs designed
                        to provide a means for sites to earn advertising fees by advertising and
                        linking to their products.
                    </p>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        This means that when you click on certain links on this site and make a
                        purchase, we may receive a commission at no additional cost to you. We only
                        recommend products and services that we believe will add value to our readers.
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>Results Disclaimer</h3>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        Individual results may vary. The fitness and nutrition information provided on
                        this site is based on scientific research and general guidelines. Your results
                        will depend on your individual effort, body composition, diet, and other
                        factors.
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>
                        Calculator &amp; Tools Disclaimer
                    </h3>
                    <p>
                        The calculators and tools on this site provide estimates based on widely-used
                        formulas (such as the Mifflin-St Jeor equation). These are approximations and
                        should not replace personalized advice from a registered dietitian or certified
                        personal trainer.
                    </p>
                </div>
            </div>
        </section>
    );
}
