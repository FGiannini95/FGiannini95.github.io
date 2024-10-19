import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CardOneTrabajoProps } from '../../types';
import './CardOneTrabajo.css';

export const CardOneTrabajo: React.FC<CardOneTrabajoProps> = ({ elem }) => {
  const navigate = useNavigate();

  return (
    <Card
      style={{ width: '30rem', cursor: 'pointer' }}
      className="text-center mx-2 img-proyecto"
      onClick={() => navigate(`/oneProject/${elem.id}`)}
    >
      <Card.Img variant="top" src={`/assets/${elem.image}`} />
    </Card>
  )
}