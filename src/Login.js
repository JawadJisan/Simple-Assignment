import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const Login = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://refertest.pythonanywhere.com/job/openings')
            .then(res => res.json())
            .then(data => {
                setData(data)
                // console.log(data?.length)
                console.log(data.data)
            })
    }, [])
    useEffect(() => {
        fetch('http://refertest.pythonanywhere.com/user/data')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(data.data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center'>User Information</h1>
            <div style={{display:'flex', alignItems:'center', justifyContent: 'center' }} className='g-4 m-5 text-center flex'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user?.data?.pictureUrl} />
                    <Card.Body>
                        <Card.Title>User Name: {user?.data?.name} </Card.Title>
                        <Card.Text style={{ fontSize: '22px' }}>
                            College: {user?.data?.college}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <h1 className='text-center'>List of Opening Jobs</h1>
            <Row xs={1} md={2} lg={3} className='g-4 p-2 m-5 '>
                {
                    data?.data?.map((item) =>
                        <Card style={{ width: '25rem' }}>
                            <Card.Body className='text-center'>
                                <Card.Title style={{ fontWeight: 'bold' }} className='text-center'>Designation: {item?.designation} </Card.Title>
                                <Card.Text style={{ fontSize: '22px' }} >Company Name: {item?.company}
                                </Card.Text>
                                <Card.Text style={{ fontSize: '20px' }}>Job Location: {item?.location}
                                </Card.Text>
                                <Card.Text style={{ fontSize: '22px' }}>Experience: {item?.min_experience == 0 ? 'Fresher Opening' : item?.min_experience}
                                </Card.Text>
                                <Card.Text style={{ fontSize: '20px' }}>
                                    Skills: {item?.skills[0]}, {item?.skills[1]}, {item?.skills[2]}, {item?.skills[3]}, {item?.skills[4]}, {item?.skills[5]}, {item?.skills[6]}
                                </Card.Text>
                                <Button className='' variant="primary" size="">
                                    Hire Developer
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                }


            </Row>
        </div>
    );
};

export default Login;