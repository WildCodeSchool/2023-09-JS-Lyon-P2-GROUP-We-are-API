import PropTypes from "prop-types";
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

ImageComponent.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
  reset: {
    current: "waiting",
  },
};
ImageComponent.propTypes = {
  film: PropTypes.exact({
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    adult: PropTypes.bool,
    genre_ids: PropTypes.array,
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
  setNext: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  reset: PropTypes.exact({
    current: PropTypes.bool.isRequired,
  }),
  userId: PropTypes.func.isRequired,
};

export default ImageComponent;
