import { useEffect } from "react";
import { useState } from "react";
import styles from "./Timer.module.css";


export default function Timer({ setAnswersReturn, answersReturn }) {
  const untime = 10;
  const [seconde, setSeconde] = useState(untime);
  const [progress, setProgress] = useState(0);
  const variation = (untime / 100) * 1000;

  function decompte() {
    setTimeout(() => {
      if (seconde <= 0) {
        setAnswersReturn(true);
        setSeconde(untime);
        return;
      }
      setSeconde(seconde - variation / 1000);
      setProgress(progress + 1);
      
    }, variation);
  }
  useEffect(() => {
    if (answersReturn === true) {
      setSeconde(untime);
      setProgress(0);
      console.log(answersReturn)
    }
  }, [answersReturn]);
  if (progress >= 100) {
    setProgress(0);
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
  decompte(seconde);
  return (
    <div>
      <div>{seconde}</div>
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div
            className={styles.fillBar}
            style={{ width: `${progress}%`, backgroundColor: getColor() }}
          />
        </div>
      </div>
    </div>
  );
}
