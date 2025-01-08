import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectsContent = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://project-one.com",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Project two",
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      technologies: ["React(vite)", "Node.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-one",
      live: "https://project-one.com",
      image: "/api/placeholder/600/400",
    },
    // Add more projects...
  ];

  return (
    <div className="grid gap-8">
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