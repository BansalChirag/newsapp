import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import { Toaster } from "react-hot-toast";


import { ThemeProvider } from "./context/ThemeContext";
import { SavedArticlesProvider } from "./context/SavedArticleContext";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
return (
    <ThemeProvider>
      <SavedArticlesProvider>
        <BrowserRouter>
        <GlobalStyles/>
          <RoutesConfig />
          <Toaster 
          position="top-center"
          gutter={12}
          containerStyle={{ margin: ".8rem" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "1.6rem",
              maxWidth: "50rem",
              padding: "1.6rem 2.4rem",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
          />
        </BrowserRouter>
      </SavedArticlesProvider>
    </ThemeProvider>
  );
};

export default App;
