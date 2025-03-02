import { useLocation } from "react-router-dom";
import styles from "./Not-found.module.css";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className={styles.notFound__div}>
      <h1>404</h1>
      <p className={styles.text__p}>
        This is not the web page you are looking for!
      </p>
      <p className={styles.text__p_1}>No match for {location.pathname}</p>
    </div>
  );
};

export default NotFound;
