import { useState } from "react";
import { add } from "../string-calculator";
import styles from "./StringCalculator.module.css";

export const StringCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setResult(null);
    setError("");
  };

  const calculateResult = () => {
    try {
      const formattedInput = inputValue.replace(/\\n/g, "\n");
      const number = add(formattedInput);
      setResult(number);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className={styles["string-calculator"]}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={calculateResult}>Calculate</button>
      </div>
      {result !== null && <div>Result: {result}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};
