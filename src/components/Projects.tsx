import { ExternalLink, GitBranch, Zap } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Personal Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-300 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Solo SaaS products built in my own time — exploring AI, full-stack development,
            and product thinking end-to-end.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 bg-slate-800/40 hover:bg-slate-800/60 card-hover`}
            >
              {/* Left: Color band */}
              <div
                className={`lg:col-span-1 min-h-[8px] lg:min-h-0 bg-gradient-to-br ${
                  index % 2 === 0
                    ? "from-sky-500/80 to-blue-600/80"
                    : "from-violet-500/80 to-purple-600/80"
                } flex items-center justify-center p-6`}
              >
                <div className="text-center hidden lg:block">
                  <span className="text-5xl">
                    {index % 2 === 0 ? "⚡" : "🌐"}
                  </span>
                  <p className="text-white/80 text-xs font-medium mt-3 leading-tight">
                    {project.type}
                  </p>
                  <p className="text-white/60 text-xs mt-1">{project.year}</p>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-4 p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="lg:hidden text-2xl">
                        {index % 2 === 0 ? "⚡" : "🌐"}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                        {project.name}
                      </h3>
                      {project.highlight && (
                        <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 italic text-sm">
                      &quot;{project.tagline}&quot;
                    </p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-sky-500/25"
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-medium transition-all hover:bg-slate-700/50"
                    >
                      <GitBranch size={14} />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Additional description */}
                <div className="space-y-2 mb-6">
                  {project.longDescription.map((para, i) => (
                    <p key={i} className="text-slate-500 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Features grid */}
                <div className="mb-6">
                  <h4 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Zap size={14} className="text-sky-400" />
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span className="text-sky-400 text-xs mt-0.5 shrink-0">▸</span>
                        <span className="text-slate-400 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-700/60 border border-slate-600/50 text-slate-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

