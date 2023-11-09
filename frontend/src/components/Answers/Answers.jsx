import PropTypes from "prop-types";
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
  // test
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
  setAnswers: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
  next: PropTypes.bool.isRequired,
  setAnswersReturn: PropTypes.func.isRequired,
};
