import React from 'react';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HandleTrendingMovies } from '../Hooks/HandleTrendingMovies';
import './Home.css';

export default function Home() {
  const res = HandleTrendingMovies();

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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
