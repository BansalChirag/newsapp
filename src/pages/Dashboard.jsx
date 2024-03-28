import React from 'react'
import News from './News'
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import Heading from '../ui/Heading';

const Dashboard = () => {
  const categories = [
    "general",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];


return (
  <div>
    {
      categories.map((category,idx)=>{
        const isLastChild = idx===categories.length-1;

        return (
          <div key={idx} style={{ marginBottom: isLastChild ? '0' : '10rem' }}>
            <div style={{ display: "flex",  justifyContent: "space-between", marginBottom: '1rem' }}>
              <Heading as ="h1" style={{ marginBottom: '20px' }}>{category === 'general' ? "Today's Headlines" : category.charAt(0).toUpperCase() + category.slice(1)}</Heading>
              <NavLink 
              style={{ display: "flex", alignItems: "center", gap: ".4rem" }}
              to={`/news?category=${category}`}>
              See all
              <FaChevronRight />
              </NavLink>
            </div>
            <News category = {category} key={category} pageSize={6} />
          </div>
        )
      })
    }
    </div>
  )
}

export default Dashboard