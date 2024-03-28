import React from "react";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useSavedArticle } from "../context/SavedArticleContext";
import toast from "react-hot-toast";

const SavedItem = ({title,imageUrl,article,}) => {

  // console.log(article);

  const { setSavedArticles } = useSavedArticle();

  const defaultUrl = "deafult-news.png";

  const removeArticle = (articleToRemove) => {
    setSavedArticles((prevArticles) => {
      return prevArticles.filter((article) => {
        return article.title !== articleToRemove.title;
      });
    });

    toast.success("Article Removed Successfully.");
  };

  return (
    <div style={{ display: "flex" }}>
      <img
        src={imageUrl}
        className="card-img-top"
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
          <Heading as="h5" style={{ marginBottom: "1rem" }}>
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
            style={{ marginRight: "1rem" }}
          >
            Read More
          </Button>
          <Button
            onClick={() => removeArticle(article)}
            size="small"
            variation="secondary"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SavedItem;
