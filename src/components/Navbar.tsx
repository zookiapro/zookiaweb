"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Team", href: "/team" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-[6px] bg-gradient-brand flex items-center justify-center shadow-brand">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L8 3L13 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 9.5H11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span
              className="font-display font-700 text-[1.15rem] tracking-[-0.02em] text-gray-900"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Zookia
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-[0.875rem] font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary active"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary px-5 py-2.5 rounded-[8px] text-[0.85rem] inline-flex items-center gap-2"
            >
              Schedule Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] bg-gray-800 transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-[4.5px]" : "w-5"}`} />
            <span className={`block h-[1.5px] bg-gray-800 transition-all duration-300 ${open ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-[1.5px] bg-gray-800 transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-[4.5px]" : "w-5"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.95rem] font-medium ${pathname === link.href ? "text-primary" : "text-gray-700"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary px-5 py-3 rounded-[8px] text-[0.875rem] text-center mt-2"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
