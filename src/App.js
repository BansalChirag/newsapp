import React, { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import News from "./News";
import DataProvider from "./context/context";

const App = () => {
  const [progress, setProgress] = useState(10);
  const pageSize = 5;
  return (
    <BrowserRouter>
      <DataProvider>
        <NavBar />
        <LoadingBar color="#f11946" progress={[progress]} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                setProgress={setProgress}
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                setProgress={setProgress}
                pageSize={pageSize}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                setProgress={setProgress}
                pageSize={pageSize}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                setProgress={setProgress}
                pageSize={pageSize}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                setProgress={setProgress}
                pageSize={pageSize}
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                setProgress={setProgress}
                pageSize={pageSize}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                setProgress={setProgress}
                pageSize={pageSize}
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
