import React, { useEffect, useState } from "react";
import { fetchFilms } from "../../API";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchFilms();
        setFilms(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <h1 className={s.main}>Trending today</h1>
      <MovieList films={films} />
    </div>
  );
};

export default Home;
