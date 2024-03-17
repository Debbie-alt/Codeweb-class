import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzE1YTE1Y2Y1MWM4OTQwNjRlM2MyZmVhZGRmOWFjOSIsInN1YiI6IjY1MDFkNDU2ZDdkY2QyMDBhY2IwZjk1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cfqcRmWdBwvHi9ntW48W9IiCvaEpPi874KRlCGpk5RQ",
    },
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => alert.error(err));
  }, [id]);

  return (
    <div>
     <Navbar/>
      {loading && (
        <>
          <div className="  flex flex-col  mt-[10rem] animate-spin mx-auto space-y-1 w-16 h-16 ">
            <figure className=" flex space-x-1">
              <div className="w-4 h-4 bg-green-800 animate-pulse rounded-full"></div>
              <div className="w-4 h-4 bg-green-800  animate-pulse rounded-full"></div>
            </figure>
            <figure className=" flex space-x-1">
              <div className="w-4 h-4 bg-green-800 animate-pulse rounded-full"></div>
              <div className="w-4 h-4 bg-green-800 animate-pulse  rounded-full"></div>
            </figure>
          </div>
        </>
      )}
      {movies && movies.backdrop_path && (
        <>
       
          <button>Back</button>
        <div className="flex flex-col w-screen h-screen ">
          <figure className="flex flex-col mx-12  w-screen h-screen">
            <div className="h-full w-1/3 mt-10 space-y-5 shadow-lg " key={movies.id}>
            <h1 className=" font-bold  text-3xl text-green-700 mx-10">
              {movies.original_title}
            </h1>  
            <img
                src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                className="w-11/12 mx-auto rounded-xl object-cover h-full "
                alt={`${movies.title}`}
              />
              {/* <p>{movie.release_date}</p> */}
              
            </div>
          </figure>
        </div>
        </>
      )}
    </div>
    
  );
};
export default MovieDetails;
