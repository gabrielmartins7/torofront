import logo from './logo_toro.svg';
import './App.css';

import useWebSocket from 'react-use-websocket';
import { Col, Container, Navbar, Row, Card, CardGroup } from 'react-bootstrap';
import CustomButton from './components/button';
import { useState } from 'react';

function App() {
  var x;
  var y;
  var z;
  var a = [];
  const [orders, setOrders] = useState([]);
  const { lastJsonMessage, sendMessage } = useWebSocket(
    'ws://localhost:8080/quotes',
    {
      onOpen: () => console.log(`Connected to App WS`),
      onMessage: () => {
        if (lastJsonMessage) {
          /* console.log(lastJsonMessage); */
          /* x['Object.keys(orders)[0]'] =
            lastJsonMessage[Object.keys(lastJsonMessage)[0]]; */
          x = Object.keys(lastJsonMessage);
          y = Object.values(lastJsonMessage);
          z = Object.entries(lastJsonMessage);
          /* this.setState(previousState => ({
            a: [...previousState.a, 'new value'],
          })); */
          /* console.log(lastJsonMessage[Object.keys(lastJsonMessage)[0]]); */
          console.log(lastJsonMessage);
          setOrders(...orders, z);
        }
      },
      onError: event => {
        console.error(event);
      },
      shouldReconnect: closeEvent => true,
      reconnectInterval: 3000,
    }
  );
  console.log(orders);
  /* console.log(orders.sort()); */
  /* x.push(3.5, 1, 2, 3, 4, 5, 6, 7, 8); */
  /* console.log(orders); */
  /* console.log(Object.keys(orders)[0]);
  console.log(orders[Object.keys(orders)[0]]); */
  return (
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
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
            {/* <Button variant="primary" style={{ borderRadius: 20 }}>
              Em alta
            </Button>{' '}
            <Button
              variant="secondary"
              style={{ borderRadius: 100, color: '#ECEDEE' }}
            >
              Em baixa
            </Button>{' '} */}
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
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{Object.keys(orders)[0]}</Card.Title>
                  <Card.Text>{orders[Object.keys(orders)[0]]}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;

/* const styles = StyleSheet.create({
  title: {
    marginLeft: 40,
    marginRight: '5.56%',
    marginTop: '2.57%',
    marginBottom: '85.38%',
  },
}); */
