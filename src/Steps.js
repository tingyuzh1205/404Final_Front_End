import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default class Steps extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteComment(commentId) {
    const kk = commentId;
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete this comment"
    );
    if (!isDeleteConfirmed) {
      return;
    }
    const url = `http://localhost:4000/api/comments/${kk}`;
    fetch(url, { method: "DELETE" }).then(() => {
      toast.success(`Comment was deleted`);
    });
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  }

  render() {
    return (
      <>
        <div className="row mt-4">
          <h5>Steps:</h5>
          <ol>
            {this.props.steps.map((step, index) => {
              return (
                <li className="mx-3" key={index} data-testid="step">
                  {step}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="row mt-4 fw-bold">
          <h4 className="col-2">Comments:</h4>
          <a
            type="button"
            href="/comments/new"
            className="btn btn-primary col-2"
          >
            Add a Comment
          </a>
        </div>
        {this.props.comments.reverse().map((comment) => {
          return (
            <div className="row my-3 " key={comment.id} data-testid="comment">
              <h6 className="fw-bold" data-testid={`cm-${comment.id}`}>
                From {comment.name} at {comment.time}
              </h6>
              <p data-testid={`cmb-${comment.id}`}>{comment.body}</p>
              <div className="btn-group">
                <button
                  data-testid="btn"
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    this.deleteComment(comment.id);
                  }}
                >
                  Delete
                </button>
                <Link
                  data-testid="btn"
                  to={`/comments/${comment.id}/edit`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
