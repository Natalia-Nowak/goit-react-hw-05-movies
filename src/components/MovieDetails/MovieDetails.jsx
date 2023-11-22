import { useParams, Link, Outlet } from 'react-router-dom';
import { HandleMovieDetails } from '../Hooks/HandleMovieDetails';
import './MovieDetails.css';

export default function MovieDetails() {
  const { movieId } = useParams();

  const res = HandleMovieDetails(movieId);
  console.log(res);

  return (
    <div className="detail-wrapper">
      <div className="detail-block">
        <img
          className="detail-img"
          src={'https://image.tmdb.org/t/p/w500' + res.data.poster_path}
        ></img>
        <div>
          <h2 className="detail-title">{res.data.title}</h2>
          <p className="detail-paragraph">
            User Score: {res.data.vote_average}
          </p>
          <h3 className="detail-secondary-title">Overview</h3>
          <p className="detail-paragraph">{res.data.overview}</p>
          <h3 className="detail-secondary-title">Genres</h3>
          <p className="detail-paragraph">
            {res?.data?.genres?.map(genre => genre.name + ' ')}
          </p>
        </div>
      </div>
      <div className="detail-info-block">
        <h3 className="detail-info-title">Additional Information</h3>
        <ul className="details-link-list">
          <li>
            <Link className="detail-link" to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className="detail-link" to="reviews">
              Reviews
            </Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </div>
  );
}
