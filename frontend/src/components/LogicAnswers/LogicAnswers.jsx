import PropTypes from "prop-types";
import { useEffect } from "react";
import { distance } from "fastest-levenshtein";

export default function LogicAnswers({
  film,
  score,
  setAnswersReturn,
  setScore,
  answers,
  setCheck,
  setPlease,
  setNext,
  next,
  setColor,
}) {
  const TOLERANCE_THRESHOLD = 0.8;

  function replace(string, arrayString, beforeReplace, afterReplace) {
    if (string.includes(beforeReplace) === true) {
      if (
        arrayString.includes(string.replace(beforeReplace, afterReplace)) ===
        false
      ) {
        arrayString.push(string.replace(beforeReplace, afterReplace));
      }
      return arrayString;
    }
    return string;
  }

  function declinations(string, arrayString, separator) {
    if (string.includes(separator) === true) {
      const arr = string.split(separator);
      if (arrayString.includes(arr[0].trim()) === false) {
        arrayString.push(arr[0].trim());
      }

      if (arrayString.includes(arr[1].trim()) === false) {
        arrayString.push(arr[1].trim());
      }

      return arrayString;
    }
    return string;
  }
  function test(solution, response) {
    const lowerSolution = solution.toLowerCase();
    const lowerResponse = response.toLowerCase();
    const match = distance(lowerSolution, lowerResponse);

    return (
      lowerSolution.length - match >= TOLERANCE_THRESHOLD * lowerSolution.length
    );
  }

  function verify(solution, response) {
    const arraySolution = [solution];
    const arrayResponse = [response];

    declinations(solution, arraySolution, ":");
    declinations(solution, arraySolution, "-");
    declinations(solution, arraySolution, ".,");
    declinations(solution, arraySolution, ";");
    declinations(solution, arraySolution, ",");
    declinations(solution, arraySolution, "et");
    replace(solution, arraySolution, "&", "and");
    replace(solution, arraySolution, "&", "et");
    replace(solution, arraySolution, "é", "e");
    replace(solution, arraySolution, "é", "è");
    replace(solution, arraySolution, "è", "é");
    replace(solution, arraySolution, "è", "e");
    replace(solution, arraySolution, "à", "a");
    replace(solution, arraySolution, "ù", "u");

    declinations(response, arrayResponse, ":");
    declinations(response, arrayResponse, "-");
    declinations(response, arrayResponse, ".,");
    declinations(response, arrayResponse, ";");
    declinations(response, arrayResponse, ",");
    declinations(response, arrayResponse, "et");
    replace(response, arrayResponse, "&", "and");
    replace(response, arrayResponse, "&", "et");
    replace(response, arrayResponse, "é", "e");
    replace(response, arrayResponse, "é", "è");
    replace(response, arrayResponse, "è", "é");
    replace(response, arrayResponse, "è", "e");
    replace(response, arrayResponse, "à", "a");
    replace(response, arrayResponse, "ù", "u");

    for (let i = 0; i < arraySolution.length; i += 1) {
      for (let j = 0; j < arrayResponse.length; j += 1) {
        if (test(arraySolution[i], arrayResponse[j]) === true) {
          return true;
        }
      }
    }
    return false;
  }
  useEffect(() => {
    if (verify(film.title, answers) === true && next === false) {
      setScore(score + 1);
      setPlease(false);
      setNext(true);
      setColor(true);
    } else {
      setAnswersReturn(false);
      setPlease(true);
      setColor(false);
    }
    setCheck(false);
  }, []);
}

LogicAnswers.propTypes = {
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
    setNext: PropTypes.func.isRequired,
  }),
  score: PropTypes.number.isRequired,
  setAnswersReturn: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  answers: PropTypes.string.isRequired,
  setCheck: PropTypes.func.isRequired,
  setPlease: PropTypes.func.isRequired,
};

LogicAnswers.defaultProps = {
  film: {
    title: "loading",
  },
};
