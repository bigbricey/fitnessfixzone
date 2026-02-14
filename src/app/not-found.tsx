import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="legal-page" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <div style={{ fontSize: '6rem', fontFamily: "'Bebas Neue', sans-serif", color: 'var(--accent)', lineHeight: 1 }}>
                    404
                </div>
                <h1 style={{ fontSize: '2rem', marginBottom: 'var(--space-lg)' }}>
                    Page Not Found
                </h1>
                <p style={{ marginBottom: 'var(--space-xl)', margin: '0 auto var(--space-xl)' }}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Try one of these instead:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
                    <Link href="/" className="btn btn-primary">← Back to Homepage</Link>
                    <Link href="/guides" className="btn btn-secondary">Browse Guides</Link>
                    <Link href="/reviews" className="btn btn-secondary">Read Reviews</Link>
                    <Link href="/tools" className="btn btn-secondary">Free Tools</Link>
                </div>
            </div>
        </section>
    );
}
