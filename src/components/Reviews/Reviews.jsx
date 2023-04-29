import { FetchMovieReviews } from 'api/FetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LIstItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await FetchMovieReviews(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      {movieReviews &&
        movieReviews.map(el => (
          <LIstItem key={el.author}>
            <h2>{el.author}</h2>
            <p>{el.content}</p>
          </LIstItem>
        ))}
    </div>
  );
};

export default Reviews;
