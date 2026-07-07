import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0); // 0 = over hero, 1 = past hero
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => {
      const start = window.innerHeight * 0.55;
      const end = window.innerHeight * 0.95;
      const y = window.scrollY;
      const p = Math.min(1, Math.max(0, (y - start) / (end - start)));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/offerings", label: "Offerings" },
    { to: "/shop", label: "Shop" },
    { to: "/join", label: "Join Us" },
  ];

  // Smooth interpolated background color: accent (transparent) -> background (frosted)
  // We layer two backgrounds and crossfade via opacity.

  const NavInner = ({ tone }: { tone: "light" | "dark" }) => {
    // light = over hero (light text on dark/image)
    // dark  = scrolled (dark text on light bg)
    const titleColor = tone === "light" ? "text-primary" : "text-accent";
    const linkColor = tone === "light" ? "text-accent-foreground/85" : "text-accent/90";
    const iconColor = tone === "light" ? "text-accent-foreground/85" : "text-accent/90";
    const menuColor = tone === "light" ? "text-accent-foreground" : "text-accent";

    return (
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            alt="United Breath"
            className="h-12 w-12 object-contain"
            style={{ mixBlendMode: "multiply", background: "transparent" }}
            src="/lovable-uploads/584d7850-12e1-4dd7-853d-16cffb442d38.png"
          />
          <span className={`font-display text-xl font-semibold tracking-wide ${titleColor}`}>
            United Breath
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm uppercase tracking-widest hover:text-primary ${
                location.pathname === l.to ? "text-primary" : linkColor
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/cart" className={`relative hover:text-primary ${iconColor}`}>
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-body font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className={`relative hover:text-primary ${iconColor}`}>
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-body font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className={menuColor} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Background layers — crossfade */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-accent/70 via-accent/40 to-transparent backdrop-blur-md pointer-events-none"
        style={{ opacity: 1 - progress }}
      />
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-md pointer-events-none"
        style={{ opacity: progress }}
      />
      {/* Soft bottom fade only when over hero */}
      <div
        className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none"
        style={{ opacity: 1 - progress }}
      />

      {/* Content layers — crossfade text colors */}
      <div className="relative">
        <div style={{ opacity: 1 - progress }}>
          <NavInner tone="light" />
        </div>
        <div className="absolute inset-0" style={{ opacity: progress }}>
          <NavInner tone="dark" />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-accent border-t border-primary/20 overflow-hidden relative"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                    location.pathname === l.to ? "text-primary" : "text-accent-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
