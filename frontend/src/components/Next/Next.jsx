export default function Next(setAnswersReturn) {
  return (
    <button type="button" onClick={() => setAnswersReturn(true)}>
      Next
    </button>
  );
}
