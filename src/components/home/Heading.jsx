import React from "react";

function Heading() {
  const name = "V";
  const time = new Date();
  const curretTime = time.getHours();

  let greeting;

  const customStyle = {
    color: "",
  };

  if (curretTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (curretTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <h1 className="header" style={customStyle}>
      Hello {greeting} {`Mr.`}
      {`${name}`}!
    </h1>
  );
}

export default Heading;
