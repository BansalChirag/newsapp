import React, { useState } from "react";
import News from "./News";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Heading from "../ui/Heading";
import NewsItem from "./NewsItem";

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

  const [progress, setProgress] = useState(10);
  return (
    <div>
      {categories.map((category, idx) => {
        const isLastChild = idx === categories.length - 1;
        return (
          <div key={idx} style={{ marginBottom: isLastChild ? '0' : '100px' }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: '10px' }}>
              <Heading as="h1" style={{ marginBottom: '20px' }}>{category === 'general' ? "Today's Headlines" : category.charAt(0).toUpperCase() + category.slice(1)}</Heading>
              <NavLink
                style={{ display: "flex", alignItems: "center", gap: ".4rem" }}
                to={`/${category}`}
              >
                See all
                <FaChevronRight />
              </NavLink>
            </div>
            <News key={category} category={category} pageSize="6" setProgress = {setProgress} />
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
