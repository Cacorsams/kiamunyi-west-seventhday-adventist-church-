"use client";
import { useState, useEffect } from "react";
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

// Projects data
const projects = [
  {
    number: "01",
    title: "Human Resource Management Platform",
    description:
      "StepUp is a comprehensive Human Resource Management System (HRMS) built with Next.js, TypeScript, and Supabase. It includes modules for employee management, attendance, payroll, recruitment, performance, training, compliance, leave tracking, and analytics. Secure login and authentication ensure safe access, enabling efficient HR operations across all departments and branches.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "/hrms.jpg",
    live: "https://demostepup.vercel.app/",
    github: "https://github.com/Cacorsams",
  },
  {
    number: "02",
    title: "Attrition Risk Management System",
    description:
      "Attrition Risk Management is one of my sub-project module built with Next.js, TypeScript,React Native, and Supabase. It features secure login and authentication, and offers detailed dashboards, branch-wise risk analysis, predictive insights, employee exit trends, retention factors, and department-level attrition metrics. HR teams can track patterns, identify high-risk employees, and make data-driven decisions to improve retention and workforce stability across all branches in a secure, centralized system.",
    tech: ["React Native", "Resend API", "supabase", "Next.js"],
    image: "/hrms2.jpg",
    live: "https://demostepup.vercel.app/",
    github: "https://github.com/Cacorsams",
  },
  {
    number: "03",
    title: "Automated Job Recruitments Solutions",
    description:
      "The Job Recruitment and Application system streamlines hiring through a comprehensive workflow. It includes job posting, applicant tracking, resume uploads, screening, interview scheduling, and offer management. Built with Supabase, Next.js, TypeScript, Tailwind CSS, HTML, and GraphQL, it features pages like job listings, application forms, candidate profiles, admin dashboard, evaluation panels, and notification systems. The platform ensures secure authentication and real-time applicant status updates for efficient recruitment management..",
    tech: ["GraphQl", "Tailwind CSS", "MongoDB", "Next.js", "TypeScript"],
    images: ["/hrms3.jpg", "/hrms3-1.jpg"], // <-- changed here
    live: "https://demostepup.vercel.app/recruitment/application_portal/t2",
    github: "https://github.com/cacorsams",
  },
  {
    number: "04",
    title: "Training and Assessment Tool",
    description:
      "The Training Tool is a modern learning and development system built with Supabase, Next.js, TypeScript, Tailwind CSS, JavaScript, and Node.js. It includes pages for course creation, training schedules, progress tracking, trainee assessments, certifications, trainer management, notifications, resource libraries, feedback collection, analytics dashboard, and user authentication. The system empowers HR and managers to assign, monitor, and evaluate training programs efficiently, ensuring skill growth and compliance across teams and departments.",
    tech: ["Node.js", "Next.js", "Typescript", "supabase", "Resend API"],
    image: "/hrms4.jpg",
    live: "https://demostepup.vercel.app/",
    github: "https://github.com/cacorsams",
  },
];

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [imageIndex, setImageIndex] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (current === 2) {
      // third project (index 2)
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev === 0 ? 1 : 0));
      }, 2000);
      return () => clearInterval(interval);
    } else {
      setImageIndex(0);
    }
  }, [current]);

  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground",
        theme === "dark" ? "dark" : ""
      )}
    >
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold font-mono"
          >
            Seth
            <span className="text-green-500 dark:text-green-400">.</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={cn(
                  "font-mono text-sm transition-colors hover:text-green-500 dark:hover:text-green-400",
                  link.label === "Work" &&
                  "text-green-500 dark:text-green-400 border-b-2 border-green-500 dark:border-green-400"
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
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
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
                      link.label === "Work" &&
                      "text-green-500 dark:text-green-400 font-bold"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button
                  asChild
                  className="bg-green-500 dark:bg-green-400 text-background font-mono"
                >
                  <a
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
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
          <Card className="bg-background/80 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-extrabold font-mono">
                My Work
              </CardTitle>
              <p className="text-muted-foreground font-mono">
                A showcase of my projects, blending creativity, functionality,
                and cutting-edge technology.
              </p>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Left: Project Info */}
                  <div className="space-y-4">
                    <motion.span
                      className="text-5xl md:text-6xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400 dark:from-green-400 dark:to-green-500 drop-shadow-sm"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {projects[current].number}
                    </motion.span>
                    <h3 className="text-2xl md:text-3xl font-mono font-bold">
                      {projects[current].title}
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      {projects[current].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projects[current].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-foreground font-mono text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="font-mono hover:bg-green-500/20 hover:border-green-500"
                      >
                        <a
                          href={projects[current].live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Project
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="font-mono hover:bg-green-500/20 hover:border-green-500"
                      >
                        <a
                          href={projects[current].github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                  {/* Right: Project Image */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      className="rounded-lg overflow-hidden shadow-xl"
                    >
                      <Image
                        src={
                          current === 2
                            ? (projects[2].images && projects[2].images[imageIndex] ? projects[2].images[imageIndex] : "/fallback.jpg")
                            : projects[current].image
                              ? projects[current].image
                              : (projects[current].images && projects[current].images[0])
                                ? projects[current].images[0]
                                : "/fallback.jpg"
                        }
                        alt={projects[current].title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Navigation Arrows */}
              <div className="flex justify-end gap-2 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-green-500 dark:bg-green-400 text-background hover:bg-green-600 dark:hover:bg-green-500"
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === 0 ? projects.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous project"
                >
                  &lt;
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-green-500 dark:bg-green-400 text-background hover:bg-green-600 dark:hover:bg-green-500"
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === projects.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next project"
                >
                  &gt;
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}