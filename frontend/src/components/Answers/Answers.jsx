import propTypes from "prop-types";
import styles from "./Answers.module.css";
import Next from "../Next/Next";

export default function Answers({
  setAnswers,
  setCheck,
  next,
  setAnswersReturn,
}) {
  const input = document.getElementById("response");
  function value() {
    setAnswers(input.value);
    setCheck(true);
    input.value = "";
  }
  return (
    <div className={styles.appAnswer}>
      <label htmlFor="Answers">Answer:</label>
      <input type="text" id="response" />
      <button type="button" onClick={() => value()}>
        TEST
      </button>
      {next ? <Next setAnswersReturn={setAnswersReturn} /> : null}
    </div>
  );
}

Answers.propTypes = {
  setAnswers: propTypes.func.isRequired,
  setCheck: propTypes.func.isRequired,
  next: propTypes.bool.isRequired,
  setAnswersReturn: propTypes.func.isRequired,
};
