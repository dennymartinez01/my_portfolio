"use client";

import { useEffect, useState } from "react";
import { GitBranch, Mail, MapPin, ArrowDown, Phone } from "lucide-react";
import { personal } from "@/data/portfolio";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Mobile Developer",
  "CakePHP Engineer",
  "Next.js Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Open to new opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personal.shortName}</span>
        </h1>

        {/* Typewriter */}
        <div className="h-14 flex items-center justify-center mb-6 animate-fade-in-up delay-200">
          <p className="text-2xl md:text-3xl text-slate-300 font-light">
            <span className="text-sky-400 font-semibold">{displayed}</span>
            <span className="cursor-blink text-sky-400">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-3 animate-fade-in-up delay-300">
          {personal.tagline}
        </p>
        <p className="text-slate-500 text-base max-w-xl mx-auto mb-10 animate-fade-in-up delay-400">
          {personal.yearsOfExperience}+ years building enterprise web platforms and modern
          full-stack applications — from 25,000-seat coliseum sites to AI-powered SaaS products.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-500">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-slate-600 hover:border-sky-500/60 text-slate-300 hover:text-white font-semibold text-base transition-all duration-200 hover:bg-slate-800"
          >
            Get In Touch
          </a>
        </div>

        {/* Contact bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-in-up delay-600">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm transition-colors"
          >
            <Mail size={16} />
            {personal.email}
          </a>
          <span className="w-px h-4 bg-slate-700 hidden sm:block" />
          <a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm transition-colors"
          >
            <Phone size={16} />
            {personal.phone}
          </a>
          <span className="w-px h-4 bg-slate-700 hidden sm:block" />
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm transition-colors"
          >
            <GitBranch size={16} />
            GitHub
          </a>
          <span className="w-px h-4 bg-slate-700 hidden sm:block" />
          <span className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={16} />
            {personal.location}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-600 hover:text-sky-400 transition-colors">
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  );
}

