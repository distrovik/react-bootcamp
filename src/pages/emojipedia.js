import Navbar from "../components/home/Navbar";
import Card from "../components/emojipedia/EmojipediaCard";
import EmojipediaDB from "../components/emojipedia/EmojipediaDB";
import "../components/emojipedia/emojipedia.css";

function Emojipedia() {
  return (
    <div>
      <Navbar />
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {EmojipediaDB.map((emoji) => (
          <Card
            key={emoji.id}
            name={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default Emojipedia;
