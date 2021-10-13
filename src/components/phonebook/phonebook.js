import React from 'react';
import { Component } from 'react';
import s from './phonebook.module.css';
import { v4 as uuid } from 'uuid';

// const Add = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

class Phonebook extends Component {
  state = {
    contactsPhone: null,
    contactsOll: [],
    filter: '',
    name: '',
    number: '',
  };

  // updateMessage = evt => {
  //   console.log(evt);

  //   this.setState({
  //     contacts: [],
  //     filter: '',
  //     name: '',
  //     number: '',
  //   });
  // };
  hendleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const contactsObj = {
      name: this.state.name,
      number: this.state.number,
    };
    this.setState({
      contactsPhone: contactsObj,
    });
    this.setState(prevState => {
      return { contactsOll: [...prevState.contactsOll, contactsObj] };
    });
    this.reserForm();
  };

  reserForm = () => {
    this.setState({ name: ' ', number: ' ' });
  };
  contactIdName = uuid();
  contactIdNumber = uuid();

  render() {
    console.log(this.state.name, this.state.number);
    return (
      <>
        <form onSubmit={this.hendleSubmit}>
          <h1>Phonebook</h1>
          <div className={s.addBlock}>
            <label htmlFor={this.contactIdName} className={s.name}>
              Name
              <input
                id={this.contactIdName}
                onChange={this.hendleChange}
                type="text"
                value={this.state.name}
                name="name"
                title="ім'я"
                required
              />
            </label>
            <label htmlFor={this.contactIdNumber} className={s.name}>
              Number
              <input
                id={this.contactIdNumber}
                onChange={this.hendleChange}
                type="tel"
                value={this.state.number}
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
        {/* <div className={styles.result}>
          <span>No feedback given</span>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {this.state.total}</span>
          <span>Positive feedback:{this.state.PositiveFedback}</span>
        </div> */}
      </>
    );
  }
}

export default Phonebook;

// export default function Phonebook(props) {
//   //  const { id, label, percentage } = props;

//   return <h1 className={styles.title}>BBBBBBBBBBBBBBBB</h1>;
// }

/* {FriendList.title === true ? (
    <h2 className="title">{FriendList.title}</h2>
    ) : (
      ' '
      )} */

// <div className="FriendList">
//   <ul className="friend-list">
//     {friends.map(el => (
//       <li className="friend-item" key={el.id}>
//         {el.isOnline === true ? (
//           <span className="statusOn">&#x263A;</span>
//         ) : (
//           <span className="statusOf">&#x263A;</span>
//         )}

//         <img className="avatar" src={el.avatar} alt="avatar" width="48" />
//         <p className="name">{el.name}</p>
//       </li>
//     ))}
//   </ul>
// </div>
