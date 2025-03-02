import { useSelector } from "react-redux";
import styles from "./favorites.module.css";
import PeopleImage from "../people/People-image";

interface InputData {
  id: number;
  name: string;
  image: string;
}

const Favorites = () => {
  const state = useSelector((state: any) => state.favPeopleReducer);
  const people: InputData[] = Object.values(state);

  return (
    <div className={styles.fav__div}>
      <h1 className={styles.title}>Favorites</h1>
      <PeopleImage data={people} />
    </div>
  );
};

export default Favorites;
