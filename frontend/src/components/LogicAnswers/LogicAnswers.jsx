import { useState, useEffect } from "react";
export default function Answers(props) {
  function check() {
    if (props.answers === props.film.title) {
      console.log("bravo");
      props.setAnswersReturn(true);
      props.setScore(props.score + 1);
    } else {
      props.setAnswersReturn(false);
      console.log("try again");
    }
  }

  return (
    <div>
      <button onClick={() => check()}>check</button>
    </div>
  );
}
