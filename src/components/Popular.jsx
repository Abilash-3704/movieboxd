import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';

export default function Popular() {
  const {movie, setMovie} = useContext(GlobalContext);
  const image_URL = 'https://image.tmdb.org/t/p/w500';
  const [movies, setmovies] = useState([]);
  const [i_movie, setImovie] = useState();
  // useEffect(() => {
  //   setMovie(i_movie);
  // }, [i_movie]);
  useEffect(() => {
    const apicall = async () => {
      const res = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=06a468bfba585e0edd15c0dc1dfa5a05&language=en-US&page=1',
      );
      setmovies(res.data.results);
    };
    apicall();
  }, []);
  console.log(movies);
  return (
    <>
      <div className="w-full grid md:grid-cols-4 2xl:grid-cols-3 grid-cols-2 gap-20     ">
        {movies.map(movie => (
          <div
            className="flex flex-col align-center cursor-pointer "
            key={movie.id}>
            <img
              src={image_URL + movie.poster_path}
              alt=""
              className="cursor-pointer"
            />
            <h2
              className="text-white font-poppins text-sm text-center mt-2"
              onClick={() => setMovie(movie.id)}>
              <Link to="/ind_movie">{movie.original_title}</Link>
            </h2>

            <h4 className="text-white font-poppins text-sm text-center mt-2">
              {movie.release_date.slice(0, 4)}
            </h4>
            {/* <p className="text-white">{movie.id}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}

// 2xl:grid-cols-3
