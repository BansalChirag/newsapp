import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const SavedArticlesContext = createContext();

// Provider component
function SavedArticlesProvider({ children }) {
 const [savedArticles, setSavedArticles] = useState(() => {
    // Initialize state with data from localStorage
    const storedArticles = localStorage.getItem('savedArticles');
    return storedArticles ? JSON.parse(storedArticles) : [];
 });

 // Update localStorage whenever savedArticles changes
 useEffect(() => {
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
 }, [savedArticles]);

 return (
    <SavedArticlesContext.Provider value={{ savedArticles, setSavedArticles }}>
      {children}
    </SavedArticlesContext.Provider>
 );
}

// Custom hook for consuming the context
function useSavedArticle() {
 const context = useContext(SavedArticlesContext);
 if (context === undefined) {
    throw new Error("useSavedArticle must be used within a SavedArticlesProvider");
 }
 return context;
}

export { useSavedArticle, SavedArticlesProvider };
