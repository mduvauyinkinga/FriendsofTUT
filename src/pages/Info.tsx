import { Users, Palette, Camera, Mic, BookOpen } from "lucide-react";

const roles = [
  { icon: <Palette size={28} />, title: "Fashion Team", desc: "Styling, design direction, and fashion show coordination.", contact: "fashion@friendsoftut.co.za" },
  { icon: <Camera size={28} />, title: "Media Team", desc: "Photography, videography, editing, and visual storytelling.", contact: "media@friendsoftut.co.za" },
  { icon: <BookOpen size={28} />, title: "Content Creation", desc: "Social media management, copywriting, and brand voice.", contact: "content@friendsoftut.co.za" },
  { icon: <Mic size={28} />, title: "Music Team", desc: "DJ sets, live performances, playlists, and sound curation.", contact: "music@friendsoftut.co.za" },
];

const Info = () => {
  return (
    <>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl text-primary-foreground mb-4">TEAMS</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Meet our departments. Get in touch via email to collaborate.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl text-center mb-10">DEPARTMENTS &amp; ROLES</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {roles.map((r) => (
              <div key={r.title} className="p-6 rounded-xl border border-border bg-card hover:border-secondary transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground mb-4">
                  {r.icon}
                </div>
                <h3 className="text-2xl mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{r.desc}</p>
                <a href={`mailto:${r.contact}`} className="text-primary text-sm font-medium hover:underline">{r.contact}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
