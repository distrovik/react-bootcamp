import Contacts from "../components/contact/Contacts"
import createCard from "../components/contact/MapContacts"
import Navbar from "../components/Navbar";

function Contact() {
    return (
        <div>
        <Navbar />
        <h1 className="heading">Contacts</h1>
        {Contacts.map(createCard)}
        </div>
    )
};

export  default Contact;