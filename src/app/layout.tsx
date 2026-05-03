import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Zookia — Revenue & Outbound Infrastructure",
    template: "%s | Zookia",
  },
  description:
    "Zookia builds scalable outbound systems and cold outreach infrastructure for B2B and SaaS companies targeting predictable revenue growth.",
  keywords: [
    "cold outreach",
    "cold calling",
    "B2B sales",
    "SaaS outbound",
    "pipeline generation",
    "appointment setting",
    "lead generation",
    "outbound infrastructure",
  ],
  openGraph: {
    type: "website",
    siteName: "Zookia",
    title: "Zookia — Revenue & Outbound Infrastructure",
    description:
      "Scalable outbound systems for predictable revenue growth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
