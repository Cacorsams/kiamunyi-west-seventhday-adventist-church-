"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";

// Navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

// Tabs for content sections
const tabs = [
  "Experience",
  "Education",
  "Skills",
  "About Me",
];

// Skills with icons
const skills = [
  { name: "HTML5", icon: "/html.png" },
  { name: "C++", icon: "/cplusplus.png" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "React", icon: "/react.png" },
  { name: "Next.js", icon: "/nextjs.png" },
  { name: "Tailwind", icon: "/tailwind.png" },
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "vercel deployment", icon: "/vercel.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "GraphQL", icon: "/graphql.png" },
  { name: "Supabase", icon: "/supabase.png" },
];

// Resume content
const resumeContent = {
  Experience: [
    {
      title: "Senior Frontend Developer",
      company: "Stepup",
      period: "May 2025 - Present",
      description: "Participated in a team of 5 in building scalable, responsive web applications using Next.js and TypeScript. Implemented full API references to create a full SaaS Application with Supabase intergration.",
    },
    {
      title: "Frontend Developer",
      company: "Libra sales",
      period: "Nov 2023 - Jan 2024",
      description: "Developed interactive UI components with React and Tailwind CSS. Improved application performance by optimizing rendering processes, achieving a 25% faster load time.",
    },
  ],
  Education: [
    {
      degree: "B.S. in Mathematics and Computer Science",
      institution: "Multimedia University of Kenya",
      period: "2022-present",
      description: "Am specializing in fullstack  web development .Created Human Resource Managemet project on real-time collaborative applications.",
    },
  ],
  Skills: [
    "Frontend: React, Next.js, TypeScript, Tailwind CSS",
    "Backend: Node.js, Express, GraphQL",
    "Tools: Figma, Git, Webpack, Docker",
    "Soft Skills: Team Leadership, Agile Methodologies, Problem-Solving",
  ],
  "About Me": (
    <p>
      I'm a passionate developer withover 2 years of experience crafting user-centric web applications. I thrive on turning complex problems into elegant solutions, with a keen eye for design and performance. When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or analyzing Contract for Difference markets in Foreign Exchange .
    </p>
  ),
};

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={cn("min-h-screen bg-background text-foreground", theme === "dark" ? "dark" : "")}>
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold font-mono"
          >
            Seth<span className="text-green-500 dark:text-green-400">.</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={cn(
                  "font-mono text-sm transition-colors hover:text-green-500 dark:hover:text-green-400",
                  link.label === "Resume" && "text-green-500 dark:text-green-400 border-b-2 border-green-500 dark:border-green-400"
                )}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <Button
              asChild
              className="ml-4 bg-green-500 dark:bg-green-400 text-background hover:bg-green-600 dark:hover:bg-green-500 font-mono"
            >
              <a href="/contact">Hire Me</a>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </Button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background border-b border-border/40"
            >
              <div className="flex flex-col items-center py-4 gap-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "font-mono text-base w-full text-center py-2",
                      link.label === "Resume" && "text-green-500 dark:text-green-400 font-bold"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button asChild className="bg-green-500 dark:bg-green-400 text-background font-mono">
                  <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Hire Me
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="min-h-screen pt-20 pb-12 px-4 flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Tabs and Content */}
            <Card className="lg:col-span-2 bg-background/80 backdrop-blur border-border/40">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-extrabold font-mono">
                  Why Hire Me?
                </CardTitle>
                <p className="text-muted-foreground font-mono">
                  I bring a blend of technical expertise, creative problem-solving, and a passion for building seamless user experiences.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2 mb-6">
                  {tabs.map((tab) => (
                    <Button
                      key={tab}
                      variant={activeTab === tab ? "default" : "outline"}
                      className={cn(
                        "w-full text-left font-mono text-base font-semibold",
                        activeTab === tab
                          ? "bg-green-500 dark:bg-green-400 text-background"
                          : "hover:bg-muted"
                      )}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </Button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono"
                  >
                    {activeTab === "Experience" &&
                      resumeContent.Experience.map((exp, index) => (
                        <div key={index} className="mb-6">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-green-500 dark:text-green-400">{exp.company}</p>
                          <p className="text-muted-foreground text-sm">{exp.period}</p>
                          <p className="mt-2">{exp.description}</p>
                        </div>
                      ))}
                    {activeTab === "Education" &&
                      resumeContent.Education.map((edu, index) => (
                        <div key={index} className="mb-6">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-green-500 dark:text-green-400">{edu.institution}</p>
                          <p className="text-muted-foreground text-sm">{edu.period}</p>
                          <p className="mt-2">{edu.description}</p>
                        </div>
                      ))}
                    {activeTab === "Skills" && (
                      <ul className="list-disc pl-5">
                        {resumeContent.Skills.map((skill, index) => (
                          <li key={index} className="mb-2">{skill}</li>
                        ))}
                      </ul>
                    )}
                    {activeTab === "About Me" && resumeContent["About Me"]}
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Right: Skills Grid */}
            <Card className="bg-background/80 backdrop-blur border-border/40">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-extrabold font-mono">
                  My Skills
                </CardTitle>
                <p className="text-muted-foreground font-mono">
                  A curated set of tools and technologies I excel at to deliver top-notch solutions.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      className="relative flex flex-col items-center justify-center bg-muted/50 rounded-lg p-4 transition-all duration-200 cursor-pointer"
                      onMouseEnter={() => setShowTooltip(skill.name)}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={skill.icon.endsWith(".svg") ? 40 : 36}
                        height={skill.icon.endsWith(".svg") ? 40 : 36}
                        className="object-contain"
                      />
                      <AnimatePresence>
                        {showTooltip === skill.name && (
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-2 text-xs font-mono bg-background text-foreground px-2 py-1 rounded shadow"
                          >
                            {skill.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>
    </div>
  );
}