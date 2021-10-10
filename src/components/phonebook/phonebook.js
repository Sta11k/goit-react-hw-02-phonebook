import React from 'react';
import { Component } from 'react';
import styles from './phonebook.module.css';

const Add = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  updateMessage = evt => {
    console.log(evt);

    this.setState({
      contacts: [],
      filter: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <div className={styles.addBlock}>
          <label className={styles.name}>
            Name
            <input
              type="tel"
              name="name"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="ім'я"
              required
            />
          </label>
          <label className={styles.name}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <Add label="Add contacts" changeMessage={this.updateMessage} />
        </div>

        <div className={styles.search}>
          <h2>Contacts</h2>
          <label className={styles.name}>
            Find contacts by name
            <input
              type="tel"
              name="search"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Пошук контактів за ім'ям"
              required
            />
          </label>
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
