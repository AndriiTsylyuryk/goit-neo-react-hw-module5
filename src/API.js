import axios from "axios";

export const fetchFilms = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODgxMDgzMTY5MTY2MGEwNTM2ODE3MzgxM2RhOWQ1OSIsIm5iZiI6MTcyMTk5NzE5OS43NTY2MjgsInN1YiI6IjY2YTM2YzMyNTJjZTMxYjc4MjYxNDAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6bNMcJxaAARysjGqfnnPJ5tTKDYEUxJqsA_8O8HgGZ0",
      },
    }
  );
  return response.data.results;
};

export const fetchFilmsById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODgxMDgzMTY5MTY2MGEwNTM2ODE3MzgxM2RhOWQ1OSIsIm5iZiI6MTcyMTk5NzE5OS43NTY2MjgsInN1YiI6IjY2YTM2YzMyNTJjZTMxYjc4MjYxNDAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6bNMcJxaAARysjGqfnnPJ5tTKDYEUxJqsA_8O8HgGZ0",
      },
    }
  );
  return response.data;
};

export const fetchCastById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODgxMDgzMTY5MTY2MGEwNTM2ODE3MzgxM2RhOWQ1OSIsIm5iZiI6MTcyMTk5NzE5OS43NTY2MjgsInN1YiI6IjY2YTM2YzMyNTJjZTMxYjc4MjYxNDAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6bNMcJxaAARysjGqfnnPJ5tTKDYEUxJqsA_8O8HgGZ0",
      },
    }
  );
  return response.data;
};

export const fetchReviewById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODgxMDgzMTY5MTY2MGEwNTM2ODE3MzgxM2RhOWQ1OSIsIm5iZiI6MTcyMTk5NzE5OS43NTY2MjgsInN1YiI6IjY2YTM2YzMyNTJjZTMxYjc4MjYxNDAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6bNMcJxaAARysjGqfnnPJ5tTKDYEUxJqsA_8O8HgGZ0",
      },
    }
  );
  return response.data.results;
};

export const fetchFilmByName = async (movie) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODgxMDgzMTY5MTY2MGEwNTM2ODE3MzgxM2RhOWQ1OSIsIm5iZiI6MTcyMTk5NzE5OS43NTY2MjgsInN1YiI6IjY2YTM2YzMyNTJjZTMxYjc4MjYxNDAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6bNMcJxaAARysjGqfnnPJ5tTKDYEUxJqsA_8O8HgGZ0",
      },
    }
  );
  return response.data.results;
};
