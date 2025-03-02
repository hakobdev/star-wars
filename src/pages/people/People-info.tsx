import { useLocation, useNavigate } from "react-router-dom";
import styles from "./People-info.module.css";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../loading/loading";
import { useDispatch, useSelector } from "react-redux";
import setFavorite from "../../store/actions/setFavorite";
import removeFavorite from "../../store/actions/removeFavorite";
const PeopleFilm = React.lazy(() => import("./People-film"));

export type FilmType = {
  title: string;
  episode_id: string;
};

const PeopleInfo: React.FC = () => {
  const [films, setFilms] = useState<FilmType[]>([]);
  const people = useLocation().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state: any) => state.favPeopleReducer);
  const [activeIcon, setActiveIcon] = useState(!!state[people.id]);

  useEffect(() => {
    setActiveIcon(!!state[people.id]);
    const fetchAllData = async () => {
      const apiResponse = await fetch(
        `https://swapi.dev/api/people/${people.id}/`
      );
      const data = await apiResponse.json();
      const apiFilms = await Promise.all(
        data.films.map((url: string) => fetch(url))
      );
      const dataFilms = await Promise.all(apiFilms.map((data) => data.json()));
      setFilms(dataFilms);
    };

    fetchAllData();
  }, [state, people.id]);

  //Add Favorite or Remove From Favorite
  const addorRemoveToFavorite = () => {
    if (state[people.id]) {
      dispatch(removeFavorite(people.id));
    } else {
      dispatch(
        setFavorite({
          [people.id]: {
            id: people.id,
            name: people.name,
            image: people.image,
          },
        })
      );
    }
  };

  return (
    <div className={styles.peopleInfo__div}>
      <button className={styles.back_btn} onClick={() => navigate(-1)}>
        <ion-icon name="chevron-back-outline"></ion-icon>
        Go Back
      </button>
      <div className={styles.peopleInfo__main}>
        <div className={styles.peopleInfo__main_1}>
          <p></p>
          <div className={styles.people__info}>
            <div
              onClick={addorRemoveToFavorite}
              className={`${styles.fav_star} ${
                activeIcon && styles.fav_star_active
              }`}
            >
              <ion-icon name="star"></ion-icon>
            </div>

            <h1>{people.name}</h1>
            <img
              className={styles.people__img}
              src={people.image}
              alt="shrek"
            />
          </div>
        </div>
        <div className={styles.peopleInfo__main_2}>
          <ul>
            <li>Height: {people.height || "-"}</li>
            <li>Mass: {people.mass || "-"}</li>
            <li>Hair Color: {people.hairColor || "-"}</li>
            <li>Skin Color: {people.skinColors || "-"}</li>
            <li>Eye Color: {people.eyeColor || "-"}</li>
            <li>Birth Year: {`${Math.abs(people.born)}BBY` || "-"}</li>
            <li>Gender: {people.gender}</li>
          </ul>
        </div>
        <div className={styles.peopleInfo__main_3}>
          <Suspense fallback={<Loading />}>
            <PeopleFilm data={films} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PeopleInfo;
