import propTypes from "prop-types";
import styles from "./Answers.module.css";

export default function Answers({ setAnswers, setCheck }) {
  const input = document.getElementById("response");
  function value() {
    setAnswers(input.value);
    setCheck(true);
    input.value = "";
  }
  return (
    <div className={styles.appAnswer}>
      <form onSubmit={() => value()}>
        <input type="text" id="response" />
        <button type="button" onClick={() => value()} name="Answers">
          TEST
        </button>
      </form>
    </div>
  );
}

Answers.propTypes = {
  setAnswers: propTypes.func.isRequired,
  setCheck: propTypes.func.isRequired,
};
