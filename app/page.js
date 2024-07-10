"use client";

import { useEffect, useState } from "react";
import AboutSection from "./component/AboutSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import ProjectSection from "./component/ProjectSection";
import useDarkMode from "./hooks/darkMode";

export default function Home() {
  const { isDarkMode, toggleMode } = useDarkMode();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; 
  }

  return (
    <main className={`flex min-h-screen flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer isDarkMode={isDarkMode} toggleMode={toggleMode} />
    </main>
  );
}
