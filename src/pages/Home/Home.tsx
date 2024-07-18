import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardOneTrabajo } from '../../components/CardOneTrabajo/CardOneTrabajo';
import { HomeProps } from '../../types';

export const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <section className="p-5">
      <h2 style={{ color: '#0066AE' }} className="text-center pt-5 mb-4">HUESOCABRA</h2>
      <Container>
        <Row>
          {data?.map((elem) => (
            <Col xs={12} sm={6} md={4} lg={3} key={elem.id} className="mb-4 d-flex">
              <CardOneTrabajo elem={elem} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
