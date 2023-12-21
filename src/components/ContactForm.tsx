import { useState } from "react";
import { Col } from "react-bootstrap";

export const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({});
  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  return (
    <Col size={12} sm={6} className="px-1">
      <input type="text" value={""} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
    </Col>
  );
};
