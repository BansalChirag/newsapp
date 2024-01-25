import React from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { useSavedArticle } from "../context/SavedArticleContextApi";
import toast from "react-hot-toast";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, date, author, onSave } = props;

  const article = {
    title,
    description,
    imageUrl,
    newsUrl,
    date,
    author,
  };

  const isSavedArticle = (articleToCheck) => {
    return savedArticles.some(savedArticle => savedArticle.title === articleToCheck.title );
  };

  const {setSavedArticles,savedArticles} = useSavedArticle()

  const defaultImageUrl = "/deafult-news.png";

  

  const removeItem = (articleToRemove) => {
    setSavedArticles((prevArticles) => {
      return prevArticles.filter(
        (article) => article.title !== articleToRemove.title
      );
    });
    toast.success("Article Removed Successfully.");
  };



  return (
    <div style={{ display: "flex" }}>
      <img
        src={imageUrl || defaultImageUrl}
        alt="Image not available"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          marginLeft: "10px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Heading as="h4" style={{ marginBottom: "10px" }}>
            {title}
          </Heading>
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            onClick={() => window.open(newsUrl, "_blank")}
            style={{marginRight:"10px"}}
          >
            Read More
          </Button>
          {isSavedArticle(article) ? (
            <Button onClick={() => removeItem(article)} size="small" variation="secondary">
              Remove from Saved
            </Button>
          ) : (
            <Button onClick={() => onSave(article)} size="small" variation="secondary">
              Save Article
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
