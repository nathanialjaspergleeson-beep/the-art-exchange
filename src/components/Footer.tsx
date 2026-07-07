import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  // Home page's CTA already ends in bg-accent — flush footer, no shaped edge.
  // Other pages: lift the footer with rounded top corners + soft shadow so it
  // reads as an intentional panel, not a block plopped on the section above.
  const isHome = pathname === "/";

  return (
    <footer className="relative text-accent-foreground">
      {!isHome && <div aria-hidden className="h-16 bg-background" />}
      <div
        className={
          isHome
            ? "bg-accent pt-12 pb-16 px-6"
            : "relative bg-accent pt-14 pb-16 px-6 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-20px_60px_-20px_hsl(var(--accent)/0.5)] -mt-8"
        }
      >
        {!isHome && (
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 top-5 w-16 h-[2px] rounded-full bg-primary/40"
          />
        )}
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl text-primary mb-4">United Breath</h3>
            <p className="font-body text-sm text-accent-foreground/70 leading-relaxed">
              Where breath becomes the bridge to our highest selves and to each other.
            </p>
            <p className="font-body text-xs text-accent-foreground/50 mt-4">
              Founded by Romina Castano, Astrabella Gleeson &amp; Stirling Gleeson
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:0423947694" className="flex items-center gap-2 text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                <Phone size={16} /> Romina — 0423 947 694
              </a>
              <a href="tel:0490843927" className="flex items-center gap-2 text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                <Phone size={16} /> Astrabella — 0490 843 927
              </a>
              <a href="tel:0431392948" className="flex items-center gap-2 text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                <Phone size={16} /> Stirling — 0431 392 948
              </a>
              <a href="mailto:unitedbreath@yahoo.com" className="flex items-center gap-2 text-sm text-accent-foreground/70 hover:text-primary transition-colors">
                <Mail size={16} /> unitedbreath@yahoo.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/united.breath"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-accent-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/_unitedbreath"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-accent-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="font-body text-xs text-accent-foreground/40">
            © {new Date().getFullYear()} United Breath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
