// src/components/UI/SocialLinks.tsx
import React from "react";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";



const SocialLinks = () => {
  const handleResumeClick = () => {
    // Replace with your actual resume PDF URL
    window.open('/path-to-your-resume.pdf', '_blank');
  };
 

  return (
    <div className="space-y-4">
      <div className="flex space-x-6 text-gray-400">
        <a
          href="https://github.com/yourusername"
          className="hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          className="hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={24} />
        </a>
      </div>

      <div className="flex space-x-4">
        <a
          href="#contact"
          className="flex items-center space-x-2 text-sm text-teal-400 hover:text-teal-300 
                   transition-colors duration-200"
        >
          <Mail size={20} />
          <span>Hire Me</span>
        </a>

        <button
          onClick={handleResumeClick}
          className="flex items-center space-x-2 text-sm text-teal-400 hover:text-teal-300 
                   transition-colors duration-200"
        >
          <FileText size={20} />
          <span>Resume</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
