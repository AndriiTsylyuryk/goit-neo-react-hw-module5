import React from "react";
import s from "./Actors.module.css";
const Actors = ({ actor }) => {
  return (
    <div className={s.wrapper}>
      {actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt={actor.name}
          style={{ width: "100px", height: "150px", objectFit: "cover" }}
        />
      )}
      <h3>{actor.name}</h3>
      <p>Role: {actor.character}</p>
    </div>
  );
};

export default Actors;
