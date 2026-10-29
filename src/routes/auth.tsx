import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import heroImage from "@/assets/hero-port.jpg";
import { btn } from "@/components/site/ui";
import { company } from "@/content/site";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: `Sign in or create an account | ${company.shortName}` },
      {
        name: "description",
        content:
          "Sign in to your LEAD MULTICHOICE client account or create one to follow your business opportunities.",
      },
      { property: "og:title", content: `Sign in | ${company.shortName}` },
      { property: "og:description", content: "Access your LEAD MULTICHOICE client account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

const signupSchema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name").max(120),
  company: z.string().trim().max(120),
  phone: z.string().trim().max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(8, "Use at least 8 characters").max(72),
});

const field =
  "mt-1.5 block w-full rounded border border-input bg-background px-3 py-2.5 text-[15px] focus:border-corporate focus:outline-none";

function AuthPage() {
  const { tc } = useI18n();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setBusy(true);
    try {
      if (mode === "signup") {
        const r = signupSchema.safeParse(f);
        if (!r.success)
          return setMsg({ ok: false, text: r.error.issues[0]?.message ?? "Check the form" });
        const { email, password, ...meta } = r.data;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/dashboard", data: meta },
        });
        if (error) return setMsg({ ok: false, text: error.message });
        setMsg({ ok: true, text: "Check your email to confirm your account, then sign in." });
      } else if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(f["email"] ?? "", {
          redirectTo: window.location.origin + "/reset-password",
        });
        setMsg(
          error
            ? { ok: false, text: error.message }
            : { ok: true, text: "If that email has an account, a reset link is on its way." },
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: f["email"] ?? "",
          password: f["password"] ?? "",
        });
        if (error) return setMsg({ ok: false, text: error.message });
        navigate({ to: "/dashboard" });
      }
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    const r = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/auth",
    });
    if (r.error) return setMsg({ ok: false, text: "Google sign-in failed. Please try again." });
    if (r.redirected) return;
    navigate({ to: "/dashboard" });
  }

  const title =
    mode === "signup"
      ? "Create your account"
      : mode === "forgot"
        ? "Reset your password"
        : "Welcome back";

  return (
    <section className="photo-parallax relative isolate flex min-h-[calc(100vh-78px)] items-center overflow-hidden bg-brand-primary py-16">
      <div className="photo-parallax-window" aria-hidden>
        <img src={heroImage} alt="" width={1280} height={960} className="photo-parallax-image" />
      </div>
      <div className="photo-parallax-shade absolute inset-0 -z-10" aria-hidden />
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="hidden text-background lg:block">
          <p className="eyebrow mb-4 text-brass-light">{tc("Client portal")}</p>
          <h1 className="text-[44px] text-background">
            {tc("Your partnership with us, in one place.")}
          </h1>
          <p className="mt-5 max-w-md text-background/75">
            {tc("Keep your company details up to date and stay in touch with our team in Kigali.")}
          </p>
        </div>
        <div className="mx-auto w-full max-w-md rounded-lg bg-background p-7 shadow-2xl md:p-9">
          <h2 className="text-[28px]">{tc(title)}</h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            {mode === "signup" && (
              <>
                <label className="block text-[14px] font-medium">
                  {tc("Full name")}
                  <input name="full_name" required autoComplete="name" className={field} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[14px] font-medium">
                    {tc("Company")}
                    <input name="company" autoComplete="organization" className={field} />
                  </label>
                  <label className="block text-[14px] font-medium">
                    {tc("Phone")}
                    <input name="phone" type="tel" autoComplete="tel" className={field} />
                  </label>
                </div>
              </>
            )}
            <label className="block text-[14px] font-medium">
              {tc("Email")}
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            {mode !== "forgot" && (
              <label className="block text-[14px] font-medium">
                {tc("Password")}
                <input
                  name="password"
                  type="password"
                  required
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  className={field}
                />
              </label>
            )}
            {msg && (
              <p
                role="status"
                className={msg.ok ? "text-[14px] text-corporate" : "text-[14px] text-destructive"}
              >
                {tc(msg.text)}
              </p>
            )}
            <button type="submit" disabled={busy} className={btn("primary", "w-full")}>
              {busy
                ? tc("Please wait…")
                : mode === "signup"
                  ? tc("Create account")
                  : mode === "forgot"
                    ? tc("Send reset link")
                    : tc("Sign in")}
            </button>
          </form>
          {mode !== "forgot" && (
            <>
              <div className="my-5 flex items-center gap-3 text-[12px] uppercase tracking-widest text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                {tc("or")}
                <span className="h-px flex-1 bg-border" />
              </div>
              <button type="button" onClick={google} className={btn("outline", "w-full")}>
                {tc("Continue with Google")}
              </button>
            </>
          )}
          <div className="mt-6 space-y-2 text-center text-[14px] text-muted-foreground">
            {mode === "signin" && (
              <>
                <p>
                  <button
                    type="button"
                    className="font-semibold text-corporate hover:text-brand-primary"
                    onClick={() => {
                      setMode("forgot");
                      setMsg(null);
                    }}
                  >
                    {tc("Forgot password?")}
                  </button>
                </p>
                <p>
                  {tc("New here?")}{" "}
                  <button
                    type="button"
                    className="font-semibold text-corporate hover:text-brand-primary"
                    onClick={() => {
                      setMode("signup");
                      setMsg(null);
                    }}
                  >
                    {tc("Create an account")}
                  </button>
                </p>
              </>
            )}
            {mode !== "signin" && (
              <p>
                {tc("Already have an account?")}{" "}
                <button
                  type="button"
                  className="font-semibold text-corporate hover:text-brand-primary"
                  onClick={() => {
                    setMode("signin");
                    setMsg(null);
                  }}
                >
                  Sign in
                </button>
              </p>
            )}
            <p>
              <Link to="/" className="hover:text-brand-primary">
                {tc("← Back to website")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
