"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, easeOut, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const stats = [
  { value: "3", label: "Years of experience" },
  { value: "12", label: "Projects completed" },
  { value: "8", label: "Technologies mastered" },
  { value: "500", label: "Code commits" },
];

const socialLinks = [
  { 
    href: "#", 
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
      </svg>
    ), 
    label: "GitHub" 
  },
  { 
    href: "#", 
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    ), 
    label: "WhatsApp" 
  },
  { 
    href: "#", 
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ), 
    label: "Instagram" 
  },
  { 
    href: "#", 
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ), 
    label: "Twitter" 
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
  const headerBackground = useTransform(scrollY, [0, 200], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* Header */}
      <motion.header
        className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40"
        style={{ opacity: headerOpacity, background: headerBackground }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
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
                  link.label === "Home" && "text-green-500 dark:text-green-400 border-b-2 border-green-500 dark:border-green-400"
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
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Hire Me
              </motion.a>
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
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </motion.svg>
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
                      link.label === "Home" && "text-green-500 dark:text-green-400 font-bold"
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
                  <motion.a
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hire Me
                  </motion.a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <motion.main
        className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground transition-colors duration-500 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 pt-12 pb-16 flex flex-col items-center gap-12 md:gap-16">
          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
            {/* Left: Text */}
            <motion.div className="flex-1 flex flex-col gap-6 items-start" variants={itemVariants}>
              <motion.span
                className="text-muted-foreground text-sm sm:text-base font-mono tracking-wide uppercase"
                variants={itemVariants}
              >
                Software Developer
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono leading-tight"
                variants={itemVariants}
              >
                Hello I&apos;m <br />
                <span className="text-green-400 dark:text-green-300 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Seth Araka
                </span>
              </motion.h1>
              <motion.p
                className="text-muted-foreground max-w-md text-sm sm:text-base md:text-lg font-mono"
                variants={itemVariants}
              >
                I craft elegant digital experiences with proficiency in modern programming languages and cutting-edge technologies.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full" variants={itemVariants}>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-green-400 dark:border-green-300 text-green-400 dark:text-green-300 font-mono font-bold px-6 py-2 rounded-full hover:bg-green-400/20 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  <motion.a
                    href="/sample-cv.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    DOWNLOAD CV
                  </motion.a>
                </Button>
                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 ml-0 sm:ml-4">
                  {[
                    { src: "/cplusplus.png", alt: "C++" },
                    { src: "/docker.png", alt: "Docker" },
                    { src: "/express.png", alt: "Express" },
                    { src: "/figma.png", alt: "Figma" },
                    { src: "/fnb.png", alt: "FNB" },
                    { src: "/github.png", alt: "GitHub" },
                    { src: "/html.png", alt: "HTML" },
                    { src: "/java script.png", alt: "JavaScript" },
                    { src: "/java.png", alt: "Java" },
                    { src: "/js.png", alt: "JS" },
                    { src: "/nextjs.png", alt: "Next.js" },
                    { src: "/nodejs.png", alt: "Node.js" },
                    { src: "/postgress.png", alt: "PostgreSQL" },
                    { src: "/python.png", alt: "Python" },
                    { src: "/react.png", alt: "React" },
                    { src: "/supabase.png", alt: "Supabase" },
                    { src: "/tailwind.png", alt: "Tailwind" },
                    { src: "/vercel.png", alt: "Vercel", priority: true },
                    { src: "/vscode.png", alt: "VS Code" },
                    { src: "/firebase.png", alt: "Firebase" },
                    { src: "/mongodb.png", alt: "MongoDB" },
                    { src: "/git.png", alt: "Git" },
                  ].map((img, idx) => (
                    <motion.span
                      key={idx}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-400 dark:border-green-300 flex items-center justify-center bg-background shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src={img.src} alt={img.alt} width={24} height={24} className="sm:w-8 sm:h-8" />
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              {/* Social links */}
              <motion.div className="flex gap-3 mt-6" variants={itemVariants}>
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="rounded-full border border-green-400 dark:border-green-300 p-2 sm:p-2.5 hover:bg-green-400/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="text-green-400 dark:text-green-300">
                      {link.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            {/* Right: Animated Circle with Image */}
            <motion.div className="flex-1 flex items-center justify-center relative" variants={itemVariants}>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 360 360"
                  fill="none"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
                >
                  <circle
                    cx="180"
                    cy="180"
                    r="170"
                    stroke="#22d3ee"
                    strokeWidth="5"
                    strokeDasharray="15 20"
                    strokeLinecap="round"
                    className="dark:stroke-green-300 stroke-green-400"
                  />
                  <circle
                    cx="180"
                    cy="180"
                    r="150"
                    stroke="#22d3ee"
                    strokeWidth="3"
                    strokeDasharray="10 15"
                    strokeLinecap="round"
                    className="dark:stroke-green-300 stroke-green-400 opacity-50"
                  />
                </svg>
              </motion.div>
              <motion.div
                className="relative z-10 rounded-full overflow-hidden shadow-xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-background flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/seth.png"
                  alt="Profile"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
          {/* Stats */}
          <motion.div
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12"
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-lg bg-background/50 dark:bg-background/30 hover:bg-green-400/10 dark:hover:bg-green-300/10 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm md:text-base text-center mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
