// import React from 'react';

const ExperienceContent = () => {
  const experiences = [
    {
      company: "PROVA INTRNSHIP",
      position: "Video Editor (Virtual Assistant)",
      period: "2024 - 2025",
      description: [
        "Working as a Video Editor (Virtual Assistant) for a company that creates and run Ads, using AI and modern technologies to offer solutions for its clients.",
      ],
    },
    {
      company: "BRAINWAVE MATRIX SOLUTIONS",
      position: "Full-Stack Developer",
      period: "2025 - Present",
      description: [
        "New intern as a Full-Stack Developer, working on a projects that serve as a web application for a company that provides services to the public.",
      ],
    },
    {
      company: "HNG INTERNSHIP",
      position: "Web Development Intern",
      period: "2024 - 2025",
      description: [
        "Developed and maintained client-facing applications using React and TypeScript",
        "Collaborated with designers to implement pixel-perfect interfaces and responsive designs",
        "Reduced loading times by 60% through optimization techniques and code splitting",
        "Implemented state management solutions using Redux and Context API",
        "Worked with REST APIs and integrated various third-party services",
      ],
    },
    {
      company: "FluxDev",
      position: "Full-Stack Developer",
      period: "2023 - Present",
      description: [
        "Lead development of modern full-stack web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and improved site performance by 40% through optimization techniques",
        "Built RESTful APIs and integrated third-party services for enhanced functionality",
        "Mentored junior developers and established coding standards and best practices",
        "Collaborated with cross-functional teams to deliver high-quality products on time",
      ],
    },
    {
      company: "InternPulse Company",
      position: "Frontend Developer",
      period: "2022 - 2023",
      description: [
        "Developed and maintained client-facing applications using React and TypeScript",
        "Collaborated with designers to implement pixel-perfect interfaces and responsive designs",
        "Reduced loading times by 60% through optimization techniques and code splitting",
        "Implemented state management solutions using Redux and Context API",
        "Worked with REST APIs and integrated various third-party services",
      ],
    },
    {
      company: "GoMyCode",
      position: "UI/UX Developer & Mentor",
      period: "2021 - 2022",
      description: [
        "Designed and developed user interfaces for web applications using modern design principles",
        "Mentored students in web development fundamentals and best practices",
        "Created interactive prototypes and wireframes using Figma and Adobe XD",
        "Conducted user research and usability testing to improve user experience",
        "Collaborated with development teams to ensure design feasibility and implementation",
      ],
    },
    {
      company: "Freelance Projects",
      position: "Full-Stack Developer",
      period: "2021 - Present",
      description: [
        "Built complete web applications from concept to deployment for various clients",
        "Developed e-commerce platforms, portfolio websites, and business management systems",
        "Implemented authentication systems, payment gateways, and database management",
        "Provided ongoing maintenance and support for client applications",
        "Worked with diverse technologies including React, Node.js, MongoDB, and PostgreSQL",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="group relative pl-8 border-l-2 border-gray-300 dark:border-gray-700 
                     hover:border-teal-500 dark:hover:border-teal-400 transition-colors duration-300
                     bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700
                     hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <div
            className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-700 
                        border-2 border-white dark:border-gray-800 
                        group-hover:bg-teal-500 dark:group-hover:bg-teal-400 group-hover:scale-110 
                        transition-all duration-300"
          />

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              {exp.position}
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 font-medium mb-1">
              {exp.company}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {exp.period}
            </p>
          </div>

          <ul className="space-y-3">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="text-teal-500 mt-1 flex-shrink-0">▹</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
