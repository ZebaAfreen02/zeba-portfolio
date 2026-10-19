
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Spotify Audio Feature Analysis | Zeba Afreen",
  description:
    "Exploring patterns across 114,000 Spotify tracks using dimensionality reduction, clustering, and representation learning.",
};

const technologies = [
  "Python",
  "PCA",
  "UMAP",
  "Gaussian Mixture Models",
  "Variational Autoencoder",
];

export default function SpotifyAudioAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#202728]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-20">
        <Link
          href="/#projects"
          className="text-sm text-[#668B81] transition-colors hover:text-[#202728]"
        >
          ← Back to projects
        </Link>

        <header className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#668B81]">
            Case Study 02 / Machine Learning & Data Exploration
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Spotify Audio Feature Analysis
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#52605D] md:text-xl">
            Exploring how musical characteristics relate to genre, and what
            dimensionality reduction and representation learning reveal about
            the structure of a large audio-feature dataset.
          </p>

          <div className="mt-10 grid gap-6 border-y border-[#DFE4E0] py-7 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Dataset
              </p>
              <p className="mt-2 text-sm font-medium">114K tracks</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Genre coverage
              </p>
              <p className="mt-2 text-sm font-medium">114 genres</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Focus
              </p>
              <p className="mt-2 text-sm font-medium">
                Unsupervised learning
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
        </header>

        <figure className="mt-14 overflow-hidden rounded-2xl border border-[#DFE4E0] bg-white p-5 md:p-10">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/Images/spotify-umap.png"
              alt="UMAP visualization of Spotify tracks based on audio features"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain"
              priority
            />
          </div>
          <figcaption className="mt-4 text-center text-xs text-[#66716D]">
            UMAP projection of Spotify audio features, used to explore
            similarities and structure among tracks.
          </figcaption>
        </figure>

        <div className="mx-auto mt-20 max-w-3xl space-y-16">
          <section>
            <SectionHeading number="01" title="TL;DR" />
            <p className="mt-5 leading-8 text-[#52605D]">
              This project explored a dataset of approximately 114,000
              Spotify tracks spanning 114 genres. Rather than treating genre
              labels as a complete description of musical similarity, the
              analysis investigated relationships between numerical audio
              features using correlation analysis, dimensionality reduction,
              clustering, and a variational autoencoder (VAE).
            </p>
          </section>

          <section>
            <SectionHeading number="02" title="The Problem" />
            <p className="mt-5 leading-8 text-[#52605D]">
              Music recommendation and discovery systems depend on meaningful
              ways to represent songs. Genre labels provide useful context,
              but tracks within the same genre can differ substantially in
              energy, tempo, danceability, acousticness, and other measurable
              characteristics.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              The central question was whether patterns in these numerical
              features could reveal useful relationships between tracks
              beyond their assigned genres.
            </p>
          </section>

          <section>
            <SectionHeading number="03" title="The Approach" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The analysis began by examining feature distributions and
              relationships using correlation and mutual information.
              Dimensionality reduction methods, including PCA and UMAP,
              provided different views of the dataset&apos;s structure.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Gaussian mixture modeling offered a probabilistic approach to
              grouping tracks, while a VAE explored whether a learned latent
              representation could capture patterns in the audio features.
            </p>
          </section>

          <section>
            <SectionHeading number="04" title="Implementation" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The workflow combined exploratory data analysis with several
              complementary machine learning techniques. PCA provided a
              linear baseline for reducing feature dimensions, while UMAP
              helped visualize nonlinear neighborhood relationships in a
              lower-dimensional space.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              The variational autoencoder was trained to learn a compact,
              three-dimensional latent representation of the input features.
              Comparing these approaches helped distinguish what could be
              observed directly in the original features from what emerged
              after transformation or representation learning.
            </p>
          </section>

          <section>
            <SectionHeading number="05" title="Results & Insights" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The project produced multiple ways to inspect musical
              similarity, including the UMAP visualization shown above.
              These representations made it possible to explore how tracks
              relate in feature space without assuming that genre labels
              must form perfectly separated clusters.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              An important takeaway was that visual proximity in a
              two-dimensional projection is useful for exploration, but
              does not by itself prove that a clustering method or learned
              representation is objectively better.
            </p>
          </section>

          <section>
            <SectionHeading number="06" title="Challenges & Reflections" />
            <p className="mt-5 leading-8 text-[#52605D]">
              One challenge in unsupervised learning is interpreting results
              when there is no single ground-truth grouping to optimize.
              Different algorithms preserve different properties of the
              data, so their visualizations are not directly interchangeable.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              This project reinforced the importance of combining exploratory
              visualizations with careful interpretation. A natural next
              step would be to evaluate the learned representations using
              downstream tasks, such as similarity search or recommendation,
              rather than relying on visualizations alone.
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
            Previous case study ↗
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
