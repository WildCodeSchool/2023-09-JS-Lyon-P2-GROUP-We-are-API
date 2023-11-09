import propTypes from "prop-types";
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
    <div>
      <label htmlFor="Answers">Answers</label>
      <input type="text" id="response" />
      <button type="button" onClick={() => value()}>
        test
      </button>
      {next ? <Next setAnswersReturn={setAnswersReturn} /> : null}
    </div>
  );
}

Answers.propTypes = {
  setAnswers: propTypes.func.isRequired,
  setCheck: propTypes.func.isRequired,
};
