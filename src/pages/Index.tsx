import mangroveHero from "@/assets/mangrove-hero.jpg";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/* ─── Navigation ─── */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-mc-navy/95 backdrop-blur-sm shadow-lg">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <span className="text-mc-cyan font-display font-black text-lg tracking-widest uppercase">
        Mangrove City VR
      </span>
      <ul className="flex gap-8">
        {[
          { label: "HOME", id: "home" },
          { label: "CURRICULUM", id: "curriculum" },
          { label: "AWARDS", id: "awards" },
          { label: "TEAM", id: "team" },
        ].map(({ label, id }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-white font-bold tracking-widest text-sm uppercase hover:text-mc-cyan transition-colors duration-200"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

/* ─── Hero Section ─── */
const Hero = () => (
  <section id="home" className="w-full">
    {/* Hero image */}
    <div className="relative w-full h-[75vh] overflow-hidden">
      <img
        src={mangroveHero}
        alt="Mangrove forest roots at the water's edge"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="font-script text-white text-5xl md:text-7xl drop-shadow-2xl mb-2">
          Welcome to
        </p>
        <h1
          className="font-display font-black uppercase leading-none drop-shadow-2xl"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            color: "hsl(var(--mc-pink))",
            WebkitTextStroke: "2px white",
          }}
        >
          MANGROVE CITY
        </h1>
      </div>
    </div>

    {/* Cyan intro band */}
    <div className="bg-mc-cyan py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-black uppercase text-4xl md:text-5xl text-mc-navy mb-6 tracking-wide">
          MANGROVE CITY VR
        </h2>
        <p className="text-mc-navy/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Mangrove City VR is an award-winning immersive virtual reality experience that transports
          students into the heart of a thriving mangrove ecosystem. Through this interactive journey,
          learners discover the vital ecological roles mangroves play — from protecting coastlines to
          supporting rich biodiversity — while developing a deeper connection to the natural world.
        </p>
        {/* YouTube embed */}
        <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Mangrove City 12/12 Edit"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="text-mc-navy/60 text-sm mt-3 italic">Mangrove City 12/12 Edit</p>
      </div>
    </div>
  </section>
);

/* ─── Curriculum Section ─── */
const Curriculum = () => {
  const workshopResources = [
    "Full Curriculum",
    "Teacher Guide",
    "Classroom Slideshow",
    "Student Worksheet",
    "Discussion Guide",
    "Design Challenge",
  ];

  const extensionActivities = [
    { num: 1, title: "Biomimicry Blitz" },
    { num: 2, title: "Coastal Erosion" },
    { num: 3, title: "Ecosystem Health" },
    { num: 4, title: "Sustainable Agriculture" },
  ];

  return (
    <section id="curriculum" className="bg-mc-maroon py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-black uppercase text-mc-cyan text-4xl md:text-5xl tracking-wide mb-4">
          5-8TH GRADE SCIENCE CURRICULUM
        </h2>
        <div className="w-24 h-1 bg-mc-cyan mb-8" />
        <p className="text-mc-cream text-lg leading-relaxed mb-12 max-w-3xl">
          We offer a free 1-2 period workshop curriculum designed to complement the Mangrove City
          VR experience. This curriculum aligns with Next Generation Science Standards (NGSS) and
          provides teachers with everything they need to bring mangrove ecosystems to life in the
          classroom — whether or not students have access to the VR experience.
        </p>

        {/* Workshop resources */}
        <div className="mb-12">
          <h3 className="font-display font-bold text-white text-xl md:text-2xl uppercase tracking-wide mb-6">
            Welcome to Mangrove City — 1-2 Period Workshop
          </h3>
          <ul className="space-y-3">
            {workshopResources.map((resource) => (
              <li key={resource} className="flex items-center gap-3">
                <span className="text-mc-cyan text-lg">▸</span>
                <a
                  href="#"
                  className="text-mc-cream hover:text-mc-cyan underline underline-offset-4 transition-colors duration-200 text-lg"
                >
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Extension activities */}
        <div className="mb-12">
          <h3 className="font-display font-bold text-white text-xl md:text-2xl uppercase tracking-wide mb-6">
            Beyond Mangrove City — Extension Activities
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {extensionActivities.map(({ num, title }) => (
              <div
                key={num}
                className="bg-white/10 rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <p className="text-mc-cyan font-black text-3xl mb-1">{num}.</p>
                <p className="text-white font-bold text-lg mb-4 uppercase tracking-wide">{title}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-mc-cream hover:text-mc-cyan underline text-sm transition-colors">
                    Activity Guide
                  </a>
                  <a href="#" className="text-mc-cream hover:text-mc-cyan underline text-sm transition-colors">
                    Slideshow
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download all */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-mc-cyan text-mc-navy font-bold px-8 py-3 rounded-lg uppercase tracking-widest hover:bg-mc-cyan-dark transition-colors text-sm"
          >
            ⬇ Download All Assets (50MB)
          </a>
          <p className="text-mc-cream/70 text-sm">
            Questions or feedback? Contact{" "}
            <a href="mailto:ren.mendoza@miami.edu" className="text-mc-cyan hover:underline">
              Ren Mendoza
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─── Playthrough Section ─── */
const Playthrough = () => (
  <section className="bg-mc-cyan py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display font-black uppercase text-mc-navy text-4xl md:text-5xl tracking-wide mb-4">
        PLAYTHROUGH
      </h2>
      <div className="w-24 h-1 bg-mc-navy mb-8" />
      <p className="text-mc-navy/80 text-lg leading-relaxed mb-10 max-w-3xl">
        Watch the full Mangrove City VR playthrough and experience the journey through an
        immersive mangrove ecosystem. Follow along as players explore coastal habitats,
        encounter native wildlife, and learn about the importance of mangrove conservation.
      </p>

      {/* YouTube embed */}
      <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-12">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID_2"
          title="Mangrove City VR Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* How to experience it */}
      <div className="bg-mc-navy/15 rounded-xl p-8">
        <h3 className="font-display font-bold text-mc-navy text-2xl uppercase tracking-wide mb-4">
          So how do I experience it?
        </h3>
        <p className="text-mc-navy/80 text-lg mb-4">
          Mangrove City VR is available on the{" "}
          <strong>Meta Quest 2 & Meta Quest 3</strong> headsets. The experience is
          designed for classroom and exhibition settings, providing an immersive
          six-degrees-of-freedom journey through a mangrove ecosystem.
        </p>
        <p className="text-mc-navy/70">
          Interested in exhibiting Mangrove City VR at your institution? Contact{" "}
          <a href="mailto:grinfeder@miami.edu" className="text-mc-navy font-bold underline hover:opacity-70">
            Kim Grinfeder (grinfeder@miami.edu)
          </a>{" "}
          for exhibition inquiries.
        </p>
      </div>
    </div>
  </section>
);

/* ─── Awards Section ─── */
const Awards = () => (
  <section id="awards" className="bg-mc-cream py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display font-black uppercase text-mc-maroon text-4xl md:text-5xl tracking-wide mb-4">
        AWARDS
      </h2>
      <div className="w-24 h-1 bg-mc-maroon mb-12" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Auggie Awards */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-mc-cream-dark flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-mc-cyan flex items-center justify-center mb-6 shadow-md">
            <span className="text-4xl">🏆</span>
          </div>
          <p className="font-display font-black text-mc-maroon text-xl uppercase tracking-wide mb-2">
            Auggie Awards
          </p>
          <p className="text-mc-pink font-bold text-lg mb-1">🥇 Winner</p>
          <p className="text-foreground/70 font-semibold mb-1">Educate Category</p>
          <p className="text-muted-foreground text-sm">XR Prize Challenge 2023</p>
        </div>

        {/* Reimagine Education */}
        <div className="bg-background rounded-2xl p-8 shadow-lg border-2 border-mc-cream-dark flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-mc-cyan flex items-center justify-center mb-6 shadow-md">
            <span className="text-4xl">🥇</span>
          </div>
          <p className="font-display font-black text-mc-maroon text-xl uppercase tracking-wide mb-2">
            Reimagine Education Awards
          </p>
          <p className="text-mc-pink font-bold text-lg mb-1">Gold Winner</p>
          <p className="text-foreground/70 font-semibold mb-1">US & Canada, 2023</p>
          <p className="text-muted-foreground text-sm">University of Miami</p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Team Section ─── */
const teamData = [
  {
    role: "Producers",
    members: [
      { name: "Kim Grinfeder", title: "Professor, University of Miami" },
      { name: "Ren Mendoza", title: "Producer & Education Lead" },
    ],
  },
  {
    role: "Education Lead",
    members: [{ name: "Ren Mendoza", title: "Education Curriculum Designer" }],
  },
  {
    role: "Development Leads",
    members: [
      { name: "Alex Rivera", title: "Lead Unity Developer" },
      { name: "Jordan Kim", title: "VR Systems Architect" },
    ],
  },
  {
    role: "Project Managers",
    members: [
      { name: "Taylor Nguyen", title: "Project Manager" },
      { name: "Morgan Davis", title: "Assistant Project Manager" },
    ],
  },
  {
    role: "Developers",
    members: [
      { name: "Casey Thompson", title: "Unity Developer" },
      { name: "Riley Patel", title: "Interactive Developer" },
      { name: "Drew Wilson", title: "Backend Developer" },
    ],
  },
  {
    role: "Designers",
    members: [
      { name: "Avery Johnson", title: "UX/UI Designer" },
      { name: "Quinn Martinez", title: "3D Environment Artist" },
      { name: "Sage Robinson", title: "Visual Designer" },
    ],
  },
  {
    role: "Voiceovers",
    members: [
      { name: "Cameron Lee", title: "Narrator" },
      { name: "Harper Brown", title: "Character Voice" },
    ],
  },
  {
    role: "Architecture Design",
    members: [{ name: "Skyler Garcia", title: "Architectural Consultant" }],
  },
  {
    role: "Mangrove Scientists",
    members: [
      { name: "Dr. Amara Okonkwo", title: "Marine Biologist, UM Rosenstiel School" },
      { name: "Dr. Luis Castillo", title: "Coastal Ecologist" },
    ],
  },
];

const Team = () => (
  <section id="team" className="bg-mc-cream-dark py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display font-black uppercase text-mc-maroon text-4xl md:text-5xl tracking-wide mb-4">
        THE TEAM
      </h2>
      <div className="w-24 h-1 bg-mc-maroon mb-12" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map(({ role, members }) => (
          <div key={role}>
            <h3 className="font-display font-black text-mc-maroon uppercase text-sm tracking-widest mb-3 border-b-2 border-mc-maroon/30 pb-2">
              {role}
            </h3>
            <ul className="space-y-2">
              {members.map(({ name, title }) => (
                <li key={name}>
                  <p className="font-bold text-mc-dark">{name}</p>
                  <p className="text-sm text-muted-foreground">{title}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="bg-mc-cyan py-12 px-6">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo row */}
      <div className="flex items-center gap-8 flex-wrap justify-center">
        <div className="bg-background rounded-lg px-6 py-3 shadow">
          <p className="font-display font-black text-mc-navy text-xl tracking-tight">
            🌿 University of Miami
          </p>
        </div>
        <div className="bg-background rounded-lg px-6 py-3 shadow">
          <p className="font-display font-bold text-mc-navy text-sm tracking-widest uppercase">
            CEHHS
          </p>
          <p className="text-xs text-muted-foreground">College of Education, Health &<br />Human Sciences</p>
        </div>
      </div>

      <p className="text-mc-navy/80 text-sm max-w-lg">
        For more information contact{" "}
        <a
          href="mailto:grinfeder@miami.edu"
          className="font-bold text-mc-navy underline hover:opacity-70"
        >
          Kim Grinfeder at grinfeder@miami.edu
        </a>
      </p>

      <p className="text-mc-navy/50 text-xs">
        © {new Date().getFullYear()} Mangrove City VR — University of Miami
      </p>
    </div>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="font-display">
    <Navbar />
    <main className="pt-[72px]">
      <Hero />
      <Curriculum />
      <Playthrough />
      <Awards />
      <Team />
    </main>
    <Footer />
  </div>
);

export default Index;
