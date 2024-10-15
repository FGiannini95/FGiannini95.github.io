import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {

  return (
    <Container className="container-fluid p-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="/public/assets/NachoSegura.jpg"
            alt="Foto perfil Nacho Segura"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6} className="pt-4">
          <p style={{ textAlign: 'justify', width: '100%' }}>
            <span style={{ fontWeight: 'bold' }}>HUESOCABRA</span> es un espacio de creación emancipado. Un lugar para la experimentación del diseño y la producción artesanal de elementos en madera. Desde la silla a la cabaña. No es solo un taller, sino un estudio de carpintería. Donde la materialización individual de cada pieza va acompañada de un proceso creativo, alejándose de producciones en masa y prácticas agresivas de consumo. Diseñamos piezas únicas de mobiliario que se inspiran en la tradición para comunicarse en un lenguaje contemporáneo y experimental.</p>
          <p style={{ textAlign: 'justify', width: '100%' }}>
            Soy Ignacio Segura, arquitecto por la universidad de Granada. Siempre me han interesado las posibilidades que ofrece la madera como material de construción. Tras graduarme adquirí algunos conocimientos trabajando como carpintero de armar, y posteriormente como carpinterio de riviera en un astillero. Entiendo la construcción en madera como un juego de suma y resta de elementos que se resuelve en los encuentros.</p>
          <p style={{ textAlign: 'justify', width: '100%' }}>
            El diseño de mobiliario funciona igual, pero a otra escala. Me gusta pensar que el mueble ayuda a entender el espacio que habita. Lo subraya, lo moldea, o lo recorre. En <span style={{ fontWeight: 'bold' }}>HUESOCABRA</span> trabajamos para descubrir y fabricar esa pieza de mobiliario que pide tu espacio
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
              <p>Polígono de la Purísima</p>
              {/* <p>Calle de los juncos 121, nave 10-B</p>
              <p>18006 Granada</p>
              <p>España</p> */}
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
            <p>+34 625 98 83 12</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
