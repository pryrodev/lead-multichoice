import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { btn } from "@/components/site/ui";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a new password | LEAD MULTICHOICE" },
      { name: "description", content: "Choose a new password for your LEAD MULTICHOICE account." },
      { property: "og:title", content: "Set a new password | LEAD MULTICHOICE" },
      { property: "og:description", content: "Choose a new password for your account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const { tc } = useI18n();
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    if (password.length < 8) return setMsg(tc("Use at least 8 characters."));
    const { error } = await supabase.auth.updateUser({ password });
    if (error) return setMsg(error.message);
    navigate({ to: "/dashboard" });
  }
  return (
    <section className="flex min-h-[70vh] items-center bg-surface py-16">
      <form
        onSubmit={onSubmit}
        className="mx-auto w-full max-w-md rounded-lg bg-background p-8 shadow-lg"
      >
        <h1 className="text-[28px]">{tc("Set a new password")}</h1>
        <label className="mt-6 block text-[14px] font-medium">
          {tc("New password")}
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            className="mt-1.5 block w-full rounded border border-input px-3 py-2.5"
          />
        </label>
        {msg && <p className="mt-3 text-[14px] text-destructive">{tc(msg)}</p>}
        <button className={btn("primary", "mt-6 w-full")}>{tc("Save password")}</button>
      </form>
    </section>
  );
}
