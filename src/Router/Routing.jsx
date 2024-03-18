import React from "react";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import MovieDetails from "../Components/MovieDetails";
import Navbar from "../Components/Navbar";
import WatchList from "../Components/WatchList";

const Routing=()=>{

      return (
            <BrowserRouter>
      <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path= '/MovieDetails/:id'  element={<MovieDetails/>}/>
            <Route path= '/favorites'  element={<WatchList/>}/>

      </Routes>
      </BrowserRouter>
      )

}
export default Routing; 