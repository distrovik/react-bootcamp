import Contacts from "../components/Contacts"
import createCard from "../components/MapContacts"

function Contact() {
    return (
        <div>
            {Contacts.map(createCard)}
        </div>
    )
};

export  default Contact;