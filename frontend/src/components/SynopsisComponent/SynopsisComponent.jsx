import { useOutletContext } from "react-router-dom";
import Synopsis from "../Synopsis/Synopsis";

function SynopsisComponent() {
  const [film, reset, userId, setNext, next, timeDifficulty] =
    useOutletContext();
  return (
    <Synopsis
      film={film}
      reset={reset}
      userId={userId}
      setNext={setNext}
      next={next}
      timeDifficulty={timeDifficulty}
    />
  );
}
export default SynopsisComponent;
