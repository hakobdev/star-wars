import styles from "./Error.module.css";

interface ErrorData {
  subject: string;
  message: string;
  status: number;
}

const ErrorHandling: React.FC<{ data: ErrorData }> = (props) => {
  return (
    <div className={styles.error_div}>
      <h1>Subject: {props.data.subject}</h1>
      <p>Status:{props.data.status}</p>
      <p>Message: {props.data.message}</p>
    </div>
  );
};

export default ErrorHandling;
