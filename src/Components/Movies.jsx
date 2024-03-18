import MovieCard from "./MovieCard";
import PopUp from "./PopUp";
import { useState } from "react";

const Movies = ({ SearchResults, movieSet }) => {

 

  return (
    <>
      <section className="container mx-auto px-4">
        <div className="flex flex-col space-y-4">
          <div className="">
            <p className="text-xl mt-10  font-semibold">Discover Movies</p>
          </div>
        </div>
          <MovieCard
            SearchResults={SearchResults}
            movieSet={movieSet}
           
          />
      </section>
    </>
  );
};

export default Movies;
