import propTypes from "prop-types";

export default function LogicAnswers({
  film,
  score,
  setAnswersReturn,
  setScore,
  answers,
  setCheck,
  setPlease,
}) {
  if (answers === film.title) {
    setAnswersReturn(true);
    setScore(score + 1);
    setPlease(false);
    // Enregistrer le nouveau score dans le localStorage
    localStorage.setItem("score", (score + 1).toString());
  } else {
    setAnswersReturn(false);
    setPlease(true);
  }
  setCheck(false);

  return <div />;
}

LogicAnswers.propTypes = {
  film: (propTypes.shape = {
    title: propTypes.string.isRequired,
  }),
  score: propTypes.number.isRequired,
  setAnswersReturn: propTypes.func.isRequired,
  setScore: propTypes.func.isRequired,
  answers: propTypes.string.isRequired,
  setCheck: propTypes.func.isRequired,
  setPlease: propTypes.func.isRequired,
};

LogicAnswers.defaultProps = {
  film: {
    title: "loading",
  },
};
