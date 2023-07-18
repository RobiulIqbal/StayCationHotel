import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftpos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftpos = leftpos + width;
    star.push(<div className="star" key={`star-${index}`} style={{ left: index * width, height: height, width: width, marginRight: spacing }}></div>);
  }
  if (decimals > 0 && value <= 5) {
    star.push(<div className="star" key={`starWithDecimal`} style={{ left: leftpos, height: height, width: decimals * width - spacing }}></div>);
  }
  const startPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    startPlaceholder.push(<div className="star placeholder" key={`startPlaceholder-${index}`} style={{ left: index * width, height: height, width: width, marginRight: spacing }}></div>);
  }
  return (
    <>
      <div className={["stars", className].join(" ")} style={{ height: height }}>
        {startPlaceholder}
        {star}
      </div>
    </>
  );
}
Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
