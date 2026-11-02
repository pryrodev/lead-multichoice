import type { FormEventHandler } from "react";
import { Building2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type AccountProfile = {
  full_name: string;
  company: string;
  phone: string;
  email: string;
};

export function AccountProfileCard({
  profile,
  message,
  onSave,
}: {
  profile: AccountProfile | null;
  message: string | null;
  onSave: FormEventHandler<HTMLFormElement>;
}) {
  const { tc } = useI18n();

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-surface text-brand-primary">
            <Building2 size={18} aria-hidden />
          </span>
          <div>
            <CardTitle className="text-[19px]">{tc("Your account details")}</CardTitle>
            <p className="mt-1 text-[13px] text-muted-foreground">{profile?.email}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form
          key={profile ? "loaded" : "loading"}
          onSubmit={onSave}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="dashboard-full-name">{tc("Full name")}</Label>
            <Input
              id="dashboard-full-name"
              name="full_name"
              defaultValue={profile?.full_name}
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="dashboard-company">{tc("Company")}</Label>
            <Input id="dashboard-company" name="company" defaultValue={profile?.company} />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="dashboard-phone">{tc("Phone")}</Label>
            <Input id="dashboard-phone" name="phone" type="tel" defaultValue={profile?.phone} />
          </div>
          {message && (
            <p role="status" className="text-[13px] text-brand-primary">
              {message}
            </p>
          )}
          <Button type="submit" variant="outline" className="mt-1 w-full">
            {tc("Save details")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
