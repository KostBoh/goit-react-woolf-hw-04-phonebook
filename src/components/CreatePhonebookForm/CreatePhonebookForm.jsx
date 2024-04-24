import React, { Component } from 'react';
import styles from './CreatePhonebookForm.module.css';

class CreatePhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.submit(name, number);
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            className={styles.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and  spaces.        For example Adrian, Jacob Mercer, Charles de  Batz de Castelmore       d'Artagnan"
            required
          />
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePhonebookForm;
