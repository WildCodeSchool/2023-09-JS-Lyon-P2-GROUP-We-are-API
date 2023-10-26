import PropTypes from "prop-types";
import { useState } from "react";

const movie = "harry potter";
let display = "";
function LogicAnswers({ setScore, answer, score }) {
  if (answer === movie) {
    display = <button onClick={() => setScore(score + 1)}>Send</button>;
  } else {
    display = <p>please retry</p>;
  }

  return <div>{display}</div>;
}

export default LogicAnswers;
