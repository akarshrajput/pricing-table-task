"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 font-medium my-2 rounded-md dark:bg-stone-700 bg-stone-200"
    >
      {theme === "dark" ? <p>Light</p> : <p className="text-stone-700">Dark</p>}
    </button>
  );
};

export default DarkModeButton;
