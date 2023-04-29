import { Link, useLocation } from 'react-router-dom';
import { List, Image } from './MoviesList.styled';
import { FAKE_MOVIE_IMAGE, BASE_FOTO_URL } from 'constants/constants';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, poster_path, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path === null || undefined
                  ? FAKE_MOVIE_IMAGE
                  : BASE_FOTO_URL + poster_path
              }
              alt={original_title}
            />
          </Link>
        </li>
      ))}
    </List>
  );
};
export default MoviesList;
