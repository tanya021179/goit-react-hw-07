import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const showContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [searchContacts, setSearchContacts] = useState("");

  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("contacts");
    return saveContacts ? JSON.parse(saveContacts) : showContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (e) => {
    setSearchContacts(e.target.value);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const addContacts = (newContact) => {
    const isRepeated = contacts.find(
      (contact) =>
        contact.name === newContact.name || contact.number === newContact.number
    );
    if (isRepeated) {
      alert("Contact is repeated!");
      return;
    }
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <SearchBox
        searchContacts={searchContacts}
        onSearchContacts={handleSearchChange}
      />
      <ContactList contacts={filterContacts} onDeleteContacts={handleDelete} />
    </div>
  );
}

export default App;
