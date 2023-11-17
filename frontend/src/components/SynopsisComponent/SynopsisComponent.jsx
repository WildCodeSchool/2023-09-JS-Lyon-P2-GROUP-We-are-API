import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import Synopsis from "../Synopsis/Synopsis";

function SynopsisComponent() {
  const [film, reset, userId, next, setNext] = useOutletContext();

  return (
    <Synopsis
      film={film}
      reset={reset}
      userId={userId}
      setNext={setNext}
      next={next}
    />
  );
}

SynopsisComponent.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
  reset: {
    current: "waiting",
  },
};
SynopsisComponent.propTypes = {
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

export default SynopsisComponent;
