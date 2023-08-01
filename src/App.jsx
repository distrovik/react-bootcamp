import React from "react";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Personal, {Race} from "./components/Personal"
import * as Image from "./components/Image"

function App() {
  return (
    <div>
      <Heading />
      <Image.Img3 />
      <Paragraph />
      <Personal />
      {Race()}
    </div>
  );
}

export default App;
