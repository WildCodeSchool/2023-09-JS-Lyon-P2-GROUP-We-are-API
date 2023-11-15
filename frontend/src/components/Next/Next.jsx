import PropTypes from "prop-types";

export default function Next({ setAnswersReturn, reset }) {
  function rest() {
    setAnswersReturn(true);
    reset.current = false;
  }
  return (
    <button type="button" onClick={() => rest()}>
      Next
    </button>
  );
}

Next.propTypes = {
  setAnswersReturn: PropTypes.func.isRequired,
  reset: PropTypes.exact({
    current: PropTypes.bool.isRequired,
  }),
};

Next.defaultProps = {
  reset: {
    current: "waiting",
  },
};
