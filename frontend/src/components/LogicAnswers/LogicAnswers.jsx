import PropTypes from "prop-types";
import { useEffect } from "react";

export default function LogicAnswers({
  film,
  score,
  setAnswersReturn,
  setScore,
  answers,
  setCheck,
  setPlease,
  setNext,
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
    let match = 0;
    const wordsSolution = lowerSolution.split(" ");
    const wordsResponse = lowerResponse.split(" ");

    for (let k = 0; k < lowerSolution.length; k += 1) {
      if (lowerSolution[k] === lowerResponse[k]) {
        match += 1;
      }
    }

    let matchWords = 0;
    for (let l = 0; l < wordsSolution.length; l += 1) {
      if (wordsSolution[l] === wordsResponse[l]) {
        matchWords += 1;
      }
      if (matchWords >= wordsSolution.length - 1) {
        match = lowerSolution.length;
      }
    }

    return match >= TOLERANCE_THRESHOLD * lowerSolution.length;
  }

  function verify(solution, response) {
    const arraySolution = [solution];
    const arrayResponse = [response];

    declinations(solution, arraySolution, ":");
    declinations(solution, arraySolution, "-");
    declinations(solution, arraySolution, ".,");
    declinations(solution, arraySolution, ";");
    replace(solution, arraySolution, "&", "and");

    declinations(response, arrayResponse, ":");
    declinations(response, arrayResponse, "-");
    declinations(response, arrayResponse, ".,");
    declinations(response, arrayResponse, ";");
    replace(response, arrayResponse, "&", "and");

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
    if (verify(film.title, answers) === true) {
      setScore(score + 1);
      setPlease(false);
      setNext(true);
    } else {
      setAnswersReturn(false);
      setPlease(true);
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
