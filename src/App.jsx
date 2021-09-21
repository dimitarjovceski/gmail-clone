import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { auth } from './firebase'

function App() {

  const sendSendMessage = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          })
        )
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>

              <Route path="/">
                <EmailList />
              </Route>
            </Switch>

          </div>
          {sendSendMessage && <SendMail />}
        </div>
      )}

    </Router>
  );
}

export default App;
