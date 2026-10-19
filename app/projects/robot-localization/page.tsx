
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Probabilistic Robot Localization | Zeba Afreen",
  description:
    "Using belief-state tracking, CNN cost estimation, and iterative policy improvement to localize a robot under uncertainty.",
};

const technologies = [
  "Python",
  "PyTorch",
  "CNN",
  "A* Search",
  "Policy Learning",
];

export default function RobotLocalizationPage() {
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
            Case Study 03 / Machine Learning & Intelligent Agents
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Probabilistic Robot Localization
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#52605D] md:text-xl">
            Teaching a robot to determine its position without reliable
            sensors by combining belief-state reasoning, CNN-based cost
            prediction, and iterative policy improvement.
          </p>

          <div className="mt-10 grid gap-6 border-y border-[#DFE4E0] py-7 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Dataset
              </p>
              <p className="mt-2 text-sm font-medium">
                47,570 samples
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Environments
              </p>
              <p className="mt-2 text-sm font-medium">
                200 generated mazes
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Policies evaluated
              </p>
              <p className="mt-2 text-sm font-medium">
                π₀ · π₁ · π₂
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
            Academic team project · 2 contributors · May 2025
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/sridevi-mr25/Space-Rats"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#202728] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#668B81]"
            >
              View GitHub ↗
            </a>
          </div>
        </header>

        <figure className="mt-14 overflow-hidden rounded-2xl border border-[#DFE4E0] bg-white p-5 md:p-10">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/images/robot-localization-policies.png"
              alt="Comparison of robot localization policies pi zero, pi one, and pi two across belief-set sizes"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain"
              priority
            />
          </div>
          <figcaption className="mt-4 text-center text-xs text-[#66716D]">
            Comparing the average moves required to localize under
            three increasingly informed policies.
          </figcaption>
        </figure>

        <div className="mx-auto mt-20 max-w-3xl space-y-16">
          <section>
            <SectionHeading number="01" title="TL;DR" />
            <p className="mt-5 leading-8 text-[#52605D]">
              We built a robot-localization system for environments where
              the robot knows the maze layout but cannot directly sense
              its position. Starting with a rule-based policy, we
              generated 47,570 training examples from 200 mazes, trained
              a convolutional neural network to estimate remaining
              localization cost, and used its predictions to guide
              improved action-selection policies.
            </p>
          </section>

          <section>
            <SectionHeading number="02" title="The Problem" />
            <p className="mt-5 leading-8 text-[#52605D]">
              Imagine a robot moving through a spaceship after losing
              access to its positioning sensors. It knows the map but
              cannot tell which open cell it currently occupies. Instead
              of tracking one position, it maintains a belief set:
              every location that could still be correct.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Each attempted movement updates that set. If a movement
              would hit an obstacle from a possible position, the robot
              remains in that cell; otherwise, it moves. The goal is to
              choose actions that shrink the belief set until exactly
              one possible location remains, using as few moves as
              possible.
            </p>
          </section>

          <section>
            <SectionHeading number="03" title="The Approach" />
            <p className="mt-5 leading-8 text-[#52605D]">
              We first developed a baseline strategy, π₀, that
              localizes the robot through belief-state updates and
              search-based reasoning. This gave us both a working
              solution and a way to generate examples of how many
              moves localization required from different states.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Next, we trained a CNN to predict the remaining
              localization cost from a grid representation of the
              maze and possible robot positions. Instead of using
              the prediction as a location estimate, we used it
              to evaluate candidate actions.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Policy π₁ simulated the four possible first moves,
              selected the one with the lowest predicted cost, and
              then continued with π₀. We subsequently generated
              new training data, learned an updated cost estimator,
              and constructed π₂ using that estimator for its
              first-move decision.
            </p>
          </section>

          <section>
            <SectionHeading number="04" title="Implementation" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The input grid encoded obstacles as 1, open cells as 0,
              and possible robot locations as 0.5. The CNN used two
              convolutional layers with 16 and 32 filters,
              respectively, followed by max pooling and fully
              connected layers. Its final output was a nonnegative
              estimate of the number of moves remaining.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              We generated examples from both full belief sets
              and partial belief sets containing 75% of open
              cells. The model was trained in PyTorch for 100
              epochs using mean squared error, the Adam
              optimizer, a learning rate of 0.0005, and batches
              of 64. An 80/20 split separated training and
              testing samples.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#DFE4E0] bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-[#668B81]">
                  CNN architecture
                </p>
                <p className="mt-3 text-sm leading-7 text-[#52605D]">
                  Conv 16 → Pool → Conv 32 → Pool →
                  Dense 64 → Cost prediction
                </p>
              </div>
              <div className="rounded-xl border border-[#DFE4E0] bg-white p-5">
                <p className="text-xs uppercase tracking-widest text-[#668B81]">
                  Training setup
                </p>
                <p className="mt-3 text-sm leading-7 text-[#52605D]">
                  100 epochs · Adam · MSE loss ·
                  80/20 train-test split
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading number="05" title="Results & Insights" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The experiments showed that the CNN could learn
              useful localization-cost estimates, with training
              loss decreasing over time. The policy comparison
              showed relatively similar performance when the
              robot had only a few possible locations.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              With larger belief sets, however, the prediction-guided
              policies generally required fewer moves than π₀.
              Policy π₂ performed slightly better than π₁ in
              the reported comparison, suggesting that updating
              the cost estimator with data from an improved
              policy can provide additional benefit.
            </p>
            <div className="mt-7 rounded-xl border border-[#DFE4E0] bg-[#E9EEEA] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-[#668B81]">
                Key finding
              </p>
              <p className="mt-3 text-lg font-medium leading-8">
                Learned cost estimates helped guide better
                localization decisions, particularly when the
                robot started with greater uncertainty.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading number="06" title="Challenges & Reflections" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The most interesting challenge was the connection
              between the policy and the data used to train its
              cost estimator. A model trained on states visited
              by π₀ may not generalize equally well to the
              states visited by an improved policy.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Regenerating data after policy improvement
              helped address that mismatch. The project
              demonstrated how classical search, supervised
              learning, and iterative decision-making can
              work together, even when a robot has no direct
              observation of its location.
            </p>
          </section>

          <section>
            <SectionHeading number="07" title="Explore the Project" />
            <p className="mt-5 leading-8 text-[#52605D]">
              Explore the implementation and experiments
              in the project repository.
            </p>
            <a
              href="https://github.com/sridevi-mr25/Space-Rats"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-[#668B81] transition-colors hover:text-[#202728]"
            >
              GitHub repository ↗
            </a>
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
            href="/projects/spotify-audio-analysis"
            className="text-sm font-medium text-[#668B81] hover:text-[#202728]"
          >
            ← Previous case study
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
