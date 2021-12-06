import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import About from "./About";
import Home from "./Home";
import CreateCommentForm from "./CreateCommentForm";
import EditCommentForm from "./EditCommentForm";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      isLoading: false,
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/recipes">
              <Recipes />
            </Route>

            <Route exact path="/recipes/:recipeId" component={Recipe} />
            <Route path="/comments/new" component={CreateCommentForm} />
            <Route
              path="/comments/:commentId/edit"
              component={EditCommentForm}
            />
            <Route path="*">
              <p className="fs-2 fw-bold text-danger">
                404 The page doesn't exist
              </p>
            </Route>
          </Switch>
        </div>
        <ToastContainer autoClose={3000} />
      </Router>
    );
  }
}
