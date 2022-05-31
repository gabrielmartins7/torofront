import logo from './logo_toro.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useWebSocket from 'react-use-websocket';
import {
  Col,
  Container,
  Navbar,
  Row,
  Button,
  Card,
  CardGroup,
} from 'react-bootstrap';

function App() {
  const { lastJsonMessage, sendMessage } = useWebSocket(
    'ws://localhost:8080/quotes',
    {
      onOpen: () => console.log(`Connected to App WS`),
      onMessage: () => {
        if (lastJsonMessage) {
          console.log(lastJsonMessage);
        }
      },
      onError: event => {
        console.error(event);
      },
      shouldReconnect: closeEvent => true,
      reconnectInterval: 3000,
    }
  );
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
            <Button variant="primary" style={{ borderRadius: 20 }}>
              Em alta
            </Button>{' '}
            <Button
              variant="secondary"
              style={{ borderRadius: 100, color: '#ECEDEE' }}
            >
              Em baixa
            </Button>{' '}
          </Col>
        </Row>
        <Row className="pt-5">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
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

/* const styles = StyleSheet.create({
  title: {
    marginLeft: 40,
    marginRight: '5.56%',
    marginTop: '2.57%',
    marginBottom: '85.38%',
  },
}); */
