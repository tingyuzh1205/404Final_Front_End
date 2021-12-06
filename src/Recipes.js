import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    document.title = "Recipes";
    fetch("http://localhost:4000/api/recipes")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ recipes: json });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.recipes.map((recipe) => {
            return (
              <div
                className="col-4 d-flex flex-column align-self-center"
                data-testid="recipe"
              >
                <img
                  data-testid={`rc-${recipe.id}`}
                  src={recipe.picture}
                  height="250px"
                />
                <Link
                  className="fs-4 text-decoration-none"
                  to={`/recipes/${recipe.id}`}
                >
                  {recipe.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
