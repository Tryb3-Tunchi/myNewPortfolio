// src/components/Sections/VideoExperienceSection.tsx

const VideoExperienceSection = () => {
  const videoExperiences = [
    {
      company: "HNG INTERNSHIP - HNG 13",
      position: "Video Editor (Finalist)",
      period: "September - December 2025",
      description: [
        "Successfully completed all stages (0-10) of the HNG 13 Video Editing Track as a finalist",
        "Created product explainer videos, motion graphics ads, and viral-style content using Adobe Premiere Pro, Alight Motion, and AI tools",
        "Produced educational TikTok-style videos on Nigerian history combining storytelling, animation, and motion graphics",
        "Directed and edited a short-form documentary on O.D.I.N.A.K.A fashion brand, blending interviews, storytelling, and B-roll cinematography",
        "Developed high-energy product ads for FieldPath Pro and MenuCard using cinematic transitions and modern editing techniques",
        "Utilized AI tools including Veo3, Nanobana, and AI Gen Vid to enhance video production workflow",
      ],
    },
    {
      company: "PROVA INTERNSHIP",
      position: "Video Editor (Virtual Assistant)",
      period: "Started May 2025",
      description: [
        "Working as a Video Editor (Virtual Assistant) for a company that creates and runs Ads, using AI and modern technologies to offer solutions for its clients.",
        "Created and edited fate removal video content, utilizing advanced cloning and cutting techniques to produce seamless visual effects and compelling narratives",
        "Developed static ads for a love supplements pills brand, creating eye-catching visuals that effectively communicate product benefits and brand messaging",
        "Produced promotional content for pendant accessories for health use brand, combining product photography with motion graphics to showcase features and benefits",
        "Worked on various other ad campaigns, applying creative editing techniques and modern video production methods to deliver high-quality marketing content",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {videoExperiences.map((exp, index) => (
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

export default VideoExperienceSection;

