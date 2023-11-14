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
  function value(e) {
    e.preventDefault();
    setAnswers(input.value);
    setCheck(true);
    input.value = "";
  }
  // test
  return (
    <div className={styles.appAnswer}>
      <div className={styles.form}>
        <form className={styles.form} onSubmit={(e) => value(e)}>
          <input type="text" id="response" />
          <div className="{style.Button-container">
            <button
              className={styles.BTtest}
              type="button"
              onClick={(e) => value(e)}
              name="Answers"
            >
              Submit
            </button>
            {next !== false ? (
              <Next setAnswersReturn={setAnswersReturn} />
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

Answers.propTypes = {
  setAnswers: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
  next: PropTypes.bool.isRequired,
  setAnswersReturn: PropTypes.func.isRequired,
};
