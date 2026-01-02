import { Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "News & Update", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Clients & Partners", href: "#" },
  ],
  solutions: [
    { label: "Business Inquiries", href: "#contact" },
    { label: "Partnership Opportunities", href: "#contact" },
    { label: "Research Collaborations", href: "#contact" },
    { label: "Contact Us", href: "#contact" },
  ],
  industries: [
    { label: "Education", href: "#industries" },
    { label: "Wellness", href: "#industries" },
    { label: "Elder Care", href: "#industries" },
    { label: "All Solutions", href: "#industries" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer 
      className="bg-background noise-overlay relative"
      style={{
        borderTop: "1px solid rgba(253, 80, 9, 0.15)",
      }}
    >
      {/* Red gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(253, 80, 9, 0.08) 0%, transparent 60%)",
        }}
      />
      {/* Subtle red accent at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(253, 80, 9, 0.3) 50%, transparent 100%)",
        }}
      />

      <div className="container-custom relative z-10" style={{ paddingTop: "clamp(1.5rem, 3vw, 2rem)", paddingBottom: "clamp(2rem, 4vw, 2.5rem)" }}>
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ gap: "clamp(1rem, 2.5vw, 1.5rem)" }}>
          {/* Left: Legal Links */}
          <div className="flex flex-wrap justify-center sm:justify-start order-2 sm:order-1" style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}>
            {footerLinks.legal.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Center: Copyright */}
          <p className="text-muted-foreground text-xs sm:text-sm text-center flex-1 order-1 sm:order-2">
            © 2025 RAMA AI. All rights reserved.
          </p>
          
          {/* Right: Social Media Icons */}
          <div className="flex order-3" style={{ gap: "clamp(0.75rem, 2vw, 1.5rem)" }}>
            <a
              href="https://www.instagram.com/ramaai.in?igsh=eGo1b2x4d3AwbGY4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              style={{ width: "clamp(2.5rem, 5vw, 3rem)", height: "clamp(2.5rem, 5vw, 3rem)" }}
            >
              <Instagram style={{ width: "clamp(1rem, 2vw, 1.25rem)", height: "clamp(1rem, 2vw, 1.25rem)" }} />
            </a>
            <a
              href="https://x.com/ramaaiin?s=21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              style={{ width: "clamp(2.5rem, 5vw, 3rem)", height: "clamp(2.5rem, 5vw, 3rem)" }}
            >
              <svg style={{ width: "clamp(1rem, 2vw, 1.25rem)", height: "clamp(1rem, 2vw, 1.25rem)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/ramaai/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              style={{ width: "clamp(2.5rem, 5vw, 3rem)", height: "clamp(2.5rem, 5vw, 3rem)" }}
            >
              <Linkedin style={{ width: "clamp(1rem, 2vw, 1.25rem)", height: "clamp(1rem, 2vw, 1.25rem)" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
