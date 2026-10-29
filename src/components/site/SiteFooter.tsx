import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { company, nav, procurementResources } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { useI18n } from "@/i18n/I18nProvider";
import type { MessageKey } from "@/i18n/messages";

const navKeys: Record<(typeof nav)[number]["to"], MessageKey> = {
  "/": "nav.home",
  "/about": "nav.about",
  "/services": "nav.services",
  "/industries": "nav.industries",
  "/why-us": "nav.whyUs",
  "/leadership": "nav.leadership",
  "/procurement-opportunities": "nav.procurement",
  "/contact": "nav.contact",
};

export function SiteFooter() {
  const { t, tc } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <Logo inverted className="rounded-md bg-background px-3 py-2" />
          <p className="mt-6 max-w-sm text-[15px]">
            {tc(
              "Rwanda-based trade facilitation, business representation, procurement coordination and supply chain support, connecting international business to Rwanda and the wider East African region.",
            )}
          </p>
          <ul className="mt-6 space-y-3 text-[15px]">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brass-light" aria-hidden />
              {company.location}
            </li>
            <li>
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center gap-3 hover:text-background"
              >
                <Phone size={16} className="text-brass-light" aria-hidden />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-background"
              >
                <MessageCircle size={16} className="text-brass-light" aria-hidden />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <FooterCol title={t("footer.company")}>
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="hover:text-background">
                {t(navKeys[n.to])}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title={t("footer.services")}>
          {services.map((s) => (
            <li key={s.id}>
              <Link to="/services" hash={s.id} className="hover:text-background">
                {tc(s.title)}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title={t("footer.procurementResources")}>
          {procurementResources.map((r) => (
            <li key={r.id}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                {r.name} ↗
              </a>
            </li>
          ))}
          <li>
            <Link to="/procurement-opportunities" className="hover:text-background">
              {t("footer.aboutResources")}
            </Link>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-background/10">
        <div className="container-site flex flex-col gap-2 py-6 text-[13px] md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} LEAD MULTICHOICE Ltd. {t("footer.allRightsReserved")}
          </p>
          <p>
            <a
              href="https://www.santechconnect.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-foreground underline-offset-4 hover:underline"
            >
              {t("footer.developedBy")} Santech
            </a>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="footer-imigongo" />
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow mb-5 text-brass-light">{title}</h2>
      <ul className="space-y-2.5 text-[14.5px]">{children}</ul>
    </div>
  );
}
