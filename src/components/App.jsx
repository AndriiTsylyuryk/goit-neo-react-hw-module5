import { Route, Routes } from "react-router-dom";
import Header from "./Navigation/Navigation";

// import Error from "../Pages/Error/Error";
import Home from "../Pages/HomePage/HomePage";

import Movies from "../Pages/MoviesPage/MoviesPage";
// import FilmDetails from "../Pages/FilmDetails/FilmDetails";
import s from "./App.module.css";

import Cast from "./MovieCast/MovieCast";
import Reviews from "./MovieReviews/MovieReviews";
import { lazy, Suspense } from "react";

const FilmDetails = lazy(() =>
  import("../Pages/MovieDetailsPage/MovieDetailsPage")
);
const Error = lazy(() => import("../Pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:filmId" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
