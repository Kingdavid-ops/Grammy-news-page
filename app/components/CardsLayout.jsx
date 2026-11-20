import React, { useContext } from "react";
import { LoadContext } from "../context/numberContext";
import Card from "./Card";
import { ArticleContexts } from "../context/articleContext";
const CardsLayout = () => {
  const { article } = useContext(ArticleContexts);
  const { load } = useContext(LoadContext);

  return (
    <article className="gap-8 flex flex-col justify-between pr-7">
      {article.slice(0, load).map(({ heading, date, details, img }, i) => (
        <Card
          date={date}
          largeText={heading}
          smallText={details}
          imgPaht={img}
          alt={img.split("/")}
          key={i}
        />
      ))}
    </article>
  );
};

export default CardsLayout;