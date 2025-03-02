import { ADD_FAVORITE } from "../constants/constants";

const setFavorite = (obj: any) => {
  return {
    type: ADD_FAVORITE!,
    payload: obj,
  };
};

export default setFavorite;
