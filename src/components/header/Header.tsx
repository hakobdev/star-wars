import { Link, NavLink } from "react-router-dom";
import Container from "../../UI/container/Container";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/theme/Theme-provider";
import { LIGHT_THEME } from "../../context/constants/theme-constants";

const Header: React.FC = () => {
  const theme = useTheme();
  const state = useSelector((state: any) => state.favPeopleReducer);

  let count: string | number = Object.keys(state).length;
  if (count > 99) {
    count = "...";
  }

  return (
    <header
      className={
        theme.theme === LIGHT_THEME ? styles.header_light : styles.header_dark
      }
    >
      <Container>
        <div className={styles.header_div}>
          <div className={styles.nav__div}>
            <div className={styles.logo__div}>
              <NavLink to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/4th_Logo.png/640px-4th_Logo.png"
                  alt="logo_image"
                />
              </NavLink>
            </div>
            <ul>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/people/?page=1"
                >
                  People
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/not-found"
                >
                  Not Found
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.active : ""
                  }
                  to="/fail"
                >
                  Fail
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.fav__div}>
            <div
              className={`${styles.fav_items} ${
                !count && styles.fav_items_none
              }`}
            >
              {count}
            </div>
            <Link to="/favorites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                className={styles.svg__icon}
              >
                <path d="M 6 2 A 1.0001 1.0001 0 0 0 5 3 L 5 21 A 1.0001 1.0001 0 0 0 6.4472656 21.894531 L 12 19.117188 L 17.552734 21.894531 A 1.0001 1.0001 0 0 0 19 21 L 19 3 A 1.0001 1.0001 0 0 0 18 2 L 6 2 z M 7 4 L 17 4 L 17 19.382812 L 12.447266 17.105469 A 1.0001 1.0001 0 0 0 11.552734 17.105469 L 7 19.382812 L 7 4 z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
