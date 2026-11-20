import React, { useEffect, useRef, useState } from "react";
import { navlinks } from "../data/data";
import subscribe from "../images/subscribe.png";
const Navbar = () => {
  const searchRef = useRef(null);
  const [isActive, setIsActive] = useState("./News");
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <nav className="flex w-full sticky top-0 z-10 h-[50px] bg-white justify-between px-6 py-2  items-center border-b-2 border-b-gray-300">
      <a className="logo cursor-pointer">
        <img
          className="h-[40px]"
          src="/GRAMMY_lockup_stacked_black.png"
          alt=""
        />
      </a>
1
      <div className=" flex-1 max-w-[80%] flex justify-between px-7">
        {navlinks.map(({ name, href }, i) => (
          <a
            className={`text-[0.9rem]  hover:underline transition-all duration-500 ${
              isActive === href ? "text-amber-300 underline" : "text-gray-800"
            } `}
            onClick={(e) => {
              e.preventDefault();
              setIsActive(href);
            }}
            href={href}
            key={i}
          >
            {name}
          </a>
        ))}
      </div>

      <div className="searchbar">
        <input
          className={`bg-[url(/search.svg))] bg-left bg-size-[15px] bg-no-repeat outline-none border-b pl-5 w-[120px]`}
          type="searchRef"
          ref={searchRef}
          placeholder="search"
        />
      </div>
      <div className="flex items-center justify-between w-[80px]">
        <a href="">Login</a>
        <img src={subscribe} alt="" />
      </div>
    </nav>
  );
};
export default Navbar;
