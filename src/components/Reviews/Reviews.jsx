import { useParams } from 'react-router-dom';
import { HandleReviews } from 'components/Hooks/HandleReviews';
import React from 'react';
import './Reviews.css';

export default function Reviews() {
  const { movieId } = useParams();

  const res = HandleReviews(movieId);

  return (
    <div className="reviews-wrapper">
      <ul className="reviews-list">
        {res?.data?.results?.map(review => (
          <li className="reviews-item" key={review.id}>
            <p className="reviews-author">{review.author}</p>
            <p className="reviews-content">{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
