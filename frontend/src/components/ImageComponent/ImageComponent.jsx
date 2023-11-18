import { useOutletContext } from "react-router-dom";
import Image from "../Image/Image";

function ImageComponent() {
  const [film, reset, userId, next, setNext, timeDifficulty] =
    useOutletContext();

  return (
    <Image
      film={film}
      reset={reset}
      userId={userId}
      setNext={setNext}
      next={next}
      timeDifficulty={timeDifficulty}
    />
  );
}

export default ImageComponent;
