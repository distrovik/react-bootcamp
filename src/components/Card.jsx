function Card(prop) {
    return (
        <div>
      <h1 className="heading">Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <img className={prop.imgCss}
            src={prop.img}
            alt="avatar_img"
          />
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