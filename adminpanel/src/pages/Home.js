import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col className="sidebar" md={2}>
            sidebar
          </Col>
          <Col style={{ marginLeft: "auto" }} md={10}>
            Main
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
