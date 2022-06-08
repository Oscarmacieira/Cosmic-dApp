import { useEffect, useState } from "react";
import { storage } from "../utils/storage";

export const useTheme = () => {
  const themes = storage.get("themes");
  const [theme, setTheme] = useState(themes.data[themes.default]);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: string) => {
    storage.set("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = storage.get("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data[themes.default]);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
