import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Weight Loss Supplements in 2026: An Honest Review | FitnessFixZone",
    description: "We compared the top-selling weight loss supplements of 2026 — Mitolyn, CitrusBurn, and Java Burn — for ingredients, value, and real user feedback.",
    alternates: { canonical: "https://www.fitnessfixzone.com/reviews/weight-loss-supplements" },
};

export default function SupplementReviewLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
