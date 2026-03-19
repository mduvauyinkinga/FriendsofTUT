import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-foreground/95 to-card/50 text-foreground py-20 shadow-2xl">
    <div className="container grid gap-12 md:grid-cols-3">
      <div>
        <h3 className="text-3xl font-display text-primary mb-4 shadow-glow">FRIENDS OF TUT</h3>
        <p className="text-sm leading-relaxed">
          A student-led creative movement at TUT — uniting Fashion, Media, Music & Content Creation.
        </p>
      </div>
      <div>
        <h4 className="font-display text-2xl text-foreground mb-4">QUICK LINKS</h4>
        <div className="flex flex-col gap-3 text-base">
          <Link to="/about" className="hover:text-primary font-medium transition-all hover:shadow-sm px-2 py-1 rounded">About Us</Link>
          <Link to="/events" className="hover:text-primary font-medium transition-all hover:shadow-sm px-2 py-1 rounded">Events</Link>
          <Link to="/gallery" className="hover:text-primary font-medium transition-all hover:shadow-sm px-2 py-1 rounded">Gallery</Link>
          <Link to="/info" className="hover:text-primary font-medium transition-all hover:shadow-sm px-2 py-1 rounded">Get Involved</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-2xl text-foreground mb-4">CONNECT</h4>
        <div className="flex flex-col gap-2 text-sm">
          <a href="https://www.instagram.com/friends_of.tut" className="flex items-center gap-2 hover:text-primary font-medium transition-all hover:shadow-sm px-2 py-1 rounded bg-primary/10">
            <Instagram size={20} /> @friends_of.tut
          </a>
          <a href="mailto:hello@friendsoftut.co.za" className="flex items-center gap-2 hover:text-primary font-medium transition-all hover:shadow-sm px-2 py-1 rounded bg-secondary/10">
            <Mail size={20} /> friendsoftut@gmail.com
          </a>
          <a href="tel:+270762179412" className="flex items-center gap-2 hover:text-primary font-medium transition-all hover:shadow-sm px-2 py-1 rounded bg-primary/10">
            <Phone size={20} /> 076 217 9412
          </a>
          <span className="flex items-center gap-2 text-muted-foreground font-medium">
            <MapPin size={20} /> Tshwane University of Technology
          </span>
        </div>
      </div>
    </div>
    <div className="container mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Friends of TUT. All rights reserved.
    </div>
  </footer>
);

export default Footer;
