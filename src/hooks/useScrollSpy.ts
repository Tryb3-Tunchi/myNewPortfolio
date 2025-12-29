import { useState, useEffect } from "react";

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      // Check for all possible sections
      const allSections = ["home", "about", "experience", "projects", "contact", "video-editing", "video-experience", "video-projects"];

      const sectionElements = allSections
        .map((section) => {
          const element = document.getElementById(section);
          return {
            id: section,
            element,
            offset: element?.offsetTop || 0,
          };
        })
        .filter((section) => section.element !== null)
        .sort((a, b) => a.offset - b.offset);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionElements[i].offset) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
