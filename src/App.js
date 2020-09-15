import React, { useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const saveUserList = (user) => {
    setUsers([...users, ...user]);
  }
  return (
    <div className="App">
      <h3>User Details</h3>
      <Form saveUserList={saveUserList} />
      <List users={users} />
    </div>
  );
}

export default App;
