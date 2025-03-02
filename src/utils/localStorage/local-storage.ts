type LocalStorageDataType = {
  id: number;
  name: string;
  image: string;
};

export const setToLocalStorage = (key: string, data: LocalStorageDataType) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) return {};
  return JSON.parse(data);
};
