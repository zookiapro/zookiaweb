import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Zookia",
  description:
    "Zookia is a revenue and outbound infrastructure partner for B2B and SaaS companies. We build scalable outbound systems that generate consistent, qualified pipeline.",
};

export default function AboutPage() {
  return <AboutClient />;
}
