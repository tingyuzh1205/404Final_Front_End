import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Steps from "./Steps";

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.recipeId;
    fetch(`http://localhost:4000/api/recipes/${id}?_embed=comments`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json.ingre);
        this.setState({
          recipe: json,
        });
      });
  }

  render() {
    let recipe = this.state.recipe;
    document.title = this.state.recipe.title;
    return (
      <>
        {this.state.recipe.type == "lunch" ? (
          <>
            <div className="row justify-content-start align-items-center">
              <div className="col-3 ">
                <img src={recipe.picture} width="250px" />
              </div>
              <div className="col-8">
                <h4 className="fw-bold mb-3">{recipe.title}</h4>
                <h5>Ingredients:</h5>
                <p>{recipe.ingredients.join(", ")}</p>
              </div>
            </div>
            <Steps steps={recipe.steps} comments={recipe.comments} />
          </>
        ) : (
          <>
            <div className="row justify-content-start align-items-center">
              <div className="col-7">
                <h4 className="fw-bold mb-3">{recipe.title}</h4>
                <h5>Ingredients:</h5>
                <p>
                  {recipe.ingredients ? recipe.ingredients.join(", ") : null}
                </p>
              </div>
              <div className="col-2 ">
                <img src={recipe.picture} width="250px" />
              </div>
            </div>
            {recipe.steps && recipe.comments ? (
              <Steps steps={recipe.steps} comments={recipe.comments} />
            ) : null}
          </>
        )}
      </>
    );
  }
}
