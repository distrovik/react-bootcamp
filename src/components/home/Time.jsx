import React, { useState } from "react";

function Time() {
  const h1 = {
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: "50px",
    fontWeight: "300",
  };

  const button = {
    backgroundColor: "#6bbe92",
    border: "0",
    borderRadius: "10px",
    boxShadow: "5px",
    margin: "10px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "50px",
  };

  // setInterval(updateTime, 1000)

  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div>
      <h1 style={h1}>{time}</h1>
      <button style={button} onClick={updateTime}>
        Refresh
      </button>
    </div>
  );
}

export default Time;
