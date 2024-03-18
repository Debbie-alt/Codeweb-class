import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero';
import Searchbar from '../Components/Searchbar';
import Movies from '../Components/Movies';
import Footer from '../Components/Footer';
// import Loading from '../Components/Loading';

const Homepage = () => {
      const [Query, setQuery] =useState('')
      const [SearchResults, setSearchResults]= useState([{}])
      const [movieSet, setMovieSet] = useState([])
      


      const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzE1YTE1Y2Y1MWM4OTQwNjRlM2MyZmVhZGRmOWFjOSIsInN1YiI6IjY1MDFkNDU2ZDdkY2QyMDBhY2IwZjk1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cfqcRmWdBwvHi9ntW48W9IiCvaEpPi874KRlCGpk5RQ'
            }
          };
          useEffect(() => {
            const fetchPopularMovies = async () => {
              try {
                const response = await fetch(
                  `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options
                 
                );
                const data = await response.json();
                setMovieSet(data.results.slice(0, 20)); // Take the first 10 movies
              } catch (error) {
                console.error(error);
              }
            };
        
            fetchPopularMovies();
          }, []);
        
          useEffect(()=>{
            
            fetch(`https://api.themoviedb.org/3/search/movie?query=${Query}&include_adult=false&language=en-US&page=1`, options)
          .then(response => response.json())
          .then(response => setSearchResults(response.results))
          .catch(err => console.error(err));
          
         },[Query]);
          
  console.log(SearchResults)

     
  return (
    <>
      <Navbar/>
      <Hero/>
      <Searchbar setQuery={setQuery}/>

      {/* <Loading  loading={loading}  setLoading={setLoading}/> */}
      <div className='space-y-24'>
      <Movies  SearchResults={SearchResults} movieSet={movieSet}/>  
      <Footer></Footer>
      </div>
    
    </>
    
  )
}

export default Homepage;