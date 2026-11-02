import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { btn, ButtonLink } from "@/components/site/ui";
import { useI18n } from "@/i18n/I18nProvider";
import { AccountProfileCard } from "@/components/client-dashboard/AccountProfileCard";
import { EngagementDashboard } from "@/components/client-dashboard/EngagementDashboard";
import type { ClientView } from "@/components/client-dashboard/dashboard-data";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Client dashboard | LEAD MULTICHOICE" },
      { name: "description", content: "Follow your requests and business engagements." },
      { property: "og:title", content: "Client dashboard | LEAD MULTICHOICE" },
      { property: "og:description", content: "Follow your requests and business engagements." },
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

export async function signOutTo(navigate: ReturnType<typeof useNavigate>) {
  await supabase.auth.signOut();
  navigate({ to: "/auth", replace: true });
}

function Dashboard() {
  const { tc } = useI18n();
  const { user, isAdmin } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [view, setView] = useState<ClientView>("buyer");
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
    const result = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!result.success) {
      setMessage(tc(result.error.issues[0]?.message ?? "Check the form"));
      return;
    }
    const { error } = await supabase
      .from("profiles")
      .update({ ...result.data, updated_at: new Date().toISOString() })
      .eq("id", user.id);
    setMessage(error ? tc("Could not save. Please try again.") : tc("Saved."));
  }

  const profileCard = <AccountProfileCard profile={profile} message={message} onSave={save} />;

  return (
    <div className="min-h-screen bg-surface pb-14">
      <section className="bg-brand-primary text-background">
        <div className="container-site flex flex-wrap items-end justify-between gap-6 py-10 md:py-14">
          <div>
            <p className="eyebrow mb-3 text-brass-light">{tc("Client dashboard")}</p>
            <h1 className="text-[32px] text-background md:text-[42px]">
              {tc("Welcome back")}
              {profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""}.
            </h1>
            <p className="mt-2 max-w-xl text-background/80">
              {tc(
                "Follow your requests, engagement progress and the latest updates from our team.",
              )}
            </p>
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

      <div className="container-site">
        <Tabs value={view} onValueChange={(value) => setView(value as ClientView)}>
          <div className="flex flex-col gap-4 border-b border-border py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-[13px] font-medium text-muted-foreground">
                {tc("Viewing dashboard as")}
              </p>
              <TabsList className="h-auto flex-wrap border border-border bg-background p-1">
                <TabsTrigger
                  value="buyer"
                  className="data-[state=active]:bg-brand-primary data-[state=active]:text-brand-white"
                >
                  {tc("Purchasing entity")}
                </TabsTrigger>
                <TabsTrigger
                  value="supplier"
                  className="data-[state=active]:bg-brand-primary data-[state=active]:text-brand-white"
                >
                  {tc("International supplier")}
                </TabsTrigger>
              </TabsList>
            </div>
            <ButtonLink to="/contact" variant="primary" arrow>
              {tc(
                view === "buyer" ? "Submit a sourcing request" : "Discuss a supplier opportunity",
              )}
            </ButtonLink>
          </div>

          <TabsContent value="buyer" className="mt-0">
            <EngagementDashboard view="buyer">{profileCard}</EngagementDashboard>
          </TabsContent>
          <TabsContent value="supplier" className="mt-0">
            <EngagementDashboard view="supplier">{profileCard}</EngagementDashboard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
