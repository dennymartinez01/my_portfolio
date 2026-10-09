export const personal = {
  name: "Denny Carlo T. Martinez",
  shortName: "Denny Martinez",
  title: "Full-Stack Web Developer | Software Engineer | Mobile Developer",
  tagline: "Building digital experiences that scale.",
  email: "dennycarlomartinez@yahoo.com",
  phone: "+63 966-176-1758",
  github: "https://github.com/dennymartinez01",
  location: "Valenzuela, Metro Manila, Philippines",
  yearsOfExperience: 9,
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "PASS College",
    location: "Alaminos City, Pangasinan",
    year: "2013",
  },
  bio: [
    "I'm a full-stack web developer and software engineer with 9+ years of professional experience building, maintaining, and supporting web and mobile applications across enterprise platforms and modern SaaS products.",
    "My stack spans PHP (Laravel, CakePHP), JavaScript/TypeScript (React, Next.js, Node.js), and mobile (React Native, Android). I've shipped everything from high-traffic ticketing systems for 25,000-seat arenas to AI-powered SaaS platforms — solo and as part of a team.",
  ],
};

export const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "WordPress"],
  backend: ["Node.js", "PHP", "Laravel", "CakePHP"],
  mobile: ["React Native", "Android", "Java", "Kotlin"],
  databases: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  apis: ["REST API", "Web API", "Third-party API / SDK Integration", "Sinch Voice API"],
  tools: ["Git", "Apache Web Server", "AWS", "Liquid Web", "Vercel", "Stripe", "Resend"],
  ai: ["Google Gemini API", "AI-assisted development", "Agentic AI"],
  other: ["Supabase Realtime", "jsPDF", "Cheerio", "PageSpeed API", "Mapbox"],
};

export const experience = [
  {
    company: "Araneta Center Inc. (ACI Inc.)",
    role: "Web Developer",
    period: "Apr 2017 – Present",
    duration: "9 years",
    location: "Cubao, Quezon City, Philippines",
    description:
      "Core member of the web development team responsible for building and maintaining the official websites of the Araneta Group — one of the Philippines' most iconic entertainment and commercial destinations. Delivered enterprise-grade platforms used daily by millions of Filipinos.",
    highlights: [
      "Co-designed the program structure of multiple company websites and contributed to ongoing development and maintenance of production web applications",
      "Maintained and enhanced applications built with CakePHP and WordPress, supporting existing functionality and continuous improvements",
      "Co-designed and co-developed the ACI mobile application using React Native, extending company systems to mobile platforms",
      "Supported feature development, troubleshooting, application testing, deployment, and day-to-day technical maintenance across web and mobile systems",
      "Managed deployments on AWS and Liquid Web cloud infrastructure",
    ],
    tech: ["CakePHP", "PHP", "MySQL", "JavaScript", "WordPress", "React Native", "HTML/CSS", "AWS", "Liquid Web"],
  },
  {
    company: "Stardibs Corporation",
    role: "Web Developer",
    period: "Aug 2016 – Dec 2016",
    duration: "5 months",
    location: "Ortigas Center, Pasig City, Philippines",
    description:
      "Contributed to a startup tech company building web applications with a modern Node.js and React.js stack.",
    highlights: [
      "Co-designed application structure and maintained systems developed with Node.js, React.js, and MongoDB",
      "Developed Web APIs with Node.js to support application functionality and system integrations",
      "Built and maintained a website using the Laravel framework",
    ],
    tech: ["Node.js", "React.js", "MongoDB", "Laravel", "PHP", "REST API"],
  },
  {
    company: "NeedHelp™ Mobile App",
    role: "Web & Android Mobile Developer",
    period: "Jun 2013 – Aug 2016",
    duration: "3 years",
    location: "Alaminos City, Pangasinan, Philippines",
    description:
      "Full-cycle contributor on a mobile application product — from requirements analysis through deployment and post-launch support.",
    highlights: [
      "Contributed to requirements analysis, database architecture, application structure, development, testing, and deployment",
      "Developed and supported web and Android application components using Android Studio and related development tools",
      "Used Git for version control and deployed and tested applications on Apache Web Server",
      "Integrated Sinch Voice API and SDK functionality into the application",
    ],
    tech: ["Android", "Java", "Android Studio", "PHP", "MySQL", "Sinch Voice API", "Git", "Apache"],
  },
];

export const training = {
  role: "Website Development and Management Training",
  company: "Virtual Wonders Web Solutions",
  period: "Apr 2012 – Jun 2012",
  location: "Alaminos City, Pangasinan, Philippines",
  highlights: [
    "Built a custom WordPress website and worked with themes, plugins, custom design, and website customization",
    "Designed a WordPress theme using Photoshop and the 960 Grid System, deployed from local server to live server",
    "Analyzed uptime performance and prepared technical reports, test procedures, best practices, and recommendations",
  ],
};

export const projects = [
  {
    id: "kita-builder",
    name: "KITA Builder Systems",
    tagline: "From Struggle to Booked.",
    description:
      "An AI-powered two-product SaaS platform. Product 1 generates fully functional booking websites for local service businesses (salon, clinic, cafe, mechanic) in ~10 seconds using Google Gemini. Product 2 is a forensic website audit tool that scores any URL across Performance, SEO, Security, Accessibility, and Tech Stack — complete with a downloadable PDF report.",
    longDescription: [
      "Built entirely solo as a freedom project to explore Generative AI and Agentic AI in a real product context.",
      "Includes a full admin CMS, Stripe payments, Supabase Realtime database, email notifications via Resend, and 11 pre-built templates across 5 business types.",
      "The AI assistant inside each generated site has 9 agent tools — owners can edit their services, prices, and copy by chatting with it.",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Supabase", "Google Gemini", "Stripe", "Resend", "jsPDF", "Vercel"],
    liveUrl: "https://kita-builder-systems.vercel.app",
    githubUrl: "https://github.com/dennymartinez01/Kita-Builder-Systems",
    features: [
      "AI site generator — full booking website in ~10 seconds",
      "Booking system with real-time slot availability",
      "Owner dashboard with 10 tabs (services, staff, hours, gallery, analytics, AI chat)",
      "Forensic website audit — Performance, SEO, Security, Accessibility scores",
      "10-page internal crawler with broken link detection",
      "PDF audit report generation (client-side, no server needed)",
      "Stripe payment integration ($150 setup fee)",
      "White-label mode for agencies",
    ],
    type: "Personal / SaaS",
    year: "2026",
    highlight: true,
  },
  {
    id: "happin",
    name: "Happin",
    tagline: "Your community, happening now.",
    description:
      "A location-aware community platform for events, public-awareness alerts, and local discovery. Built to help communities assess the legitimacy of rapidly spreading information — including AI-generated content — through structured community voting signals.",
    longDescription: [
      "Members can post events and alerts with photos and videos, vote on post legitimacy, and receive real-time nearby notifications based on their preferred city and radius.",
      "Includes a full direct messaging system (connections only), community voting with transparent tallies, and an admin portal with moderation tools.",
      "Built with a Mapbox-ready architecture for future geo features and uses Supabase Realtime for live notifications and chat.",
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "Supabase Realtime", "Mapbox (architecture)", "Vercel"],
    liveUrl: "https://happintechnology-1m9q.vercel.app",
    githubUrl: "https://github.com/dennymartinez01/happin_technology",
    features: [
      "Location-aware event and alert discovery",
      "Community legitimacy voting (transparent, non-automated)",
      "Real-time nearby notifications (5/15/25 km radius)",
      "Direct messaging between accepted connections",
      "Photo and video uploads via Supabase Storage (signed URLs)",
      "Admin portal with moderation and analytics",
      "Member directory and connection requests",
    ],
    type: "Personal / Community Platform",
    year: "2026",
    highlight: true,
  },
];

export const employerSites = [
  {
    name: "TicketNet Online",
    url: "https://ticketnet.com.ph",
    description:
      "The Philippines' premier online ticketing platform — connecting millions of fans to world-class concerts, live shows, and events. Built with CakePHP 5 and hosted on AWS, the platform handles high-traffic event launches, real-time seat selection, and secure payment processing at scale.",
    tech: ["CakePHP 5", "PHP", "MySQL", "JavaScript", "AWS"],
    icon: "🎟️",
  },
  {
    name: "Araneta City",
    url: "https://aranetacity.com",
    description:
      "The official destination website for Araneta City — 'The City of Firsts' — one of Metro Manila's most iconic mixed-use commercial and entertainment districts. The site showcases events, dining destinations, cinemas, and the Araneta City mobile app. Built with CakePHP 5 on Liquid Web.",
    tech: ["CakePHP 5", "PHP", "MySQL", "JavaScript", "Liquid Web"],
    icon: "🏙️",
  },
  {
    name: "One Araneta",
    url: "https://onearaneta.com",
    description:
      "A digital hub for the Araneta Group's corporate identity and integrated property developments. Presents the group's vision, portfolio of properties, and commercial offerings in a clean, professional format. Built with WordPress on Liquid Web.",
    tech: ["WordPress", "PHP", "MySQL", "Liquid Web"],
    icon: "🏢",
  },
  {
    name: "Smart Araneta Coliseum",
    url: "https://smartaranetacoliseum.com",
    description:
      "The official website of the Smart Araneta Coliseum — 'The Big Dome' — one of Southeast Asia's largest indoor arenas with a 25,000-seat capacity. The site promotes upcoming events, venue information, and booking details for concerts and major sporting events.",
    tech: ["CakePHP", "PHP", "MySQL", "JavaScript"],
    icon: "🏟️",
  },
  {
    name: "New Frontier Theater",
    url: "https://newfrontiertheater.com",
    description:
      "The official website for New Frontier Theater, Araneta City's premier Broadway-style performance venue. Built to showcase theatrical productions, upcoming shows, seat maps, and ticketing integrations — serving theater enthusiasts across the Philippines.",
    tech: ["CakePHP", "PHP", "MySQL", "JavaScript"],
    icon: "🎭",
  },
];
