import './App.css';
import { Component } from 'react';
import { Phonebook } from './components/phonebook/Phonebook';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Phonebook />
      </div>
    );
  }
}

// export default App;
