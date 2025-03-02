import React from "react";
import styles from "./People-film.module.css";
import { FilmType } from "./People-info";

const PeopleFilm: React.FC<{ data: FilmType[] }> = (props) => {
  return (
    <ul className={styles.ul__film}>
      {props.data
        .sort((a, z) => +a.episode_id - +z.episode_id)
        .map((el: FilmType) => {
          return (
            <li key={el.episode_id}>
              <p className={styles.p1}>Episode {el.episode_id}</p>
              <p>{el.title}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default PeopleFilm;
