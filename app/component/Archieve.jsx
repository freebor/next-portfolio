"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimateNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementList = [
  {
    metrix: "Project",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metrix: "Users",
    value: "100,000",
  },
  {
    metrix: "Awards",
    value: "2",
  },
  {
    metrix: "Years",
    value: "3+",
  },
];

const Archieve = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border border-[#33353F] hidden rounded-md py-8 px-16 md:flex flex-row items-center justify-between">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center mx-4"
            >
              <h2 className=" text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimateNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className=" text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-Gray text-base ">{achievement.metrix}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Archieve;
