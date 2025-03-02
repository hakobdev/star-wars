import styles from "./Fail.module.css";
const Fail: React.FC = () => {
  return (
    <div className={styles.fail__div}>
      <p className={styles.paragraph}>
        The dark side of the force has won.<br></br> We can't display data.
        <br></br>Come back when we fix everything.
      </p>
      <div className={styles.video__div}>
        <img src="https://i.giphy.com/d2W7eZX5z62ziqdi.webp" alt="fail" />
      </div>
    </div>
  );
};

export default Fail;
