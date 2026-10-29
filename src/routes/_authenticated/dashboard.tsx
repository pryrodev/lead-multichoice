import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { btn, ButtonLink } from "@/components/site/ui";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Client dashboard | LEAD MULTICHOICE" },
      { name: "description", content: "Manage your LEAD MULTICHOICE client profile." },
      { property: "og:title", content: "Client dashboard | LEAD MULTICHOICE" },
      { property: "og:description", content: "Manage your client profile." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

const schema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name").max(120),
  company: z.string().trim().max(120),
  phone: z.string().trim().max(30),
});
type Profile = z.infer<typeof schema> & { email: string };

const field =
  "mt-1.5 block w-full rounded border border-input bg-background px-3 py-2.5 text-[15px] focus:border-corporate focus:outline-none";

export async function signOutTo(navigate: ReturnType<typeof useNavigate>) {
  await supabase.auth.signOut();
  navigate({ to: "/auth", replace: true });
}

function Dashboard() {
  const { tc } = useI18n();
  const { user, isAdmin } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name, company, phone, email")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) =>
        setProfile(data ?? { full_name: "", company: "", phone: "", email: user.email ?? "" }),
      );
  }, [user]);

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;
    const r = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!r.success) return setMsg(tc(r.error.issues[0]?.message ?? "Check the form"));
    const { error } = await supabase
      .from("profiles")
      .update({ ...r.data, updated_at: new Date().toISOString() })
      .eq("id", user.id);
    setMsg(error ? tc("Could not save. Please try again.") : tc("Saved."));
  }

  return (
    <div className="bg-surface">
      <section className="bg-brand-primary text-background">
        <div className="container-site flex flex-wrap items-end justify-between gap-6 py-14">
          <div>
            <p className="eyebrow mb-3 text-brass-light">{tc("Client dashboard")}</p>
            <h1 className="text-[34px] text-background md:text-[44px]">
              {tc("Hello")}
              {profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""}.
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {isAdmin && (
              <ButtonLink to="/admin" variant="light">
                {tc("Admin area")}
              </ButtonLink>
            )}
            <button type="button" onClick={() => signOutTo(navigate)} className={btn("ghostLight")}>
              {tc("Sign out")}
            </button>
          </div>
        </div>
      </section>
      <div className="container-site grid gap-8 py-12 lg:grid-cols-[1.4fr_1fr]">
        <form
          key={profile ? "loaded" : "loading"}
          onSubmit={save}
          className="rounded-lg bg-background p-7 shadow-sm"
        >
          <h2 className="text-[22px]">{tc("Your details")}</h2>
          <p className="mt-1 text-[14px] text-muted-foreground">{profile?.email}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-[14px] font-medium sm:col-span-2">
              {tc("Full name")}
              <input name="full_name" defaultValue={profile?.full_name} className={field} />
            </label>
            <label className="block text-[14px] font-medium">
              {tc("Company")}
              <input name="company" defaultValue={profile?.company} className={field} />
            </label>
            <label className="block text-[14px] font-medium">
              {tc("Phone")}
              <input name="phone" type="tel" defaultValue={profile?.phone} className={field} />
            </label>
          </div>
          {msg && (
            <p role="status" className="mt-4 text-[14px] text-corporate">
              {msg}
            </p>
          )}
          <button className={btn("primary", "mt-6")}>{tc("Save details")}</button>
        </form>
        <aside className="rounded-lg bg-background p-7 shadow-sm">
          <h2 className="text-[22px]">{tc("Next steps")}</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li>
              <Link to="/contact" className="text-corporate hover:text-brand-primary">
                {tc("Discuss a new opportunity →")}
              </Link>
            </li>
            <li>
              <Link
                to="/procurement-opportunities"
                className="text-corporate hover:text-brand-primary"
              >
                {tc("Browse tender portals →")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-corporate hover:text-brand-primary">
                {tc("See our services →")}
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
