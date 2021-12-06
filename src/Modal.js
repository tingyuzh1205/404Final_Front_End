import React from "react";
import ReactDom from "react-dom";
import "./App.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const modalContainer = document.getElementById("modal-container");
    return ReactDom.createPortal(
      <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-4" data-testid="modal-title">
                {this.props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={this.props.onClose}
              ></button>
            </div>
            <div className="modal-body fs-5">{this.props.body()}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>,
      modalContainer
    );
  }
}
