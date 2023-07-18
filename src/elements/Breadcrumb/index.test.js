import React from "react";
import { render } from "@testing-library/react";
import Breadcumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  const { container } = render(
    <Router>
      <Breadcumb data={breadcrumbList} />
    </Router>
  );
  const breadcumb = container.querySelector(`.breadcumb`);
  return {
    breadcumb,
  };
};

test("Should have ol with className .bradcrumb and have text Home & House Details", () => {
  const { breadcumb } = setup();

  expect(breadcumb).toBeInTheDocument();
  expect(breadcumb).toHaveTextContent("Home");
  expect(breadcumb).toHaveTextContent("House Details");
});
