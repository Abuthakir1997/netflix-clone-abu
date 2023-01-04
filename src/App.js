import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeScreen } from './Pages/HomeScreen/HomeScreen';
import Banner from './components/Banner';
import Login from './Pages/Login/Login';
import Profile from './Pages/ProfileScreen/ProfileScreen';
import ProfileScreen from './Pages/ProfileScreen/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  // const user = {
  //   name: "jack",
  //   email: "jack@gmail.com",
  //   pass: "ldsf"
  // }
  return (
    <div className="App">
      {/* <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      <Router>
        {!user ? <Login /> : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}

      </Router>
      {/* <HomeScreen /> */}
      {/* <Banner></Banner> */}
    </div>
  );
}

export default App;
