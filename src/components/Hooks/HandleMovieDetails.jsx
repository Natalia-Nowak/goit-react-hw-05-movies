import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HandleMovieDetails = movieId => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk4NTNiZmUxMDBkMjVmMGZiYTZjMTkwMTg3YzQ4ZiIsInN1YiI6IjY1NThkMzI3MjI5MzFhMDExYzk2Yzk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FlUQQQ1eD5Nk8SJZYgRoUcjm4ddugKi_Hx1DLKb-DbA',
        },
      };
      setIsLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );

      setData(response.data);
      setIsLoading(false);
    };
    getMovies();
  }, [movieId]);
  return {
    data,
    isLoading,
  };
};
