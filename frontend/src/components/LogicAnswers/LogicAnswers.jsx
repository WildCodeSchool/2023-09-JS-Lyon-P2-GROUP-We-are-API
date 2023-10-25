export default function Answers({
  film,
  score,
  setAnswersReturn,
  setScore,
  answers,
}) {
  function check() {
    if (answers === film.title){
      setAnswersReturn(true);
      setScore(score + 1);
    } else {
      setAnswersReturn(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={() => check()}>
        check
      </button>
    </div>
  );
}
