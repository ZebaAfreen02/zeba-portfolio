
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cloud vs. Owned Infrastructure | Zeba Afreen",
  description:
    "A five-year cost and scaling analysis comparing AWS cloud infrastructure with owned servers across Netflix- and Shopify-scale workloads.",
};

const technologies = [
  "AWS",
  "Cloud Computing",
  "Cost Modeling",
  "Capacity Planning",
  "Sensitivity Analysis",
];

const netflixResults = [
  {
    scenario: "Stable workload",
    cloud: "$52.6M",
    owned: "$33.6M",
    winner: "Owned",
  },
  {
    scenario: "Spiky workload",
    cloud: "$57.6M",
    owned: "$100.8M",
    winner: "Cloud",
  },
  {
    scenario: "High growth",
    cloud: "$70.6M",
    owned: "$41.0M",
    winner: "Owned",
  },
];

export default function CloudVsOwnedPage() {
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
            Case Study 05 / Cloud Infrastructure & Systems Analysis
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Cloud vs. Owned Infrastructure
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#52605D] md:text-xl">
            When does renting cloud infrastructure make more sense
            than owning servers? A five-year cost and scaling
            analysis of Netflix- and Shopify-scale workloads.
          </p>

          <div className="mt-10 grid gap-6 border-y border-[#DFE4E0] py-7 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Time horizon
              </p>
              <p className="mt-2 text-sm font-medium">5 years</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Netflix model
              </p>
              <p className="mt-2 text-sm font-medium">
                ~2,400 baseline instances
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Scenarios
              </p>
              <p className="mt-2 text-sm font-medium">
                Stable · Spiky · High growth
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

          <p className="mt-5 text-sm text-[#66716D]">
            Academic team project · 5 contributors · May 2026
          </p>
        </header>

        <figure className="mt-14 overflow-hidden rounded-2xl border border-[#DFE4E0] bg-white p-5 md:p-10">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/Images/netflix-rent-vs-own.png"
              alt="Five-year Netflix origin-tier infrastructure cost comparison for cloud and owned servers across three workload scenarios"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain"
              priority
            />
          </div>
          <figcaption className="mt-4 text-center text-xs text-[#66716D]">
            Modeled five-year infrastructure costs for Netflix's
            origin-tier workload. Figures are estimates, not
            Netflix's actual operating costs.
          </figcaption>
        </figure>

        <div className="mx-auto mt-20 max-w-3xl space-y-16">
          <section>
            <SectionHeading number="01" title="TL;DR" />
            <p className="mt-5 leading-8 text-[#52605D]">
              We developed a comparative cost model to evaluate
              cloud rental versus owned infrastructure over five
              years. Using Shopify and Netflix as workload
              case studies, we examined stable demand, temporary
              traffic spikes, and sustained growth. Under our
              assumptions, ownership was cheaper for predictable
              workloads, while cloud infrastructure was more
              economical when demand spiked sharply.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              The central finding was that workload shape
              mattered more than company size: both case studies
              showed the same broad pattern despite their
              substantial difference in scale.
            </p>
          </section>

          <section>
            <SectionHeading number="02" title="The Problem" />
            <p className="mt-5 leading-8 text-[#52605D]">
              Cloud platforms offer flexible capacity without
              requiring companies to purchase and maintain
              physical servers. But that flexibility comes
              with recurring compute and infrastructure charges.
              Owning hardware can reduce long-term unit costs,
              yet requires upfront investment and enough
              capacity to handle peak demand.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              A simple comparison of hourly cloud prices and
              server purchase costs misses the real trade-off.
              Decisions also depend on utilization, traffic
              variability, hardware replacement, operational
              expenses, and uncertainty about future growth.
              Our goal was to make those assumptions explicit
              and compare deployment strategies consistently.
            </p>
          </section>

          <section>
            <SectionHeading number="03" title="My Contribution" />
            <p className="mt-5 leading-8 text-[#52605D]">
              I led the Netflix case study and developed the
              methodology used to derive the modeled server
              count from workload assumptions. I also reviewed
              assumptions across both the Netflix and Shopify
              analyses to keep the comparisons consistent
              and the resulting cost estimates defensible.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              My focus was translating a large-scale streaming
              workload into a tractable infrastructure model.
              Rather than attempting to estimate Netflix's
              entire production environment, we scoped the
              analysis to an origin application tier with
              approximately 2,400 baseline instances.
              This was a modeling assumption, not a verified
              count of Netflix's actual servers.
            </p>
          </section>

          <section>
            <SectionHeading number="04" title="Model Design" />
            <p className="mt-5 leading-8 text-[#52605D]">
              We compared the cost of AWS-based deployment
              with purchasing and operating servers in
              co-location facilities. The cloud model included
              compute, storage, data transfer, and load
              balancing. The owned model included hardware,
              power, co-location, and maintenance.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              To make the alternatives comparable, we used
              a common compute benchmark and consistent
              workload scenarios. We modeled an AWS c5.4xlarge
              instance at $0.408 per hour under a one-year
              reserved rate, with on-demand capacity priced
              at $0.68 per hour. Owned servers were modeled
              at $6,000 each, amortized over four years,
              plus $1,300 in annual operating expenses.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#DFE4E0] bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-[#668B81]">
                  Cloud model
                </p>
                <p className="mt-3 text-sm leading-7 text-[#52605D]">
                  Reserved baseline capacity, on-demand
                  scaling, storage, data transfer, and
                  load balancing.
                </p>
              </div>
              <div className="rounded-xl border border-[#DFE4E0] bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-[#668B81]">
                  Owned model
                </p>
                <p className="mt-3 text-sm leading-7 text-[#52605D]">
                  Server acquisition, four-year hardware
                  lifespan, power, co-location, and
                  maintenance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading number="05" title="Scenario Analysis" />
            <p className="mt-5 leading-8 text-[#52605D]">
              We evaluated three distinct demand patterns.
              Stable workloads maintained a predictable
              baseline, allowing owned hardware to achieve
              high utilization. Spiky workloads required
              additional capacity for brief periods, making
              permanent over-provisioning expensive.
              High-growth workloads tested the economics
              of adding capacity over time.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              For Netflix, the modeled live-event scenario
              assumed a threefold capacity spike lasting
              approximately 3% of the year. Owned
              infrastructure had to be sized for that peak
              continuously, whereas cloud infrastructure
              could rent additional capacity only when needed.
            </p>
          </section>

          <section>
            <SectionHeading number="06" title="Results" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The five-year Netflix origin-tier comparison
              showed that the preferred deployment model
              changed substantially with demand patterns.
              The following values are modeled infrastructure
              costs in USD, not reported Netflix expenditures.
            </p>

            <div className="mt-7 overflow-x-auto rounded-xl border border-[#DFE4E0] bg-white">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead className="bg-[#E9EEEA] text-[#202728]">
                  <tr>
                    <th className="px-4 py-4 font-semibold">
                      Scenario
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      Cloud
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      Owned
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      Lower cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {netflixResults.map((result) => (
                    <tr
                      key={result.scenario}
                      className="border-t border-[#DFE4E0]"
                    >
                      <td className="px-4 py-4">
                        {result.scenario}
                      </td>
                      <td className="px-4 py-4">
                        {result.cloud}
                      </td>
                      <td className="px-4 py-4">
                        {result.owned}
                      </td>
                      <td className="px-4 py-4 font-medium text-[#668B81]">
                        {result.winner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 leading-8 text-[#52605D]">
              In the stable scenario, owning saved approximately
              $19.0 million over five years. During temporary
              traffic spikes, cloud deployment saved approximately
              $43.2 million because it avoided permanently
              provisioning peak capacity. For high growth,
              ownership was cheaper by approximately
              $29.6 million in modeled infrastructure costs.
            </p>
          </section>

          <section>
            <SectionHeading number="07" title="Sensitivity & Trade-offs" />
            <p className="mt-5 leading-8 text-[#52605D]">
              We tested how changing key assumptions affected
              the comparison, including cloud pricing,
              hardware purchase cost, server lifespan,
              workload growth, and spike magnitude.
              This was important because infrastructure
              decisions often depend on forecasts rather
              than fixed, fully known workloads.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Increasing the peak demand factor from three
              times to five times the baseline had a
              particularly large effect on owned
              infrastructure, which must maintain enough
              capacity to serve the peak. Cloud rental
              remained attractive for temporary bursts
              because additional capacity was needed
              for only a fraction of the year.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Our base comparison focused on infrastructure
              costs rather than a complete accounting of
              organizational staffing, reliability, or
              operational risk. Those exclusions matter:
              a lower modeled infrastructure bill does
              not automatically mean that owning servers
              is the best business decision.
            </p>
          </section>

          <section>
            <SectionHeading number="08" title="What I Learned" />
            <p className="mt-5 leading-8 text-[#52605D]">
              This project reinforced that infrastructure
              decisions cannot be reduced to a single
              cloud-versus-hardware price comparison.
              Capacity planning, utilization, workload
              variability, and forecasting uncertainty
              all change the economics.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              The most valuable lesson was learning to
              separate publicly available facts from
              modeling assumptions, then examine how
              those assumptions influence the final
              recommendation. For a real deployment,
              I would extend the analysis with operational
              staffing costs, reliability requirements,
              migration expenses, and measured workload
              utilization before recommending a strategy.
            </p>
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
            href="/projects/brain-tumor-segmentation"
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
