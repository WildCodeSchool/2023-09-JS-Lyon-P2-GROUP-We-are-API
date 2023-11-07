export default function Timer() {
  let seconde = 10;
  const time = document.getElementById("text");
  function decompte() {
    setTimeout(() => {
      if (seconde <= 0) {
        return;
      }
      seconde -= 1;
      time.innerHTML = seconde;
      decompte(seconde);
    }, 1000);
  }
  decompte(seconde);
  return <div id="text">{seconde}</div>;
}
