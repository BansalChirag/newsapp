import React, { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ category, pageSize }) => {
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);

  const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;

  const fetchData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
      let result = await fetch(url);
      let data = await result.json();

      setArticles(data.articles);
      // console.log(articles);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("An error occurred while fetching data.");
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(38rem, 1fr))",
        gap: "3.5rem",
        
      }}
    >
      {articles.map((article) => {
        return (
        <div
          key={article.url}
          style={{
            border: ".1rem solid var(--color-grey-100)",
            borderRadius: ".8rem",
            padding: "1.5rem",
            boxShadow: "var(--shadow-lg)",
            marginRight:"30px"
          }}
        >
          <NewsItem
            title={article.title ? article.title : ""}
            description={article.description ? article.description : ""}
            imageUrl={
              article.urlToImage ? article.urlToImage : "Image not found."
            }
            newsUrl={article.url}
            author={article.author}
            date={article.publishedAt}
            article={article}
            category={category}
          />
        </div>
      );
      })}
    </div>
  );
};

export default News;
