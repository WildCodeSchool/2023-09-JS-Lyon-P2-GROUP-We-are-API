import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer() {
  const chrono = 100;
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => prev + 1), chrono);
    } else {
      setFilled(0);
      setIsRunning(false);
    }
  }, [filled, isRunning]);
  const getColor = () => {
    if (filled < 40) {
      return "#2ecc71";
    }
    if (filled < 70) {
      return "#ffa500";
    }
    if (filled >= 70) {
      return "#ff0000";
    }
    return "";
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div
            className={styles.fillBar}
            style={{
              width: `${filled}%`,
              backgroundColor: getColor(),
            }}
           />
        </div>
      </div>
    </div>
  );
}

Timer.propTypes = {
  setNext: PropTypes.func.isRequired,
};
