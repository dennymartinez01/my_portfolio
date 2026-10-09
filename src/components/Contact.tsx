import { Mail, GitBranch, MapPin, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { personal } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: "Drop me a message",
    color: "sky",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    description: "Available on call / Viber / WhatsApp",
    color: "emerald",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/dennymartinez01",
    href: personal.github,
    description: "See my code",
    color: "violet",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: null,
    description: "Open to remote work",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  sky:     "bg-sky-500/10 border-sky-500/20 text-sky-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  violet:  "bg-violet-500/10 border-violet-500/20 text-violet-400",
  amber:   "bg-amber-500/10 border-amber-500/20 text-amber-400",
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-300 mx-auto rounded-full" />
        </div>

        {/* Main card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 overflow-hidden">
          {/* Top band */}
          <div className="h-2 bg-gradient-to-r from-sky-500 via-blue-500 to-violet-500 animate-gradient" />

          <div className="p-10 md:p-14 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-6">
              <MessageSquare size={28} className="text-sky-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Open to new opportunities
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you have a role in mind, a project to discuss, or just want to connect
              — my inbox is always open. I&apos;ll get back to you as soon as I can.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-sky-500/30 glow"
              >
                <Mail size={18} />
                Send an Email
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-emerald-500/40 hover:border-emerald-500/70 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 font-semibold text-base transition-all duration-200"
              >
                <Phone size={18} />
                {personal.phone}
              </a>
            </div>

            {/* Divider */}
            <hr className="section-divider mb-10" />

            {/* Contact links grid — 2x2 on mobile, 4 cols on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {contactLinks.map(({ icon: Icon, label, value, href, description, color }) => {
                const cls = colorMap[color];
                const inner = (
                  <>
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border ${cls} mb-3`}
                    >
                      <Icon size={18} />
                    </div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="text-white font-medium text-xs mb-1 break-all leading-snug">{value}</p>
                    <p className="text-slate-500 text-xs">{description}</p>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 card-hover text-center"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/50 text-center"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

