import Heading from "../components/home/Heading";
import Paragraph from "../components/home/Paragraph";
import Personal, { Race } from "../components/home/Personal";
import * as Image from "../components/home/Image";
import Card from "../components/contact/ContactCard";
import Navbar from "../components/home/Navbar";
import Time from "../components/home/Time";

function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Image.Img3 />
      <Paragraph />
      <Personal />
      {Race()}
      <Card
        name="Irfan Fairuz"
        img="https://eu.bungiestore.com/media/wysiwyg/seasonal-reward-1.png"
        imgCss="circle-img"
        tel="011-63390XXX"
        email="mrirfanwork@gmail.com"
      />
      <Time />
    </div>
  );
}

export default Home;
