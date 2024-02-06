import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalContext';

export default function Individual() {
  const {movie} = useContext(GlobalContext);
  const [state, setState] = useState({
    backdrops: [],
    posters: [],
  });
  const [movieDetails, setMovieDetails] = useState({});
  const [reviews, setReviews] = useState([]);
  const image_URL = 'https://image.tmdb.org/t/p/w500';
  let image_data = {};

  useEffect(() => {
    const apicall = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie}/images?api_key=06a468bfba585e0edd15c0dc1dfa5a05&language=en,null`,
      );
      //   setState({
      //     ...state,
      //     backdrops: res.data.backdrops,
      //     posters: res.data.posters,
      //   });
      image_data = res.data;
      setState(image_data);
      //   console.log(movie);
      //   console.log(res.data);
      //   console.log(image_data);
      console.log(state);
    };
    const reviewCall = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=06a468bfba585e0edd15c0dc1dfa5a05&language=en-US&page=1`,
      );
      setReviews(res.data.results);
      console.log(reviews);
    };
    const detailsCall = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=06a468bfba585e0edd15c0dc1dfa5a05&language=en,null`,
      );
      const {genres, original_title, overview, runtime, vote_average} =
        res.data;
      const finalobject = {
        genres,
        original_title,
        overview,
        runtime,
        vote_average,
      };
      setMovieDetails(finalobject);
    };
    apicall();
    reviewCall();
    detailsCall();
  }, []);
  //   console.log(movie);
  return (
    <>
      {state.backdrops[0] && state.posters[0] ? (
        <div className="w-11/12 m-auto">
          <div className="">
            <img
              src={
                state.backdrops
                  ? `${image_URL}${state.backdrops[0].file_path}`
                  : null
              }
              height={state.backdrops[0].height}
              width={state.backdrops[0].width}
              // className="w-full object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6  mt-8">
            <img
              src={
                state.posters
                  ? `${image_URL}${state.posters[0].file_path}`
                  : null
              }
              className=" h-72 object-contain"
            />
            <div className="flex-col gap-4">
              <div className="flex-col">
                {movieDetails ? (
                  <div className="font-poppins text-white text-4xl">
                    {movieDetails.original_title}
                  </div>
                ) : null}

                {movieDetails.genres?.map(x => (
                  <span className="font-kanit text-white text-sm px-1">
                    {x.name}
                  </span>
                ))}
                <div className="text-white font-roberto my-2 ">
                  {movieDetails.runtime} mins
                </div>
                <div className="text-white font-roberto my-2 ">
                  Rating : {movieDetails.vote_average}
                </div>
                {movieDetails.overview ? (
                  <>
                    <div className="text-white text-xl my-2">Overview</div>
                    <div className="text-roberto text-white my-2">
                      {movieDetails.overview}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full flex-col my-6">
            <div className="text-white text-2xl my-3">Reviews</div>
            {reviews?.map(x => (
              <div className="flex flex-col mb-8" key={x.id}>
                <div className="flex gap-2 mb-2">
                  <img
                    src={`${image_URL}${x.author_details.avatar_path}`}
                    className="rounded-full"
                    height={30}
                    width={30}
                  />
                  <p className="text-white">{x.author_details.username}</p>
                </div>
                <p className="font-roberto text-white ">{x.content}</p>
              </div>
            ))}
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      ) : null}
    </>
  );
}
