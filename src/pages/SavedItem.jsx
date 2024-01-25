import React from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const SavedItem = (props) => {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    date,
    author,
    source,
    onRemove,
  } = props;

  const article = {
    title,
    description,
    imageUrl,
    newsUrl,
    date,
    author,
    source,
  };
  // Default image URL
  const defaultImageUrl = "/deafult-news2.png";

  // Function to truncate text to a fixed length
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };


  return (
    <div style={{ display: "flex" }}>
        <img
          src={imageUrl || defaultImageUrl}
          className="card-img-top"
          alt="Image not available"
          style={{
            width: "150px",
            height: "150px", // Adjust the height as needed
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
          <Button 
            onClick={() => onRemove(article)}
            size="small"
            variation = 'secondary'
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SavedItem;
