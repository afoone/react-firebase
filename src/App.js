import React, { useState } from 'react';
import './App.css';
import Routes from './routes/Routes'
import UserContext from './context/UserContext'
import {auth} from './config/firebase'


function App() {

  const [user  , setUser  ] = useState({})

  //auth.onAuthStateChanged(user => setUser(user?user: {}))

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Routes/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
