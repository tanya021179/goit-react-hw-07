import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {filteredData.map(({ id, name, number }) => (
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
