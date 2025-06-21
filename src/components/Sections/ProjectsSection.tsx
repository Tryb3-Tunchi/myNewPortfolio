// import React from "react";
import { Github, ExternalLink } from "lucide-react";
// import pic1 from "/"

const ProjectsContent = () => {
  const projects = [
    {
      title: "ASL Originals",
      description:
        "A full-stack web application for fashionable clothings and other stylic accessories, built with React, Node.js, and Django-py.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://asloriginals.netlify.app/credits",
      image: "/pic1.PNG",
    },
    {
      title: "Tryb3-Chaw",
      description:
        "An Online Food Delivery website that allows users to order food from various restaurants, track their orders, and manage their deliveries, built with React, Tailwind, and NodeJs..",

      technologies: ["React(vite)", "Node.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://famtrust-frontend-five.vercel.app",
      image: "/pic6.png",
    },
    {
      title: "MEDICARE FOR ALL",
      description:
        "A full-stack web application for a healthcare system that allows users to manage their health records, track their medical history, and manage their healthcare, built with React, Node.js, and MongoDB.",

      technologies: ["React(vite)", "Node.js", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/yourusername/project-one",
      live: "https://MEDICARE-FOR-ALL.vercel.app",
      image: "/pic7.png",
    },

    {
      title: "Famtrust",
      description:
        "A full-stack web application for finance and other value managements, built with React, Node.js, and MongoDB.",
      technologies: ["React(vite)", "Node.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://famtrust-frontend-five.vercel.app",
      image: "pics2.PNG",
    },
    {
      title: "Prestryb3 Finswap",
      description:
        "An Exchange platform for trading crypto currencies, buying and gift cards and also offer virtual card and other services built with React, Node.js, and MongoDB.",

      technologies: ["React(vite)", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Tryb3-Tunchi/prestyrb3.git",
      live: "https://prestryb3.vercel.app",
      image: "/pic8.png",
    },
    {
      title: "Amaziteacademy",
      description:
        "A full-stack web application for school data system and studies for pupils built with React(vite), Node.js, and typescript.",
      technologies: ["React(vite)", "Node.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://amaziteacademy.com",
      image: "pics3.PNG",
    },
    {
      title: "Trading Platform",
      description:
        "A Broker and Trading platform for easy and built in copy trading signals that is built with Typescript, Vite, Public and specificall construsted API and tailwind.",
      technologies: ["Typescript", "Trading API", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "COMING SOON",
      image: "pics5.png",
    },
    {
      title: "Tryb3-gpt Chat AI",
      description:
        "An AI chatting platform that detects any language, summarize and translate very effective and a good learning tool built with Typescript, chrome-AI API, and tailwind.",
      technologies: ["Typescript", "Chrome API", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://tryb3-gpt.netlify.app/",
      image: "pics4.png",
    },
    // Add more projects...
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                     transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                     border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />

          <div className="relative p-6">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-400/10 
                           px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={project.github}
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 
                         transition-colors duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href={project.live}
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 
                         transition-colors duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContent;
