import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signUp } from "../actions/auth.actions";
import InputField from "../components/InputField";

function SignUp() {
  const dispatch = useDispatch();

  const SignUp = (e) => {
    e.preventDefault();
    dispatch(signUp({ name: "Joe" }));
  };

  return (
    <Container>
      <Row className="SignIn">
        <Col md={{ span: 5, offset: 4 }}>
          <Form onSubmit={SignUp}>
            <Row>
              <Col>
                <InputField
                  label="First Name"
                  type="text"
                  Onchange={() => {}}
                  errorMessage=""
                />
              </Col>
              <Col>
                <InputField
                  label="Last Name"
                  Onchange={() => {}}
                  errorMessage=""
                  id="tes"
                />
              </Col>
            </Row>

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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
