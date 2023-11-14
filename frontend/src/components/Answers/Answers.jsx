import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Answers.module.css";
import Next from "../Next/Next";

export default function Answers({
  setAnswers,
  setCheck,
  next,
  setAnswersReturn,
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
    <div className={styles.appAnswer}>
      <form onSubmit={(e) => value(e)}>
        <input
          type="text"
          id="response"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="button" onClick={(e) => valueChecked(e)} name="Answers">
          TEST
        </button>
      </form>
      {next !== false ? <Next setAnswersReturn={setAnswersReturn} /> : null}
    </div>
  );
}

Answers.propTypes = {
  setAnswers: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
  next: PropTypes.bool.isRequired,
  setAnswersReturn: PropTypes.func.isRequired,
};
