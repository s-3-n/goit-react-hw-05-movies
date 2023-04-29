import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCast } from 'api/FetchMovies';
import { Image, ImageList, ImageItem } from './Cast.styled';
import { ANONYMOUS_ACTOR_PHOTO, BASE_FOTO_URL } from 'constants/constants';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { data } = await FetchMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <ImageList>
        {movieCast &&
          movieCast.map(({ name, profile_path, character }) => (
            <ImageItem key={name}>
              <Image
                src={
                  profile_path === null || undefined
                    ? ANONYMOUS_ACTOR_PHOTO
                    : BASE_FOTO_URL + profile_path
                }
                alt={name}
              />
              <h3>{name}</h3>
              <p>character: {character}</p>
            </ImageItem>
          ))}
      </ImageList>
    </div>
  );
};

export default Cast;
