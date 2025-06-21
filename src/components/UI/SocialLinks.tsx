// src/components/UI/SocialLinks.tsx
// import React from "react";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const SocialLinks = () => {
  const handleResumeClick = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl =
      "https://docs.google.com/file/d/1Nur4SHSiSn8-5_wKl9L07cPDaB08N8rR/edit?usp=docslist_api&filetype=msword";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/tryb3-tunchi"
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/obinnatochukwu"
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://twitter.com/itstunchi"
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter size={24} />
        </a>
      </div>

      <div className="flex flex-col space-y-3">
        <a
          href="#contact"
          className="flex items-center space-x-2 text-sm text-teal-600 dark:text-teal-400 
                   hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200
                   font-medium"
        >
          <Mail size={20} />
          <span>Hire Me</span>
        </a>

        <button
          onClick={handleResumeClick}
          className="flex items-center space-x-2 text-sm text-teal-600 dark:text-teal-400 
                   hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200
                   font-medium"
        >
          <FileText size={20} />
          <span>Resume</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
