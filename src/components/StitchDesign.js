"use client";
import { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CoreCompetencies from "./CoreCompetencies";
import FeaturedProjects from "./FeaturedProjects";
import GithubPortfolio from "./GithubPortfolio";
import Experience from "./Experience";
import Certifications from "./Certifications";
import OnlineCourses from "./OnlineCourses";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

export default function StitchDesign({ data }) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar data={data.navbar} />
      <main className="flex flex-col gap-12">
        <SectionFadeIn><Hero data={data.hero} /></SectionFadeIn>
        <SectionFadeIn><CoreCompetencies data={data.coreCompetencies} /></SectionFadeIn>
        <SectionFadeIn><FeaturedProjects data={data.featuredProjects} /></SectionFadeIn>
        <SectionFadeIn><GithubPortfolio data={data.githubPortfolio} /></SectionFadeIn>
        <SectionFadeIn><Experience data={data.experience} /></SectionFadeIn>
        <SectionFadeIn><Certifications data={data.certifications} /></SectionFadeIn>
        <SectionFadeIn><OnlineCourses data={data.onlineCourses} /></SectionFadeIn>
        <SectionFadeIn><AboutMe data={data.aboutMe} /></SectionFadeIn>
      </main>
      <Footer data={data.footer} />
    </div>
  );
}

// Fade-in animation wrapper for sections
function SectionFadeIn({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.add("opacity-0", "translate-y-6");
    const handle = setTimeout(() => {
      node.classList.remove("opacity-0", "translate-y-6");
      node.classList.add("opacity-100", "translate-y-0");
    }, 100);
    return () => clearTimeout(handle);
  }, []);

  return (
    <section
      ref={ref}
      className="transition-all duration-700 opacity-0 translate-y-6"
    >
      {children}
    </section>
  );
}