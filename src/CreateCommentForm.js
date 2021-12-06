import React from "react";
import { toast } from "react-toastify";

export default class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: "",
      time: "",
      recipeId: "1",
    };
  }
  componentDidMount() {
    document.title = "Create Comment";
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }
  handleRecipeIdChange(event) {
    this.setState({ recipeId: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const time = Date.now();
    const today = new Date(time);

    fetch("https://back-end-404.herokuapp.com/api/comments", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        body: this.state.body,
        time: today.toUTCString(),
        recipeId: this.state.recipeId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        toast.success(`Comment by "${json.name}" was successfully`);
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.handleSubmit(event);
        }}
      >
        <div className="my-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            value={this.state.name}
            className="form-control"
            id="title"
            onChange={(event) => {
              this.handleNameChange(event);
            }}
            required
          ></input>
          <div class="invalid-feedback">Please provide a name.</div>
        </div>

        <div className="my-3">
          <label className="form-label" htmlFor="body">
            Body
          </label>
          <textarea
            value={this.state.body}
            className="form-control"
            id="body"
            onChange={(event) => {
              this.handleBodyChange(event);
            }}
            required
          ></textarea>
          <div class="invalid-feedback">The comment cannot be empty!</div>
        </div>

        <div className="my-3">
          <label className="form-label" htmlFor="recipeId">
            Recipe
          </label>

          <select
            required
            id="body"
            class="form-select"
            aria-label="select example"
            onChange={(event) => {
              this.handleRecipeIdChange(event);
            }}
          >
            <option value="0">Kung Bao Chicken</option>
            <option value="1">Szechuan Fish</option>
            <option value="2">Sachima</option>
          </select>
          <div class="invalid-feedback">Please select a valid recipe.</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Comment
        </button>
      </form>
    );
  }
}
