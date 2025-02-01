// src/components/Layout/Portfolio.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

// Import sections
import AboutSection from "../Sections/AboutSection";
import ExperienceSection from "../Sections/ExperienceSection";
import ProjectsSection from "../Sections/ProjectsSection";
import ContactSection from "../Sections/ContactSection";

// Import UI components
import NavigationButton from "../UI/NavigationButton";
import SocialLinks from "../UI/SocialLinks";

const Portfolio = () => {
  const activeSection = useScrollSpy();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const navigationSections = ['about', 'experience', 'projects', 'contact'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Mobile menu classes
  const mobileMenuClasses = `
    fixed top-0 left-0 h-screen w-full lg:w-1/3 bg-gray-900 
    transform transition-transform duration-300 ease-in-out z-40
    lg:translate-x-0 p-8 flex flex-col justify-between
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-gray-800 lg:hidden"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left Section */}
      <div className={mobileMenuClasses}>
        <div
          className={`
          transform transition-all duration-1000 
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }
        `}
        >
          <h1 className="text-8xl font-bold mb-4 text-teal-400">
            Obinna Tochukwu
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Frontend web and software Developer crafting exceptional digital experiences, providing solutions and
            having fun with codes.
          </p>

          {/* Navigation */}
          <div className="space-y-4">
            {["about", "experience", "projects"].map((section) => (
              <NavigationButton
                key={section}
                label={section.charAt(0).toUpperCase() + section.slice(1)}
                isActive={activeSection === section}
                onClick={() => scrollToSection(section)}
              />
            ))}
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Right Section */}
      <main className="lg:w-2/3 lg:ml-[33.333333%] p-8 pl-16">
        <div className="space-y-2">
          <section id="about" className="min-h-screen py-16">
            <h2 className="text-2xl font-bold mb-6 text-teal-400">About</h2>
            <AboutSection />
          </section>

          <section id="experience" className="min-h-screen  py-16">
            <h2 className="text-2xl font-bold mb-6 text-teal-400">
              Experience
            </h2>
            <ExperienceSection />
          </section>

          <section id="projects" className="min-h-screen py-16">
            <h2 className="text-2xl font-bold mb-6 text-teal-400">Latest Projects</h2>
            <ProjectsSection />
          </section>

          <section id="contact" className="min-h-screen py-16">
            <ContactSection />
          </section>
        </div>
      </main>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Portfolio;
