import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/info", label: "Teams" },
  { to: "/gallery", label: "Gallery" },
  { to: "/crew", label: "Crew" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-foreground/95 to-primary/10 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Friends of TUT logo" className="h-14 w-14 rounded-xl object-cover shadow-lg" />
          <span className="font-display text-3xl tracking-tight text-foreground drop-shadow-sm">
            FRIENDS <span className="text-primary drop-shadow-sm">OF TUT</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-6 py-3 font-display text-xl tracking-tight rounded-full text-foreground/90 hover:text-foreground hover:bg-white/20 hover:shadow-lg transition-all duration-300 shadow-sm backdrop-blur-sm ${
                location.pathname === l.to
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-3 rounded-xl bg-white/20 backdrop-blur-sm text-foreground hover:bg-white/40 transition-all shadow-lg"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-foreground/95 backdrop-blur-xl border-t border-border/50 py-6 animate-fade-in">
          <div className="container mx-auto px-6">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block w-full text-left px-8 py-5 font-display text-xl tracking-tight rounded-2xl text-foreground/90 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/20 hover:shadow-2xl transition-all duration-300 shadow-lg my-2 backdrop-blur-sm border border-border/50 ${
                  location.pathname === l.to
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-2xl scale-[1.02]"
                    : ""
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

