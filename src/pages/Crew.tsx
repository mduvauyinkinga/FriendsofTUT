import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Palette, Camera, Mic } from "lucide-react";

const crewMembers = [
  {
    name: "Eazy Weezy",
    role: "Chairman",
    image: "/src/assets/weezy.jpeg",
    icon: Palette,
  },
  {
    name: "Movie",
    role: "Deputy Chair",
    image: "/src/assets/movie.jpeg",
    icon: Camera,
  },
  {
    name: "Phindile",
    role: "Secretary",
    image: "/src/assets/phindile.jpeg",
    icon: Mic,
  },
  {
    name: "Donka",
    role: "Deputy Secretary",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
  {
    name: "Sbahle",
    role: "Treasurer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
  {
    name: "Pretty Budagi",
    role: "Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
  {
    name: "Hakeem",
    role: "Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
  {
    name: "Snowie",
    role: "Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
  {
    name: "Thabi",
    role: "Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
  {
    name: "Proud",
    role: "Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
  {
    name: "Faith",
    role: "Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    icon: Users,
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {crewMembers.map((member, index) => (
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
