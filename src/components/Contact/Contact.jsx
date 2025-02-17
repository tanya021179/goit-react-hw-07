import s from "./Contact.module.css";

const Contact = ({ name, number, nameIcon, numberIcon }) => {
  return (
    <div>
      <div className={s.contact}>
        <span>{nameIcon}</span>
        <p className={s.text}>{name}</p>
      </div>
      <div className={s.contact}>
        <span>{numberIcon}</span>
        <p className={s.text}>{number}</p>
      </div>
    </div>
  );
};

export default Contact;
