import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  // const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!contacts.length) {
    return <div>No contacts available.</div>;
  }

  // const filteredData = contacts.filter((item) =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <Contact
            name={name}
            number={number}
            nameIcon={<FaUser />}
            numberIcon={<FaPhoneAlt />}
          />
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
