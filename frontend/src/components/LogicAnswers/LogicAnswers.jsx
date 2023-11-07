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
  // Convertir la réponse de l'utilisateur et le titre du film en minuscules pour ignorer la casse
  const userAnswer = answers.toLowerCase();
  const filmTitle = film.title.toLowerCase();

  let isAnswerCorrect = true;

  // Vérifier que chaque lettre du titre du film est présente dans la réponse de l'utilisateur
  for (let i = 0; i < filmTitle.length; i += 1) {
    if (userAnswer.indexOf(filmTitle[i]) === -1) {
      isAnswerCorrect = false;
      break;
    }
  }

  if (isAnswerCorrect) {
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
