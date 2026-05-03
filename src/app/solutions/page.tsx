import type { Metadata } from "next";
import SolutionsClient from "@/components/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Zookia's outbound solutions: infrastructure, cold calling, lead generation, appointment setting, and market expansion for B2B and SaaS companies.",
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
