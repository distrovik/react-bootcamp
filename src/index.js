import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <h1 className="heading" style={customStyle}>
        Hello {greeting} {`Mr.`}
        {`${name}`}!
      </h1>
      <p style={{ color: "darkblue" }}>
        Your local time is {time.getHours()}
        {":" + time.getMinutes()}
      </p>
    </div>
  </React.StrictMode>
);
