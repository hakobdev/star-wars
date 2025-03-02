import styles from "./Wrapper.module.css";
import Props from "./Wrapper.interface";

const Wrapper: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.wrapper} ${props.className} `}>
      {props.children}
    </div>
  );
};

export default Wrapper;
