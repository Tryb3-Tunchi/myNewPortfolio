import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/2 bg-gray-800 text-white p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-4">Obinna Tochuwu</h1>
        <p className="mb-6">Front-End Developer | Creating Interactive Experiences</p>
        <div className="space-y-2">
          {["About Me", "Experience", "Projects"].map((item, index) => (
            <button
              key={index}
              className="block w-full bg-gray-700 hover:bg-gray-600 py-2 rounded transition-all"
              onClick={() => {
                document.getElementById(item.replace(" ", "-"))?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
