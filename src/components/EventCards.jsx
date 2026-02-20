import { Card, Row, Col, Container } from "react-bootstrap";

export default function EventCards() {
  const events = [
    { title: "Coding Hackathon", text: "Compete & build amazing apps." },
    { title: "Battle of Bands", text: "Feel the music energy live." },
    { title: "Startup Pitch", text: "Pitch ideas to investors." }
  ];

  return (
    <Container className="my-5">
      <Row>
        {events.map((event, i) => (
          <Col md={4} key={i}>
            <Card className="mb-4 shadow bg-body">
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}