import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';





function App() {
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
    <div className="">
      <h1 className='text-center'>List of Opening Jobs : {data.data?.length} </h1>
      <div>
        {
          data?.data?.map((item) =>
            // <p>{item?.company} </p>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{item?.designation} </Card.Title>
              <Card.Text>
                {item?.company}
              </Card.Text>
              <Card.Text>
                {item?.id}
              </Card.Text>
              <Card.Text>
                {item?.location}
              </Card.Text>
              <Card.Text>
                {item?.min_experience == 0 ? 'Fresher Opening' : item?.min_experience }
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          )
        }


      </div>
    </div>
  );
}

export default App;
