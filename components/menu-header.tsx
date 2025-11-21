"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function MenuHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between bg-background text-foreground shadow-sm z-50 relative">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold font-mono flex items-center">
        Seth<span className="text-green-400 dark:text-green-300 ml-1">.</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "font-mono text-base transition-colors px-1",
              link.label === "Home"
                ? "text-green-400 dark:text-green-300 font-bold border-b-2 border-green-400 dark:border-green-300"
                : "hover:text-green-400 dark:hover:text-green-300"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="ml-4 px-5 py-2 rounded-full bg-green-400 dark:bg-green-300 text-background font-mono font-bold hover:bg-green-500 transition-colors"
        >
          Hire me
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={cn("block w-6 h-0.5 bg-foreground mb-1 transition-all", menuOpen && "rotate-45 translate-y-1.5")} />
        <span className={cn("block w-6 h-0.5 bg-foreground mb-1 transition-all", menuOpen && "opacity-0")} />
        <span className={cn("block w-6 h-0.5 bg-foreground transition-all", menuOpen && "-rotate-45 -translate-y-1.5")} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg flex flex-col items-center py-4 gap-4 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-mono text-lg transition-colors",
                link.label === "Home"
                  ? "text-green-400 dark:text-green-300 font-bold"
                  : "hover:text-green-400 dark:hover:text-green-300"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-green-400 dark:bg-green-300 text-background font-mono font-bold hover:bg-green-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Hire me
          </Link>
        </div>
      )}
    </header>
  );
} 