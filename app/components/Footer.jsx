import React from "react";
import MiniFooter, { BottomFooter } from "./MiniFooter";
import { allFooter, lastfooterArr } from "../data/data";
import { LoadContext } from "../context/numberContext";
const Footer = () => {
  
  return (
    <footer className="w-full max-w-[1413px] pt-12 pb-4 pr-4 pl-4 md:pr-12 md:pl-12 md:pt-12 md:pb-8">
      <div className="flex flex-row justify-between">
        <div className="font-galaxy-polaris flex flex-col md:flex-row w-full justify-between">
          {allFooter.map(({ heading, list }, i) => (
            <MiniFooter key={i} heading={heading} list={list} />
          ))}
        </div>
      </div>
      <BottomFooter arr={lastfooterArr} />
    </footer>
  );
};

export default Footer;
