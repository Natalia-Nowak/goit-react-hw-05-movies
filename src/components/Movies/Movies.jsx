import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HandleMovieSearch } from '../Hooks/HandleMovieSearch';
import './Movies.css';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const changeQuery = event => {
    setSearchQuery(event.target.value);
  };

  const res = HandleMovieSearch(searchQuery);

  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="movies-form" onSubmit={handleSubmit}>
        <input
          className="movies-input"
          value={searchQuery}
          onChange={changeQuery}
          placeholder="Search here"
          type="text"
        />
        <button className="movies-button" type="submit">
          Search
        </button>
      </form>
      <ul className="movies-list">
        {res?.data?.results?.map(movie => (
          <li key={movie.id}>
            <Link to={'/movies/' + movie.id}>
              <p className="movies-title">{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
