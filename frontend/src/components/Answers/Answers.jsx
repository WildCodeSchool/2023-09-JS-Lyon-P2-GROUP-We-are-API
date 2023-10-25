import propTypes from "prop-types";

export default function Answers({ setAnswersReturn }) {
  return (
    <div>
      <button type="button" onClick={() => setAnswersReturn(0)}>
        next
      </button>
    </div>
  );
}

Answers.propTypes = {
  setAnswersReturn: propTypes.func.isRequired,
};
