import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { IoArrowBack } from "react-icons/io5";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const hist = useNavigate();

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
    <div className="bg-black flex flex-col justify-between pb-20 ">
      <Navbar />
      {loading && (
        <>
          <div className="  flex flex-col mt-[10rem] animate-spin mx-auto space-y-1 w-16 h-16 ">
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
        <section className="py-3 bg-black ">
          <div className="flex  mx-10 space-x-2 text-yellow-500 font-semibold">
            <IoArrowBack />

            <Link to="/" className=" text-sm font-medium ">
              {" "}
              Back
            </Link>
          </div>

          <div className="flex flex-col w-screen h-screen ">
            <figure className="flex flex-col mx-8  w-screen h-screen">
              <h1 className=" font-bold mt-5  text-3xl text-green-700 mx-10">
                {movies.original_title}
              </h1>
              <div
                className="h-full  mt-5 space-y-5 rounded-xl bg-black flex flex-col md:flex-row space-x-5 w-3/4 shadow-lg "
                key={movies.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                  className="w-11/12  mx-auto rounded-xl object-cover h-full "
                  alt={`${movies.title}`}
                />
                <section className="flex flex-col  p-5 flex-grow w-full bg-transparent">
                     <div className="flex text-sm space-x-5 ">
                       <p className="p-2 text-sm border-2
                      border-green-600 text-white 
                       rounded-md">Runtime:</p>
                       <p className="text-yellow-400 flex space-x-5">{movies.runtime}  <span>&nbsp;Minutes</span></p>
                     </div>
                     <p className="text-xs text-white mt-5 leading-5">{movies.overview}</p>
                      


                   </section>{" "}
              </div>
            </figure>
          </div>
        </section>
      )}
      {/* <Footer /> */}
    </div>
  );
};
export default MovieDetails;
