import PropTypes from "prop-types";

export default function Synopsis({ film }) {
  return (
    <div>
      <p>{`${film.overview}`}</p>
    </div>
  );
}

Synopsis.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
};
Synopsis.propTypes = {
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
};
