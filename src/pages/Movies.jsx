import { useEffect, useState } from 'react';
import { FetchSearchMovies } from 'api/FetchMovies';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getInputValue = inputValue => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    const getSearchMovies = async () => {
      try {
        const { results } = await FetchSearchMovies(searchQuery);
        setSearchMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    getSearchMovies();
  });

  return (
    <div>
      <SearchBar inputValue={getInputValue} />
      <MoviesList movies={searchMovies} />
    </div>
  );
};

export default Movies;
