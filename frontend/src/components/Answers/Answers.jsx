import propTypes from "prop-types";

export default function Answers({ setAnswers, setCheck }) {
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
      {}
    </div>
  );
}

Answers.propTypes = {
  setAnswers: propTypes.func.isRequired,
  setCheck: propTypes.func.isRequired,
};
