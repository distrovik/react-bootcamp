import ContactDB from "../components/contact/ContactDB";
import createCard from "../components/contact/MapContacts";
import Navbar from "../components/home/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <h1 className="heading">Contacts</h1>
      {ContactDB.map(createCard)}
    </div>
  );
}

export default Contact;
