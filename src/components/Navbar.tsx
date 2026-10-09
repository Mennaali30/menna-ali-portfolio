"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#D8E2DC] py-3 shadow-sm"
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9D8189] via-[#F4ACB7] to-[#D8E2DC] p-[1px] shadow-sm transition-shadow">
              <div className="w-full h-full bg-[#222629] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-[#FFCAD4] to-white bg-clip-text text-transparent">
                  MA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[#222629] text-sm sm:text-base tracking-tight group-hover:text-[#9D8189] transition-colors">
                Menna Ali
              </span>
              <span className="text-[11px] font-mono text-[#9D8189] flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4ACB7] animate-pulse" />
                AI & ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#D8E2DC]/50 border border-[#9D8189]/25 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#F4ACB7] text-[#222629] font-semibold shadow-sm border border-[#F4ACB7]"
                      : "text-[#222629]/75 hover:text-[#222629] hover:bg-[#D8E2DC]/80"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#F4ACB7] hover:bg-[#F4ACB7]/90 text-[#222629] border border-[#F4ACB7] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-[#D8E2DC] text-[#222629] hover:bg-[#D8E2DC]/50 focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 border-b border-[#D8E2DC] backdrop-blur-2xl transition-all">
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
                      ? "bg-[#FFCAD4]/60 text-[#222629] border border-[#F4ACB7]/50 font-semibold"
                      : "text-[#222629]/80 hover:bg-[#D8E2DC]/40"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-[#D8E2DC]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#F4ACB7] text-[#222629] border border-[#F4ACB7] shadow-sm"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
