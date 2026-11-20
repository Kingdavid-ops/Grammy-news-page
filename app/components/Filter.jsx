import { useContext, useState } from "react";
import { filters } from "../data/data";
import { ArticleContexts } from "../context/articleContext";
import { LoadContext } from "../context/numberContext";

const Filter = () => {
  const [isActive, setIsActive] = useState("ALL ARTICLES");
  const { handleFilter } = useContext(ArticleContexts);
  const { setLoad } = useContext(LoadContext);
  const handleClick = (name, filter) => {
    try {
      if (name === "ALL ARTICLES") {
        setLoad(6);
      }
      handleFilter(filter);
      setIsActive(name);
    } catch (err) {
      setIsActive(name);
      setTimeout(() => {
        alert(err.message);
        setIsActive("ALL ARTICLES");
      }, 3000);
    }
  };
  return (
    <aside className="h-[calc(100vh-59px)] flex flex-col px-8 p-2.5">
      <div className="text-xs font-bold tracking-wider border-b border-b-gray-300 py-5">
        <h4>FILTER YOUR RESULT BY:</h4>
      </div>

      <div className="flex flex-1 pt-4  flex-col justify-between text-xs font-bold items-start ">
        {filters.map(({ name, filter }, i) => (
          <button
            className={`${
              isActive === name ? "text-gray-400" : "text-sky-600"
            } cursor-pointer`}
            onClick={() => handleClick(name, filter)}
            key={i}
          >
            {name}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Filter;
