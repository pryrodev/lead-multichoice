import { createFileRoute } from "@tanstack/react-router";
import port from "@/assets/hero-port.jpg";
import { services } from "@/content/services";
import { ButtonLink, CallToActionSection, CheckList, PageHero } from "@/components/site/ui";
import { pageMeta } from "@/lib/seo";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta(
      "Services",
      "Market access, procurement and supply chain coordination, logistics and trade compliance support, project coordination and after-sales support in Rwanda.",
    ),
  component: Services,
});

const serviceNavKeys = {
  "market-access": "service.marketAccess",
  procurement: "service.procurement",
  logistics: "service.logistics",
  projects: "service.projects",
  "after-sales": "service.afterSales",
} as const;
type ServiceNavKey = (typeof serviceNavKeys)[keyof typeof serviceNavKeys];
const serviceNavLabel = (
  id: string,
  title: string,
  t: (key: ServiceNavKey) => string,
  tc: (text: string) => string,
) => {
  const key = serviceNavKeys[id as keyof typeof serviceNavKeys];
  return key ? t(key) : tc(title);
};

function Services() {
  const { t, tc } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("nav.services")}
        title={tc("Five services. One local point of coordination.")}
        intro={tc("From first opportunity to after-sales — one partner.")}
        image={port}
        alt="Containers and cranes at a freight terminal"
      />
      <nav
        aria-label="Services on this page"
        className="sticky top-[84px] z-30 border-b border-border bg-background/95 backdrop-blur"
      >
        <ul className="container-site grid grid-cols-2 gap-1.5 py-2 sm:grid-cols-3 xl:grid-cols-5">
          {services.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={`${t("services.jumpTo")} ${tc(s.title)}`}
                className="flex min-h-10 min-w-0 items-center gap-2 rounded-md px-2.5 py-2 text-[12px] font-medium leading-tight text-muted-foreground transition-colors hover:bg-surface hover:text-brand-primary focus-visible:bg-surface focus-visible:text-brand-primary sm:text-[13px]"
              >
                <span className="shrink-0 tabular-nums text-brass">0{i + 1}</span>
                <span className="min-w-0">{serviceNavLabel(s.id, s.title, t, tc)}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-36 py-20 md:py-24 ${i % 2 ? "bg-warm" : ""}`}
        >
          <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <img
              src={s.image}
              alt={s.alt}
              width={1280}
              height={960}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded object-cover ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div>
              <p className="eyebrow">
                {t("services.service")} 0{i + 1}
              </p>
              <h2 className="mt-4 text-[28px] md:text-[38px]">{tc(s.title)}</h2>
              <p className="mt-4 text-muted-foreground">{tc(s.summary)}</p>
              <div className="mt-8">
                <CheckList items={s.items.map(tc)} />
              </div>
              {s.note && (
                <p className="mt-6 rounded bg-surface p-4 text-[14.5px] text-charcoal">
                  {tc(s.note)}
                </p>
              )}
              <ButtonLink to="/contact" variant="outline" className="mt-8" arrow>
                {t("services.discuss")}
              </ButtonLink>
            </div>
          </div>
        </section>
      ))}
      <CallToActionSection />
    </>
  );
}
