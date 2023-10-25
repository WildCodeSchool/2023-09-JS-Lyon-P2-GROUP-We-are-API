export default function Api({ setAnswersReturn }) {
  return (
    <div>
      <button type="button" onClick={() => setAnswersReturn(0)}>
        next
      </button>
    </div>
  );
}
