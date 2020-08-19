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
  // console.log(card_images[0].image_url_small);
  return (
    <Card style={{ width: "16rem" }} className="p-1 mb-2 mx-1">
      <Card.Img variant="top" src={card_images[0].image_url_small} />
      <Card.Body>
        <Card.Title style={{height: '2rem', fontSize:'1rem'}} className="font-weight-bold text-center">{name}</Card.Title>
        <div>
          <Button variant="primary">show</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
