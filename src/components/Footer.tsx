import { Code2, GitBranch, Mail, Heart, Phone } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-sky-400 font-bold text-xl mb-3">
              <Code2 size={22} />
              <span>Denny Martinez</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Web Developer based in Quezon City, Philippines. Building
              enterprise platforms and modern SaaS products.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-sky-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-500 hover:text-sky-400 text-sm transition-colors"
              >
                <Mail size={15} />
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 text-sm transition-colors"
              >
                <Phone size={15} />
                {personal.phone}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-sky-400 text-sm transition-colors"
              >
                <GitBranch size={15} />
                github.com/dennymartinez01
              </a>
            </div>
          </div>
        </div>

        <hr className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <p>
            © {new Date().getFullYear()} Denny Carlo T. Martinez. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-500 fill-red-500" /> using{" "}
            <span className="text-sky-500 font-medium">Next.js</span> &amp;{" "}
            <span className="text-sky-500 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

