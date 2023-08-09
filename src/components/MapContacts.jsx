import Card from "./Card";

function createCard(contact) {
    return (
        <Card
        key={contact.id}
        name={contact.name}
        imgCss={contact.imgCss}
        img={contact.imgURL}
        tel={contact.tel}
        email={contact.email}
        />
    )
}

export default createCard;