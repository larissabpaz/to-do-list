import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/UserRegister/SignUp';
import Login from './components/Login/Login';
import ToDoListComponent from './components/Pages/ToDoList';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/tarefas" element={<ToDoListComponent />} />
      </Routes>
    </Router>
    </>
  );
}
