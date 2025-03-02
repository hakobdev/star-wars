import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { setToLocalStorage } from "../utils/localStorage/local-storage";
import { FAV_PEOPLE } from "./constants/constants";

const store = createStore(rootReducer);

//add to local storage
store.subscribe(() => {
  setToLocalStorage(FAV_PEOPLE!, store.getState().favPeopleReducer);
});

export default store;
