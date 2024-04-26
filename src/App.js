import React from 'react';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, Login } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Home/>
  );
};

export default App;