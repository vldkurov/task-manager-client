// src/App.jsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const App = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {/*<Route path="/logout" element={<Logout/>}/>*/}
            {/* other routes can be added here */}
        </Routes>
    </Router>
);

export default App;
