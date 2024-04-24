import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="filter" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default Filter;
