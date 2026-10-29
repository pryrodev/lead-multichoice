import { createFileRoute } from "@tanstack/react-router";
import meeting from "@/assets/meeting.jpg";
import { CallToActionSection, PageHero, SectionHeading } from "@/components/site/ui";
import { ProcessTimeline } from "@/components/site/sections";
import { pageMeta } from "@/lib/seo";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/why-us")({
  head: () =>
    pageMeta(
      "Why Choose Us",
      "Local understanding, ethical representation, reliable stakeholder coordination and documented follow-up for business engagements in Rwanda.",
    ),
  component: WhyUs,
});

const points = [
  {
    title: "Understanding Rwanda's local business environment",
    text: "Based in Kigali, we know how local buying works.",
  },
  {
    title: "Ethical business representation",
    text: "Transparent representation that protects your name.",
  },
  { title: "Reliable stakeholder coordination", text: "Everyone on the same timeline." },
  {
    title: "Regulatory awareness and appropriate liaison",
    text: "We know the rules and the right channels.",
  },
  {
    title: "Integrated operational support",
    text: "One contact for procurement, logistics and after-sales.",
  },
  {
    title: "Clear responsibilities and documented follow-up",
    text: "Clear owners. Every commitment followed through.",
  },
];

function WhyUs() {
  const { t, tc } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("nav.whyUs")}
        title={tc("Local understanding. Professional coordination. Lasting relationships.")}
        intro={tc("Trusted local representation. Accountable coordination.")}
        image={meeting}
        alt="Business partners in discussion around a meeting table"
      />
      <section className="container-site py-20 md:py-28">
        <ol className="grid gap-x-16 md:grid-cols-2">
          {points.map((p, i) => (
            <li key={p.title} className="flex gap-6 border-t border-border py-9">
              <span className="font-display text-[28px] font-bold tabular-nums text-brass-light">
                0{i + 1}
              </span>
              <div>
                <h2 className="text-[22px]">{tc(p.title)}</h2>
                <p className="mt-3 text-[15.5px] text-muted-foreground">{tc(p.text)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-brand-primary py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            inverted
            eyebrow={t("about.agencyModel")}
            title={tc("Coordinating the transaction, not duplicating it.")}
            intro={tc("You keep your contracts. We connect the parties and keep things moving.")}
          />
          <div className="mt-16">
            <ProcessTimeline inverted />
          </div>
        </div>
      </section>
      <CallToActionSection />
    </>
  );
}
