import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import userImg from "../../assets/home/01.jpg";
import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import { toast } from "react-toastify";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handelSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out ");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className=" fixed z-50 top-0 left-0 w-full">
      <div className="lg:flex md:flex sm:flex flex justify-between items-center lg:justify-between md:justify-between sm:justify-between lg:w-[1320px] lg:mx-auto w-full lg:px-0 px-3 relative cursor-pointer z-50">
        {/* navbar logo */}
        <Link to="/">
          <div className="navbar_logos lg:flex items-center justify-center gap-3 py-5 ">
            <figure className=" w-[60px] h-[60px]">
              <img src={logo} alt="logo" />
            </figure>

            <figcaption className="lg:block hidden">
              {" "}
              <span className="text_color lg:text-3xl font-extrabold text-white">
                Mini Boss
              </span>{" "}
              <span className="text_color_mini">Restaurant</span>
            </figcaption>
          </div>
        </Link>
        {/* navbar logo */}
        {/* nav list */}
        <ul
          className={`lg:flex md:flex lg:static md:static absolute items-center gap-5 capitalize bg-black lg:bg-transparent md:bg-transparent top-[100%] ${
            isOpen ? "left-0" : "left-[-900px]"
          }  lg:w-fit md:w-fit w-[60%] text-center duration-500`}
        >
          <NavLink to="/">
            <li className="lg:pb-0 md:pb-0 pb-3 lg:pt-0 md:pt-0 pt-3 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
              Home
            </li>
          </NavLink>
          <NavLink to="/contactUs">
            <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
              Contact Us
            </li>
          </NavLink>
          <NavLink to="/dashboard">
            <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/ourMenu">
            <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
              Our Menu
            </li>
          </NavLink>
          <NavLink to="/ourShop">
            <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
              Our Shop
            </li>
          </NavLink>
          {user === null ? (
            <NavLink to="/signUp">
              <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg lg:hidden md:hidden block">
                Sign Up
              </li>
            </NavLink>
          ) : (
            <NavLink>
              <li
                onClick={handelSignOut}
                className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg lg:hidden md:hidden block"
              >
                Sign Out
              </li>
            </NavLink>
          )}
          <NavLink>
            <figure className="user_img w-[60px] h-[60px] mx-auto mb-5 lg:hidden md:hidden block ">
              <img
                className="w-full h-full object-cover block  rounded-full mx-auto "
                src={userImg}
                alt="img"
              />
            </figure>
          </NavLink>
        </ul>
        {/* nav list */}
        <div className="user_profile  flex items-center justify-center gap-5">
          {user === null ? (
            <NavLink to="/signUp">
              <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg lg:block md:block hidden">
                Sign Up
              </li>
            </NavLink>
          ) : (
            <NavLink>
              <li
                onClick={handelSignOut}
                className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg lg:block md:block hidden"
              >
                Sign Out
              </li>
            </NavLink>
          )}
          <NavLink>
            <figure className="user_img w-[60px] h-[60px] ">
              <img
                className="w-full h-full object-cover block  rounded-full "
                src={userImg}
                alt="img"
              />
            </figure>
          </NavLink>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden md:hidden"
          >
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
}
