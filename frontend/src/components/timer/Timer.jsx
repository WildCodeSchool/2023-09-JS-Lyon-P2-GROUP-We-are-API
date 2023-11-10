import PropTypes from "prop-types";
import { useState, useRef } from "react";
import styles from "./Timer.module.css";

export default function Timer({ setNext }) {
  const untime = 10000;
  const seconde = useRef(untime);
  const [progress, setProgress] = useState(0);

  function decompte(chrono) {
    setProgress((chrono / untime) * 100);
    seconde.current = Math.round((untime - chrono) / 1000);
  }
  const test = window.requestAnimationFrame(decompte);
  if (progress >= 100) {
    window.cancelAnimationFrame(test);
    setProgress(0);
  } else if (seconde.current <= 0) {
    window.cancelAnimationFrame(test);
    setNext(true);
  }
  const getColor = () => {
    if (progress < 40) {
      return "#2ecc71";
    }
    if (progress < 70) {
      return "#ffa500";
    }
    if (progress >= 70) {
      return "#ff0000";
    }
    return "";
  };

  return (
    <div>
      <div>{seconde.current}</div>
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div
            className={styles.fillBar}
            style={{
              width: `${progress}%`,
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
