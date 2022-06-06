import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Login from './Login';





function App() {

  return (
    <div className="text-center m-5 p-5">
      <h1>Please Login First to See the List of Openings Jobs</h1>
      <Button className='mt-5 p-3' variant="primary" size="lg">
        Please Login
      </Button>
    </div>
  );
}

export default App;
