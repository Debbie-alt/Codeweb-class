import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [Display, setDisplay] = useState("hidden");
  const [IsOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <nav className="w-full py-3  bg-primary text-white">
        <div className="flex justify-between container mx-auto items-center  text-white">
          <Link className="text-xl text-white">
            Mov<span className=" text-green-700 font-semibold">Atti</span>
          </Link>
          <div className="space-x-8  hidden lg:flex">
            <NavLink to="/" activeClassName="active" className="">
              Discover
            </NavLink>
            <NavLink to="/Popular" activeClassName="">
              Popular
            </NavLink>
            <NavLink to="/TopRated" activeClassName="">
              Top Rated
            </NavLink>
            <NavLink to="/favorites" activeClassName="">
              Favorite
            </NavLink>
          </div>
          <button
            className="lg:hidden "
            onClick={() => {
              !IsOpen ? setDisplay("flex") : setDisplay("hidden");
              IsOpen ? setIsOpen(false) : setIsOpen(true);
            }}
          >
            <BiMenuAltLeft className=" flex mx-3  " />
          </button>
        </div>
      </nav>
      <div
        className={`fixed  ${Display} top-0 w-full py-8 text-white mt-12 bg-primary flex flex-col lg:hidden z-40 border-b-2 border-green-`}
      >
        <div className="space-y-7 flex flex-col justify-center items-center ">
          <NavLink to="/" activeClassName="active" className="text-lg">
            Discover
          </NavLink>
          <NavLink to="/Popular" activeClassName="active" className="text-lg">
            Popular
          </NavLink>
          <NavLink to="/TopRated" activeClassName="active" className="text-lg">
            Top Rated
          </NavLink>
          <NavLink to="/favorites" activeClassName="active" className="text-lg">
            Favorite
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
