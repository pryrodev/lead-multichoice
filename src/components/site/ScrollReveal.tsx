import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

// Reveals every page's sections on scroll with alternating horizontal motion.
export function ScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const all = Array.from(document.querySelectorAll("main section"));
        const [first, ...rest] = all;
        if (first && pathname !== "/") {
          gsap.from(first.querySelectorAll("h1, p, .eyebrow"), {
            x: (i: number) => (i % 2 === 0 ? -20 : 20),
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
          });
        }
        rest
          .filter((s) => !s.hasAttribute("data-no-reveal"))
          .forEach((section, sectionIndex) => {
            const container =
              section.querySelector(":scope > .container-site, :scope > div") ?? section;
            const items = Array.from(container.children);
            gsap.from(items, {
              x: (i: number) => ((i + sectionIndex) % 2 === 0 ? -36 : 36),
              y: 16,
              opacity: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: { trigger: section, start: "top 85%", once: true },
            });
            const imgs = section.querySelectorAll("img");
            if (imgs.length) {
              gsap.from(imgs, {
                scale: 1.08,
                clipPath: "inset(8% 8% 8% 8%)",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: { trigger: section, start: "top 85%", once: true },
              });
            }
          });
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset["parallax"]),
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
      ScrollTrigger.refresh();
    }, 60);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      ctx?.revert();
    };
  }, [pathname]);
  return null;
}
