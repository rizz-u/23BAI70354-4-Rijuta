import { Container, ListGroup } from "react-bootstrap";

export default function EventDetails() {
  return (
    <Container className="my-5">
      <h2>Event Details</h2>

      <ListGroup>
        <ListGroup.Item>Hackathon — 24 Hour Coding</ListGroup.Item>
        <ListGroup.Item>Battle of Bands — Live Show</ListGroup.Item>
        <ListGroup.Item>Startup Pitch — Present Ideas</ListGroup.Item>
        <ListGroup.Item>DJ Night — Celebrate</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}