import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { DataContext } from './context/context';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const {mode} = useContext(DataContext)
    const heading = {
        color:mode==='dark'?"#fff":"#000",
        margin: "35px 0px", marginTop: "90px"
      }
      const myStyles = {
        // color:mode==="dark"?"#fff":"#000",
        // backgroundColor:mode==="dark"?"#000":"#fff",
    }
      


  const fetchData = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=78309896116e4cf99e8f8a18dcefdc50&page=${page}&pageSize=${
      props.pageSize
    }`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let result = await data.json();
    props.setProgress(70);
    setArticles(result.articles);
    setTotalResults(result.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=78309896116e4cf99e8f8a18dcefdc50&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    fetchData();
    /* eslint-disable */
  }, []);

  return (
    <>
      <h1
        className="text-center"
        style={heading}
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container" style={myStyles} >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
