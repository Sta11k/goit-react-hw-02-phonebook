import './App.css';
import Phonebook from './components/phonebook/phonebook';
// import Profile from './components/profile/Profile';
// import user from '../src/components/profile/user.json';
// import Statistics from './components/statistics/Statistics';
// import FriendList from './components/friendList/FriendList';
// import friends from './components/friendList/friends.json';
// import TransactionHistory from './components/transactionHistory/TransactionHistory';
// import transactions from './components/transactionHistory/transactions.json';

//  import StatisticalData from './components/statistics/Statistics';
function App() {
  return (
    <div className="App">
      <Phonebook />
    </div>
  );
}

export default App;

// {/* <Profile
//   name={user.name}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />
// <Statistics />
// <FriendList friends={friends} />
// <TransactionHistory items={transactions} />; */}
