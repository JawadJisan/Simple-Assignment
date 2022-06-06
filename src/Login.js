import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const Login = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('http://refertest.pythonanywhere.com/job/openings')
        .then(res => res.json())
        .then(data => {
          setData(data)
          // console.log(data?.length)
          console.log(data.data)
        })
    }, [])
    return (
        <div>
             <h1 className='text-center'>List of Opening Jobs</h1>
      <Row xs={1} md={2} lg={3} className='g-4 p-5 m-5 '>
        {
          data?.data?.map((item) =>
            <Card style={{ width: '25rem' }}>
              <Card.Body className='text-center'>
                <Card.Title style={{fontWeight:'bold'}} className='text-center'>Designation: {item?.designation} </Card.Title>
                <Card.Text style={{fontSize: '22px'}} >Company Name: {item?.company}
                </Card.Text>
                <Card.Text style={{fontSize: '20px'}}>Job Location: {item?.location}
                </Card.Text>
                <Card.Text style={{fontSize: '22px'}}>Experience: {item?.min_experience == 0 ? 'Fresher Opening' : item?.min_experience}
                </Card.Text>
                <Card.Text style={{fontSize: '20px'}}>
                  Skills: {item?.skills[0]}, {item?.skills[1]}, {item?.skills[2]}, {item?.skills[3]}, {item?.skills[4]}, {item?.skills[5]}, {item?.skills[6]}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        }


      </Row>
        </div>
    );
};

export default Login;