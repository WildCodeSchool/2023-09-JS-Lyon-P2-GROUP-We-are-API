import PropTypes from "prop-types";
import styles from "./Next.module.css";

export default function Next({ setAnswersReturn, reset }) {
  function rest() {
    const element = reset;
    setAnswersReturn(true);
    element.current = false;
  }
  return (
    <button
      id="BTnext"
      className={styles.BTNext}
      type="button"
      onClick={() => rest()}
    >
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
