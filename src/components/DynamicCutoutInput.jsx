import React from "react";
import { Form } from "react-bootstrap";
import "../styles/DynamicCutoutInput.css"; // Custom CSS file for dynamic cutout effect

export const DynamicCutoutInput = ({ label, required, ...rest }) => {
  return (
    <Form.Group className="  position-relative">
      <Form.Label
        id="custom"
        className="position-absolute top-0   translate-middle custom" 
      >
        {label}
        <div style={{color:'red'}}>{required ? "*" : ""}</div>
      </Form.Label>
      <Form.Control type="text" {...rest} />
    </Form.Group>
  );
};
