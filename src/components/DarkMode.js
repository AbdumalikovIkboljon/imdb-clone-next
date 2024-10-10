"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const DarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-400 transition-colors duration-300"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-400 transition-colors duration-300"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default DarkMode;
