import { ArrowRight, Bell, Clock3, FileCheck2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { dashboardViews, type ClientView } from "./dashboard-data";

export function EngagementDashboard({
  view,
  children,
}: {
  view: ClientView;
  children?: ReactNode;
}) {
  const { tc } = useI18n();
  const current = dashboardViews[view];

  return (
    <>
      <div className="grid gap-4 py-6 sm:grid-cols-2 xl:grid-cols-4">
        {current.metrics.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-medium text-muted-foreground">{tc(label)}</p>
                <span className="grid size-9 place-items-center rounded-lg bg-surface text-brand-primary">
                  <Icon size={18} aria-hidden />
                </span>
              </div>
              <p className="mt-3 font-display text-[30px] font-bold text-foreground">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.9fr)]">
        <div className="flex flex-col gap-6">
          <Card className="shadow-sm">
            <CardHeader className="gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="eyebrow text-brand-primary">{tc("Current engagement")}</p>
                <CardTitle className="mt-2 text-[22px] sm:text-[25px]">
                  {tc(current.request)}
                </CardTitle>
                <CardDescription className="mt-1 text-[14px]">
                  {tc(current.subject)}
                </CardDescription>
              </div>
              <Badge variant="outline" className="w-fit rounded-full bg-surface text-brand-primary">
                {current.reference}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">
                    {tc("Current stage")}
                  </p>
                  <p className="mt-1 font-semibold">{tc(current.stage)}</p>
                </div>
                <p className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
                  <Clock3 size={15} aria-hidden /> {tc("Last updated")}: {tc(current.lastUpdate)}
                </p>
              </div>
              <Progress
                value={current.progress}
                aria-label={tc("Engagement progress")}
                className="mt-4 bg-surface [&>div]:bg-brand-primary"
              />
              <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                <span>{tc("Request received")}</span>
                <span>{tc("After-sales support")}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="flex-row items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-brand-primary">{tc("Daily activity")}</p>
                <CardTitle className="mt-2 text-[22px]">{tc("Request updates")}</CardTitle>
              </div>
              <span className="grid size-10 place-items-center rounded-full bg-surface text-brand-primary">
                <Bell size={18} aria-hidden />
              </span>
            </CardHeader>
            <CardContent>
              <ol>
                {current.updates.map((update, index) => {
                  const Icon = update.icon;
                  return (
                    <li
                      key={`${update.day}-${update.time}`}
                      className="relative flex gap-4 pb-6 last:pb-0"
                    >
                      {index !== current.updates.length - 1 && (
                        <span
                          className="absolute bottom-0 left-[17px] top-9 w-px bg-border"
                          aria-hidden
                        />
                      )}
                      <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full bg-surface text-brand-primary">
                        <Icon size={16} aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <h3 className="text-[14px] font-semibold">{tc(update.title)}</h3>
                          <time className="text-[12px] text-muted-foreground">
                            {tc(update.day)} · {update.time}
                          </time>
                        </div>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                          {tc(update.detail)}
                        </p>
                        <p className="mt-1.5 text-[11px] font-medium text-brand-primary">
                          {tc("Updated by LEAD MULTICHOICE team")}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <Button asChild variant="link" className="mt-5 h-auto p-0 text-brand-primary">
                <Link to="/contact">
                  {tc("Ask about this update")} <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <aside className="flex flex-col gap-6">
          <NextStepCard action={current.nextAction} detail={current.nextActionDetail} />
          {children}
        </aside>
      </div>
    </>
  );
}

function NextStepCard({ action, detail }: { action: string; detail: string }) {
  const { tc } = useI18n();
  return (
    <Card className="border-brand-primary/20 bg-brand-primary text-brand-white shadow-sm">
      <CardHeader>
        <p className="eyebrow text-brand-white/75">{tc("Your next step")}</p>
        <CardTitle className="mt-2 flex items-start gap-3 text-[19px] leading-snug text-brand-white">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-white/15">
            <FileCheck2 size={19} aria-hidden />
          </span>
          {tc(action)}
        </CardTitle>
        <CardDescription className="text-brand-white/75">{tc(detail)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="secondary" className="w-full">
          <Link to="/contact">{tc("Contact your coordinator")}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
