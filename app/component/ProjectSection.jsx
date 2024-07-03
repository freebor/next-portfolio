"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { motion, useInView } from "framer-motion";
import { projectTagsArray, projectsData } from "../util/mockdata";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tag, setTag] = useState("All");
  const handleTags = (newTags) => {
    setTag(newTags);
  };

  const filterProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Project
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {projectTagsArray.map((project) => {
          return (
            <ProjectTags
              name={project.name}
              onClick={handleTags}
              isSelected={tag === project.selected}
            />
          );
        })}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProject.map((project, index) => (
          <motion.li
            variants={cardVarients}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
