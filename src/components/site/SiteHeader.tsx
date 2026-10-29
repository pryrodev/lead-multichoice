import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { company, nav } from "@/content/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useAuth } from "@/hooks/use-auth";
import { LanguageSelect } from "./LanguageSelect";
import { useI18n } from "@/i18n/I18nProvider";
import type { MessageKey } from "@/i18n/messages";

const shortNavKeys: Partial<Record<string, MessageKey>> = {
  "/why-us": "nav.whyUsShort",
  "/procurement-opportunities": "nav.procurementShort",
};
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

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { t } = useI18n();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1280 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = nav.slice(0, -1);

  return (
    <>
      <div className="sticky top-0 z-[60] bg-brand-primary text-brand-white">
        <div className="container-site flex min-h-7 flex-wrap items-center justify-between gap-x-5 gap-y-1 py-1 text-[11px] font-medium tracking-wide sm:text-xs">
          <address className="flex items-center gap-2 not-italic">
            <MapPin size={13} strokeWidth={2.2} aria-hidden="true" />
            <span>{company.location}</span>
          </address>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <Mail size={13} aria-hidden="true" />
                {company.email}
              </a>
            )}
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <Phone size={13} aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <span className="h-3.5 w-px bg-brand-white/30" aria-hidden="true" />
            <LanguageSelect compact />
          </div>
        </div>
      </div>
      <header
        id="top"
        className={`sticky top-7 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-md" : "border-b border-transparent bg-background"}`}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6">
          <Logo />
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-5">
              {items.map((item) => {
                const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <li key={item.to} className="relative">
                    <Link
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      className={`site-nav-link block whitespace-nowrap px-1 py-3 text-[14px] font-medium text-charcoal/80 ${active ? "text-brand-primary" : ""}`}
                    >
                      {t(shortNavKeys[item.to] ?? navKeys[item.to])}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <RainbowButton asChild className="hidden sm:inline-flex">
              <Link to={user ? "/dashboard" : "/auth"}>
                {user ? t("header.myAccount") : t("header.getStarted")}
              </Link>
            </RainbowButton>
            <ButtonLink
              to="/contact"
              className="cta-attention hidden whitespace-nowrap sm:inline-flex hover:brightness-105 hover:shadow-lg"
              arrow
            >
              {t("header.letsTalk")}
            </ButtonLink>
            <button
              type="button"
              className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-brand-primary xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <MobilePortal>
        <AnimatePresence>
          {open && (
            <MobileNavigation
              onClose={() => setOpen(false)}
              pathname={pathname}
              signedIn={Boolean(user)}
              t={t}
            />
          )}
        </AnimatePresence>
      </MobilePortal>
    </>
  );
}

function MobilePortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(children, document.body) : null;
}

function MobileNavigation({
  onClose,
  pathname,
  signedIn,
  t,
}: {
  onClose: () => void;
  pathname: string;
  signedIn: boolean;
  t: (key: MessageKey) => string;
}) {
  return (
    <motion.div
      id="mobile-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-brand-primary text-background xl:hidden"
    >
      <div className="container-site flex h-[78px] items-center justify-between">
        <span className="font-display text-sm font-semibold tracking-[0.2em] text-brass-light">
          {t("header.menu")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("header.closeMenu")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background"
        >
          <X size={20} />
        </button>
      </div>
      <nav aria-label="Mobile" className="container-site pb-10 pt-4">
        <ul className="border-t border-background/15">
          {nav.map((item, i) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                className="border-b border-background/15"
              >
                <Link
                  to={item.to}
                  onClick={onClose}
                  className={`group flex items-center justify-between py-4 font-display text-2xl font-semibold ${active ? "text-brass-light" : "text-background"}`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs tabular-nums text-background/50">0{i + 1}</span>
                    {t(navKeys[item.to])}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="opacity-50 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 space-y-4"
        >
          <ButtonLink to="/contact" variant="light" className="w-full" onClick={onClose}>
            {t("header.discussOpportunity")}
          </ButtonLink>
          <ButtonLink
            to={signedIn ? "/dashboard" : "/auth"}
            variant="ghostLight"
            className="w-full"
            onClick={onClose}
          >
            {signedIn ? t("header.myAccount") : t("header.getStarted")}
          </ButtonLink>
          <a
            href={`tel:${company.phoneTel}`}
            className="block text-center text-sm text-background/70"
          >
            {company.phoneDisplay} · {company.location}
          </a>
        </motion.div>
      </nav>
    </motion.div>
  );
}
