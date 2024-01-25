import React from "react";
import SavedItem from "./SavedItem";
import { useSavedArticle } from "../context/SavedArticleContextApi";
import toast from "react-hot-toast";
import Heading from "../ui/Heading";

const SavedArticles = ({ savedArticles }) => {
  if (savedArticles === undefined || savedArticles.length === 0) {
    return <Heading as = "h1">No saved articles yet.</Heading>;
  }

  const { setSavedArticles } = useSavedArticle();

  const removeItem = (articleToRemove) => {
    setSavedArticles((prevArticles) => {
      return prevArticles.filter(
        (article) => article.title !== articleToRemove.title
      );
    });
    toast.success("Article Removed Successfully.");
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        gap: "35px",
      }}
    >
      {savedArticles.map((element) => {
        console.log(element);
        return (
          <div
            key={element.newsUrl}
            style={{
              border: "1px solid var(--color-grey-100)",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <SavedItem
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imageUrl={element.imageUrl}
              newsUrl={element.newsUrl}
              author={element.author}
              date={element.date}
              source={element.source}
              onRemove={removeItem}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SavedArticles;
