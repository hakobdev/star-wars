import Props from "./Container.interface";
import styles from "./Container.module.css";

const Container: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.container} ${props.className} `}>
      {props.children}
    </div>
  );
};

export default Container;
