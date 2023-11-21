import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Answers.module.css";
import Next from "../Next/Next";

export default function Answers({
  setAnswers,
  setCheck,
  next,
  setAnswersReturn,
  reset,
}) {
  const [value, setValue] = useState("");

  function valueChecked(e) {
    e.preventDefault();
    setAnswers(value);
    setCheck(true);
    setValue("");
  }
  // test
  return (
    <div className={styles.forme}>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={(e) => valueChecked(e)}
      >
        <input
          type="text"
          id="response"
          className={styles.input}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className={styles.ButtonContainer}>
          <button
            className={styles.BTtest}
            type="button"
            onClick={(e) => valueChecked(e)}
            name="Answers"
          >
            Submit
          </button>
          {next !== false ? (
            <Next setAnswersReturn={setAnswersReturn} reset={reset} />
          ) : null}
        </div>
      </form>
    </div>
  );
}

Answers.propTypes = {
  setAnswers: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
  next: PropTypes.bool.isRequired,
  setAnswersReturn: PropTypes.func.isRequired,
  reset: PropTypes.exact({
    current: PropTypes.bool.isRequired,
  }),
};

Answers.defaultProps = {
  reset: {
    current: "waiting",
  },
};
