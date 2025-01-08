import React from 'react';

const ExperienceContent = () => {
  const experiences = [
    {
      company: 'FluxDev',
      position: 'Junior Frontend Developer',
      period: '2023 - Present',
      description: [
        'Lead development of modern web applications using React and TypeScript',
        'Implemented responsive designs and improved site performance by 40%',
        'Mentored junior developers and established coding standards'
      ]
    },
    {
      company: 'InternPulse Company',
      position: 'Frontend Developer',
      period: '2021 - 2023',
      description: [
        'Developed and maintained client-facing applications',
        'Collaborated with designers to implement pixel-perfect interfaces',
        'Reduced loading times by 60% through optimization techniques'
      ]
    },
    {
      company: 'GoMyCode ',
      position: 'UI/UX',
      period: '2021 - 2023',
      description: [
        'Developed and maintained client-facing applications',
        'Collaborated with designers to implement pixel-perfect interfaces',
        'Reduced loading times by 60% through optimization techniques'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div 
          key={index}
          className="group relative pl-8 border-l-2 border-gray-700 hover:border-teal-400 transition-colors duration-300"
        >
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-700 border-2 border-gray-900 
                        group-hover:bg-teal-400 group-hover:scale-110 transition-all duration-300" />
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-teal-400">{exp.position}</h3>
            <p className="text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
          </div>
          
          <ul className="space-y-2">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-teal-400 mt-1">▹</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;