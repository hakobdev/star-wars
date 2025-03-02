import React, { useContext, useState } from "react";
import getThemeFromLocalStorage from "../loca-storage/getTheme";
import setThemeToLocalStorgae from "../loca-storage/setTheme";
import { THEME_KEY } from "../constants/theme-constants";

const ThemeContext = React.createContext({
  theme: getThemeFromLocalStorage(THEME_KEY!),
  change: (themeName: string) => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage(THEME_KEY!));

  const change = (themeName: string) => {
    setThemeToLocalStorgae(THEME_KEY!, themeName);
    setTheme(themeName);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
