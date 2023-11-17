import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Timer.module.css";

export default function Timer({ setNext, timeDifficulty }) {
  const chrono = 33.3;
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => {
        setFilled((prev) => prev + (0.333 / parseInt(timeDifficulty, 10)) * 10);
      }, chrono);
    } else {
      setFilled(0);
      setIsRunning(false);
      setNext(true);
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
    <div className={styles.container}>
      <p className={styles.chrono} id="chronos">
        {Math.round(timeDifficulty - timeDifficulty * (filled / 100))}
      </p>
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
  );
}

Timer.propTypes = {
  setNext: PropTypes.func.isRequired,
  timeDifficulty: PropTypes.number.isRequired,
};
