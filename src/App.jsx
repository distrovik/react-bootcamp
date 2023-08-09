import React from "react";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Personal, {Race} from "./components/Personal"
import * as Image from "./components/Image"
import Card from "./components/Card"
import Contacts from "./components/Contacts"
import createCard from "./components/MapContacts";

function App() {
  return (
    <div>
      <Heading />
      <Image.Img3 />
      <Paragraph />
      <Personal />
      {Race()}
      <br/>
      <Card 
        name="Irfan Fairuz"
        img="https://eu.bungiestore.com/media/wysiwyg/seasonal-reward-1.png"
        imgCss="circle-img"
        tel="011-63390XXX"
        email="mrirfanwork@gmail.com"
      />
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
