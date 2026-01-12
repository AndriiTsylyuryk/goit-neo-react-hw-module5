import React from "react";

const ReviewItem = ({ item }) => {
  return (
    <div className="review-item">
      <h3>{item.author}</h3>
      <p>{item.content}</p>
    </div>
  );
};

export default ReviewItem;
