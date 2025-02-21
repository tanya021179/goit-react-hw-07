import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short !")
      .max(50, "Maximum 50 characters!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Maximum 50 characters!")
      .required("Required!"),
  });

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact)).unwrap();
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <section className={s.section}>
      <Formik
        initialValues={initialValues}
        validationSchema={applySchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={s.form}>
            <label className={s.label} htmlFor={nameId}>
              <span>Name</span>
              <Field className={s.field} name="name" id={nameId} />
              <ErrorMessage className={s.error} component="div" name="name" />
            </label>
            <label className={s.label} htmlFor={numberId}>
              <span>Number</span>
              <Field className={s.field} name="number" id={numberId} />
              <ErrorMessage className={s.error} component="div" name="number" />
            </label>
            <button className={s.button} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
