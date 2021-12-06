import React from "react";

export default class About extends React.Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <div className="container-fluid">
        <h3>Why This Website</h3>
        <img
          src="https://www.china-admissions.com/wp-content/uploads/2020/02/Chinese-food.jpg"
          width="30%"
        />
        <p className="fs-5 mt-5">
          For me, food serves more than natriational purpose. A lot of times,
          food is a connection between people, culture, and even countries.
          Individuals might know each other, care each other, or even love each
          other because of the food they share and enjoy.
        </p>
        <p className="fs-5">
          Two years away from home, food has been my source of nalstaljia toward
          my family. In this website, I shared three dishes of my favorite and
          together with the recipes. I hope more people may enjoy the dishes I
          like and possibly make them better with comments.
        </p>
      </div>
    );
  }
}
