// import React from 'react';

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hey! I'm Tochukwu, a passionate full-stack developer who loves
            building exceptional digital experiences. I specialize in creating
            responsive, user-friendly web applications using modern technologies
            like React, TypeScript, Node.js, and MongoDB.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I focus on writing clean, efficient code and implementing intuitive
            user interfaces that provide seamless experiences. Currently, I'm
            working on projects that push the boundaries of web development
            while maintaining accessibility and performance.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With expertise in both frontend and backend development, I can build
            complete web applications from database design to user interface
            implementation. I'm always eager to learn new technologies and take
            on challenging projects.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-6 text-teal-600 dark:text-teal-400">
            Technologies I work with:
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
                Frontend
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "JavaScript (ES6+)",
                  "HTML & CSS",
                  "Redux",
                  "Vite",
                ].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <span className="text-teal-500">▹</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
                Backend
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                  "JWT Authentication",
                  "Socket.io",
                  "Mongoose",
                  "PostgreSQL",
                ].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <span className="text-teal-500">▹</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
                Tools & Others
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Git & GitHub",
                  "Docker",
                  "Postman",
                  "VS Code",
                  "Figma",
                  "Responsive Design",
                  "RESTful APIs",
                  "Agile/Scrum",
                ].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <span className="text-teal-500">▹</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
