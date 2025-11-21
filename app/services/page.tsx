"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
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

// Service data with detailed content
const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Crafting responsive, high-performance websites tailored to your business needs.",
    details: (
      <div className="space-y-4">
        <p className="text-muted-foreground font-mono">
          I specialize in building modern web applications using cutting-edge technologies like Next.js, React, and TypeScript. From e-commerce platforms to dynamic dashboards, I ensure seamless user experiences, optimized performance, and scalability.
        </p>
        <ul className="list-disc pl-5 text-muted-foreground font-mono">
          <li>Custom web app development with Next.js and React</li>
          <li>API integration and server-side rendering</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Performance optimization and SEO best practices</li>
        </ul>
      </div>
    ),
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces that prioritize user experience.",
    details: (
      <div className="space-y-4">
        <p className="text-muted-foreground font-mono">
          I create user-centric designs with a focus on usability and aesthetics, using tools like Figma to craft wireframes, prototypes, and pixel-perfect interfaces. My designs enhance engagement and streamline user journeys.
        </p>
        <ul className="list-disc pl-5 text-muted-foreground font-mono">
          <li>Wireframing and prototyping with Figma</li>
          <li>Responsive and adaptive design systems</li>
          <li>User research and usability testing</li>
          <li>Design-to-code implementation with Tailwind CSS</li>
        </ul>
      </div>
    ),
  },
  {
    number: "03",
    title: "Logo Design",
    description: "Creating unique and memorable logos that reflect your brand identity.",
    details: (
      <div className="space-y-4">
        <p className="text-muted-foreground font-mono">
          I design distinctive logos that capture the essence of your brand, ensuring versatility across digital and print media. Each logo is crafted to be timeless, scalable, and impactful.
        </p>
        <ul className="list-disc pl-5 text-muted-foreground font-mono">
          <li>Brand identity development</li>
          <li>Custom logo design with vector outputs</li>
          <li>Color palette and typography selection</li>
          <li>Brand guideline creation</li>
        </ul>
      </div>
    ),
  },
  {
    number: "04",
    title: "SEO",
    description: "Optimizing your website to rank higher on search engines and drive organic traffic.",
    details: (
      <div className="space-y-4">
        <p className="text-muted-foreground font-mono">
          I provide comprehensive SEO services to boost your website's visibility, from on-page optimization to technical SEO. My strategies are data-driven to ensure measurable results and long-term growth.
        </p>
        <ul className="list-disc pl-5 text-muted-foreground font-mono">
          <li>Keyword research and content optimization</li>
          <li>Technical SEO (site speed, schema markup)</li>
          <li>Link-building strategies</li>
          <li>Analytics and performance tracking</li>
        </ul>
      </div>
    ),
  },
];

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeService, setActiveService] = useState<string | null>(null);

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
                  link.label === "Services" && "text-green-500 dark:text-green-400 border-b-2 border-green-500 dark:border-green-400"
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
                      link.label === "Services" && "text-green-500 dark:text-green-400 font-bold"
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
          <Card className="bg-background/80 backdrop-blur border-border/40">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-extrabold font-mono">
                My Services
              </CardTitle>
              <p className="text-muted-foreground font-mono">
                Explore the range of professional services I offer to bring your ideas to life with precision and creativity.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-background/80 rounded-xl p-6 shadow border border-border/40 flex flex-col gap-4 relative overflow-hidden"
                  >
                    {/* Number and Arrow */}
                    <div className="flex items-center justify-between">
                      <motion.span
                        className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400 dark:from-green-400 dark:to-green-500 drop-shadow-sm"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {service.number}
                      </motion.span>
                      <motion.span
                        whileHover={{ rotate: 90 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-background shadow border-2 border-border"
                      >
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </motion.span>
                    </div>
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-mono font-bold">{service.title}</h3>
                    {/* Description */}
                    <p className="text-muted-foreground font-mono text-sm sm:text-base">{service.description}</p>
                    {/* Learn More Button */}
                    <Button
                      variant="outline"
                      className="font-mono hover:bg-green-500/20 hover:border-green-500"
                      onClick={() => setActiveService(activeService === service.title ? null : service.title)}
                    >
                      {activeService === service.title ? "Hide Details" : "Learn More"}
                    </Button>
                    {/* Detailed Content */}
                    <AnimatePresence>
                      {activeService === service.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          {service.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Divider */}
                    <div className="border-t border-border mt-4" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}