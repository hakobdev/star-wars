import Container from "../../UI/container/Container";
import styles from "./Main.module.css";
import HomePage from "../../pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import People from "../../pages/people/People";
import Search from "../../pages/search/Search";
import NotFound from "../../pages/not-found/Not-Found";
import Fail from "../../pages/fail/Fail";
import PeopleInfo from "../../pages/people/People-info";
import Favorites from "../../pages/favorites/favorites";
import { useTheme } from "../../context/theme/Theme-provider";
import { LIGHT_THEME } from "../../context/constants/theme-constants";

const Main = () => {
  const theme = useTheme();

  return (
    <main
      className={
        theme.theme === LIGHT_THEME ? styles.main_light : styles.main_dark
      }
    >
      <Container>
        <div className={styles.main_div}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PeopleInfo />} />
            <Route path="/search" element={<Search />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/fail" element={<Fail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Container>
    </main>
  );
};

export default Main;
