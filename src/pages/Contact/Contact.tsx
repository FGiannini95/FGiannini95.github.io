import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {

  const words = ['Arquitecto granadino', 'Patrón de barco', 'Carpintero local', 'otras cosas bonitas de nuestro cherubín'];
  const [currentWord, setCurrentWord] = useState('Arquitecto granadino');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord(prevWord => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 1500);

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <Container className="container-fluid p-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://selectedinspiration.com/storage/profiles/2019/05/29495220190516035515464/Ignacio-Segura-Fernandez-Nogueras-thumb.jpg"
            alt="Foto perfil Nacho Segura"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6}>
          <div className="d-flex flex-column align-items-center">
            <h6>¡Hola! Soy Nacho Segura</h6><h6>{currentWord}</h6>
          </div>
        </Col>
        <Col>
          <p style={{ maxWidth: '100%' }}>
            ¡Hola! Soy Nacho Segura, un arquitecto apasionado con una trayectoria única y diversa. Graduado en Granada, una ciudad que me ha formado tanto académica como personalmente, he seguido un camino lleno de experiencias enriquecedoras.

            Después de mis estudios en arquitectura, perseguí mi sueño de viajar a Australia, donde trabajé en un restaurante y me sumergí en una cultura nueva y fascinante. Esta aventura no solo enriqueció mi vida personal, sino que también aportó una perspectiva fresca a mi trabajo.

            De vuelta en España, me especialicé con un máster en arquitectura y descubrí una nueva pasión por la carpintería al colaborar con un artesano local. Este trabajo manual complementó perfectamente mis habilidades como arquitecto, permitiéndome abordar los proyectos de manera integral.

            Mi amor por el mar me llevó a Menorca, donde trabajé en una empresa de alquiler de barcos durante casi cuatro años, obteniendo varios carnés de navegación y convirtiéndome en patrón de barco. Esta etapa me enseñó sobre trabajo en equipo, responsabilidad y la belleza de nuestro entorno natural.

            Ahora, de regreso en Granada, he lanzado una carpintería que combina calidad y cercanía. Este espacio no solo es mi taller, sino también un punto de encuentro para compartir conocimientos y crear piezas únicas y personalizadas que reflejan mis experiencias y las necesidades de mis clientes.
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6} md={6} xl={3}>
          <div className='text-center'>
            <Nav.Link href="mailto:info@huesocabra.com" className="link">
              <MdEmail />
              <p>info@huesocabra.com</p>
            </Nav.Link>
          </div>
        </Col>
        <Col sm={6} md={6} xl={3}>
          <div className='text-center'>
            <Nav.Link href="https://www.google.de/maps/place/La+Buia+Espacio+Creativo/@37.1607516,-3.6184501,20z/data=!4m9!1m2!2m1!1sJuncos+Pol%C3%ADgono+Industrial+Ctjo.+la+Pur%C3%ADsima,+7,+18006+Granada!3m5!1s0xd71fd555fe9c1d9:0xd4a0ecdea880281c!8m2!3d37.1608154!4d-3.6183347!16s%2Fg%2F11p66tfx3l?entry=ttu" className="link" target="_blank">
              <GiPositionMarker />
              <p>Polígono Industrial La Purísima</p>
              <p>Granada 18004</p>
              <p>España</p>
            </Nav.Link>
          </div>
        </Col>
        <Col sm={6} md={6} xl={3}>
          <div className='text-center'>
            <Nav.Link
              as={Link}
              to="https://www.instagram.com/huesocabra/?igsh=MWgxdXJqaTc5YzY0OQ%3D%3D"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <p>huesocabra</p>
            </Nav.Link>
          </div>
        </Col>
        <Col sm={6} md={6} xl={3}>
          <div className='text-center'>
            <FaPhone />
            <p>+34 722 63 55 77</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
