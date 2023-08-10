import Navbar from "../components/Navbar";
import Card from "../components/emojipedia/EmojipediaCard"
import EmojipediaDB from "../components/emojipedia/Emojipedia";

function Emojipedia() {

    function createCard(emoji) {
        return (
            <Card
            key={emoji.id}
            name={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}
            />
        )
    }

    return(
        
        <div>
            <Navbar />
            <h1><span>emojipedia</span></h1>
            {EmojipediaDB.map(createCard)}
        </div>
    )
    
}

export default Emojipedia;