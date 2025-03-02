import React from "react";
import styles from "./People-image.module.css";
import { useNavigate } from "react-router-dom";

interface InputData {
  id: number;
  name: string;
  image: string;
}

const PeopleImage: React.FC<{ data: InputData[] }> = (props) => {
  const navigate = useNavigate();

  const handleClickEvent = (eventData: InputData) => {
    navigate(`/people/${eventData.id}`, { state: eventData });
  };

  return (
    <ul className={styles.people_ul}>
      {props.data.map((el: InputData, i) => {
        return (
          <li key={i} onClick={() => handleClickEvent(el)}>
            <img src={el.image} alt={el.name} />
            <p>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PeopleImage;
