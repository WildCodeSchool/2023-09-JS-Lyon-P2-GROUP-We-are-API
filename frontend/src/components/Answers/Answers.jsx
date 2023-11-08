import propTypes from "prop-types";
import styles from "./Answers.module.css";

export default function Answers({ setAnswers, setCheck }) {
  const input = document.getElementById("response");
  function value() {
    setAnswers(input.value);
    setCheck(true);
  }
  return (
    <div className={styles.appAnswer}>
      <label htmlFor="Answers">Answer:</label>
      <input type="text" id="response" />
      <button type="button" onClick={() => value()}>
        TEST
      </button>
      {}
    </div>
  );
}

Answers.propTypes = {
  setAnswers: propTypes.func.isRequired,
  setCheck: propTypes.func.isRequired,
};
