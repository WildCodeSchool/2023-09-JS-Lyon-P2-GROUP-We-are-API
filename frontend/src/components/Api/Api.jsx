import ky from "ky";
import { useEffect } from "react";

function Api({ setFilm }) {
  useEffect(() => {
    async () => {
      const json = await ky
        .get(
          `https://api.themoviedb.org/3/movie/3003?api_key=d8bedc0b2557b9f57527c89f46531039&language=fr-FR`
        )
        .json();
      setFilm(json);
      console.log(json);
    };
  }, []);

  return <p>Coucou</p>>
}

export default Api;
