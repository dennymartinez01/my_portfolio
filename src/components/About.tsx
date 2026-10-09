import { User, Briefcase, Code2, Smartphone, GraduationCap } from "lucide-react";
import { personal } from "@/data/portfolio";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "9+" },
  { icon: Code2, label: "Web Projects", value: "7+" },
  { icon: Smartphone, label: "Mobile Apps", value: "2+" },
  { icon: User, label: "Companies", value: "3" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-300 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <div className="space-y-5">
              {personal.bio.map((para, i) => (
                <p key={i} className="text-slate-400 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Location", value: personal.location },
                { label: "Experience", value: `${personal.yearsOfExperience}+ Years` },
                { label: "Email", value: personal.email },
                { label: "Phone", value: personal.phone },
                { label: "Speciality", value: "Full-Stack & Mobile" },
                { label: "Status", value: "Open to Work ✅" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50"
                >
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                    {fact.label}
                  </p>
                  <p className="text-slate-200 font-medium text-sm break-all">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-6 p-5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <GraduationCap size={16} className="text-sky-400" />
                </div>
                <p className="text-slate-300 font-semibold text-sm">Education</p>
              </div>
              <p className="text-slate-200 font-medium text-sm">
                {personal.education.degree}
              </p>
              <p className="text-slate-400 text-sm mt-0.5">
                {personal.education.school} · {personal.education.location} · Class of {personal.education.year}
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg border border-slate-600 hover:border-sky-500/60 text-slate-300 hover:text-white text-sm font-medium transition-all hover:bg-slate-800"
              >
                GitHub Profile →
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="px-6 py-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 hover:text-sky-300 text-sm font-medium transition-all"
              >
                Email Me →
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 card-hover text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 mb-4">
                  <Icon size={22} className="text-sky-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1 gradient-text">
                  {value}
                </div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}

            {/* Summary card */}
            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20">
              <p className="text-sky-300 font-semibold text-sm mb-2 uppercase tracking-wider">
                Professional Summary
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Full-stack developer and software engineer skilled in React.js, Node.js, PHP,
                Laravel, CakePHP, WordPress, React Native, Android, MongoDB, and MySQL.
                Experienced in REST API development, third-party integrations, testing,
                deployment, and production troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
