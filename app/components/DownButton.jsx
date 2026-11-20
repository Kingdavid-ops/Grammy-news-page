import React, { useContext } from "react";
import { LoadContext } from "../context/numberContext";
import { ArticleContexts } from "../context/articleContext";

export const LoadMore = () => {
  const { load, setLoad } = useContext(LoadContext);
  const { article } = useContext(ArticleContexts);
  const updateLoad = () => {
    load <= article.length ? setLoad(load + 3) : setLoad(load);
  };
  if (load >= article.length) {
    return (
      <section className=" h-full w-full max-w-7xl flex flex-col items-center">
        <div className="max-w-xl md:max-w-4xl w-full mt-12 md:mt-20 flex md:justify-start justify-center">
          <button
            role="button"
            disabled
            className="uppercase font-polaris border   border-gray-600 px-5 py-3 text-xs text-gray-600  outline-none focus:outline-none font-semibold"
          >
            Load More
          </button>
        </div>
      </section>
    );
  }
  return (
    <section className=" h-full w-full max-w-7xl flex flex-col items-center">
      <div className="max-w-xl md:max-w-4xl w-full mt-12 md:mt-20 flex md:justify-start justify-center">
        <a
          role="button"
          onClick={updateLoad}
          className="uppercase font-polaris border border-custom-blue px-5 py-3 text-xs text-custom-blue hover:text-white hover:bg-custom-blue outline-none focus:outline-none font-semibold"
        >
          Load More
        </a>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex justify-end mb-6 md:mb-10 w-full max-w-7xl">
      <button
        onClick={handleScrollToTop}
        className="text-xs font-polaris border-b-2 mr-12 pb-1 cursor-pointer border-dark-grey outline-none focus:outline-none"
      >
        TOP
      </button>
    </div>
  );
};
export { ScrollToTop };
