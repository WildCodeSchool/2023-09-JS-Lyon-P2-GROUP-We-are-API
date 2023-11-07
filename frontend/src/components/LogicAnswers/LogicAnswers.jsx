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
  if (answers.toLowerCase() === film.title.toLowerCase()) {
    setAnswersReturn(true);
    setScore(score + 1);
    setPlease(false);
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
