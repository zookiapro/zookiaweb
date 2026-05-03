import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ],
  Solutions: [
    { label: "Outbound Infrastructure", href: "/solutions#infrastructure" },
    { label: "Cold Calling", href: "/solutions#cold-calling" },
    { label: "Lead Generation", href: "/solutions#lead-generation" },
    { label: "Appointment Setting", href: "/solutions#appointment-setting" },
    { label: "Market Expansion", href: "/solutions#market-expansion" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#07060d] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top CTA */}
        <div className="py-16 border-b border-white/[0.07]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-primary mb-3" style={{fontFamily: 'var(--font-display)'}}>
                Ready to Scale
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{fontFamily: 'var(--font-display)'}}>
                Build a Predictable Pipeline.
              </h3>
            </div>
            <Link
              href="/contact"
              className="btn-primary px-7 py-3.5 rounded-[8px] text-[0.875rem] inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
            >
              Start the Conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-[6px] bg-gradient-brand flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L8 3L13 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 9.5H11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-[1.1rem] tracking-tight" style={{fontFamily: 'var(--font-display)'}}>
                Zookia
              </span>
            </div>
            <p className="text-white/50 text-[0.875rem] leading-relaxed max-w-[280px]">
              Revenue and outbound infrastructure partner for B2B and SaaS companies driving global growth.
            </p>
            <div className="mt-8 flex flex-col gap-2.5">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/50 hover:text-white text-[0.85rem] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <path d="M12.5 9.5c0 .2-.05.4-.15.58-.1.18-.24.34-.42.46-.31.22-.64.33-.98.33-.28 0-.58-.07-.9-.2-.32-.14-.64-.32-.96-.56-.32-.24-.62-.5-.9-.8-.28-.3-.54-.6-.78-.9-.24-.3-.44-.6-.58-.9-.14-.3-.21-.59-.21-.87 0-.28.08-.54.24-.78.16-.24.38-.46.66-.62.32-.18.66-.27 1.02-.27.14 0 .28.03.4.08.12.06.24.14.34.28l1.18 1.66c.1.14.18.27.23.4.05.12.08.23.08.33 0 .13-.04.26-.11.38-.07.12-.16.24-.27.36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                +1 (234) 567-890
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center gap-3 text-white/50 hover:text-white text-[0.85rem] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4.5 7.5c.5 1 1.5 2 3 2.5l.5-1-1-.5.5-1c-.5-.5-1-1-1.5-1.5l-1 .5-.5-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:hello@zookia.com" className="flex items-center gap-3 text-white/50 hover:text-white text-[0.85rem] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <rect x="1.5" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 4.5L7 8L12.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                hello@zookia.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-white/30 mb-5" style={{fontFamily: 'var(--font-display)'}}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[0.8rem]">
            © 2022 – Present Zookia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-[0.8rem] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-[0.8rem] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
