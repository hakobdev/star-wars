import { DARK_THEME } from "../constants/theme-constants";

const getThemeFromLocalStorage = (key: string) => {
  const theme = localStorage.getItem(key);
  if (!theme) return DARK_THEME;
  return JSON.parse(theme);
};

export default getThemeFromLocalStorage;
