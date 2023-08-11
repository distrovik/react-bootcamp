import React, { useState } from "react";

function Paragraph() {

  setInterval(updateTime,1000);

  const now = new Date();

  const [time, setTime] = useState(now);

  function updateTime() {
    setTime(new Date())
  }

  return <p style={{ color: "darkblue" }}>Your local time is 
  {" "+ time.getHours() + ":"+ time.getMinutes()+":"+time.getSeconds()}</p>;
}

export default Paragraph;
