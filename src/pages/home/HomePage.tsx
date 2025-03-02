import {
  DARK_THEME,
  LIGHT_THEME,
} from "../../context/constants/theme-constants";
import { useTheme } from "../../context/theme/Theme-provider";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const theme = useTheme();

  return (
    <div className={styles.homePage__div}>
      <h1 className={styles.title}>Choose Your Side</h1>
      <div className={styles.sides__div}>
        <div
          onClick={() => theme.change(LIGHT_THEME!)}
          className={`${styles.sides__div_1} ${styles.sides__div_light}`}
        >
          <img
            src="https://static.displate.com/270x380/displate/2018-07-13/5f0ab40ac30aaba386303ce848ffff82_c34e52b3d422922080734a78617db6b3.jpg"
            alt="image!"
          />
          <p>Light Side</p>
        </div>
        <div
          onClick={() => theme.change(DARK_THEME!)}
          className={`${styles.sides__div_1} ${styles.sides__div_dark}`}
        >
          <img
            src="https://static.displate.com/270x380/displate/2018-07-13/59718304e5f05f6bffb6feb6b8ba6a6a_8aebedde9825a53408b4213d55dc1c41.jpg"
            alt="image2"
          />
          <p>Dark Side</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
