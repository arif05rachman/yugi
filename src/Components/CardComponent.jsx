import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardComponent(props) {
  const {
    archetype,
    atk,
    attribute,
    card_images,
    card_prices,
    def,
    desc,
    id,
    level,
    name,
    race,
    type,
  } = props.card;
  console.log(card_images[0].image_url_small);
  return (
    <Card style={{ width: "16rem" }} className="p-1 mb-2 mx-1">
      <Card.Img variant="top" src={card_images[0].image_url} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
