import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Camera, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const departments = [
  { icon: <Users size={32} />, name: "Fashion", desc: "Setting trends and redefining campus style." },
  { icon: <Camera size={32} />, name: "Media & Content", desc: "Capturing moments and telling our story." },
  { icon: <Mic size={32} />, name: "Music", desc: "Curating the sound of the movement." },
  { icon: <Calendar size={32} />, name: "Events", desc: "Activations, workshops & unforgettable experiences." },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-hero via-primary/20 to-secondary/20">
      {/* Parallax background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full blur-3xl animate-float" style={{animationDuration: '20s'}} />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/30 rounded-full blur-3xl animate-bounce-glow slow" style={{animationDuration: '25s'}} />
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-accent/20 rounded-full blur-2xl animate-pulse-soft" style={{animationDuration: '15s'}} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
          <img src={logo} alt="Friends of TUT" className="mx-auto w-32 h-32 md:w-48 md:h-48 rounded-3xl shadow-2xl shadow-primary/40 mb-12 animate-bounce-glow" />
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight text-foreground/95 mb-8 drop-shadow-2xl leading-tight">
            FRIENDS OF TUT
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-sm">
            A student-led creative movement — Fashion, Media, Music & Culture at Tshwane University of Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:shadow-glow shadow-glow px-12 py-8 font-display text-2xl tracking-wide rounded-2xl">
              <Link to="/events">Upcoming Events <ArrowRight className="ml-4" size={24} /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-foreground/30 text-foreground hover:bg-foreground/50 hover:border-foreground hover:shadow-glow shadow-glow px-12 py-8 font-display text-2xl tracking-wide rounded-2xl">
              <Link to="/info">Teams</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Departments */}
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl text-center mb-12">OUR DEPARTMENTS</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {departments.map((d, i) => (
            <div 
              key={d.name} 
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted p-8 shadow-2xl hover:shadow-glow hover:-translate-y-2 transition-all duration-500 animate-fade-in" 
              style={{animationDelay: `${i * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 rounded-2xl gradient-hero animate-bounce-glow flex items-center justify-center text-primary-foreground relative z-10 mb-6 group-hover:scale-110 transition-transform">
                {d.icon}
              </div>
              <h3 className="text-3xl font-display mb-4 relative z-10 text-foreground"> {d.name}</h3>
              <p className="text-muted-foreground/90 text-base leading-relaxed relative z-10"> {d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-background">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl text-foreground mb-4">JOIN THE MOVEMENT</h2>
        <p className="text-foreground/70 max-w-lg mx-auto mb-8">
          Be part of a creative community that's shaping campus culture. Whether you're into fashion, music, media, or events — there's a place for you.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 btn-glow shadow-glow font-display text-lg tracking-wide">
          <Link to="/info">Teams <ArrowRight className="ml-2" size={18} /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Index;

