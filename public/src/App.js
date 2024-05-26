import React from 'react';
import Register from '../src/pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetAvt from './pages/SetAvt';
import { Route, Routes } from 'react-router-dom';
const App = () => {
   return (
      <Routes>
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/setAvatar" element={<SetAvt />} />
         <Route path="/" element={<Chat />} />
      </Routes>
   );
};

export default App;
