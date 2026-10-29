import heroImage from "@/assets/warehouse.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { procurementResources } from "@/content/site";
import { ButtonLink, PageHero } from "@/components/site/ui";
import { ProcurementResourceCard } from "@/components/site/sections";
import { pageMeta } from "@/lib/seo";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/procurement-opportunities")({
  head: () =>
    pageMeta(
      "Procurement Opportunities",
      "Links to official procurement resources in Rwanda, including Rwanda Medical Supply (RMS) tenders and the UMUCYO government e-procurement portal.",
    ),
  component: Procurement,
});

function Procurement() {
  const { t, tc } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("footer.procurementResources")}
        title={tc("Stay connected to procurement opportunities.")}
        intro={tc("Find current tenders and requirements on official portals.")}
        image={heroImage}
        alt="Organised warehouse shelves"
      />
      <section className="container-site py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {procurementResources.map((r) => (
            <ProcurementResourceCard key={r.id} r={r} />
          ))}
        </div>
      </section>
      <section className="container-site grid gap-12 border-t border-border py-20 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-[28px] md:text-[34px]">
            {tc("The role of external procurement portals")}
          </h2>
          <div className="mt-5 space-y-4 text-charcoal">
            <p>
              {tc(
                "Official portals publish procurement notices, tender documents, deadlines and participation requirements. They are owned and operated by their respective institutions, and all submissions, evaluations and award decisions are handled through them.",
              )}
            </p>
            <p>
              {tc(
                "LEAD MULTICHOICE is not affiliated with or the owner of either portal, and this website is not connected to them. We cannot guarantee tender awards, approve bids or issue procurement decisions. Always rely on the official source for current information.",
              )}
            </p>
          </div>
        </div>
        <div className="rounded bg-brand-primary p-8 text-background md:p-10">
          <p className="eyebrow text-brass-light">{tc("Coordination support")}</p>
          <h2 className="mt-4 text-[26px] text-background">
            {tc("Need help acting on an opportunity?")}
          </h2>
          <p className="mt-4 text-background/75">
            {tc(
              "Suppliers and institutional buyers can contact LEAD MULTICHOICE to discuss appropriate coordination support, from supplier introductions to logistics and delivery follow-up.",
            )}
          </p>
          <ButtonLink to="/contact" variant="light" className="mt-8" arrow>
            {t("header.discussOpportunity")}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
