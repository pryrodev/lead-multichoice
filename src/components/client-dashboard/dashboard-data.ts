import {
  CheckCircle2,
  FileCheck2,
  Handshake,
  MessageSquareText,
  PackageSearch,
  Truck,
} from "lucide-react";

export type ClientView = "buyer" | "supplier";
export type Activity = {
  day: string;
  time: string;
  title: string;
  detail: string;
  icon: typeof CheckCircle2;
};

// Illustrative client-side records; engagement updates will be loaded from the service later.
export const dashboardViews = {
  buyer: {
    kind: "Purchasing entity",
    request: "Irrigation pump request",
    reference: "REQ-2026-014",
    subject: "20 water pumps for a district irrigation project",
    stage: "Supplier identification",
    progress: 42,
    lastUpdate: "Today, 09:15",
    nextAction: "Confirm the required pump capacity",
    nextActionDetail: "Your response will help us confirm supplier fit.",
    metrics: [
      { label: "Open requests", value: "02", icon: PackageSearch },
      { label: "Needs your response", value: "01", icon: MessageSquareText },
      { label: "Active engagements", value: "03", icon: Handshake },
      { label: "Completed", value: "01", icon: CheckCircle2 },
    ],
    updates: [
      {
        day: "Today",
        time: "09:15",
        title: "Supplier asked to confirm pump capacity",
        detail: "We are checking technical fit against your requirement.",
        icon: MessageSquareText,
      },
      {
        day: "Yesterday",
        time: "14:40",
        title: "Product specifications matched with two suppliers",
        detail: "Supplier credentials are being reviewed before an introduction.",
        icon: FileCheck2,
      },
      {
        day: "30 Oct",
        time: "11:20",
        title: "Delivery location and target date confirmed",
        detail: "The request is ready for supplier identification.",
        icon: CheckCircle2,
      },
      {
        day: "29 Oct",
        time: "10:05",
        title: "Request received",
        detail: "The LEAD MULTICHOICE team started the initial requirements review.",
        icon: PackageSearch,
      },
    ] satisfies Activity[],
  },
  supplier: {
    kind: "International supplier",
    request: "Water pump supply opportunity",
    reference: "ENG-2026-008",
    subject: "District irrigation project · Rwanda",
    stage: "Supplier review",
    progress: 58,
    lastUpdate: "Today, 10:30",
    nextAction: "Share your current manufacturer authorization letter",
    nextActionDetail: "This helps us complete the supplier verification review.",
    metrics: [
      { label: "Relevant opportunities", value: "02", icon: PackageSearch },
      { label: "Introductions", value: "01", icon: Handshake },
      { label: "Needs your response", value: "01", icon: MessageSquareText },
      { label: "Active engagements", value: "02", icon: Truck },
    ],
    updates: [
      {
        day: "Today",
        time: "10:30",
        title: "Authorization letter requested",
        detail: "Please share the current document so the review can continue.",
        icon: FileCheck2,
      },
      {
        day: "Yesterday",
        time: "15:10",
        title: "Your product range matched a buyer requirement",
        detail: "The buyer is sourcing pumps for an irrigation project in Rwanda.",
        icon: PackageSearch,
      },
      {
        day: "30 Oct",
        time: "13:25",
        title: "Company profile reviewed",
        detail: "The team is checking product and authorization information.",
        icon: CheckCircle2,
      },
      {
        day: "29 Oct",
        time: "09:50",
        title: "Supplier enquiry received",
        detail: "Your request to explore the Rwandan market is under review.",
        icon: PackageSearch,
      },
    ] satisfies Activity[],
  },
} as const;
