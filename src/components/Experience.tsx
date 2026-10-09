import { Briefcase, CheckCircle, ExternalLink, BookOpen } from "lucide-react";
import { experience, training, employerSites } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Where I&apos;ve Worked
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-300 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative mb-6 space-y-8">
          {experience.map((job, idx) => (
            <div key={job.company} className="relative pl-8 md:pl-12">
              {/* Timeline line — don't draw after last item */}
              {idx < experience.length - 1 && (
                <div className="absolute left-0 top-5 bottom-[-2rem] w-px bg-gradient-to-b from-sky-500 via-slate-700 to-slate-800" />
              )}
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-900 shadow-lg ${
                  idx === 0
                    ? "bg-sky-500 shadow-sky-500/40"
                    : "bg-slate-600 shadow-slate-500/20"
                }`}
              />

              <div className="p-7 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 card-hover">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20">
                        <Briefcase size={15} className="text-sky-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    </div>
                    <p className="text-sky-400 font-semibold">{job.company}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{job.location}</p>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium">
                      {job.period}
                    </span>
                    <p className="text-slate-500 text-xs mt-1">{job.duration}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {job.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-sky-400 mt-0.5 shrink-0" />
                      <span className="text-slate-400 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-slate-700/60 border border-slate-600/50 text-slate-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Training entry */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500/60 border-2 border-slate-900" />
            <div className="p-7 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-amber-500/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <BookOpen size={15} className="text-amber-400" />
                    </div>
                    <h3 className="text-base font-bold text-white">{training.role}</h3>
                  </div>
                  <p className="text-amber-400 font-semibold text-sm">{training.company}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{training.location}</p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium shrink-0 self-start">
                  {training.period}
                </span>
              </div>
              <ul className="space-y-2">
                {training.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-slate-400 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Websites built */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-2">
            Websites I Built at ACI Inc.
          </h3>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
            Live production websites I contributed to as part of the ACI Inc. web development team.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {employerSites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-sky-500/40 transition-all duration-300 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{site.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm group-hover:text-sky-400 transition-colors">
                        {site.name}
                      </h4>
                      <p className="text-slate-500 text-xs truncate max-w-[160px]">
                        {site.url.replace("https://", "")}
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-slate-600 group-hover:text-sky-400 transition-colors shrink-0 mt-1"
                  />
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {site.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {site.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-700/60 text-slate-400 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
