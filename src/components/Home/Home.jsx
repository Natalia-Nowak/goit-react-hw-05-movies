import React from 'react';
import { Link } from 'react-router-dom';
import { HandleTrendingMovies } from '../Hooks/HandleTrendingMovies';
import './Home.css';

export default function Home() {
  const res = HandleTrendingMovies();
  console.log(res);
  return (
    <div className="home-wrapper">
      <h1 className="home-title">Trending today</h1>
      <ul className="home-list">
        {res?.movies?.map(movie => (
          <li key={movie.id}>
            <Link to={'/movies/' + movie.id}>
              <p className="home-item">{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
