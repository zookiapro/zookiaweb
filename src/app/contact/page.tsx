import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zookia to discuss your outbound infrastructure and pipeline growth objectives. Schedule a consultation with our team.",
};

export default function ContactPage() {
  return <ContactClient />;
}
