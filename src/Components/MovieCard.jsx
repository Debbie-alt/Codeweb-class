import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import PopUp from "./PopUp";


const MovieCard = ({ SearchResults, movieSet }) => {
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState({});
  const [Popup, setPopup] = useState('hidden')
  const [popupMessage, setPopupMessage] = useState("");
  const [toastColor, setToastColor]  = useState('')

  
  const toggleFavorite = (movieId, movieName) => {
    setFavorite((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      if (updatedFavorites[movieId]) {
        delete updatedFavorites[movieId];
        setPopupMessage(`${movieName} removed from favorites.`);
        setPopup('flex')
        setToastColor('border-l-red-500');
        setTimeout(() => {
          setPopup('hidden')
        }, 2500);
      } else {
        updatedFavorites[movieId] = true;
        setPopupMessage(`${movieName} added to favorites.`);
      setPopup('flex')
      setToastColor('border-l-green-500');
      setTimeout(() => {
        setPopup('hidden')
      }, 2500);
      }
      
      return updatedFavorites;
    });
  };


  // Merge searchResults and popularMovies arrays
  const allMovies = [...SearchResults, ...movieSet];
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


  

  return (
    <>
      <PopUp movieName={movieSet.title} PopUp={Popup} popupMessage={popupMessage} setPopup={setPopup} toastColor={toastColor}/>
      <div className="gap-10 grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {allMovies.map((movie) => (
        <div
          className="h-full w-full mt-10 bg-black rounded-lg shadow-lg"
          key={movie.id}
         
        >
          <FaHeart
            className={`absolute mt-5 mx-5  text-lg ${
              favorite[movie.id] ? "text-red-700" : "text-white"
            }`}
            onClick={() => toggleFavorite(movie.id, movie.title)}
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
      </div>
    </>
  );
};

export default MovieCard;
