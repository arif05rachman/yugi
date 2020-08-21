import React from "react";
import { FormGroup, Form, Col } from "react-bootstrap";

export default function FilterComponent() {
  return (
    <div>
      <FormGroup className="mt-4 mx-4">
        <Form.Row>
          <Form.Label column lg={1} column="sm">
            Sort By
          </Form.Label>
          <Col>
            <Form.Control as="select" size="sm">
              <option>Newest</option>
              <option>ATK</option>
              <option>DEF</option>
              <option>Level</option>
              <option>Name</option>
              <option>Views</option>
              <option>Upvotes</option>
              <option>Downvotes</option>
              <option>Price</option>
              <option>TCG Release</option>
              <option>OCG Release</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control as="select" size="sm">
              <option>Auto</option>
              <option>Asc</option>
              <option>Desc</option>
            </Form.Control>
          </Col>
          <Form.Label column lg={1} column="sm">
            Language
          </Form.Label>
          <Col>
            <Form.Control as="select" size="sm">
              <option>EN</option>
              <option>FR</option>
              <option>DE</option>
              <option>PT</option>
              <option>IT</option>
            </Form.Control>
          </Col>
          <Form.Label column lg={1} column="sm">
            Search
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" placeholder="Search by name" />
          </Col>
        </Form.Row>
      </FormGroup>
    </div>
  );
}
