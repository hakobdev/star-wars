import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import getApiResource from "../../utils/api/api";
import { REACT_APP_SWAPI_PEOPLE_ALL } from "../../constants/api-constants";
import PeopleImage from "../people/People-image";

const Search: React.FC = () => {
  const [firstPagePeople, setFirstPagePeople] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [serachedPeople, setSearchedPeople] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    getApiResource(REACT_APP_SWAPI_PEOPLE_ALL!).then((data) => {
      setAllPeople(data);
      setFirstPagePeople(data.slice(0, 10));
    });
  }, []);

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setInputText(inputValue);

    const newPeople = allPeople.filter((el: { name: string }) => {
      return el.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    if (newPeople.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }

    if (!inputValue) {
      setSearchedPeople([]);
    } else {
      setSearchedPeople(newPeople);
    }
  };

  const onCleanBtnHandler = () => {
    if (inputText) {
      setInputText("");
      setSearchedPeople([]);
      setNoResult(false);
    }
  };

  return (
    <div className={styles.search__div}>
      <h1 className={styles.search__title}>Search</h1>
      <div className={styles.input__div}>
        <input
          onChange={onInputChangeHandler}
          className={styles.search__input}
          value={inputText}
          type="text"
          placeholder="Input charecter's name!"
        />
        <span onClick={onCleanBtnHandler}>x</span>
      </div>

      <div className={styles.search__people}>
        <PeopleImage
          data={
            noResult
              ? []
              : serachedPeople.length > 0
              ? serachedPeople
              : firstPagePeople
          }
        />
      </div>
    </div>
  );
};

export default Search;
