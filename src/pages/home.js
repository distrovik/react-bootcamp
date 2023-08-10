import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Personal, {Race} from "../components/Personal"
import * as Image from "../components/Image"
import Card from "../components/contact/ContactCard"
import Navbar from "../components/Navbar"

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
      </div>
)}

export default Home;