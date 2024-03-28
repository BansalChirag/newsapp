import React from "react";
import { useSavedArticle } from "../context/SavedArticleContext";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import useUser from "../authentication/useUser";
import Heading from "../ui/Heading";

const NewsItem = ({
  title,
  imageUrl,
  newsUrl,
  article,
  category
}) => {
  const {user} = useUser();
  const { savedArticles, setSavedArticles } = useSavedArticle();
  
  const isSavedArticle = (article) => {
    return savedArticles.some(
      (savedArticles) => savedArticles.title === article.title
    );
  };

  const removeArticle = (articleToRemove) => {
    setSavedArticles((prevArticles) => {
      return prevArticles.filter((article) => {
        return article.title !== articleToRemove.title;
      });
    });

    toast.success("Article Removed Successfully.");
  };

  const saveArticle = (articleToSave) => {
    if (!user) {
      toast.error("To save an article, you need to login first.");
      return;
    }
    const articleWithCategory = { ...articleToSave, category };
    setSavedArticles([...(savedArticles || []), articleWithCategory]);
    toast.success("Article Saved Successfully.");
  };

  const defaultUrl = 'deafult-news.png'

  return (
    <div style={{ display: "flex"}}>
      <img
        src={imageUrl}
        alt="Image not available"
        style={{
          width: "15rem",
          height: "15rem",
          objectFit: "cover",
        }}
        onError={(e) => {
          e.target.onerror = null; // Prevents the error from being triggered again
          e.target.src = defaultUrl; // Sets the default image URL
        }}
      />
      <div
        style={{
          marginLeft: "1rem",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Heading as="h5">{title}</Heading>
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
            style={{ marginRight: "1rem" }}
          >
            Read More
          </Button>
          {isSavedArticle(article) ? (
            <Button
              onClick={() => removeArticle(article)}
              size="small"
              variation="secondary"
            >
              Remove from saved
            </Button>
          ) : (
            <Button
              onClick={() => saveArticle(article)}
              size="small"
              variation="secondary"
            >
              Save article
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
