
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  metrics: string[];
  accent: string;
  image?: string;
  featured?: boolean;
  href?: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  category,
  technologies,
  metrics,
  accent,
  image,
  featured = false,
  href,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-[#E0E5E0] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#263A36]/5 ${
        featured ? "md:flex md:flex-row-reverse" : ""
      }`}
    >
      {/* Project visual */}
      <div
        className={`relative flex h-64 items-center justify-center overflow-hidden ${accent} ${
          featured ? "md:h-auto md:w-1/2 md:shrink-0" : ""
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt={`${title} project visualization`}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <span className="text-5xl font-semibold tracking-tight text-[#263A36]/20">
            {number}
          </span>
        )}
      </div>

      {/* Project details */}
      <div className={featured ? "p-7 md:w-1/2 md:p-10" : "p-7"}>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[#668B81]">
          {category}
        </p>

        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#202728]">
          {title}
        </h3>

        <p
          className={`mb-6 text-sm leading-relaxed text-[#596662] ${
            featured ? "" : "min-h-20"
          }`}
        >
          {description}
        </p>

        {/* Metrics */}
        <div className="mb-6 flex flex-wrap gap-3 border-b border-[#E8ECE8] pb-6">
          {metrics.map((metric) => (
            <span
              key={metric}
              className="text-xs font-medium text-[#3F5C54]"
            >
              {metric}
            </span>
          ))}
        </div>

        
        {/* Technology tags */}
        <div className="mb-7 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#DDE3DE] bg-[#F1F4F1] px-3 py-1.5 text-[13px] font-medium text-[#465650]"
            >
              {tech}
            </span>
          ))}
        </div>


        
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {href && (
            <>
              <Link
                href={href}
                aria-label={`View ${title} case study`}
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#668B81]"
              >
                <span className="sr-only">
                  View {title} case study
                </span>
              </Link>

              <span className="font-semibold text-[#668B81] transition-colors group-hover:text-[#202728]">
                View case study →
              </span>
            </>
          )}

          {(github || demo) && (
            <div className="relative z-20 flex flex-wrap items-center gap-5">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#668B81] transition-colors hover:text-[#202728]"
                >
                  GitHub ↗
                </a>
              )}

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#668B81] transition-colors hover:text-[#202728]"
                >
                  Watch demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
