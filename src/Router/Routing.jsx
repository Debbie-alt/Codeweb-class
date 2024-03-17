import React from "react";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import MovieDetails from "../Components/MovieDetails";


const Routing=()=>{

      return (
            <BrowserRouter>
      <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path= '/MovieDetails/:id'  element={<MovieDetails/>}/>
      </Routes>
      </BrowserRouter>
      )

}
export default Routing; 