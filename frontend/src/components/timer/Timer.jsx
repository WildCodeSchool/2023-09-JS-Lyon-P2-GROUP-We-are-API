import { useState } from "react";

export default function Timer() {
  const [seconde, setSeconde] = useState(10);

  function decompte() {
    setTimeout(() => {
      if (seconde <= 0) {
        return;
      }
      setSeconde(seconde - 1);
    }, 1000);
  }
  decompte(seconde);
  return <div id="text">{seconde}</div>;
}
