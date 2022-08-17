import React, { useState, useEffect } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const Theme = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () =>
    setIsDark((prev) => {
      return !prev;
    });
  useEffect(() => {
    document.documentElement.className = isDark ? "" : "dark-theme";
  }, [isDark]);
  return (
    <div>
      {isDark && <RiMoonLine className="change-theme" onClick={toggleTheme} />}
      {!isDark && <RiSunLine className="change-theme" onClick={toggleTheme} />}
    </div>
  );
};

export default Theme;
