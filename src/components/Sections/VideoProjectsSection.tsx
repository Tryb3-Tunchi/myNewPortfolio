// src/components/Sections/VideoProjectsSection.tsx
import { ExternalLink, Video as VideoIcon } from "lucide-react";

const VideoProjectsSection = () => {
  const videoProjects = [
    {
      title: "Product Explainer Intro",
      type: "Product Explainer",
      tools: "Canva/Premier Pro",
      description: "Created a short promotional video introducing one of HNG's products using Canva. Designed transitions, motion graphics, and text animations to clearly communicate the product's purpose while practicing smooth pacing and layout consistency.",
      link: "https://drive.google.com/file/d/12tkKmvZPAPU9Mt1W70-U6KP7V1VEzpw1/view?usp=drive_link", // User will update with actual drive link
      thumbnail: "/vpics4.png"
    },
    {
      title: "Nigerian Historical Personality & Event Challenge",
      type: "Educational Content",
      tools: "AI (Veo3)/ Adobe Premier Pro",
      description: "Created two engaging TikTok-style educational videos on Nigerian history—one on Queen Amina of Zazzau and another on Nigeria's Independence (1960)—combining storytelling, animation, and motion graphics to inform and entertain viewers.",
      link: "https://drive.google.com/file/d/1dYhSFTR8JmE-UB6oVDCmgFb50mCHTkPz/view?usp=drive_link",
      thumbnail: "/vpics6.png"
    },
    {
      title: "Motion Graphics Product Ad - Kuda Bank",
      type: "Product Ad",
      tools: "Alight Motion/ Premier Pro",
      description: "Produced a motion graphics ad for Kuda Bank, transforming a simple product into an exciting digital experience through clean transitions, animated text, brand colors, and synced sound design.",
      link: "https://drive.google.com/file/d/1e8OASPSrXjJrrHt-aLIuj7fTg3Sqvb-u/view?usp=drive_link",
      thumbnail: "/vpics3.png"
    },
    {
      title: "Cluely-Style Viral Ad - FieldPath Pro & MenuCard",
      type: "Product Ad",
      tools: "AI Gen Vid/B-rolls/ Premier Pro",
      description: "Developed short, high-energy product ads for FieldPath Pro and MenuCard HNG brand using cinematic transitions, text motion, and modern editing techniques inspired by viral content styles.",
      link: "https://drive.google.com/file/d/1La3qdcsYOVIZpgge1PBn-K_jmR71odOZ/view?usp=drive_link",
      thumbnail: "/vpics5.png"
    },
    {
      title: "O.D.I.N.A.K.A Documentary",
      type: "Documentary",
      tools: "My Camera/Premier Pro",
      description: "Directed and edited a short-form documentary on O.D.I.N.A.K.A, a men's fashion brand, blending interviews, storytelling, and B-roll cinematography to capture the brand's essence and journey.",
      link: "https://drive.google.com/file/d/1taU_w238jb381uIPeFJo9vhOxtreXKmp/view?usp=drive_link",
      thumbnail: "/vpics7.png"
    },
    {
      title: "Music Video with AI",
      type: "Music Video",
      tools: "AI Tools/ Premier Pro",
      description: "Created an innovative music video using AI technology, combining visual effects, motion graphics, and creative storytelling to produce a captivating musical experience.",
      link: "https://drive.google.com/file/d/1La3qdcsYOVIZpgge1PBn-K_jmR71odOZ/view?usp=drive_link",
      thumbnail: "/vpics9.png"
    },
    {
      title: "Nigerian Music Evolution Documentary",
      type: "Documentary",
      tools: "Premier Pro/ AI Tools",
      description: "Produced a comprehensive documentary tracing the evolution of Nigerian music from the early 1950s to the present day, featuring archival footage, interviews, and visual storytelling that captures the rich musical heritage of Nigeria.",
      link: "https://drive.google.com/file/d/1k5j0JQzBto7Y3B4uTD8Vx1n5en8FJ_3Z/view?usp=drive_link",
      thumbnail: "/vpics10.jpg"
    },
    {
      title: "Surviving Nigeria - Vox Pop",
      type: "Vox Pop",
      tools: "My Camera/ Premier Pro",
      description: "Created a compelling vox pop documentary featuring Nigerians sharing their experiences and stories of resilience, survival, and hope. Captured authentic voices and perspectives through street interviews and candid moments.",
      link: "https://drive.google.com/file/d/1D7vmGU_eOLV6SDTgvP-JBa_qrWfomSti/view?usp=drive_link",
      thumbnail: "/vpics11.png"
    },
    {
      title: "SaaS Explainer Video",
      type: "Product Explainer",
      tools: "Premier Pro/ Motion Graphics",
      description: "Developed an engaging explainer video for a SaaS product, breaking down complex features into digestible visual content with clear animations, graphics, and narrative flow.",
      link: "https://drive.google.com/file/d/1NjY55FYOaSaTmkKCA3m38Oia4NCfJGDe/view?usp=drive_link",
      thumbnail: "/vpics12.png"
    },
    {
      title: "Doodle Style Video",
      type: "Creative",
      tools: "Premier Pro/ Animation Tools",
      description: "Created a unique doodle-style animated video featuring hand-drawn aesthetics, creative transitions, and playful animations that bring concepts to life through artistic expression.",
      link: "https://drive.google.com/file/d/1q4xofbJeJt3CpX_628wgK9-VoJCcKSI0/view?usp=drive_link",
      thumbnail: "/vpics2.png"
    },
    {
      title: "Nostalgic Nollywood Movie Trailer",
      type: "Movie Trailer",
      tools: "Premier Pro/ Cinematic Effects",
      description: "Produced a nostalgic Nollywood-style movie trailer capturing the essence of classic Nigerian cinema, featuring dramatic pacing, emotional storytelling, and cinematic visuals that pay homage to the golden era of Nollywood.",
      link: "https://drive.google.com/file/d/1ntxlpmd3-o7SPEGrqlYRI9YV577TX6a4/view?usp=drive_link",
      thumbnail: "/vpics8.png"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <VideoIcon className="text-white" size={24} />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded">
                  {project.type}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {project.tools}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2 mb-1">
                {project.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-3 flex items-center text-teal-600 dark:text-teal-400 text-sm font-medium">
                <span>Watch Video</span>
                <ExternalLink size={16} className="ml-2" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoProjectsSection;

