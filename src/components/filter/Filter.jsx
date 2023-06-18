import React from 'react';
import cssModule from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, getFilterValue } from '../../redux/actions';
import { useFetchContactsQuery } from 'redux/contactsSlice';

const Filter = () => {
  const { data } = useFetchContactsQuery();

  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  console.log(filter)

  const handleFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  const getFilteredContacts = () => {
    if (data !== null) {
      const filteredContacts = data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }
    return [];
  };
  return (
    <div className={cssModule.filter}>
      {data && console.log(getFilteredContacts())}
      <form onChange={getFilteredContacts}>
        <label htmlFor="filterInput">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id="filterInput"
          value={filter}
          onChange={handleFilterChange}
          className={cssModule.input}
        />
      </form>
    </div>
  );
};

export default Filter;
