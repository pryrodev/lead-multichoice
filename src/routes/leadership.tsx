import heroImage from "@/assets/meeting.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { CallToActionSection, PageHero } from "@/components/site/ui";
import { LeadershipProfile } from "@/components/site/sections";
import { pageMeta } from "@/lib/seo";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/leadership")({
  head: () =>
    pageMeta(
      "Leadership",
      "Mr Ernest Mulisa, Managing Director of LEAD MULTICHOICE Ltd, brings over 18 years of experience in trade facilitation, procurement, supply chain and digital transformation.",
    ),
  component: Leadership,
});

function Leadership() {
  const { t, tc } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("nav.leadership")}
        title={tc("Experience that connects business, trade and digital transformation.")}
        image={heroImage}
        alt="Business leaders in a meeting"
      />
      <section className="container-site py-20 md:py-28">
        <LeadershipProfile full />
      </section>
      <CallToActionSection />
    </>
  );
}
