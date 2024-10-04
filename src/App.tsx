import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/UserRegister/SignUp';
import Login from './components/Login/Login';
import ToDoListComponent from './components/Pages/ToDoList';
import { MainContext } from './main/Context/MainContextProvider';

export default function App() {
  const { userIsLogged } = useContext(MainContext);

  return (
    <>
    <Router>
      <Routes>
      <>
          {userIsLogged ? (
            <>
            <Route path="/tarefas" element={<ToDoListComponent />} />
            </>
          ) : (
            <>
              <Route path="/cadastrar" element={<SignUp />} />
              <Route path="/" element={<Login />} />
            </>
          )}
        </>
      </Routes>
    </Router>
    </>
  );
}
