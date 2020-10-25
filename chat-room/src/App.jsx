import { useState } from 'react';
import './App.css'
import ChatLog from './ChatLog'

import Dashboard from './Dashboard';

const App = (props) => {
  const [user, setUser] = useState({ name: "defacto" });

  const updateUser = (inputE) => {
    console.log("new user", inputE.target.value);
    setUser({
      name: inputE.target.value
    })
  }

  return (
    <div className="App">
      {
        //<input value={user.name} onChange={updateUser}></input>
      }
      <ChatLog user={user} connection={props.conn} />
      <Dashboard />
    </div>
  );
}

export default App;
