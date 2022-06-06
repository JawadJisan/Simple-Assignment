import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Please Login First to See the List of Openings Jobs</h1>
            <Button className='mt-5 p-3' variant="primary" size="lg">
                <Link to='login' style={{color:'black'}} >Please Login</Link>
            </Button>
        </div>
    );
};

export default Home;