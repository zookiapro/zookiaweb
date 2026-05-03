import type { Metadata } from "next";
import ClientsClient from "@/components/ClientsClient";

export const metadata: Metadata = {
  title: "Clients & Case Studies",
  description:
    "Zookia client outcomes and case studies. See how we've built outbound infrastructure for enterprise and SaaS companies globally.",
};

export default function ClientsPage() {
  return <ClientsClient />;
}
