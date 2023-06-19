import React from 'react';
import cssModule from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/actions';

const Filter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };


  return (
      <form className={cssModule.filter}>
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
  );
};

export default Filter;
