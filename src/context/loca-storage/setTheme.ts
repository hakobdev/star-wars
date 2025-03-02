const setThemeToLocalStorgae = (key: string, theme: string) => {
  localStorage.setItem(key, JSON.stringify(theme));
};

export default setThemeToLocalStorgae;
