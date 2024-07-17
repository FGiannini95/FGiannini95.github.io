import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const CardOneTrabajo = () => {
  const navigate = useNavigate();

  return (

    <Card> 
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Fede</Card.Title>
        <Button variant="dark" onClick={() => navigate('/')}>
          Ver más
        </Button>
      </Card.Body>
    </Card >

  )
}
