// src/components/Layout/Portfolio.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

// Import sections
import HomeSection from "../Sections/HomeSection";
import AboutSection from "../Sections/AboutSection";
import DevExperienceSection from "../Sections/DevExperienceSection";
import ProjectsSection from "../Sections/ProjectsSection";
import ContactSection from "../Sections/ContactSection";
import VideoEditingSection from "../Sections/VideoEditingSection";
import VideoExperienceSection from "../Sections/VideoExperienceSection";
import VideoProjectsSection from "../Sections/VideoProjectsSection";

// Import UI components
import NavigationButton from "../UI/NavigationButton";
import SocialLinks from "../UI/SocialLinks";
import ThemeToggle from "../UI/ThemeToggle";

const Portfolio = () => {
  const activeSection = useScrollSpy();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"developer" | "editor">("developer");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Sidebar classes with theme support
  const sidebarClasses = `
    fixed top-0 left-0 h-screen w-80 bg-white dark:bg-gray-900 
    transform transition-transform duration-500 ease-in-out z-40
    shadow-2xl border-r border-gray-200 dark:border-gray-700
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `;

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
    >
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-white dark:bg-gray-800 
                   shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden
                   border border-gray-200 dark:border-gray-700"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={sidebarClasses}>
        <div
          className={`
          transform transition-all duration-1000 w-full h-full p-8 flex flex-col justify-between
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }
        `}
        >
          <div className="flex-1">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-teal-600 dark:text-teal-400 leading-tight">
              Obinna Tochukwu
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Full-Stack Developer & Video Editor crafting exceptional digital experiences, providing solutions and having fun with codes and creative visuals.
            </p>

            {/* Navigation */}
            <div className="space-y-2">
              {currentView === "developer" 
                ? ["home", "about", "experience", "projects", "contact"].map((section) => (
                    <NavigationButton
                      key={section}
                      label={section.charAt(0).toUpperCase() + section.slice(1)}
                      isActive={activeSection === section}
                      onClick={() => scrollToSection(section)}
                    />
                  ))
                : ["home", "video-editing", "video-experience", "video-projects"].map((section) => {
                    const labels: { [key: string]: string } = {
                      "home": "Home",
                      "video-editing": "Skills & Tools",
                      "video-experience": "Experience",
                      "video-projects": "Projects"
                    };
                    return (
                      <NavigationButton
                        key={section}
                        label={labels[section]}
                        isActive={activeSection === section}
                        onClick={() => scrollToSection(section)}
                      />
                    );
                  })
              }
            </div>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:ml-80 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Homepage Section */}
          <section id="home" className="min-h-screen py-16">
            <HomeSection onToggle={setCurrentView} currentView={currentView} />
          </section>

          {currentView === "developer" ? (
            <>
              <section id="about" className="min-h-screen py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400">
                  About
                </h2>
                <AboutSection />
              </section>

              <section id="experience" className="min-h-screen py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400">
                  Experience
                </h2>
                <DevExperienceSection />
              </section>

              <section id="projects" className="min-h-screen py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400">
                  Latest Projects
                </h2>
                <ProjectsSection />
              </section>

              <section id="contact" className="min-h-screen py-16">
                <ContactSection />
              </section>
            </>
          ) : (
            <>
              <section id="video-editing" className="min-h-screen py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400">
                  Skills & Tools
                </h2>
                <VideoEditingSection />
              </section>

              <section id="video-experience" className="min-h-screen py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400">
                  Experience
                </h2>
                <VideoExperienceSection />
              </section>

              <section id="video-projects" className="min-h-screen py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400">
                  Video Projects
                </h2>
                <VideoProjectsSection />
              </section>
            </>
          )}
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
