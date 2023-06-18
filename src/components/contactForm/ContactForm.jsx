import React, { useState } from 'react';
import cssModule from './ContactForm.module.css';
import { useCreateContactMutation } from 'redux/contactsSlice';

const ContactForm = () => {
  const [createContact] = useCreateContactMutation();
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.currentTarget.elements.name.value,
      phone: e.currentTarget.elements.phone.value,
    }
    createContact(contact);
    e.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit} className={cssModule.form}>
      <label htmlFor="nameInput" className={cssModule.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="nameInput"
        className={cssModule.input}
      />
      <label htmlFor="numberInput" className={cssModule.label}>
        Number
      </label>
      <input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="numberInput"
        className={cssModule.input}
      />
      <button type="submit" className={cssModule.btn}>
        Add contact
      </button>
    </form>
  );
};

  export default ContactForm;
