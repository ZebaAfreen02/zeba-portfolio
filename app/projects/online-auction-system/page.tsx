
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Online Auction System | Zeba Afreen",
  description:
    "A full-stack online auction platform with automated bidding, relational data management, and role-based workflows.",
};

const technologies = [
  "React",
  "Python",
  "Flask",
  "MySQL",
  "Full-Stack Development",
];

export default function OnlineAuctionPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#202728]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-20">
        <Link
          href="/#projects"
          className="text-sm text-[#668B81] hover:text-[#202728]"
        >
          ← Back to projects
        </Link>

        <header className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#668B81]">
            Case Study 04 / Full-Stack Engineering & Databases
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Online Auction System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#52605D] md:text-xl">
            Building JustBidIt, a relational auction platform that
            connects buyers and sellers through item listings,
            competitive bidding, automated bid management,
            and administrative workflows.
          </p>

          <div className="mt-10 grid gap-6 border-y border-[#DFE4E0] py-7 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Project type
              </p>
              <p className="mt-2 text-sm font-medium">
                Full-stack application
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Core database
              </p>
              <p className="mt-2 text-sm font-medium">
                MySQL
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Completed
              </p>
              <p className="mt-2 text-sm font-medium">
                May 2025
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-[#E9EEEA] px-3 py-1.5 text-xs text-[#52605D]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/shashwatijha/JustBidIt"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#202728] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#668B81]"
            >
              View GitHub ↗
            </a>
            <a
              href="https://youtu.be/2yrfb0eTMiA"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#CFD8D2] px-5 py-3 text-sm font-medium transition-colors hover:border-[#668B81] hover:text-[#668B81]"
            >
              Watch project demo ↗
            </a>
          </div>
        </header>

        <figure className="mt-14 overflow-hidden rounded-2xl border border-[#DFE4E0] bg-white p-5 md:p-10">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/Images/justbidit-marketplace.png"
              alt="JustBidIt online auction marketplace interface showing item listings"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain"
              priority
            />
          </div>
          <figcaption className="mt-4 text-center text-xs text-[#66716D]">
            JustBidIt marketplace interface for discovering and
            participating in online auctions.
          </figcaption>
        </figure>

        <div className="mx-auto mt-20 max-w-3xl space-y-16">
          <section>
            <SectionHeading number="01" title="TL;DR" />
            <p className="mt-5 leading-8 text-[#52605D]">
              JustBidIt is a full-stack auction platform built around
              a relational database and a set of interconnected
              buyer, seller, and administrative workflows. The
              application supports account management, item
              listings, auction search, manual and automatic
              bidding, bid histories, and customer-service
              functionality. The project combines a web interface
              with Flask-based application logic and MySQL
              persistence.
            </p>
          </section>

          <section>
            <SectionHeading number="02" title="The Problem" />
            <p className="mt-5 leading-8 text-[#52605D]">
              An auction marketplace involves more than displaying
              products and accepting offers. Multiple users may
              compete for the same item, sellers need to manage
              listings, and the system must maintain a consistent
              record of bids and auction outcomes.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Automatic bidding adds another layer of complexity:
              users should be able to specify the maximum amount
              they are willing to spend without manually responding
              to every competing bid. The platform also needs
              distinct permissions and workflows for customers,
              representatives, and administrators.
            </p>
          </section>

          <section>
            <SectionHeading number="03" title="The Approach" />
            <p className="mt-5 leading-8 text-[#52605D]">
              We structured the application around the core
              entities of an auction marketplace: users,
              listings, auctions, bids, and supporting records.
              MySQL stores the relational data, while Python
              and Flask provide application-level functionality
              for retrieving information and processing
              auction-related operations.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Separating these concerns helped organize the
              project around clear workflows. Buyers can
              discover auctions and place bids, sellers can
              manage listings, and administrative users can
              access functionality appropriate to their roles.
            </p>
          </section>

          <section>
            <SectionHeading number="04" title="Implementation" />
            <p className="mt-5 leading-8 text-[#52605D]">
              A central implementation challenge was automatic
              bidding. Rather than requiring a buyer to submit
              every new bid manually, the system supports
              user-defined bidding limits. Its application
              logic must consider the current auction state,
              competing bids, and the buyer&apos;s configured
              maximum when determining how to respond.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Relational queries also support auction searches,
              bidding histories, and administrative reporting.
              These features depend on consistent relationships
              between users, items, auctions, and bids, making
              database design an important part of the overall
              system.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#DFE4E0] bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-[#668B81]">
                  Auction workflows
                </p>
                <p className="mt-3 text-sm leading-7 text-[#52605D]">
                  Item listings, search, manual bidding,
                  automatic bidding, and bid history.
                </p>
              </div>

              <div className="rounded-xl border border-[#DFE4E0] bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-[#668B81]">
                  Role-based features
                </p>
                <p className="mt-3 text-sm leading-7 text-[#52605D]">
                  Buyer and seller accounts, customer-service
                  workflows, and administrative reporting.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading number="05" title="Results & Outcomes" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The completed project brought together the
              main components of an auction marketplace
              in a working application. Users could
              interact with listings and bids through
              the interface, while the backend supported
              auction operations and database-driven
              functionality.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Beyond the individual features, the project
              demonstrated how a relational data model,
              backend logic, and user-facing workflows
              must operate together to support a
              multi-role application.
            </p>
          </section>

          <section>
            <SectionHeading number="06" title="Challenges & Reflections" />
            <p className="mt-5 leading-8 text-[#52605D]">
              Auction systems are particularly sensitive
              to state changes. A new bid can affect
              the leading bidder, the current price,
              and the behavior of automatic bidding
              rules. Thinking through these dependencies
              highlighted the importance of validating
              application logic against the underlying
              database state.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              The project strengthened our understanding
              of building features across the full stack,
              particularly where user interactions depend
              on relational queries and business rules.
              A valuable next step would be to test
              simultaneous bid submissions and strengthen
              transaction handling for concurrent activity.
            </p>
          </section>

          <section>
            <SectionHeading number="07" title="Explore the Project" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The source code and recorded walkthrough
              provide a closer look at the application&apos;s
              features and implementation.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://github.com/shashwatijha/JustBidIt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#668B81] hover:text-[#202728]"
              >
                GitHub repository ↗
              </a>
              <a
                href="https://youtu.be/2yrfb0eTMiA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#668B81] hover:text-[#202728]"
              >
                Recorded demo ↗
              </a>
            </div>
          </section>
        </div>

        
        <footer className="mt-24 flex flex-wrap items-center justify-between gap-5 border-t border-[#DFE4E0] pt-8">
          <Link
            href="/#projects"
            className="text-sm font-medium text-[#668B81] hover:text-[#202728]"
          >
            ← All projects
          </Link>

          <Link
            href="/projects/cloud-vs-owned-infrastructure"
            className="text-sm font-medium text-[#668B81] hover:text-[#202728]"
          >
            Next project →
          </Link>
        </footer>

      </div>
    </main>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium tracking-widest text-[#668B81]">
        {number}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
