import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ films }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link
              state={location}
              className={s.link}
              to={`/movies/${film.id.toString()}`}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
