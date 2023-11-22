import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HandleCredits = movieId => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk4NTNiZmUxMDBkMjVmMGZiYTZjMTkwMTg3YzQ4ZiIsInN1YiI6IjY1NThkMzI3MjI5MzFhMDExYzk2Yzk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FlUQQQ1eD5Nk8SJZYgRoUcjm4ddugKi_Hx1DLKb-DbA',
        },
      };

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US1`,
        options
      );
      setData(response.data);
    };
    getCredits();
  }, [movieId]);
  return {
    data,
  };
};
