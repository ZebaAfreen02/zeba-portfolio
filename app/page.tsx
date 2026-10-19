import ProjectCard from "@/Components/ProjectCard";


const featuredProjects = [
    {
    number: "01",
    title: "Brain Tumor Segmentation",
    href: "/projects/brain-tumor-segmentation",
    description:
    "Built a U-Net pipeline to segment brain tumor regions from multi-modal MRI scans. Trained and evaluated the model using segmentation metrics, achieving approximately 0.88 validation Dice.",
    category: "Deep Learning / Computer Vision",
    technologies: ["Python", "U-Net", "TensorFlow", "Computer Vision"],
    metrics: ["369 patients", "57K+ MRI slices", "0.88 validation Dice"],
    accent: "bg-[#EEE7EA]",
    image: "/images/brain-tumor-segmentation-v2.png",
  },
  {
    number: "02",
    title: "Spotify Audio Feature Analysis",
    href: "/projects/spotify-audio-analysis",
    description:
    "Analyzed 114K Spotify tracks using feature relationships, dimensionality reduction, and clustering. Trained a variational autoencoder to explore the underlying structure of music features.",
    category: "Machine Learning / Data Science",
    technologies: ["Python", "PCA", "UMAP", "GMM", "VAE"],
    metrics: ["114K tracks", "114 genres", "3D latent space"],
    accent: "bg-[#F1EBDD]",
    image: "/images/spotify-umap.png",
  },
  {
    number: "03",
    title: "Probabilistic Robot Localization",
    href: "/projects/robot-localization",
    description:
    "Developed a belief-state localization system combining probabilistic reasoning and graph search. Trained a CNN to estimate localization costs and compared three look-ahead policies.",
    category: "AI / Machine Learning",
    technologies: ["Python", "PyTorch", "CNN", "A*"],
    metrics: ["47,570 samples", "200 mazes", "3 policies"],
    accent: "bg-[#E8EEEA]",
    image: "/images/robot-localization-concept.png",
    github: "https://github.com/sridevi-mr25/Space-Rats",
  },
  {
    number: "04",
    title: "Online Auction System",
    href: "/projects/online-auction-system",
    description:
  "Built a full-stack auction platform with buyer and seller accounts, bidding histories, and automated bidding. Implemented role-based functionality for customers, representatives, and administrators.",
    category: "Software Engineering / Backend",
    technologies : ["React", "Python", "Flask", "MySQL"],
    metrics: ["Full-stack application", "Automatic bidding", "Role-based access"],
    accent: "bg-[#E8EDF2]",
    image: "/images/justbidit-marketplace.png",
    github: "https://github.com/shashwatijha/JustBidIt",
    demo: "https://youtu.be/2yrfb0eTMiA",
  },
  {
  number: "05",
  title: "Cloud vs. Owned Infrastructure",
  href: "/projects/cloud-vs-owned-infrastructure",
  category: "Systems / Infrastructure Analysis",
  description:
    "Developed the Netflix case study for a five-year cloud-versus-owned infrastructure cost model, evaluating stable, spiky, and high-growth workloads. Audited cost assumptions and compared how workload patterns affect infrastructure economics.",
  technologies: [
    "AWS",
    "Cost Modeling",
    "Scenario Analysis",
    "Infrastructure",
  ],
  metrics: [
    "5-year model",
    "~2,400 baseline instances",
    "3 workload scenarios",
  ],
  accent: "bg-[#E5EAE4]",
  image: "/images/netflix-rent-vs-own.png",
},

  
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#202728]">
      
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#DDE3DE] bg-[#F8F7F4]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            ZA<span className="text-[#668B81]">.</span>
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] sm:gap-x-5 sm:text-sm sm:justify-end"
          >
            {[
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[#668B81]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>


      {/* Hero Section */}
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col justify-center px-6 pb-16 pt-20 sm:pb-20 sm:pt-24"
    >
      {/* Availability status */}
      <div className="mb-7 flex flex-wrap items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#668B81]" />

        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#668B81] sm:text-sm">
          Graduating December 2026 · Open to full-time roles
        </p>
      </div>

      {/* Main heading */}
      <h1 className="mb-6 text-5xl font-semibold tracking-tight text-[#202728] sm:text-7xl">
        Hi, I&apos;m Zeba.
      </h1>

      {/* Tagline */}
      <h2 className="mb-7 max-w-4xl text-3xl font-medium leading-tight tracking-tight text-[#668B81] sm:text-5xl">
        Turning data into models, and models into working software.
      </h2>

      {/* Introduction */}
    <p className="mb-9 max-w-2xl text-base leading-relaxed text-[#596662] sm:text-lg">
      I&apos;m a Computer Science M.S. student at Rutgers who builds machine
      learning systems and the software around them. I&apos;ve trained a U-Net
      to segment brain tumors across 57K+ MRI slices (0.88 validation Dice)
      and written Oracle SQL reporting for an enterprise ERP system.
      Looking for software engineering and machine learning roles starting
      January 2027.
    </p>

      
      {/* Action buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-[#263A36] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#3F5C54]"
        >
          Explore Projects ↓
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#CDD5D0] px-6 py-3 text-sm font-medium text-[#202728] transition-all hover:-translate-y-0.5 hover:border-[#668B81]"
        >
          View Résumé ↗
        </a>
      </div>


      {/* Location and education */}
      <p className="mt-10 text-xs text-[#788580] sm:text-sm">
        New Jersey, USA · M.S. Computer Science · Rutgers University
      </p>
    </section>

    {/* Featured Projects Section */}
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      
      {/* Section heading */}
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#668B81]">
          01 / Selected Work
        </p>

        <h2 className="mb-4 text-4xl font-semibold tracking-tight">
          Things I&apos;ve built.
        </h2>

        <p className="max-w-xl text-base leading-relaxed text-[#596662]">
          A selection of projects exploring software engineering,
          machine learning, intelligent systems, and data.
        </p>
      </div>


      {/* Project grid */}
      <div className="grid gap-8 md:grid-cols-2">
       {featuredProjects.map((project, index) => {
          const isFeatured = index === featuredProjects.length - 1;

          return (
            <div
              key={project.number}
              className={isFeatured ? "md:col-span-2" : ""}
            >
              <ProjectCard {...project} featured={isFeatured} />
            </div>
          );
        })}
      </div>
    </section>
    

  
        {/* Experience Section */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-6 py-24"
        >
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">

            {/* Section heading */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#668B81]">
                02 / Experience &amp; Education
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                Where I&apos;ve worked and studied.
              </h2>
            </div>


        {/* Experience timeline */}
        <div className="space-y-12 border-l border-[#DDE3DE] pl-8">

          {/* Gates Engineering */}
          <article className="relative">
            <span className="absolute -left-[38px] top-2 h-4 w-4 rounded-full border-4 border-[#F8F7F4] bg-[#668B81]" />

            <p className="mb-2 text-sm text-[#788580]">
              March 2024 — June 2024 · Dubai, UAE
            </p>

            <h3 className="text-2xl font-semibold text-[#202728]">
              IT Intern
            </h3>

            <p className="mt-1 text-lg font-medium text-[#668B81]">
              Gates Engineering &amp; Services
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-[#596662] marker:text-[#668B81]">
              <li>
                Created and modified 15+ Oracle SQL views, queries, and stored
                procedures for ERP reporting, translating requests from Customer
                Service and Sales into reporting solutions.
              </li>

              <li>
                Validated ERP workflow changes through test scenarios alongside
                the IT team, third-party developers, and two fellow interns,
                identifying inconsistencies before production deployment.
              </li>

              <li>
                Resolved approximately 6–10 end-user IT issues per week
                involving hardware, software, networking, and ERP systems.
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Oracle SQL", "Stored Procedures", "ERP Systems", "Software Testing"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[#E8EEEA] px-3 py-1 text-xs text-[#596662]"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </article>

          {/* iCodeJr */}
          <article className="relative">
            <span className="absolute -left-[38px] top-2 h-4 w-4 rounded-full border-4 border-[#F8F7F4] bg-[#668B81]" />

            <p className="mb-2 text-sm text-[#788580]">
              July 2023 — September 2023 · Dubai, UAE
            </p>

            <h3 className="text-2xl font-semibold text-[#202728]">
              Web Development Intern
            </h3>

            <p className="mt-1 text-lg font-medium text-[#668B81]">
              iCodeJr
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-[#596662] marker:text-[#668B81]">
              <li>
                Rebuilt the company&apos;s early-stage WordPress website,
                creating 5+ core pages and educational program content
                using plugins and custom HTML.
              </li>

              <li>
                Improved website navigation, page layouts, and content
                organization across program and syllabus pages.
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["WordPress", "HTML", "Web Development"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-[#E8EEEA] px-3 py-1 text-xs text-[#596662]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

        </div>
      </div>

      
      {/* Education */}
      <div className="mt-20 grid gap-12 border-t border-[#DDE3DE] pt-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#668B81]">
            Education
          </p>

          <h3 className="text-2xl font-semibold tracking-tight text-[#202728]">
            Academic background.
          </h3>
        </div>

        <div className="space-y-10">
          {/* Rutgers University */}
          <div>
            <h4 className="text-xl font-semibold text-[#202728]">
              Rutgers University
            </h4>

            <p className="mt-2 text-base text-[#596662]">
              M.S. Computer Science · Expected December 2026
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#788580]">
              Relevant coursework: Machine Learning I & II,
              Introduction to Artificial Intelligence,
              Design of Internet Services,
              Databases for Data Science.
            </p>
          </div>

          {/* Manipal University */}
          <div>
            <h4 className="text-xl font-semibold text-[#202728]">
              Manipal Academy of Higher Education
            </h4>

            <p className="mt-2 text-base text-[#596662]">
              B.Tech Computer Science · Minor in Computational Intelligence
            </p>

            <p className="mt-2 text-sm text-[#788580]">
              Graduated 2024 · GPA: 9.20/10
            </p>
          </div>
        </div>
      </div>

      {/* Research & Activities */}
      <div className="mt-16 grid gap-12 border-t border-[#DDE3DE] pt-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#668B81]">
            Research &amp; Activities
          </p>

          <h3 className="text-2xl font-semibold tracking-tight text-[#202728]">
            Beyond coursework.
          </h3>
        </div>

        <div className="divide-y divide-[#DDE3DE]">
          <article className="pb-7">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#668B81]">
              Research Presentation · 2024
            </p>

            <h4 className="text-lg font-semibold text-[#202728]">
              IoT Integration in Healthcare: Empowering Patients, Optimizing Care
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-[#596662]">
              Co-authored and presented at AEIT 2024, the 9th International
              Student Research Colloquium.
            </p>
          </article>

          <article className="pt-7">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#668B81]">
              Programming Competition · 2023
            </p>

            <h4 className="text-lg font-semibold text-[#202728]">
              IEEExtreme 17.0
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-[#596662]">
              Participated in a 24-hour international team programming
              challenge focused on algorithmic problem-solving.
            </p>
          </article>
        </div>
      </div>
    </section>

  
    {/* Technical Skills Section */}
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">

        {/* Section heading */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#668B81]">
            03 / Technical Skills
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#202728]">
            My toolkit.
          </h2>
        </div>

        {/* Skill categories */}
        <div className="divide-y divide-[#DDE3DE]">
          {[
            {
              category: "Languages",
              skills: [
                "Python",
                "Java",
                "C++",
                "JavaScript",
                "SQL",
              ],
            },
            {
              category: "Web & Databases",
              skills: [
                "React",
                "Flask",
                "HTML/CSS",
                "MySQL",
                "Oracle SQL",
                "Stored Procedures",
              ],
            },
            {
              category: "Machine Learning & Data",
              skills: [
                "PyTorch",
                "TensorFlow",
                "scikit-learn",
                "Pandas",
                "NumPy",
                "OpenCV",
                "UMAP",
                "CNNs",
                "U-Net",
                "VAE",
              ],
            },
            {
              category: "Infrastructure & Developer Tools",
              skills: [
                "AWS Cost Modeling",
                "Git",
                "GitHub",
                "WordPress",
              ],
            },
          ].map((group) => (
            <div
              key={group.category}
              className="grid gap-4 py-6 first:pt-0 sm:grid-cols-[180px_1fr]"
            >
              <h3 className="text-sm font-semibold text-[#202728]">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#DDE3DE] px-3 py-1.5 text-sm text-[#596662] transition-colors duration-200 hover:border-[#668B81] hover:bg-[#E8EEEA]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#668B81]">
              04 / About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#202728]">
              A little about me.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#596662]">
            <p>
              I&apos;m a computer science graduate student at Rutgers
              who enjoys turning complex problems into practical,
              working solutions. My experience spans web development,
              enterprise systems, and data-driven applications, while
              my graduate work has taken me deeper into machine learning,
              computer vision, and intelligent systems.
            </p>

            <p>
              I&apos;m particularly interested in what makes software
              reliable beyond the first successful run. Whether I&apos;m
              testing an application, experimenting with a model, or
              comparing different technical approaches, I enjoy
              understanding the tradeoffs behind the decisions.
            </p>

            <p>
              Outside of coursework and coding, I enjoy exploring
              new places and finding opportunities to learn something
              different. I bring that same curiosity to the things
              I build.
            </p>
          </div>
        </div>
      </section>



    {/* Contact Section */}
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="border-t border-[#DDE3DE] pt-16">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#668B81]">
          05 / Contact
        </p>

        <h2 className="mb-6 text-5xl font-semibold tracking-tight text-[#202728] sm:text-6xl">
          Let&apos;s talk.
        </h2>

        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[#596662]">
          I&apos;m looking for full-time opportunities in software engineering
          and machine learning, where I can build thoughtful, reliable
          solutions to real-world problems. If you&apos;d like to connect,
          I&apos;d love to hear from you.
        </p>

        <a
          href="mailto:zeba.afreen2002@gmail.com"
          className="inline-block text-lg font-medium text-[#668B81] underline decoration-[#CDD5D0] underline-offset-4 transition-colors hover:text-[#263A36]"
        >
          zeba.afreen2002@gmail.com
        </a>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:zeba.afreen2002@gmail.com"
            className="rounded-lg bg-[#263A36] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#3F5C54]"
          >
            Email Me ↗
          </a>

          <a
            href="https://www.linkedin.com/in/zeba--afreen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#CDD5D0] px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-[#668B81]"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/ZebaAfreen02"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#CDD5D0] px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-[#668B81]"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>


    {/* Footer */}
    <footer className="border-t border-[#DDE3DE]">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 text-sm text-[#788580] sm:flex-row sm:items-center">
        <p>© 2026 Zeba Afreen</p>

        <p>
          Designed &amp; built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
    </main>
  );
}