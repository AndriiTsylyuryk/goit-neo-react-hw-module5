import { Route, Routes } from "react-router-dom";
import Header from "./Navigation/Navigation";

// import Error from "../pages/Error/Error";
import Home from "../pages/HomePage/HomePage";

import Movies from "../pages/MoviesPage/MoviesPage";
// import FilmDetails from "../Pages/FilmDetails/FilmDetails";
import s from "./App.module.css";

import Cast from "./MovieCast/MovieCast";
import Reviews from "./MovieReviews/MovieReviews";
import { lazy, Suspense } from "react";

const FilmDetails = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const Error = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

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
