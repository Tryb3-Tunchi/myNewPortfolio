// src/components/Sections/VideoEditingSection.tsx
import { ExternalLink, Award, Instagram } from "lucide-react";

const VideoEditingSection = () => {
  const software = [
    "Adobe Premiere Pro",
    "Alight Motion",
    "CapCut",
    "Final Cut Pro",
    "Veo 3 (AI)",
    "Nanobana (AI)",
    "Canva",
    "AI Gen Vid",
    "Other AI Tools"
  ];

  const skills = [
    "Video Editing",
    "Motion Graphics & Typography Animation",
    "Storyboards & Storytelling",
    "Visual Design",
    "Creative Designs",
    "Product Explainer Videos",
    "Documentary Production",
    "TikTok-Style Content",
    "Viral Ad Creation",
    "B-roll Cinematography",
    "Music Video Production",
    "Vox Pop Creation",
    "Doodle Style Animation",
    "Movie Trailer Production"
  ];

  return (
    <div className="space-y-12">
      {/* Achievement Badge */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-700 dark:to-teal-500 rounded-xl p-8 text-white text-center shadow-2xl">
        <Award size={48} className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">HNG 13 Finalist</h2>
        <p className="text-lg opacity-90">
          Successfully completed all stages of the HNG Internship Video Editing Track
        </p>
        <p className="text-sm opacity-75 mt-2">Track: Video Editing | Username: Tunchi-Tryb3</p>
      </div>

      {/* Skills Section */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-6 text-teal-600 dark:text-teal-400">
          Video Editing Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-teal-500">▹</span>
              <span className="text-gray-700 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Software Section */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-6 text-teal-600 dark:text-teal-400">
          Software & Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {software.map((tool, index) => (
            <div
              key={index}
              className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800 text-center"
            >
              <span className="text-teal-700 dark:text-teal-300 font-medium">{tool}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Link */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-4">
            <Instagram size={32} className="text-pink-600 dark:text-pink-400" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                View My Work on Instagram
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Check out my latest video editing projects and creative work
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/kvng_tryb3/#" // User will update with actual Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span>Visit Instagram</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoEditingSection;

