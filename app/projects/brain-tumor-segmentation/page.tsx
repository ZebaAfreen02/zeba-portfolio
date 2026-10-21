
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Brain Tumor Segmentation | Zeba Afreen",
  description:
    "A deep learning case study on multi-modal MRI brain tumor segmentation using U-Net.",
};

const technologies = [
  "Python",
  "PyTorch",
  "U-Net",
  "Computer Vision",
  "Medical Imaging",
];

export default function BrainTumorSegmentationPage() {
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
            Case Study 01 / Deep Learning & Computer Vision
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Brain Tumor Segmentation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#52605D] md:text-xl">
            Building a U-Net pipeline to identify brain tumor regions from
            multi-modal MRI scans and evaluate segmentation quality.
          </p>

          <div className="mt-10 grid gap-6 border-y border-[#DFE4E0] py-7 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Project type
              </p>
              <p className="mt-2 text-sm font-medium">
                Deep Learning / Medical Imaging
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Dataset
              </p>
              <p className="mt-2 text-sm font-medium">
                369 patients · 57K+ MRI slices
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#668B81]">
                Validation performance
              </p>
              <p className="mt-2 text-sm font-medium">
                Approximately 0.88 Dice
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
          <div className="mt-8">
            <a
              href="https://github.com/ZebaAfreen02/Brain-Tumor-Segmentation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#202728] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#668B81]"
            >
              View GitHub ↗
            </a>
          </div>
        </header>

        <figure className="mt-14 overflow-hidden rounded-2xl border border-[#DFE4E0] bg-[#EEE9EC] p-5 md:p-10">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/Images/brain-tumor-segmentation-v2.png"
              alt="Multi-modal brain MRI scans with ground truth and predicted tumor segmentation masks"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain"
              priority
            />
          </div>
          <figcaption className="mt-4 text-center text-xs text-[#66716D]">
            MRI modalities, ground-truth segmentation, and model prediction.
          </figcaption>
        </figure>

        <div className="mx-auto mt-20 max-w-3xl space-y-16">
          <section>
            <SectionHeading number="01" title="The Problem" />
            <p className="mt-5 leading-8 text-[#52605D]">
              Brain tumor segmentation requires identifying the boundaries of
              tumor regions in MRI scans. Unlike image classification, which
              produces a single label, segmentation assigns a prediction to
              individual pixels, making spatial accuracy especially important.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              The challenge was to build a model that could learn meaningful
              spatial features from multiple MRI modalities and produce
              segmentation masks that closely matched annotated ground truth.
            </p>
          </section>

          <section>
            <SectionHeading number="02" title="The Approach" />
            <p className="mt-5 leading-8 text-[#52605D]">
              I worked with a multi-modal MRI dataset containing scans from 369
              patients and more than 57,000 image slices. The project used a
              U-Net architecture, which combines an encoder for learning
              increasingly abstract image features with a decoder that restores
              spatial detail for pixel-level predictions.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              Skip connections between the encoder and decoder help preserve
              information about local structures, which is valuable when
              predicting irregular tumor boundaries.
            </p>
          </section>

          <section>
            <SectionHeading number="03" title="Implementation" />
            <p className="mt-5 leading-8 text-[#52605D]">
              The workflow brought together MRI data preparation, segmentation
              model training, and evaluation. The model processed MRI inputs
              and generated predicted masks that could be compared against
              annotated tumor regions.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              A key implementation consideration was evaluating the spatial
              overlap between predicted and reference masks rather than relying
              only on pixel-level accuracy. This makes the evaluation more
              informative for segmentation tasks, where background pixels can
              dominate an image.
            </p>
          </section>

          <section>
            <SectionHeading number="04" title="Results" />
            <div className="mt-6 rounded-xl border border-[#DFE4E0] bg-white p-7">
              <p className="text-4xl font-semibold tracking-tight text-[#668B81]">
                ~0.88
              </p>
              <p className="mt-2 text-sm font-medium">
                Validation Dice coefficient
              </p>
              <p className="mt-3 text-sm leading-7 text-[#52605D]">
                Dice measures the overlap between the predicted segmentation
                and the ground-truth mask. Higher values indicate stronger
                agreement.
              </p>
            </div>

            <p className="mt-5 leading-8 text-[#52605D]">
              The visualization above provides a qualitative comparison
              alongside the validation metric. Together, these help assess
              whether the model identifies tumor regions in the expected
              locations and how closely its predictions resemble the
              annotations.
            </p>
          </section>

          <section>
            <SectionHeading number="05" title="Challenges & Reflections" />
            <p className="mt-5 leading-8 text-[#52605D]">
              Medical image segmentation highlights the difference between
              obtaining a strong numerical metric and understanding individual
              predictions. Reviewing masks visually is an important complement
              to aggregate evaluation, particularly when structures have
              irregular shapes.
            </p>
            <p className="mt-4 leading-8 text-[#52605D]">
              A valuable next step would be a more detailed error analysis
              across patients and tumor regions, including identifying cases
              where predicted boundaries diverge from the ground truth.
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
            href="/projects/spotify-audio-analysis"
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
