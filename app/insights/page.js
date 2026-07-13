import { FinalCta, InsightsGrid, PageHero, SocialFollowSection } from "../components/Sections";
import { buildMetadata } from "../seo";

export const metadata = {
  ...buildMetadata("insights"),
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
      <SocialFollowSection />
      <FinalCta />
    </>
  );
}
