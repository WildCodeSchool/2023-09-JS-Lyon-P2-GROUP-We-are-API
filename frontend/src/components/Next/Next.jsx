import propTypes from "prop-types";

export default function Next({ setAnswersReturn }) {
  return (
    <button type="button" onClick={() => setAnswersReturn(true)}>
      Next
    </button>
  );
}

Next.propTypes = {
  setAnswersReturn: propTypes.func.isRequired,
};
