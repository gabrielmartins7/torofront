import { Button } from 'react-bootstrap';
export default function CustomButton(props) {
  return (
    <Button
      variant={props.variant ? props.variant : 'primary'}
      style={props.style}
    >
      {props.text}
    </Button>
  );
}
