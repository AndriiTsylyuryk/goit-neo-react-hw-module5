import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../API";

import s from "./MovieCast.module.css";
import Actors from "../../pages/Actors/Actors";

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastById(params.filmId)
      .then((data) => setCast(data.cast))
      .catch((error) => console.log(error));
  }, [params.filmId]);

  if (!cast) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.wrapper}>
      <ul>
        {cast.map((actor) => (
          <li className={s.list} key={actor.id}>
            <Actors actor={actor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
