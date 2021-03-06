import './App.css';
import { Component } from 'react';
import { Phonebook } from './components/phonebook/Phonebook';

class App extends Component {
  state = {
    filter: '',
    name: '',
    number: '',
    contactsOll: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  addNewContact = contactsObj => {
    this.setState(prevState => {
      return { contactsOll: [...prevState.contactsOll, contactsObj] };
    });
  };

  render() {
    return (
      <div className="App">
        <Phonebook addNewContact={this.addNewContact} />
      </div>
    );
  }
}

export default App;
