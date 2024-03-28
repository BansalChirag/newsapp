import React, { useState } from "react";
import SavedItem from "./SavedItem";
import Heading from "../ui/Heading";
import styled from "styled-components";
import Empty from "../ui/Empty";


const Wrapper = styled.select`
  background-color: var(--color-grey-0);
  padding: .5rem;
  margin-bottom: 2.4rem;

`


const SavedArticle = ({ savedArticles }) => {

  if (savedArticles === undefined || savedArticles.length === 0) {
    return <Empty resourceName="saved articles" />;
  }

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSavedArticles = savedArticles.filter(article => {
    if (selectedCategory === 'all') {
      return true;
    } else {
      return article.category === selectedCategory;
    }
 });

 if (filteredSavedArticles.length === 0) {
  return  (
  <div>
  <Wrapper onChange={e => setSelectedCategory(e.target.value)}>
  <option value="all">All</option>
  <option value="business">Business</option>
  <option value="technology">Technology</option>
  <option value="sports">Sports</option>
  <option value="entertainment">Entertainment</option>
  <option value="science">Science</option>
  <option value="health">Health</option>
</Wrapper>
<Empty resourceName="saved article in this category" />
  </div>
  )
}


  

  return (
    <div>
    <Wrapper onChange={e => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="entertainment">Entertainment</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
      </Wrapper>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(40rem, 1fr))",
        gap: "3.5rem",
      }}
    >
      {filteredSavedArticles.map((article) => {
        // console.log(article);
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
            <SavedItem
              title={article.title ? article.title : ""}
              description={article.description ? article.description : ""}
              imageUrl={article.urlToImage}
              newsUrl={article.url}
              author={article.author}
              date={article.date}
              source={article.source}
              article={article}

            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default SavedArticle;
