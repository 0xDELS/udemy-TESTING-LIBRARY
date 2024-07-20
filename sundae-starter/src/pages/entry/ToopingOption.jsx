import { Col, Row } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails.jsx";
import Form from "react-bootstrap/Form";

export default function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>

        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={(e) =>
              updateItemCount(name, parseInt(e.target.value), "toppings")
            }
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
