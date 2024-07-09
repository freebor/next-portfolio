import React from "react";

const ProjectTags = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? " border-primary"
    : "text-Gray border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTags;
