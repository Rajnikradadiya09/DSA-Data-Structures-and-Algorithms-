import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ArrowRight, Github, Linkedin, Globe, Calendar, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

// --- Basic site config: edit these values to personalize ---
const config = {
  name: "Rajnik Radadiya",
  role: "Full‑Stack Developer",
  tagline:
    "I design and build clean, fast, accessible experiences that turn complex ideas into simple, useful products.",
  email: "you@example.com",
  phone: "+44 7123 456789",
  location: "London, UK",
  calLink: "https://cal.com/your-handle/intro", // replace if you use Calendly/Cal.com
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  website: "https://www.yourdomain.com",
};

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB",
  "Prisma", "REST", "GraphQL", "Tailwind CSS", "shadcn/ui", "Docker", "AWS",
];

const services = [
  {
    title: "Product‑Ready Frontends",
    desc: "Pixel‑perfect, responsive UIs with component systems, dark mode, and a11y baked in.",
  },
  {
    title: "Robust APIs & Integrations",
    desc: "Designing secure REST/GraphQL backends, auth flows, and third‑party integrations.",
  },
  {
    title: "Performance & SEO",
    desc: "Lighthouse‑friendly builds, Core Web Vitals tuning, and technical SEO foundations.",
  },
  {
    title: "Design to Code",
    desc: "Figma/XD to production with maintainable code and scalable design systems.",
  },
];

const testimonials = [
  {
    quote:
      "Working with Rajnik was a breeze — fast iterations, thoughtful questions, and clean code that shipped on time.",
    author: "Claudio Conte",
    role: "Founder & CEO, Bullstrap",
  },
  {
    quote:
      "He elevated our vision and delivered beyond expectations. Communication and quality were top‑tier.",
    author: "Waqar Ansari",
    role: "Founder, Anthunt",
  },
  {
    quote:
      "Professional, detail‑oriented, and dependable. We saw measurable improvements after launch.",
    author: "Mush Panjwani",
    role: "Founder, Coffee Wagera",
  },
];

const projects = [
  {
    title: "Traveler Application",
    desc:
      "Admin dashboard for managing trips, users, and bookings with charts, filters, and role‑based access.",
    href: "#",
    stack: ["React", "TypeScript", "Chart.js", "Node", "PostgreSQL"],
  },
  {
    title: "MediCare Solutions",
    desc:
      "EHR‑style healthcare management: appointments, lab results, prescriptions, and treatment plans.",
    href: "#",
    stack: ["Next.js", "Prisma", "tRPC", "Tailwind", "AWS"],
  },
  {
    title: "Analytics Micro‑SaaS",
    desc:
      "Privacy‑friendly analytics with segmentation, events, and embeddable widgets.",
    href: "#",
    stack: ["SvelteKit", "Edge", "SQLite"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">{config.name}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#about">About</a>
            <a className="hover:opacity-70" href="#skills">Skills</a>
            <a className="hover:opacity-70" href="#projects">Projects</a>
            <a className="hover:opacity-70" href="#testimonials">Testimonials</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href={config.calLink} target="_blank" rel="noreferrer">
                <Calendar className="size-4 mr-2" /> Book a call
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div {...fadeUp}>
            <Badge className="rounded-2xl px-3 py-1 text-xs">{config.role}</Badge>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I'm {config.name.split(" ")[0]} 👋
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-zinc-600"
          >
            {config.tagline}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-2xl">
              <a href={config.calLink} target="_blank" rel="noreferrer">
                Let's talk <ArrowRight className="size-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="#projects">
                View projects
              </a>
            </Button>
          </motion.div>
        </div>
        {/* soft background accents */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_50%_at_50%_10%,#000_20%,transparent_70%)]">
          <div className="absolute -top-20 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200 to-cyan-100 blur-3xl opacity-60" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About me</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              I'm a developer who blends design thinking with solid engineering. I value clear communication,
              small feedback loops, and shipping maintainable code. I enjoy building dashboards, data‑heavy apps,
              and polished marketing sites that convert.
            </p>
            <ul className="mt-4 text-sm text-zinc-600 space-y-2">
              <li className="flex items-center gap-2"><Sparkles className="size-4" /> Focus on usability, accessibility, and performance</li>
              <li className="flex items-center gap-2"><Sparkles className="size-4" /> Transparent pricing & timelines — no surprises</li>
              <li className="flex items-center gap-2"><Sparkles className="size-4" /> Async‑friendly, but happy to jump on calls</li>
            </ul>
          </div>
          <Card className="rounded-2xl border-zinc-200">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="opacity-70">Name</div>
                <div className="font-medium">{config.name}</div>
                <div className="opacity-70">Role</div>
                <div className="font-medium">{config.role}</div>
                <div className="opacity-70">Location</div>
                <div className="font-medium">{config.location}</div>
                <div className="opacity-70">Contact</div>
                <div className="font-medium flex gap-3 flex-wrap">
                  <a className="hover:underline flex items-center gap-2" href={`mailto:${config.email}`}><Mail className="size-4" />Email</a>
                  <a className="hover:underline flex items-center gap-2" href={`tel:${config.phone}`}><Phone className="size-4" />Call</a>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 text-sm hover:underline" href={config.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
                <a className="inline-flex items-center gap-2 text-sm hover:underline" href={config.linkedin} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
                <a className="inline-flex items-center gap-2 text-sm hover:underline" href={config.website} target="_blank" rel="noreferrer"><Globe className="size-4" /> Website</a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-zinc-50/80 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">Skills</motion.h2>
          <motion.div {...fadeUp} className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <Badge key={s} className="rounded-2xl px-3 py-1 text-xs">{s}</Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">Featured projects</motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} {...fadeUp}>
              <Card className="rounded-2xl border-zinc-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-lg">{p.title}</h3>
                    <div className="flex items-center gap-1">
                      {p.stack.slice(0,3).map((t) => (
                        <Badge key={t} className="rounded-xl text-[10px] px-2 py-0.5">{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">{p.desc}</p>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="outline" className="rounded-2xl">
                      <a href={p.href} target="_blank" rel="noreferrer">View project</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-zinc-50/80 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">What clients say</motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp}>
                <Card className="rounded-2xl border-zinc-200">
                  <CardContent className="p-6">
                    <p className="text-sm leading-relaxed">“{t.quote}”</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
                      <Star className="size-4" />
                      <span className="font-medium">{t.author}</span>
                      <span className="opacity-70">• {t.role}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / VALUE PROP */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">Your development ally</motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <motion.div key={s.title} {...fadeUp}>
              <Card className="rounded-2xl border-zinc-200">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-8">
          <Button asChild size="lg" className="rounded-2xl">
            <a href={config.calLink} target="_blank" rel="noreferrer">
              Book a discovery call <Calendar className="size-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-zinc-50/80 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight">Get in touch</motion.h2>
          <motion.p {...fadeUp} className="mt-3 text-zinc-600 max-w-2xl">
            Prefer email or a quick call? Use the links below. This form is non‑functional by default — wire it to your backend or a service like Formspree.
          </motion.p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp}>
              <Card className="rounded-2xl border-zinc-200">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="size-4" />
                    <a className="hover:underline" href={`mailto:${config.email}`}>{config.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="size-4" />
                    <a className="hover:underline" href={`tel:${config.phone}`}>{config.phone}</a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.form {...fadeUp} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Your name" className="rounded-2xl" />
                <Input type="email" placeholder="Email address" className="rounded-2xl" />
              </div>
              <Input placeholder="Subject" className="rounded-2xl" />
              <Textarea placeholder="Message" className="min-h-[140px] rounded-2xl" />
              <Button className="rounded-2xl">Send message</Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-900">{config.name}</span>
            <span>•</span>
            <span>{config.role}</span>
          </div>
          <div className="flex items-center gap-3">
            <a className="hover:underline flex items-center gap-1" href={config.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
            <a className="hover:underline flex items-center gap-1" href={config.linkedin} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
            <a className="hover:underline flex items-center gap-1" href={config.website} target="_blank" rel="noreferrer"><Globe className="size-4" /> Website</a>
          </div>
        </div>
        <div className="mt-6 opacity-70">
          © {new Date().getFullYear()} — Designed & Built by {config.name}
        </div>
      </footer>
    </div>
  );
}
