import React from 'react'
import { useSearchParams } from 'react-router-dom'
import News from './News';
import PageNotFound from './PageNotFound';

const NewsCategory = () => {
  
  let[searchParams] = useSearchParams();

  const category = searchParams.get('category')
  const categories = [
    "general",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];
  if(!categories.includes(category)) return <PageNotFound/>
  return (
    <div>
      <h1 style={{ marginBottom: "2.4rem" }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <News key={category} category={category} pageSize={65} />
    </div>
  )
}

export default NewsCategory