import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CardOneTrabajoProps } from '../../types';

export const CardOneTrabajo: React.FC<CardOneTrabajoProps> = ({ elem }) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className="text-center mx-2">
      <Card.Img variant="top" src={`/assets/${elem.image}`} />
      <Card.Body>
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark" onClick={() => navigate('/')}>  Ver más
        </Button>
      </Card.Body>
    </Card>
  )
}
