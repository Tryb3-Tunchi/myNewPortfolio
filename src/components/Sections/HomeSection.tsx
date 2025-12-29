// src/components/Sections/HomeSection.tsx
import { Video, Code } from "lucide-react";

interface HomeSectionProps {
  onToggle: (view: "developer" | "editor") => void;
  currentView: "developer" | "editor";
}

const HomeSection = ({ onToggle, currentView }: HomeSectionProps) => {
  const handleToggle = (view: "developer" | "editor") => {
    onToggle(view);
    // Scroll to home section after a brief delay to allow view to update
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-teal-600 dark:text-teal-400 mb-6">
          Obinna Tochukwu
        </h1>
        <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4">
          Full-Stack Developer & Video Editor
        </p>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I'm a creative and detail-driven Full-Stack Developer and Video Editor passionate about 
          building engaging digital experiences. Throughout my journey, I've worked on multiple 
          collaborative projects that strengthened my skills in React, Tailwind CSS, backend 
          technologies, motion graphics, and storytelling through visuals. I enjoy combining design 
          and functionality to deliver impactful results.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
        <button
          onClick={() => handleToggle("developer")}
          className={`
            group relative px-8 py-6 rounded-xl text-lg font-semibold
            transition-all duration-300 transform hover:scale-105
            flex items-center gap-4 min-w-[280px]
            ${
              currentView === "developer"
                ? "bg-teal-600 dark:bg-teal-500 text-white shadow-2xl"
                : "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-2 border-teal-600 dark:border-teal-400 shadow-lg hover:shadow-xl"
            }
          `}
        >
          <Code 
            size={28} 
            className={currentView === "developer" ? "text-white" : "text-teal-600 dark:text-teal-400"}
          />
          <span>Web Developer</span>
          {currentView === "developer" && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </button>

        <button
          onClick={() => handleToggle("editor")}
          className={`
            group relative px-8 py-6 rounded-xl text-lg font-semibold
            transition-all duration-300 transform hover:scale-105
            flex items-center gap-4 min-w-[280px]
            ${
              currentView === "editor"
                ? "bg-teal-600 dark:bg-teal-500 text-white shadow-2xl"
                : "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-2 border-teal-600 dark:border-teal-400 shadow-lg hover:shadow-xl"
            }
          `}
        >
          <Video 
            size={28} 
            className={currentView === "editor" ? "text-white" : "text-teal-600 dark:text-teal-400"}
          />
          <span>Video Editor</span>
          {currentView === "editor" && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">HNG 13</div>
          <div className="text-gray-600 dark:text-gray-400">Finalist</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">Full-Stack</div>
          <div className="text-gray-600 dark:text-gray-400">Developer</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">Creative</div>
          <div className="text-gray-600 dark:text-gray-400">Video Editor</div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

