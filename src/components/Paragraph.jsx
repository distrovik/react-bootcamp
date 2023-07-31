import React from "react";

function Paragraph() {
  const time = new Date();

  return (
    <p style={{ color: "darkblue" }}>
      Your local time is {time.getHours()}
      {":" + time.getMinutes()}
    </p>
  );
}

export default Paragraph;
