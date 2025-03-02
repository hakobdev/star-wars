const getApiResource = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log("error:", err);
    return false;
  }
};

export default getApiResource;
