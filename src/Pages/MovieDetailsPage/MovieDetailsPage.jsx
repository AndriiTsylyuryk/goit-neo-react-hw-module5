import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchFilmsById } from "../../API";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";


const FilmDetails = () => {
  const { filmId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
 
  const goBackRef = useRef(location?.state || "/");

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchFilmsById(filmId);
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [filmId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.wrapper}>
      <Link className={s.goBack} to={goBackRef.current}>
        Go back
      </Link>
      <h1>{details.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
      ></img>
      <p>{details.overview}</p>
      <p>Genres: {details.genres.map((genre) => genre.name).join(", ")}</p>
      <div className={s.navWrapper}>
        <NavLink className={buildLinkClass} to={"cast"}>
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to={"reviews"}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default FilmDetails;
