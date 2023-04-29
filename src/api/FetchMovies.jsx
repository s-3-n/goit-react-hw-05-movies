import axios from 'axios';

const API_KEY = 'c43ef6429afc5fe58f2ed10b2a2d4a41';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const FetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/week?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const FetchSearchMovies = async searchQuery => {
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  return response.data;
};

export const FetchMoviesByID = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};

export const FetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};

export const FetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};
