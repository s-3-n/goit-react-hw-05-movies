import { FetchMoviesByID } from 'api/FetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { FAKE_MOVIE_IMAGE, BASE_FOTO_URL } from 'constants/constants';
import {
  Image,
  Section,
  StyledLink,
  Title2,
  Text,
  GenresList,
  GenresItem,
  AdditionalSection,
  AdditionalList,
  Title5,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMoviesByID = async () => {
      try {
        const { data } = await FetchMoviesByID(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesByID();
  }, [movieId]);

  const { poster_path, title, vote_average, release_date, overview, genres } =
    movieInfo;

  const FilmYear = Number.parseInt(release_date);
  return (
    <>
      <Section>
        <StyledLink to={location.state?.from || '/movies'}>Go back</StyledLink>
        <Image
          src={
            poster_path === null || undefined
              ? FAKE_MOVIE_IMAGE
              : BASE_FOTO_URL + poster_path
          }
          alt={title}
        />
        <div>
          <Title2>
            {title} ({FilmYear})
          </Title2>
          <Text>User score: {(vote_average * 10).toFixed(0)}%</Text>
          <h3>Overview:</h3>
          <Text>{overview}</Text>
          <h4>Genres:</h4>
          <GenresList>
            {genres &&
              genres.map(el => {
                return <GenresItem key={el.name}>{el.name},</GenresItem>;
              })}
          </GenresList>
        </div>
      </Section>

      <AdditionalSection>
        <Title5>Additional information</Title5>
        <AdditionalList>
          <li>
            <StyledLink to="cast" state={location.state}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={location.state}>
              Reviews
            </StyledLink>
          </li>
        </AdditionalList>
        <Outlet />
      </AdditionalSection>
    </>
  );
};
export default MovieDetails;
