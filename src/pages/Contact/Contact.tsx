import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    </Container>
  );
};

export default Contact;
