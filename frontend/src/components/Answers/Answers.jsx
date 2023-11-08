import propTypes from "prop-types";

export default function Answers({ setAnswers, setCheck }) {
  const input = document.getElementById("response");
  function value(e) {
    e.preventDefault();
    setAnswers(input.value);
    setCheck(true);
    input.value = "";
  }
  return (
    <div>
      <form onSubmit={(e) => value(e)}>
        <label htmlFor="Answers">Answers</label>
        <input type="text" id="response" />
        <button type="button" name="Answers">
          test
        </button>
      </form>
    </div>
  );
}

Answers.propTypes = {
  setAnswers: propTypes.func.isRequired,
  setCheck: propTypes.func.isRequired,
};
