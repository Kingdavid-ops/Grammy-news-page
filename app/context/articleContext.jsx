import React, { createContext, useEffect, useState } from "react";
import { articles } from "../data/data";
// eslint-disable-next-line react-refresh/only-export-components
export const ArticleContexts = createContext();
const ArticleContext = ({ children }) => {
  const [article, setArticle] = useState([]);
  function handleFilter(filter = "") {
    const filteredArticle = articles.filter((article) =>
      article.category.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredArticle.length === 0) {
      const notExist = articles.filter((article) =>
        article.category.toLowerCase().includes("")
      );
      setTimeout(() => setArticle(notExist), 3000);
      throw new Error(`Category ${filter.toLocaleUpperCase()} not found`);
    }
    setArticle(filteredArticle);
  }

  useEffect(() => {
    handleFilter();
  }, []);
  return (
    <ArticleContexts.Provider value={{ article, handleFilter }}>
      {children}
    </ArticleContexts.Provider>
  );
};

export default ArticleContext;
