import { createContext, useContext, useEffect, useState } from "react";
import {useLocalStorageState} from "../hooks/useLocalStorageState";



const SavedArticlesContext = createContext()


function  SavedArticlesProvider({children}){

    const [savedArticles,setSavedArticles] = useLocalStorageState([],'savedArticles')
    

    useEffect(function(){
        const storedArticles = localStorage.getItem('savedArticles');
        if(!storedArticles){
            localStorage.setItem('savedArticles', JSON.stringify([]));
        }else{
            setSavedArticles(JSON.parse(storedArticles));
        }
    },[])

    return (
        <SavedArticlesContext.Provider value={{savedArticles,setSavedArticles}}> 
            {children}
        </SavedArticlesContext.Provider>
    )
}

function useSavedArticle(){

    const context = useContext(SavedArticlesContext);
    if(context===undefined){
        throw new Error("SavedArticleContext was used outside of SavedArticleProvider");
    }
    return context;
}

export {useSavedArticle,SavedArticlesProvider}