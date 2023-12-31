import { useParams } from 'react-router-dom';
import { HandleCredits } from 'components/Hooks/HandleCredits';
import React from 'react';
import './Cast.css';

export default function Cast() {
  const { movieId } = useParams();

  const res = HandleCredits(movieId);

  return (
    <div>
      <ul className="cast-list">
        {res?.data?.cast?.map(person => (
          <li className="cast-item" key={person.id}>
            <img
              className="cast-img"
              alt="cast_member"
              src={'https://image.tmdb.org/t/p/w200' + person.profile_path}
            ></img>
            <p className="cast-name">{person.original_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
