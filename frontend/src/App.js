import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import DemoLogin from "./components/DemoLogin";
import SignupFormPage from "./components/SignupFormPage";
import ProjectListingPage from "./components/ProjectListingPage";
import ProjectPage from "./components/ProjectPage";
import NewProjectPage from "./components/NewProjectPage";
import NotLoggedInPage from "./components/NotLoggedInPage";
import HomePage from "./components/HomePage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { getAllProjects } from "./store/projects";
import { getAllUsers } from "./store/users";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getAllUsers());
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/login/demo">
            <DemoLogin />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/projects">
            <ProjectListingPage />
          </Route>
          <Route exact path="/projects/new">
            {sessionUser && (
              <NewProjectPage />
            )}
            {!sessionUser && (
              <NotLoggedInPage />
            )}
          </Route>
          <Route exact path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
