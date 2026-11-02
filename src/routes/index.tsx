import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2, Handshake, SearchCheck, Truck } from "lucide-react";
import { motion } from "motion/react";
import heroPort from "@/assets/hero-port.jpg";
import { services } from "@/content/services";
import { procurementResources } from "@/content/site";
import { ButtonLink, ExternalLink, SectionHeading, btn } from "@/components/site/ui";
import { pageMeta } from "@/lib/seo";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Connecting Rwanda's Buyers with Global Suppliers",
      "LEAD MULTICHOICE bridges Rwanda's purchasing entities with credible international manufacturers and distributors through supplier identification, verification, introductions and local coordination.",
    ),
  component: Home,
});

const bridgeSteps = [
  {
    title: "Identify",
    text: "Find relevant buyers, suppliers and sourcing opportunities.",
    icon: SearchCheck,
  },
  {
    title: "Verify",
    text: "Support due diligence and confirm the right points of contact.",
    icon: Check,
  },
  {
    title: "Connect",
    text: "Facilitate direct conversations between the parties.",
    icon: Handshake,
  },
  {
    title: "Coordinate",
    text: "Help align procurement, logistics and delivery follow-up.",
    icon: Truck,
  },
];

const outcomes = [
  "More informed sourcing decisions",
  "Access to credible supplier options",
  "Reliable supply coordination",
  "Long-term commercial partnerships",
];

function Home() {
  const { t, tc } = useI18n();
  return (
    <>
      <section
        data-no-reveal
        className="photo-parallax relative isolate flex min-h-[600px] items-end overflow-hidden bg-brand-primary md:min-h-[78vh]"
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
              {tc("Market Access | Supplier Engagement | Trade Facilitation")}
            </motion.p>
            <h1 className="max-w-4xl text-[40px] leading-[1.02] text-background md:text-[62px] lg:text-[72px]">
              {tc("Connecting Rwanda's buyers with trusted global suppliers.")}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mt-7 max-w-2xl text-[17px] text-background/85 md:text-[19px]">
                {tc(
                  "We bridge Rwanda's purchasing market and the global supply ecosystem, helping buyers and international suppliers find each other and coordinate with confidence.",
                )}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/contact" variant="light" arrow>
                  {tc("I am an international supplier")}
                </ButtonLink>
                <ButtonLink to="/contact" variant="ghostLight">
                  {tc("I represent a purchasing entity")}
                </ButtonLink>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden justify-self-end border-l-2 border-brass-light bg-brand-primary/70 p-6 text-background backdrop-blur-sm lg:block lg:max-w-[300px]"
          >
            <p className="eyebrow text-brass-light">{tc("Local knowledge. Global connections.")}</p>
            <p className="mt-3 font-display text-lg font-semibold">Remera, Kigali, Rwanda</p>
            <p className="mt-2 text-[14px] text-background/75">
              {tc("Supporting commercial engagement in Rwanda and the region.")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-site grid gap-8 py-16 md:grid-cols-[0.85fr_1.15fr] md:items-start md:py-24">
        <SectionHeading
          eyebrow={tc("The opportunity")}
          title={tc("Bridging the information and access gap.")}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded border border-border bg-background p-6 md:p-7">
            <Globe2 className="text-corporate" size={25} aria-hidden />
            <h3 className="mt-5 text-[20px]">{tc("For international suppliers")}</h3>
            <p className="mt-3 text-[15.5px] text-muted-foreground">
              {tc(
                "Understand Rwanda's procurement environment, identify relevant opportunities and reach purchasing entities through local representation.",
              )}
            </p>
          </article>
          <article className="rounded border border-border bg-background p-6 md:p-7">
            <Handshake className="text-corporate" size={25} aria-hidden />
            <h3 className="mt-5 text-[20px]">{tc("For Rwanda's purchasing entities")}</h3>
            <p className="mt-3 text-[15.5px] text-muted-foreground">
              {tc(
                "Expand access to credible manufacturers, authorised distributors and specialised service providers around the world.",
              )}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow={tc("Our role")}
            title={tc("From supplier identification to coordinated delivery.")}
            intro={tc(
              "We structure the connection, facilitate engagement and keep the work moving across the parties involved.",
            )}
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bridgeSteps.map(({ title, text, icon: Icon }, index) => (
              <li key={title} className="rounded border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <Icon className="text-corporate" size={23} aria-hidden />
                  <span className="font-display text-[13px] font-bold tabular-nums text-brass">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-[20px]">{tc(title)}</h3>
                <p className="mt-2 text-[14.5px] text-muted-foreground">{tc(text)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={tc("What we do")}
            title={tc("Local coordination across the supply journey.")}
          />
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-corporate hover:text-brand-primary"
          >
            {tc("Explore all services")} <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <Link
              key={service.id}
              to="/services"
              hash={service.id}
              className="group rounded border border-border p-6 transition-colors hover:border-corporate hover:bg-surface md:p-7"
            >
              <p className="font-display text-[13px] font-bold tabular-nums text-brass">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-[20px] group-hover:text-corporate">{tc(service.title)}</h3>
              <p className="mt-2 text-[14.5px] text-muted-foreground">{tc(service.summary)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-warm py-14 md:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow={t("nav.procurement")}
            title={tc("Stay connected to procurement opportunities.")}
            intro={tc("Find current tenders on Rwanda's official portals.")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {procurementResources.map((resource) => (
              <article key={resource.id} className="rounded border border-border bg-background p-5">
                <p className="eyebrow">{tc("Official procurement portal")}</p>
                <h3 className="mt-3 text-[18px]">{resource.name}</h3>
                <p className="mt-2 text-[14px] text-muted-foreground">{tc(resource.description)}</p>
                <ExternalLink
                  href={resource.url}
                  className={btn("outline", "mt-5 min-h-10 px-4 py-2 text-[13px]")}
                >
                  {tc(resource.cta)}
                </ExternalLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-14 text-background md:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3 text-brass-light">
              <span className="h-px w-8 bg-current" aria-hidden />
              {tc("The value we work toward")}
            </p>
            <h2 className="max-w-xl text-[30px] text-background md:text-[38px]">
              {tc("More efficient sourcing. Stronger supply partnerships.")}
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-[15px] text-background/85">
                <Check className="mt-0.5 shrink-0 text-brass-light" size={18} aria-hidden />
                {tc(outcome)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <p className="eyebrow mb-3 text-brass">{tc("Start a conversation")}</p>
          <h2 className="text-[28px] md:text-[36px]">
            {tc("Looking for a supplier or a route into Rwanda?")}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {tc("Tell us what you are sourcing or the market you want to reach.")}
          </p>
        </div>
        <ButtonLink to="/contact" variant="primary" arrow className="shrink-0">
          {t("header.discussOpportunity")}
        </ButtonLink>
      </section>
    </>
  );
}
