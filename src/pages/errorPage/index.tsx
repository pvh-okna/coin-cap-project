import styles from "./style.module.scss";
const ErrorPage = () => {
  return (
    <>
      <div className={styles.error}>Page Is Not Found</div>
      <div className={styles.error}>Please, Try Again!</div>
    </>
  );
};

export default ErrorPage;
