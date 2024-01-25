import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/AppLayout";

import News from "./pages/News";
import { DarkModeProvider } from "./context/DarkModeContextApi";
import Login from "./pages/Login";
import LoadingBar from "react-top-loading-bar";

import Signup from "./pages/Signup";
import SavedArticles from "./pages/SavedArticles";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./pages/ProtectedRoute";

import { useSavedArticle } from "./context/SavedArticleContextApi";
import Account from "./pages/Account";
import Heading from "./ui/Heading";
import { useUser } from "./authentication/useUser";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  const { savedArticles } = useSavedArticle();
  const [progress, setProgress] = useState(0);

  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <GlobalStyles />  
          <LoadingBar color="#4f46e5" progress={[progress]} height={3} />
          <Routes>
            <Route element={<AppLayout />}>
              <Route
                index
                element={<Navigate replace to="dashboard" />}
              ></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route
                path="general"
                element={
                  <div>
                    <Heading as="h1" style={{ marginBottom: "24px" }}>
                      General
                    </Heading>
                    <News
                      key="general"
                      category="general"
                      setProgress={setProgress}
                      pageSize={65}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="business"
                element={
                  <div>
                    <Heading as="h1" style={{ marginBottom: "24px" }}>
                      Business
                    </Heading>
                    <News
                      key="business"
                      category="business"
                      setProgress={setProgress}
                      pageSize={65}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="health"
                element={
                  <div>
                    <Heading as="h1" style={{ marginBottom: "24px" }}>
                      Health
                    </Heading>
                    <News
                      key="health"
                      category="health"
                      setProgress={setProgress}
                      pageSize={65}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="entertainment"
                element={
                  <div>
                    <Heading as="h1" style={{ marginBottom: "24px" }}>
                      Entertainment
                    </Heading>
                    <News
                      key="entertainment"
                      category="entertainment"
                      setProgress={setProgress}
                      pageSize={65}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="science"
                element={
                  <div>
                    <Heading as="h1" style={{ marginBottom: "24px" }}>
                      Science
                    </Heading>
                    <News
                      key="science"
                      category="science"
                      setProgress={setProgress}
                      pageSize={65}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="sports"
                element={
                  <div>
                    <Heading as="h1" style={{ marginBottom: "24px" }}>
                      Sports
                    </Heading>
                    <News
                      key="sports"
                      category="sports"
                      setProgress={setProgress}
                      pageSize={65}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="technology"
                element={
                  <div>
                    <Heading as="h1" style={{ marginBottom: "24px" }}>
                      Technology
                    </Heading>
                    <News
                      key="technology"
                      category="technology"
                      setProgress={setProgress}
                      pageSize={65}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/saved-articles"
                element={
                  <ProtectedRoute>
                    <SavedArticles savedArticles={savedArticles} />
                  </ProtectedRoute>
                }
              ></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/new-user" element={<Signup />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </DarkModeProvider>
    </>
  );
};

export default App;
