import PropTypes from "prop-types";
import styles from "./Next.module.css";

export default function Next({ setAnswersReturn }) {
  return (
    <button
      className={styles.BTNext}
      type="button"
      onClick={() => setAnswersReturn(true)}
    >
      Next
    </button>
  );
}

Next.propTypes = {
  setAnswersReturn: PropTypes.func.isRequired,
};
