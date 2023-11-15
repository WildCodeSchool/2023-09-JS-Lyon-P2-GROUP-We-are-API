import PropTypes from "prop-types";
import styles from "./Next.module.css";

export default function Next({ setAnswersReturn, reset }) {
  function rest(){
    setAnswersReturn(true);
    reset.current = false;
  }
  return (
    <button
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
};
