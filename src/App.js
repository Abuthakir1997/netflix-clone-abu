import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeScreen } from './Pages/HomeScreen/HomeScreen';
import Login from './Pages/Login/Login';
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
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? <Login /> : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
