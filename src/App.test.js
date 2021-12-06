import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDom from "react-dom";
import { Link, NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Steps from "./Steps";
import Modal from "./Modal";

const steps = ["1", "2", "3", "4"];
const comments = [
  {
    id: "0",
    name: "Alex",
    body: "It's kinda spicy but taste good!",
    time: "Sat, 13 Jun 2020 18:30:00 GMT",
    recipeId: "0",
  },
  {
    name: "Alice",
    body: "Best Kong Bao chicken expeced!!!",
    time: "Mon, 06 Dec 2021 01:14:00 GMT",
    recipeId: "0",
    id: "1",
  },
];

test("rendering steps number correct", () => {
  const { getAllByTestId } = render(
    <Router>
      <Steps steps={steps} comments={comments} />
    </Router>
  );
  expect(getAllByTestId("step").length).toBe(4);
});

test("rendering button correct", () => {
  const { getAllByTestId } = render(
    <Router>
      <Steps steps={steps} comments={comments} />
    </Router>
  );
  expect(getAllByTestId("btn").length).toBe(4);
});

test("rendering comment number", () => {
  const { getAllByTestId } = render(
    <Router>
      <Steps steps={steps} comments={comments} />
    </Router>
  );

  expect(getAllByTestId("comment").length).toBe(2);
});

test("rendering comment title 1", () => {
  const { getByTestId } = render(
    <Router>
      <Steps steps={steps} comments={comments} />
    </Router>
  );

  expect(getByTestId("cm-0").textContent.trim()).toBe(
    "From Alex at Sat, 13 Jun 2020 18:30:00 GMT"
  );
});

test("rendering comment title 2", () => {
  const { getByTestId } = render(
    <Router>
      <Steps steps={steps} comments={comments} />
    </Router>
  );

  expect(getByTestId("cm-1").textContent.trim()).toBe(
    "From Alice at Mon, 06 Dec 2021 01:14:00 GMT"
  );
});

test("rendering comment content 1", () => {
  const { getByTestId } = render(
    <Router>
      <Steps steps={steps} comments={comments} />
    </Router>
  );

  expect(getByTestId("cmb-0").textContent.trim()).toBe(
    "It's kinda spicy but taste good!"
  );
});

test("rendering comment content 2", () => {
  const { getByTestId } = render(
    <Router>
      <Steps steps={steps} comments={comments} />
    </Router>
  );

  expect(getByTestId("cmb-1").textContent.trim()).toBe(
    "Best Kong Bao chicken expeced!!!"
  );
});

test("rendering Navigation bar content home", () => {
  const { getByTestId } = render(
    <Router>
      <Navigation />
    </Router>
  );
  expect(getByTestId("nb-1").textContent.trim()).toBe("Home");
});

test("rendering Navigation bar content Recipes", () => {
  const { getByTestId } = render(
    <Router>
      <Navigation />
    </Router>
  );
  expect(getByTestId("nb-2").textContent.trim()).toBe("Recipes");
});

test("rendering Navigation bar content About", () => {
  const { getByTestId } = render(
    <Router>
      <Navigation />
    </Router>
  );
  expect(getByTestId("nb-3").textContent.trim()).toBe("About");
});
