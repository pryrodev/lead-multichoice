import heroImage from "@/assets/truck.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { industries } from "@/content/services";
import { CallToActionSection, CheckList, PageHero } from "@/components/site/ui";
import { pageMeta } from "@/lib/seo";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageMeta(
      "Industries",
      "Coordination support for pharmaceuticals and healthcare, energy and electrical systems, general supplies and IT equipment, logistics and trade, and projects in Rwanda.",
    ),
  component: Industries,
});

function Industries() {
  const { t, tc } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("nav.industries")}
        title={tc("Sector knowledge. Coordinated execution.")}
        intro={tc("We coordinate, source and represent — across five sectors.")}
        image={heroImage}
        alt="Cargo truck on the road for regional trade"
      >
        <ul className="mt-10 flex flex-wrap gap-2">
          {industries.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className="inline-block rounded-sm border border-border bg-background px-3 py-1.5 text-[13.5px] text-charcoal hover:border-corporate hover:text-corporate"
              >
                {tc(i.title)}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>
      <div className="container-site divide-y divide-border">
        {industries.map((ind, i) => (
          <section
            key={ind.id}
            id={ind.id}
            className="grid scroll-mt-24 gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-20"
          >
            <img
              src={ind.image}
              alt={ind.alt}
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[16/11] w-full rounded object-cover"
            />
            <div>
              <span className="font-display text-[13px] font-bold tabular-nums text-brass">
                0{i + 1}
              </span>
              <h2 className="mt-3 text-[28px] md:text-[36px]">{tc(ind.title)}</h2>
              <p className="mt-4 text-charcoal">{tc(ind.text)}</p>
              <h3 className="eyebrow mb-4 mt-8 text-steel">{t("industries.howSupport")}</h3>
              <CheckList items={ind.points.map(tc)} />
            </div>
          </section>
        ))}
      </div>
      <CallToActionSection />
    </>
  );
}
