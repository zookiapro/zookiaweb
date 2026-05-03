import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the Zookia team — specialists in outbound sales, revenue infrastructure, and market expansion for B2B and SaaS companies.",
};

export default function TeamPage() {
  return <TeamClient />;
}
