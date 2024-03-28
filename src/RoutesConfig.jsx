import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import SavedArticle from "./pages/SavedArticle";
import NewsCategory from "./pages/NewsCategory";
import ForgotPassword from "./pages/ForgotPassword";
import Account from "./pages/Account";
import { useSavedArticle } from "./context/SavedArticleContext";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ResetPassword from "./pages/ResetPassword";


const RoutesConfig = () => {
  const { savedArticles } = useSavedArticle();
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="dashboard" />}></Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="news/*" element={<NewsCategory />} />
        <Route
          exact
          path="/account"
          element={
            <ProtectedRoutes>
              <Account />
            </ProtectedRoutes>
          }
        />
        <Route
          exact
          path="/saved-articles"
          element={
            <ProtectedRoutes>
              <SavedArticle savedArticles={savedArticles} />
            </ProtectedRoutes>
          }
        />
      </Route>
      <Route exact path="/sign-in" element={<Login /> } />
      <Route exact path="/sign-up" element={<Signup />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/reset-password" element={<ResetPassword/>} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesConfig;
