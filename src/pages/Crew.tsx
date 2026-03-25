import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Palette, Camera, Mic } from "lucide-react";

const leadership = [
  {
    name: "Eazy Weezy",
    role: "Chairman",
    image: "src/assets/weezy.jpeg",
    icon: Users,
  },
  {
    name: "Movie",
    role: "Deputy Chair",
    image: "src/assets/movie.jpeg",
    icon: Users,
  },
  {
    name: "Phindile",
    role: "Secretary",
    image: "src/assets/phindile.jpeg",
    icon: Users,
  }
];

const ambassadors = [
  {
    name: "Snowie",
    role: "Ambassador",
    image: "src/assets/_not.snowie.jpeg",
    icon: Users,
  },
  {
    name: "Nthabi",
    role: "Ambassador",
    image: "src/assets/Nthabi.jpeg",
    icon: Users,
  },
  {
    name: "Baencane",
    role: "Ambassador",
    image: "src/assets/Baencane.jpeg",
    icon: Users,
  },
  {
    name: "Barbie",
    role: "Ambassador",
    image: "src/assets/Barbie.jpeg",
    icon: Users,
  },
  {
    name: "Charmaine",
    role: "Ambassador",
    image: "src/assets/Charmaine.jpeg",
    icon: Users,
  },
  {
    name: "Cjbest",
    role: "Ambassador",
    image: "src/assets/Cjbest.jpeg",
    icon: Users,
  },
  {
    name: "Don Pablo",
    role: "Ambassador",
    image: "src/assets/Don_Pablo.jpeg",
    icon: Users,
  },
  {
    name: "Got2lovesk",
    role: "Ambassador",
    image: "src/assets/got2lovesk.jpeg",
    icon: Users,
  },
  {
    name: "HerSmile",
    role: "Ambassador",
    image: "src/assets/HerSmile.jpeg",
    icon: Users,
  },
  {
    name: "Karabo",
    role: "Ambassador",
    image: "src/assets/Karabo.jpeg",
    icon: Users,
  },
  {
    name: "Kat La Zonke",
    role: "Ambassador",
    image: "src/assets/Kat La Zonke.jpeg",
    icon: Users,
  },
  {
    name: "Kutloano",
    role: "Ambassador",
    image: "src/assets/Kutloano.jpeg",
    icon: Users,
  },
  {
    name: "Lethabo",
    role: "Ambassador",
    image: "src/assets/Lethabo.jpeg",
    icon: Users,
  },
  {
    name: "Nonkululeko",
    role: "Ambassador",
    image: "src/assets/Nonkululeko.jpeg",
    icon: Users,
  },
  {
    name: "Nono",
    role: "Ambassador",
    image: "src/assets/nono.jpeg",
    icon: Users,
  },
  {
    name: "Palesa",
    role: "Ambassador",
    image: "src/assets/Palesa.jpeg",
    icon: Users,
  },
  {
    name: "Precious",
    role: "Ambassador",
    image: "src/assets/Precious.jpeg",
    icon: Users,
  },
  {
    name: "Pretty Bouyy",
    role: "Ambassador",
    image: "src/assets/pretty bouyy.jpeg",
    icon: Users,
  },
  {
    name: "Sdeezo",
    role: "Ambassador",
    image: "src/assets/sdeezo.jpeg",
    icon: Users,
  },
  {
    name: "Shalom",
    role: "Ambassador",
    image: "src/assets/Shalom.jpeg",
    icon: Users,
  },
  {
    name: "Shaun",
    role: "Ambassador",
    image: "src/assets/Shaun.jpeg",
    icon: Users,
  },
  {
    name: "Sihle",
    role: "Ambassador",
    image: "src/assets/Sihle.jpeg",
    icon: Users,
  },
  {
    name: "Suprimel",
    role: "Ambassador",
    image: "src/assets/suprimel.jpeg",
    icon: Users,
  },
  {
    name: "Unathi",
    role: "Ambassador",
    image: "src/assets/Unathi.jpeg",
    icon: Users,
  }
];

const fashionModels = [
  {
    name: "WhatsApp Image",
    role: "Fashion Model",
    image: "src/assets/WhatsApp Image 2026-03-22 at 21.13.34.jpeg",
    icon: Users,
  },
  {
    name: "Atlegang",
    role: "Fashion Model",
    image: "src/assets/Atlegang.jpeg",
    icon: Users,
  },
  {
    name: "Bothlale",
    role: "Fashion Model",
    image: "src/assets/Bothlale.jpeg",
    icon: Users,
  },
  {
    name: "Guguu",
    role: "Fashion Model",
    image: "src/assets/guguu.jpeg",
    icon: Users,
  },
  {
    name: "Khutso",
    role: "Fashion Model",
    image: "src/assets/Khutso.jpeg",
    icon: Users,
  },
  {
    name: "Prïnny",
    role: "Fashion Model",
    image: "src/assets/Prïnny.jpeg",
    icon: Users,
  },
  {
    name: "Rabs",
    role: "Fashion Model",
    image: "src/assets/Rabs.jpeg",
    icon: Users,
  },
  {
    name: "Swa.gger",
    role: "Fashion Model",
    image: "src/assets/Swa.gger__.jpeg",
    icon: Users,
  }
];

const Crew = () => (
  <>
    <section className="gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl text-primary-foreground mb-4">THE CREW</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Meet the passionate team driving the Friends of TUT movement.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        {/* Leadership */}
        <div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl text-foreground font-display">Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {leadership.map((member) => (
            <div key={member.name} className="group text-center hover:shadow-glow hover:-translate-y-2 transition-all duration-500 rounded-2xl p-8 bg-card border border-border hover:border-primary">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl group-hover:shadow-glow ring-4 ring-transparent group-hover:ring-primary/30 transition-all">
                <Avatar className="w-full h-full">
                  <AvatarImage src={member.image} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-2xl font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-display mb-2 text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-lg font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Ambassadors Title */}
        <div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl text-foreground font-display">Ambassadors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {ambassadors.map((member) => (
            <div key={member.name} className="group text-center hover:shadow-glow hover:-translate-y-2 transition-all duration-500 rounded-2xl p-8 bg-card border border-border hover:border-primary">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl group-hover:shadow-glow ring-4 ring-transparent group-hover:ring-primary/30 transition-all">
                <Avatar className="w-full h-full">
                  <AvatarImage src={member.image} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-2xl font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-display mb-2 text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-lg font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Fashion Models Title */}
        <div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl text-foreground font-display">Fashion Models</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fashionModels.map((member) => (
            <div key={member.name} className="group text-center hover:shadow-glow hover:-translate-y-2 transition-all duration-500 rounded-2xl p-8 bg-card border border-border hover:border-primary">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl group-hover:shadow-glow ring-4 ring-transparent group-hover:ring-primary/30 transition-all">
                <Avatar className="w-full h-full">
                  <AvatarImage src={member.image} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-2xl font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-display mb-2 text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-lg font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Crew;

