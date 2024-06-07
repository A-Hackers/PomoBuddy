<<<<<<< Updated upstream
import "./index.css";
import TimerPage from "./pages/TimerPage.jsx";

const App = () => {
  return (
    <div>
      <TimerPage />
    </div>
=======
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import TimerPage from './pages/TimerPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
>>>>>>> Stashed changes
  );
};

export default App;
