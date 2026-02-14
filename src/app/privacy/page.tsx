import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — FitnessFixZone",
    description: "FitnessFixZone privacy policy and data collection practices.",
    alternates: { canonical: "https://www.fitnessfixzone.com/privacy" },
};

export default function PrivacyPage() {
    return (
        <section style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}>
            <div className="container">
                <div style={{ maxWidth: "700px" }}>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "var(--space-xl)" }}>
                        Privacy Policy
                    </h1>
                    <p style={{ marginBottom: "var(--space-lg)", color: "var(--text-muted)" }}>
                        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>Information We Collect</h3>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        FitnessFixZone.com collects standard web analytics data through Google
                        Analytics, including page views, referral sources, browser type, and
                        approximate geographic location. We do not collect personally identifiable
                        information unless you voluntarily submit it (e.g., email newsletter signup).
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>Cookies</h3>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        We use cookies to improve your browsing experience and for analytics purposes.
                        Third-party services (Google Analytics, affiliate networks) may also set
                        cookies. You can disable cookies in your browser settings at any time.
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>Affiliate Links</h3>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        Some links on this site are affiliate links. When you click these links and
                        make a purchase, we earn a commission. Affiliate tracking cookies may be placed
                        on your device by our affiliate partners (including Amazon, ClickBank, and
                        others).
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>Third-Party Services</h3>
                    <p style={{ marginBottom: "var(--space-lg)" }}>
                        This site may contain links to external websites. We are not responsible for
                        the privacy practices of these third-party sites. We encourage you to read
                        their privacy policies.
                    </p>

                    <h3 style={{ marginBottom: "var(--space-md)" }}>Contact</h3>
                    <p>
                        For privacy-related questions, please contact us at{" "}
                        <a href="mailto:privacy@fitnessfixzone.com">privacy@fitnessfixzone.com</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
