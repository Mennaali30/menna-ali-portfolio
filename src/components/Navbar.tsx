"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Frontend", href: "#frontend" },
  { name: "AI & ML", href: "#ai-ml" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY < 100) {
        setActiveSection("home");
        return;
      }

      if (windowHeight + scrollY >= documentHeight - 60) {
        setActiveSection("contact");
        return;
      }

      const thresholdLine = 120;
      const sectionIds = ["home", "about", "frontend", "ai-ml", "experience", "contact"];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= thresholdLine && rect.bottom > thresholdLine) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setActiveSection(targetId);
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F7F4]/90 backdrop-blur-xl border-b border-[#E7E5E0] py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Menna Ali Abdelrahman Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9D8189] via-[#F4ACB7] to-[#6C63FF] p-[1.5px] shadow-xs transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#202124] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-[#FFCAD4] via-white to-[#F4ACB7] bg-clip-text text-transparent">
                  MA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#202124] text-sm sm:text-base tracking-tight group-hover:text-[#9D8189] transition-colors">
                Menna Ali
              </span>
              <span className="text-[11px] font-mono text-[#686868] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4ACB7]" />
                <span>Frontend & AI/ML</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/80 border border-[#E7E5E0] backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#202124] text-white font-semibold shadow-xs"
                      : "text-[#686868] hover:text-[#202124] hover:bg-[#F8F7F4]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#202124] hover:bg-[#202124]/90 text-white shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFCAD4]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-[#E7E5E0] text-[#202124] hover:bg-[#F8F7F4] focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 border-b border-[#E7E5E0] backdrop-blur-2xl transition-all">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#202124] text-white font-semibold"
                      : "text-[#686868] hover:bg-[#F8F7F4] hover:text-[#202124]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-[#E7E5E0]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#202124] text-white shadow-xs"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFCAD4]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
