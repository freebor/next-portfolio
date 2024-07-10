"use client";

import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../util/function";

const ToggleSwitch = ({ toggle, isDarkMode }) => {
  return (
    <div>
      <Switch
        className={classNames(
          "bg-primary relative inline-flex flex-shrink-0 h4 w-8 md:h-6 md:w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
        )}
        checked={isDarkMode}
        onChange={() => toggle()}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isDarkMode ? "translate-x-4 md:translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-3 w-3 md:h-5 md:w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
    </div>
  );
};

export default ToggleSwitch;
