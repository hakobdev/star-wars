import React, { useEffect, useState } from "react";
import styles from "./People.module.css";
import getApiResource from "../../utils/api/api";
import PeopleImage from "./People-image";
import ErrorHandling from "../error/Error";
import { useLocation, useNavigate } from "react-router-dom";
import {
  REACT_APP_SWAPI_API,
  REACT_APP_SWAPI_PEOPLE,
} from "../../store/constants/constants";
import {
  REACT_APP_SWAPI_PEOPLE_IMAGE,
  REACT_APP_SWAPI_PEOPLE_IMAGE_FORMAT,
  REACT_APP_SWAPI_PEOPLE_PAGE,
} from "../../constants/api-constants";

interface Person {
  id: number;
  name: string;
  image: string;
  url: string;
}

const People: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageNumFromURL = params.get("page");

  const [error, setError] = useState(false);
  const [people, setPeople] = useState<Person[]>([]);
  const [pageNumber, setPageNumber] = useState(pageNumFromURL);
  const [pageCount, setPageCount] = useState("");

  //fetch api
  useEffect(() => {
    getApiResource(REACT_APP_SWAPI_API! + REACT_APP_SWAPI_PEOPLE + pageNumber)
      .then((res) => {
        setPageCount(Math.ceil(res.count / 10).toString());

        const newArray = res.results.map(async (el: Person) => {
          const id = el.url.split("/")[el.url.split("/").length - 2];
          const apiRes = await fetch(
            REACT_APP_SWAPI_PEOPLE_IMAGE +
              id +
              REACT_APP_SWAPI_PEOPLE_IMAGE_FORMAT
          );
          const apiData = await apiRes.json();
          return apiData;
        });
        Promise.all(newArray).then((data) => {
          setPeople(data);
        });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [pageNumber]);

  //click Previous button
  function nextPage() {
    const nextPageNumber = +pageNumber! + 1;
    navigate(REACT_APP_SWAPI_PEOPLE_PAGE! + nextPageNumber);
    setPageNumber(nextPageNumber.toString());
  }

  //click Next button
  function prevPage() {
    const prevPageNumber = +pageNumber! - 1;
    navigate(REACT_APP_SWAPI_PEOPLE_PAGE! + prevPageNumber);
    setPageNumber(prevPageNumber.toString());
  }

  return (
    <div className={styles.people__div}>
      {error ? (
        <ErrorHandling
          data={{
            subject: "Server Error!",
            message: "Something went wrong!",
            status: 500,
          }}
        />
      ) : (
        <>
          <div className={styles.btn__div}>
            <button
              onClick={prevPage}
              className={pageNumber === "1" ? styles.unActive : styles.active}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              className={
                pageNumber === pageCount ? styles.unActive : styles.active
              }
            >
              Next
            </button>
          </div>
          <PeopleImage data={people} />
        </>
      )}
    </div>
  );
};

export default People;
