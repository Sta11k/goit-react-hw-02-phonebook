import React from 'react';
import { Component } from 'react';
import s from './Phonebook.module.css';
import { v4 as uuid } from 'uuid';

// const Add = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

export class Phonebook extends Component {
  state = {
    id: null,
    filter: '',
    name: '',
    number: '',
  };

  hendleChange = e => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { id, name, number } = this.state;
    const contactsPhone = {
      id,
      name,
      number,
    };
    this.setState({ contactsPhone });
    this.props.addNewContact(contactsPhone);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: ' ', number: ' ' });
  };
  contactId = uuid();
  contactIdName = uuid();
  contactIdNumber = uuid();

  render() {
    console.log(this.state.name, this.state.number);
    const { name, number } = this.state;
    const { hendleSubmit, hendleChange } = this;
    return (
      <>
        <form onSubmit={hendleSubmit}>
          <h1>Phonebook</h1>
          <div className={s.addBlock}>
            <label htmlFor={this.contactIdName} className={s.name}>
              Name
              <input
                id={this.contactIdName}
                onChange={hendleChange}
                type="text"
                value={name}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>
            <label htmlFor={this.contactIdNumber} className={s.name}>
              Number
              <input
                id={this.contactIdNumber}
                onChange={hendleChange}
                type="tel"
                value={number}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label>
            <button type="submit">Add</button>
            {/* <Add label="Add contacts" changeMessage={this.updateMessage} /> */}
          </div>
        </form>

        <div className={s.search}>
          <h2>Contacts</h2>
          {/* <label className={s.name}>
              Find contacts by name
              <input
                type="tel"
                name="search"
               
                title="Пошук контактів за ім'ям"
               />
            </label> */}

          <ul className="contacts__list"></ul>
        </div>
      </>
    );
  }
}

// export default Phonebook;
