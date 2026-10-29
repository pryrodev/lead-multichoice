import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import heroPort from "@/assets/hero-port.jpg";
import meeting from "@/assets/meeting.jpg";
import { procurementResources } from "@/content/site";
import { industries, services, whyUs } from "@/content/services";
import { ButtonLink, CallToActionSection, SectionHeading } from "@/components/site/ui";
import { LeadershipProfile, ProcurementResourceCard } from "@/components/site/sections";
import { ProcessStoryline } from "@/components/site/ProcessStoryline";
import { pageMeta } from "@/lib/seo";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Connecting Global Business to Rwanda",
      "LEAD MULTICHOICE helps international manufacturers, distributors and suppliers engage purchasing entities in Rwanda through local representation, procurement coordination and supply chain support.",
    ),
  component: Home,
});

const attributes = [
  "Rwanda-Based Expertise",
  "Regional Business Coordination",
  "Procurement & Supply Chain Support",
  "Long-Term Business Partnerships",
];

function Home() {
  const { t, tc } = useI18n();
  return (
    <>
      {/* Hero */}
      <section
        data-no-reveal
        className="photo-parallax relative isolate flex min-h-[640px] items-end overflow-hidden bg-brand-primary md:min-h-[86vh]"
      >
        <div className="photo-parallax-window" aria-hidden>
          <img
            src={heroPort}
            alt=""
            width={1280}
            height={1440}
            fetchPriority="high"
            className="photo-parallax-image"
          />
        </div>
        <div className="photo-parallax-shade absolute inset-0 -z-10" aria-hidden />
        <div className="container-site grid gap-10 pb-16 pt-28 md:pb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6 flex items-center gap-3 text-brass-light"
            >
              <span className="h-px w-8 bg-current" aria-hidden />
              {tc("Trade Facilitation | Procurement | Logistics")}
            </motion.p>
            <h1 className="text-[40px] leading-[1.02] text-background md:text-[62px] lg:text-[76px]">
              {["Connecting", "Global Business", "to Rwanda."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {i === 2 ? (
                      <>
                        {tc("to")}{" "}
                        <em className="font-display not-italic text-brass-light">
                          {tc("Rwanda.")}
                        </em>
                      </>
                    ) : (
                      tc(line)
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="mt-7 max-w-xl text-[17px] text-background/80 md:text-[18.5px]">
                {tc(
                  "Your local partner for selling to buyers in Rwanda — representation, procurement and delivery, handled.",
                )}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/contact" variant="light" arrow>
                  {t("header.discussOpportunity")}
                </ButtonLink>
                <ButtonLink to="/services" variant="ghostLight">
                  {tc("Explore Our Services")}
                </ButtonLink>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden justify-self-end border-l-2 border-brass-light bg-brand-primary/70 p-6 text-background backdrop-blur-sm lg:block lg:max-w-[300px]"
          >
            <p className="eyebrow text-brass-light">{tc("Headquarters")}</p>
            <p className="mt-2 font-display text-lg font-semibold">Remera, Kigali, Rwanda</p>
            <p className="mt-1 text-[14px] text-background/70">
              {tc("Serving Rwanda and the wider East African region.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credibility strip */}
      <section aria-label="Company attributes" className="border-y border-border bg-background">
        <ul className="container-site grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {attributes.map((a, i) => (
            <li key={a} className="flex items-center gap-4 py-6 lg:px-6 lg:first:pl-0">
              <span className="font-display text-[13px] font-bold tabular-nums text-brass">
                0{i + 1}
              </span>
              <span className="font-display text-[16px] font-semibold text-brand-primary">
                {tc(a)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Introduction */}
      <section className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={tc("Who We Are")} title={tc("Your local partner in Rwanda.")} />
          <div className="mt-7 space-y-5 text-charcoal">
            <p>
              {tc(
                "Based in Kigali since 2015. We connect international suppliers with Rwandan buyers and manage the engagement from first introduction to after-sales.",
              )}
            </p>
          </div>
          <ButtonLink to="/about" variant="outline" className="mt-8" arrow>
            {tc("Learn More About Us")}
          </ButtonLink>
        </div>
        <img
          src={meeting}
          alt="Professionals reviewing procurement documents together in a Kigali office"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full self-center rounded object-cover object-left"
        />
      </section>

      {/* Services */}
      <section className="bg-warm py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={tc("What We Do")}
              title={tc("Coordinating business from opportunity to delivery.")}
            />
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-corporate hover:text-brand-primary"
            >
              {tc("All services")} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded border border-border bg-border lg:grid-cols-6">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to="/services"
                hash={s.id}
                className={`group flex flex-col justify-between p-8 transition-colors ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === 0 ? "bg-brand-primary hover:bg-corporate" : "bg-background hover:bg-surface"}`}
              >
                <div>
                  <span
                    className={`font-display text-[13px] font-bold tabular-nums ${i === 0 ? "text-brass-light" : "text-brass"}`}
                  >
                    0{i + 1}
                  </span>
                  <h3 className={`mt-4 text-[22px] ${i === 0 ? "text-background" : ""}`}>
                    {tc(s.title)}
                  </h3>
                  <p
                    className={`mt-3 text-[15.5px] ${i === 0 ? "text-background/75" : "text-muted-foreground"}`}
                  >
                    {tc(s.summary)}
                  </p>
                </div>
                <span
                  className={`mt-8 inline-flex items-center gap-2 text-[14px] font-semibold ${i === 0 ? "text-brass-light" : "text-corporate"}`}
                >
                  {tc("Read more")}{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading
          eyebrow={tc("Sectors We Support")}
          title={tc("Sector knowledge. Coordinated execution.")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Link
              key={ind.id}
              to="/industries"
              hash={ind.id}
              className={`group block ${i === 0 ? "lg:row-span-2" : ""}`}
            >
              <div className="overflow-hidden rounded">
                <img
                  src={ind.image}
                  alt={ind.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${i === 0 ? "aspect-[4/3] lg:aspect-[3/4]" : "aspect-[16/10]"}`}
                />
              </div>
              <h3 className="mt-5 text-[21px] group-hover:text-corporate">{tc(ind.title)}</h3>
              <p className="mt-2 text-[15.5px] text-muted-foreground">{tc(ind.text)}</p>
            </Link>
          ))}
        </div>
      </section>

      <ProcessStoryline />

      {/* Procurement */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading
              eyebrow={tc("Procurement Resources")}
              title={tc("Stay connected to procurement opportunities.")}
              intro={tc("Find current tenders on Rwanda's official portals.")}
            />
            <Link
              to="/procurement-opportunities"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-corporate hover:text-brand-primary"
            >
              {t("footer.aboutResources")} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {procurementResources.map((r) => (
              <ProcurementResourceCard key={r.id} r={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading
          eyebrow={tc("Why Work With Us")}
          title={tc("Local understanding. Professional coordination. Lasting relationships.")}
        />
        <dl className="mt-14 grid gap-x-12 gap-y-10 border-t border-border pt-10 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="border-l-2 border-brass pl-5">
              <dt className="font-display text-[19px] font-bold text-brand-primary">
                {tc(w.title)}
              </dt>
              <dd className="mt-2 text-[15.5px] text-muted-foreground">{tc(w.text)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Leadership */}
      <section className="border-t border-border bg-warm py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow={t("nav.leadership")}
            title={tc("Experience that connects business, trade and digital transformation.")}
          />
          <div className="mt-14">
            <LeadershipProfile />
          </div>
        </div>
      </section>

      <CallToActionSection />
    </>
  );
}
