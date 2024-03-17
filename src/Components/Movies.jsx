import MovieCard from "./MovieCard";

const Movies=({SearchResults, movieSet})=>{
      return(
            <>
            <section className="container mx-auto px-4">
                 <div  className="flex flex-col space-y-4">
                    <div className="flex">
                        <p className="text-xl mt-10  font-semibold">Discover Movies</p>
                    </div>
                  
                  </div> 
                  <div className="gap-10 grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <MovieCard SearchResults={SearchResults} movieSet={movieSet}/>
                  </div>
            </section>

            </>
      )

}
export default Movies;