import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | FitnessFixZone",
    description: "Get in touch with the FitnessFixZone team. Questions, feedback, or partnership inquiries — we'd love to hear from you.",
    alternates: { canonical: "https://www.fitnessfixzone.com/contact" },
};

export default function ContactPage() {
    return (
        <section className="legal-page">
            <div className="container" style={{ maxWidth: '700px' }}>
                <h1>Contact <span className="accent">Us</span></h1>
                <p style={{ marginBottom: 'var(--space-2xl)' }}>
                    Have a question, feedback, or partnership inquiry? We&apos;d love to hear from you.
                </p>

                <div style={{ background: 'var(--bg-secondary)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245,240,235,0.06)' }}>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", textTransform: 'none', fontWeight: 700, marginBottom: 'var(--space-lg)' }}>Get In Touch</h3>

                    <div style={{ marginBottom: 'var(--space-xl)' }}>
                        <p><strong style={{ color: 'var(--accent)' }}>📧 Email:</strong></p>
                        <p><a href="mailto:hello@fitnessfixzone.com">hello@fitnessfixzone.com</a></p>
                    </div>

                    <div style={{ marginBottom: 'var(--space-xl)' }}>
                        <p><strong style={{ color: 'var(--accent)' }}>💼 Business Inquiries:</strong></p>
                        <p>For advertising, sponsorships, or partnership opportunities, please email us with &quot;Partnership&quot; in the subject line.</p>
                    </div>

                    <div>
                        <p><strong style={{ color: 'var(--accent)' }}>📝 Content Corrections:</strong></p>
                        <p>Found an error in one of our articles? Let us know and we&apos;ll fix it ASAP. We take accuracy seriously.</p>
                    </div>
                </div>

                <p style={{ marginTop: 'var(--space-xl)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    We typically respond within 24-48 hours during business days.
                </p>
            </div>
        </section>
    );
}
