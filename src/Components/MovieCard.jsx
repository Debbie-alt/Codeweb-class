import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ SearchResults, movieSet }) => {
  const navigate = useNavigate();

  // Merge searchResults and popularMovies arrays
  const allMovies = [...SearchResults, ...movieSet];
  const [favorite, setFavorite] = useState({});
//   const favorites = {id, title, poster_path}
  
//   const options ={
//      method:"POST",
//      headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(favorites),
  
// }

//   const addfav =()=>{
//       fetch('http://localhost:4000/favorites', options
//       ).then(response => response.json())
      
//   }


  const toggleFavorite = (movieId) => {
      setFavorite((prevFavorites) => {
        const updatedFavorites = { ...prevFavorites };
        if (updatedFavorites[movieId]) {
          delete updatedFavorites[movieId];
        } else {
          updatedFavorites[movieId] = true;
        }
        return updatedFavorites;
      });
    };

  return (
    <>
      {allMovies.map((movie) => (
        <div
          className="h-full w-full mt-10 bg-black rounded-lg shadow-lg"
          key={movie.id}
         
        >
          <FaHeart
            className={`absolute mt-5 mx-5 border-2 border-red-500 rounded-full text-lg ${
              favorite[movie.id] ? "text-red-700" : "text-white"
            }`}
            onClick={() => toggleFavorite(movie.id)}
          />
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="w-full rounded-lg h-80 object-cover"
            onClick={() => {
                  navigate(`/MovieDetails/${movie.id}`);
                }}
          />
             <p className=" p-3 font-medium text-sm mt-4 text-white mx-5 line-clamp-1 cursor-pointer">
            {movie.genres}
          </p>
   <p className=" p-3 font-medium text-sm mt-4 text-green-700 mx-5 line-clamp-1 cursor-pointer">
            {movie.release_date}
          </p>
          <div className="flex"> 
          <p className="  rounded-xl border-2 text-white border-green-600 w-2/3 mx-auto p-3 text-center font-medium text-sm mt-4 line-clamp-1 cursor-pointer">
            {movie.title}
          </p>
          
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
