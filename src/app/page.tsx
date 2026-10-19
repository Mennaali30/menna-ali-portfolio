import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import FeaturedProjects from "@/components/FeaturedProjects";
import FrontendProjects from "@/components/FrontendProjects";
import SecondaryWebProjects from "@/components/SecondaryWebProjects";
import AiMlProjects from "@/components/AiMlProjects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F7F4] text-[#202124] selection:bg-[#FFCAD4] selection:text-[#202124]">
      {/* Global Header */}
      <Navbar />

      {/* Main Content Landmark in Exact Specified Order */}
      <main id="main-content" className="relative">
        {/* Section B: Hero */}
        <Hero />

        {/* Section C: About Me */}
        <About />

        {/* Section D: Two Specialization Cards */}
        <Specializations />

        {/* Section E: Featured Projects */}
        <FeaturedProjects />

        {/* Section F: Frontend Projects */}
        <FrontendProjects />

        {/* Section G: Secondary Web Projects Gallery */}
        <SecondaryWebProjects />

        {/* Section H: AI & Machine Learning Projects */}
        <AiMlProjects />

        {/* Section I: Experience and Training */}
        <Experience />

        {/* Section J: Education */}
        <Education />

        {/* Section K: Skills */}
        <Skills />

        {/* Section L: Contact */}
        <Contact />
      </main>

      {/* Section M: Footer */}
      <Footer />
    </div>
  );
}
