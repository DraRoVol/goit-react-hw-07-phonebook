import React from 'react';
import { useSelector } from 'react-redux';
import cssModule from './ContactList.module.css';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';

const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter.value);

  const getFilteredContacts = () => {
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <ul className={cssModule.list}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={cssModule.item}>
              <p>
                <strong>{contact.name}:</strong> {contact.phone}
              </p>
              <button
                type="button"
                onClick={() => deleteContact(contact.id)}
                className={cssModule.btn}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
