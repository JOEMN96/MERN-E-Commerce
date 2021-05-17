import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import InputField from "../components/InputField";
import { login } from "../actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.authenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Container>
      <Row className="SignIn">
        <Col md={{ span: 5, offset: 4 }}>
          <Form onSubmit={userLogin}>
            <InputField
              label="Email"
              type="email"
              Onchange={(e) => {
                setemail(e.target.value.trim());
              }}
              errorMessage=""
            />
            <InputField
              label="Password"
              type="password"
              Onchange={(e) => {
                setpassword(e.target.value.trim());
              }}
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
