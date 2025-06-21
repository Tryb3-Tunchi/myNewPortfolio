import { useState, useEffect } from "react";

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];

      const sectionElements = sections.map((section) => ({
        id: section,
        element: document.getElementById(section),
        offset: document.getElementById(section)?.offsetTop || 0,
      }));

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
