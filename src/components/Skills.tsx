import { skills } from "@/data/portfolio";

type SkillCategory = {
  label: string;
  emoji: string;
  items: string[];
  color: string;
};

const categories: SkillCategory[] = [
  { label: "Frontend",            emoji: "🖥️",  items: skills.frontend,   color: "sky"     },
  { label: "Backend",             emoji: "⚙️",  items: skills.backend,    color: "violet"  },
  { label: "Mobile",              emoji: "📱",  items: skills.mobile,     color: "pink"    },
  { label: "Databases",           emoji: "🗄️",  items: skills.databases,  color: "emerald" },
  { label: "APIs & Integrations", emoji: "🔌",  items: skills.apis,       color: "amber"   },
  { label: "Tools & Platforms",   emoji: "🛠️",  items: skills.tools,      color: "cyan"    },
  { label: "AI & Generative",     emoji: "🤖",  items: skills.ai,         color: "rose"    },
  { label: "Other Technologies",  emoji: "⚡",  items: skills.other,      color: "teal"    },
];

const colorMap: Record<string, { badge: string; dot: string; border: string; hover: string }> = {
  sky:     { badge: "bg-sky-500/10 text-sky-300 border-sky-500/20",         dot: "bg-sky-400",     border: "border-sky-500/20",     hover: "group-hover:border-sky-500/50"     },
  violet:  { badge: "bg-violet-500/10 text-violet-300 border-violet-500/20", dot: "bg-violet-400",  border: "border-violet-500/20",  hover: "group-hover:border-violet-500/50"  },
  pink:    { badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",       dot: "bg-pink-400",    border: "border-pink-500/20",    hover: "group-hover:border-pink-500/50"    },
  emerald: { badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", dot: "bg-emerald-400", border: "border-emerald-500/20", hover: "group-hover:border-emerald-500/50" },
  amber:   { badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",   dot: "bg-amber-400",   border: "border-amber-500/20",   hover: "group-hover:border-amber-500/50"   },
  cyan:    { badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",       dot: "bg-cyan-400",    border: "border-cyan-500/20",    hover: "group-hover:border-cyan-500/50"    },
  rose:    { badge: "bg-rose-500/10 text-rose-300 border-rose-500/20",       dot: "bg-rose-400",    border: "border-rose-500/20",    hover: "group-hover:border-rose-500/50"    },
  teal:    { badge: "bg-teal-500/10 text-teal-300 border-teal-500/20",       dot: "bg-teal-400",    border: "border-teal-500/20",    hover: "group-hover:border-teal-500/50"    },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical Skills
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-300 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.label}
                className={`group p-5 rounded-2xl bg-slate-800/60 border ${c.border} ${c.hover} transition-all duration-300 card-hover`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="text-slate-200 font-semibold text-sm">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${c.badge}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
