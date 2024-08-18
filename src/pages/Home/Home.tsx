import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardOneTrabajo } from '../../components/CardOneTrabajo/CardOneTrabajo';
import { HomeProps } from '../../types';

export const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <section className="p-5">
      <Container>
        <Row>
          {data?.map((elem) => (
            <Col xs={12} sm={6} md={6} lg={3} key={elem.id} className="my-4 d-flex homeView">
              <CardOneTrabajo elem={elem} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
