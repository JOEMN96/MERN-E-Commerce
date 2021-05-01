import React from "react";
import { Form } from "react-bootstrap";

function InputField(props) {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.label}
        onChange={props.Onchange}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
}

export default InputField;
