import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../../API";
import ReviewItem from "../../pages/ReviewItem/ReviewItem";

const Reviews = () => {
  const params = useParams();
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(review);
  useEffect(() => {
    fetchReviewById(params.filmId)
      .then((data) => setReview(data), setLoading(false))
      .catch((error) => console.log(error), setLoading(false));
  }, [params.filmId]);

  return (
    <div>
      {review.length === 0 ? (
        <p>No reviews found</p>
      ) : (
        <ul>
          {review.map((item) => (
            <li key={new Date().getTime()}>
              <ReviewItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
