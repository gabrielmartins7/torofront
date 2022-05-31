import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Navbar, Row, Button } from 'react-bootstrap';
export default function Button2(props) {
  return <Button variant={props.variant ? props.variant : 'primary'}></Button>;
}
