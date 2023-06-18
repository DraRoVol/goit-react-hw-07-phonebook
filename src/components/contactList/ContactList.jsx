import React from 'react';
import cssModule from './ContactList.module.css';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';

const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <div>
      <ul className={cssModule.list}>
        {data &&
          data.map(contact => {
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
