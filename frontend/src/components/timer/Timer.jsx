import { useState, useRef, useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer({ setAnswersReturn, score }) {
  const untime = 10000;
  const seconde = useRef(untime);
  const [progress, setProgress] = useState(0);

  function decompte(chrono) {
    setProgress((chrono / untime) * 100);
    seconde.current = Math.round((untime - chrono) / 1000);
  }

  if (seconde.current > 0) {
        console.log(progress)
    window.requestAnimationFrame(decompte);
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
    //   decompte(seconde);
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
}
