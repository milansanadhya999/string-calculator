import styles from "./StringCalculator.module.css";

export const StringCalculator = () => {
  return (
    <div className={styles["string-calculator"]}>
      <input type="text"></input>
      <button>Submit</button>
    </div>
  );
};
