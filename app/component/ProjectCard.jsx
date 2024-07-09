import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="">
      <div
        className="h-52 md:h-72 rounded-t-xl overflow-hidden relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] hidden group-hover:flex group-hover:opacity-80 transition-all duration-500">
          {gitUrl && (
            <button
              onClick={() => window.open(gitUrl, "_blank")}
              className="h-14 w-14 border-2 mr-2 relative rounded-full border-Gray hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Gray cursor-pointer group-hover/link:" />
            </button>
          )}
          <button
            onClick={() => window.open(previewUrl, "_blank")}
            className="h-14 w-14 border-2 relative rounded-full border-Gray hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Gray cursor-pointer group-hover/link:" />
          </button>
        </div>
      </div>
      <div className=" rounded-b-xl mt-2 bg-bgDark px-4 py-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-Gray">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
