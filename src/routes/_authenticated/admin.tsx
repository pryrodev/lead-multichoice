import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin | LEAD MULTICHOICE" },
      { name: "description", content: "Team view of registered LEAD MULTICHOICE clients." },
      { property: "og:title", content: "Admin | LEAD MULTICHOICE" },
      { property: "og:description", content: "Team view of registered clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

type Row = {
  id: string;
  full_name: string;
  company: string;
  phone: string;
  email: string;
  created_at: string;
};

function Admin() {
  const { tc, language } = useI18n();
  const { ready, isAdmin } = useAuth();
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    if (!isAdmin) return;
    supabase
      .from("profiles")
      .select("id, full_name, company, phone, email, created_at")
      .order("created_at", { ascending: false })
      .then(({ data }) => setRows(data ?? []));
  }, [isAdmin]);

  if (!ready) return <p className="container-site py-20">{tc("Loading…")}</p>;
  if (!isAdmin)
    return (
      <div className="container-site py-24 text-center">
        <h1 className="text-[30px]">{tc("Team access only")}</h1>
        <p className="mt-3 text-muted-foreground">
          {tc("This area is for the LEAD MULTICHOICE team.")}
        </p>
        <Link to="/dashboard" className="mt-6 inline-block font-semibold text-corporate">
          {tc("Go to your dashboard →")}
        </Link>
      </div>
    );

  return (
    <div className="bg-surface">
      <section className="bg-brand-primary">
        <div className="container-site py-14">
          <p className="eyebrow mb-3 text-brass-light">{tc("Admin")}</p>
          <h1 className="text-[34px] text-background md:text-[44px]">{tc("Registered clients")}</h1>
          <p className="mt-3 text-background/70">
            {rows
              ? `${rows.length} ${tc(rows.length === 1 ? "account" : "accounts")}`
              : tc("Loading…")}
          </p>
        </div>
      </section>
      <div className="container-site py-12">
        <div className="overflow-x-auto rounded-lg bg-background shadow-sm">
          <table className="w-full text-left text-[14.5px]">
            <thead className="border-b border-border text-[12px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="p-4">{tc("Name")}</th>
                <th className="p-4">{tc("Company")}</th>
                <th className="p-4">{tc("Email")}</th>
                <th className="p-4">{tc("Phone")}</th>
                <th className="p-4">{tc("Joined")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows?.map((r) => (
                <tr key={r.id}>
                  <td className="p-4 font-medium text-brand-primary">{r.full_name || "—"}</td>
                  <td className="p-4">{r.company || "—"}</td>
                  <td className="p-4">
                    <a href={`mailto:${r.email}`} className="text-corporate">
                      {r.email}
                    </a>
                  </td>
                  <td className="p-4 tabular-nums">{r.phone || "—"}</td>
                  <td className="p-4 text-muted-foreground">
                    {new Date(r.created_at).toLocaleDateString(
                      { en: "en-GB", rw: "rw-RW", fr: "fr-FR", sw: "sw-TZ" }[language],
                    )}
                  </td>
                </tr>
              ))}
              {rows?.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">
                    {tc("No clients yet.")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
