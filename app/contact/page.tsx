"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Moon, Sun, Mail, Phone, MapPin } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

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

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [state, handleSubmit] = useForm("mdkdzkaz");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  // Update formStatus based on Formspree state
  React.useEffect(() => {
    if (state.succeeded) {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    } else if (state.errors) {
      setFormStatus("error");
    }
  }, [state.succeeded, state.errors]);

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
                  link.label === "Contact" && "text-green-500 dark:text-green-400 border-b-2 border-green-500 dark:border-green-400"
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
                      link.label === "Contact" && "text-green-500 dark:text-green-400 font-bold"
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
                  Get to Know Me
                </CardTitle>
                <p className="text-muted-foreground font-mono">
                  Explore my background, skills, and passion for building impactful solutions.
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

            {/* Right: Contact Form and Info */}
            <Card className="bg-background/80 backdrop-blur border-border/40">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-extrabold font-mono">
                  Contact Me
                </CardTitle>
                <p className="text-muted-foreground font-mono">
                  Let's connect! Send me a message or reach out directly.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-mono">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="font-mono bg-muted/50 border-border/40"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-500 dark:text-red-400 font-mono text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-mono">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="font-mono bg-muted/50 border-border/40"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 dark:text-red-400 font-mono text-sm mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-mono">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      className="font-mono bg-muted/50 border-border/40 min-h-[100px]"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 dark:text-red-400 font-mono text-sm mt-1"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-green-500 dark:bg-green-400 text-background hover:bg-green-600 dark:hover:bg-green-500 font-mono"
                  >
                    Send Message
                  </Button>
                  <AnimatePresence>
                    {formStatus === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-green-500 dark:text-green-400 font-mono text-sm"
                      >
                        Message sent successfully!
                      </motion.p>
                    )}
                    {formStatus === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-red-500 dark:text-red-400 font-mono text-sm"
                      >
                        Failed to send message. Please try again.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
                {/* Contact Info */}
                <div className="space-y-4 pt-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <Mail className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <a href="mailto:setharakamorisi@gmail.com" className="font-mono text-sm hover:text-green-500 dark:hover:text-green-400">
                      setharakamorisi@gmail.com
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <Phone className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <a href="tel:+1234567890" className="font-mono text-sm hover:text-green-500 dark:hover:text-green-400">
                      + (254) 703809750                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <MapPin className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <span className="font-mono text-sm">Nairobi, Kenya</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>
    </div>
  );
}