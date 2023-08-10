import "./contact.css";

function Card(prop) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <img className={prop.imgCss} src={prop.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{prop.tel}</p>
          <p className="info">{prop.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
