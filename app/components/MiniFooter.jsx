import React from "react";

const MiniFooter = ({ heading, list }) => {
  return (
    <div className="flex flex-col md:mr-3 md:ml-3">
      <p className="font-semibold md:mt-0 mt-2 tracking-widest text-base">
        <a>{heading.toUpperCase()}</a>
      </p>
      <ul className="md:block md:my-4 ">
        {list.map((item, i) => (
          <li className="mb-2" key={i}>
            <a target="_blank">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const BottomFooter = ({ arr }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-between mt-10 pt-4 border-t-2 border-[##CCCCCC]">
      <img
        className="shrink-0 self-start md:self-center"
        src="/bottomlogo.png"
        width="150"
        alt="TRA"
      />
      <div className="flex flex-col order-last md:text-center md:order-none md:items-center justify-start md:justify-center w-auto">
        <p className="md:flex mr-2">
          <span className="text-xss ">
            @ 2025 - Recording Academy. All rights reserved.
          </span>
        </p>
        <ul className="flex justify-between mt-2">
          {arr.map((arrs, i) => (
            <li className="md:ml-2 md:mr-2 flex" key={i}>
              <a href="/legal" className="text-xss">
                {arrs}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xss mt-2">
          Some of the content on this site expresses viewpoints and opinions
          that are not those of the Recording Academy and its Affiliates.
          Responsibility for the accuracy of information provided in stories not
          written by or specifically prepared for the Academy and its Affiliates
          lies with the story's original source or writer. Content on this site
          does not reflect an endorsement or recommendation of any artist or
          music by the Recording Academy and its Affiliates.
        </p>
      </div>
    </div>
  );
};

export { MiniFooter as default };
