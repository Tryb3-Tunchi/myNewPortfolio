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
      title: "Famtrust",
      description:
        "A full-stack web application for finance and other value managements, built with React, Node.js, and MongoDB.",
      technologies: ["React(vite)", "Node.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://famtrust-frontend-five.vercel.app",
      image: "pics2.PNG",
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
    <div className="grid gap-8 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 
                     hover:-translate-y-2 hover:shadow-xl"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover object-center"
          />

          <div className="relative p-6">
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={project.github}
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={project.live}
                className="text-gray-400 hover:text-teal-400 transition-colors"
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
