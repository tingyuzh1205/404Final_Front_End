import React from "react";
import Modal from "./Modal";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <a>
        <img
          src="https://www.china-admissions.com/wp-content/uploads/2020/02/Chinese-food.jpg"
          width="1200"
          className="rounded mx-auto d-block"
          alt="food!!!"
          onClick={() => {
            this.setState({ isModalOpen: true });
          }}
        />
        {this.state.isModalOpen && (
          <Modal
            title="Looks like you like the picture!!!!"
            body={() => {
              return (
                <p>
                  Click on the recipe tab to explore some of my favorite
                  dishes!!
                </p>
              );
            }}
            onClose={() => {
              this.setState({ isModalOpen: false });
            }}
          />
        )}
      </a>
    );
  }
}
