import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { useSavedArticle } from "../context/SavedArticleContextApi";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { savedArticles, setSavedArticles } = useSavedArticle();
  const { user } = useUser();

  const API_KEY = import.meta.env.VITE_API_NEWS_API_KEY
  const fetchData = async () => {
    try {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      props.setProgress(30);
      let result = await fetch(url);
      props.setProgress(70);
      let data = await result.json();
      props.setProgress(100);
      setArticles(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("An error occurred while fetching data.");
      setLoading(false);
    }
  };

  const saveArticle = (article) => {
    if (!user) {
      toast.error("To save an article, you need to login first.");
      return;
    }
    setSavedArticles([...(savedArticles || []), article]);
    toast.success("Article Saved Successfully.");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
        gap: "35px",
      }}
    >
      {articles.map((element) => (
        <div
          key={element.url}
          style={{
            border: "1px solid var(--color-grey-100)",
            borderRadius: "8px",
            padding: "15px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <NewsItem
            title={element.title ? element.title : ""}
            description={element.description ? element.description : ""}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
            author={element.author}
            date={element.publishedAt}
            source={element.source.name}
            onSave={saveArticle}
          />
        </div>
      ))}
    </div>
  );
};

export default News;
