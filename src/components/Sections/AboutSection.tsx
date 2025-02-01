// import React from 'react';

const AboutSection = () => {
  return (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-300">
        Hey! I'm Tochukwu, a frontend developer passionate about building exceptional digital experiences. 
        I specialize in creating responsive, user-friendly web applications using modern technologies 
        like React, TypeScript, and Tailwind CSS.
      </p>
      
      <p className="text-lg leading-relaxed text-gray-300">
        I focus on writing clean, efficient code and implementing intuitive user interfaces 
        that provide seamless experiences. Currently, I'm working on projects that push the 
        boundaries of web development while maintaining accessibility and performance.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-teal-400">Technologies I work with:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'React', 'TypeScript', 'Tailwind CSS',
            'Next.js', 'JavaScript (ES6+)', 'HTML & CSS',
            'Git', 'Node.js', 'REST APIs'
          ].map((tech) => (
            <div key={tech} className="flex items-center space-x-2">
              <span className="text-teal-400">▹</span>
              <span className="text-gray-300">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;