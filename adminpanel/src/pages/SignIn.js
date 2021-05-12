import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import InputField from "../components/InputField";
import { login } from "../actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = { name: "joe" };
    dispatch(login(user));
  };

  // const selector = useSelector((state) => state);

  return (
    <Container>
      <Row className="SignIn">
        <Col md={{ span: 5, offset: 4 }}>
          <Form onSubmit={userLogin}>
            <InputField
              label="Email"
              type="email"
              Onchange={() => {}}
              errorMessage=""
            />

            <InputField
              label="Password"
              type="password"
              Onchange={() => {}}
              errorMessage=""
            />
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
