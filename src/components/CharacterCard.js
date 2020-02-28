
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard({ch}) {
  return (

    <div>
    <Card>
      <CardImg top width="50%" src={ch.image} alt="Card image cap" />
      <CardBody>
        <CardTitle><h1>{ch.name}</h1></CardTitle>
        <CardSubtitle>{ch.species}</CardSubtitle>
        <CardText>{ch.gender}</CardText>
        <Button >{ch.status}</Button>
      </CardBody>
    </Card>
  </div>
    
  );
}
