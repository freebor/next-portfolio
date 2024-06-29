import AboutSection from "./component/AboutSection";
import Archieve from "./component/Archieve";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import ProjectSection from "./component/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Archieve />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>  
      <Footer />
    </main>
  );
}
