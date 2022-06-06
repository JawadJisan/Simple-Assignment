import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';





function App() {

  return (
    <div className="text-center m-5 p-5">
      <Routes>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>
     
    </div>
  );
}

export default App;
