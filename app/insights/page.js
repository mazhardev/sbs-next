import { FinalCta, InsightsGrid, PageHero } from "../components/Sections";

export const metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Insights & Knowledge Hub"
        subtitle="Stay ahead with the latest insights on technology, tax, and business transformation."
      />
      <section className="sectionShell">
        <InsightsGrid />
      </section>
      <FinalCta />
    </>
  );
}
