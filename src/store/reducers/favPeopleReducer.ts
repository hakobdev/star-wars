import { getFromLocalStorage } from "../../utils/localStorage/local-storage";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FAV_PEOPLE,
} from "../constants/constants";

interface FavoriteState {
  [key: number]: { id: number; name: string; image: string };
}
const initialState: FavoriteState = getFromLocalStorage(FAV_PEOPLE!);

const favPeopleReducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  if (action.type === ADD_FAVORITE!) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === REMOVE_FAVORITE!) {
    const id: number = action.payload.payload;
    const { [id]: _, ...newState } = state;
    return newState;
  }

  return state;
};

export default favPeopleReducer;
