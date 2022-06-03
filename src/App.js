import logo from './logo_toro.svg';
import './App.css';

import useWebSocket from 'react-use-websocket';
import { Col, Container, Navbar, Row, Card, CardGroup } from 'react-bootstrap';
import CustomButton from './components/button';
import { useState } from 'react';

function App() {
  const [orders, setOrders] = useState([]);
  const { lastJsonMessage, sendMessage } = useWebSocket(
    'ws://localhost:8080/quotes',
    {
      onOpen: () => console.log(`Connected to App WS`),
      onMessage: () => {
        if (lastJsonMessage) {
          /* console.log(lastJsonMessage); */
          setOrders(lastJsonMessage);
        }
      },
      onError: event => {
        console.error(event);
      },
      shouldReconnect: closeEvent => true,
      reconnectInterval: 3000,
    }
  );
  console.log(Object.keys(orders));
  console.log(orders);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="114.16px"
              height="21.73px"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row className="pt-5">
          <Col md={4}>
            <h1>Explore o mercado</h1>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <p style={{ color: '#7E868E', fontSize: 14 }}>Ordernar:</p>{' '}
            <CustomButton
              variant="primary"
              style={{ borderRadius: 20 }}
              text="Em alta"
            ></CustomButton>{' '}
            <CustomButton
              variant="secondary"
              style={{ borderRadius: 100, color: '#ECEDEE' }}
              text="Em baixa"
            ></CustomButton>{' '}
          </Col>
        </Row>
        <Row className="pt-5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>{Object.keys(orders)[0]}</Card.Title>
                  <Card.Text>{orders[Object.keys(orders)[0]]}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
