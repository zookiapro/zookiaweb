import type { Metadata } from "next";
import Link from "next/link";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Zookia — Revenue & Outbound Infrastructure for B2B & SaaS",
  description:
    "Zookia builds scalable outbound systems and cold outreach infrastructure for B2B and SaaS companies. Targeted prospecting, cold calling, lead qualification, and appointment setting.",
};

export default function HomePage() {
  return <HomeClient />;
}
