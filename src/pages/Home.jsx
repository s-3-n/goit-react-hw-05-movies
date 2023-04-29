import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from 'api/FetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await FetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
      {error && (
        <p>Sorry, there was an error on the server, please try again later.</p>
      )}
    </div>
  );
};

export default Home;
