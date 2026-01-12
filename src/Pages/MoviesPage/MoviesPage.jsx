import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link, useSearchParams } from "react-router-dom";
import { fetchFilmByName } from "../../API";
import MovieList from "../../components/MovieList/MovieList";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";

  const [searchValue, setSearchValue] = useState(queryParam);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      if (queryParam) {
        try {
          const data = await fetchFilmByName(queryParam);
          setMovies(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getMoviesData();
  }, [queryParam]);

  const handleSearch = (value) => {
    if (!value) {
      setSearchParams({});
    } else {
      setSearchParams({ query: value });
    }
  };

  return (
    <div>
      <SearchBar
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div>
        <h2>Search Results for "{queryParam}"</h2>
        <MovieList films={movies} />
      </div>
    </div>
  );
};

export default Movies;
