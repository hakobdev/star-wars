import { REMOVE_FAVORITE } from "../constants/constants";

const removeFavorite = (obj: any) => {
  return {
    type: REMOVE_FAVORITE!,
    payload: {
      payload: obj,
    },
  };
};

export default removeFavorite;
