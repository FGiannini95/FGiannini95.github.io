import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMail } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {

  return (
    <Container className="container-fluid pt-5 pb-5">
      <Row className="align-items-center">
        <Col xs={12} md={5} className="d-flex justify-content-center">
          <img
            src="/assets/NachoSegura.jpg"
            alt="Foto perfil Nacho Segura"
            className="img-fluid"
            loading="lazy"
          />
        </Col>
        <Col xs={12} md={7} className="pt-3 pt-md-0">
          <p>
            <span style={{ fontWeight: 'bold' }}>HUESOCABRA</span> es un espacio de creación emancipado. Un lugar para la experimentación del diseño y la producción artesanal de elementos en madera. Desde la silla a la cabaña. No es solo un taller, sino un estudio de carpintería. Donde la materialización individual de cada pieza va acompañada de un proceso creativo, alejándose de producciones en masa y prácticas agresivas de consumo. Diseñamos piezas únicas de mobiliario que se inspiran en la tradición para comunicarse en un lenguaje contemporáneo y experimental.</p>
          <p >
            Soy Ignacio Segura, arquitecto por la universidad de Granada. Siempre me han interesado las posibilidades que ofrece la madera como material de construción. Tras graduarme adquirí algunos conocimientos trabajando como carpintero de armar, y posteriormente como carpinterio de riviera en un astillero. Entiendo la construcción en madera como un juego de suma y resta de elementos que se resuelve en los encuentros.</p>
          <p >
            El diseño de mobiliario funciona igual, pero a otra escala. Me gusta pensar que el mueble ayuda a entender el espacio que habita. Lo subraya, lo moldea, o lo recorre. En <span style={{ fontWeight: 'bold' }}>HUESOCABRA</span> trabajamos para descubrir y fabricar esa pieza de mobiliario que pide tu espacio
          </p>
        </Col>
      </Row>
      <hr />
      <Row className="d-flex justify-content-between">
        <Col xs={3} className="text-center">
          <Nav.Link href="mailto:info@huesocabra.com" className="link">
            <FiMail size={20} />
            <p className="d-none d-md-block" style={{ fontSize: '0.8rem' }}>info@huesocabra.com</p>
          </Nav.Link>
        </Col>
        <Col xs={3} className="text-center">
          <Nav.Link href="https://www.google.com/maps/place/Huesocabra/@37.1607713,-3.6175608,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fd6886094973:0xd609ea500bb31cb6!8m2!3d37.1607713!4d-3.6175608!16s%2Fg%2F11wmh2_ds8?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" className="link" target="_blank">
            <FiMapPin size={20} />
            <p className="d-none d-md-block" style={{ fontSize: '0.8rem' }}>Polígono de la Purísima, 18006 Granada</p>
          </Nav.Link>
        </Col>
        <Col xs={3} className="text-center">
          <Nav.Link
            as={Link}
            to="https://www.instagram.com/huesocabra/?igsh=MWgxdXJqaTc5YzY0OQ%3D%3D"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram size={20} />
            <p className="d-none d-md-block" style={{ fontSize: '0.8rem' }}>huesocabra</p>
          </Nav.Link>
        </Col>
        <Col xs={3} className="text-center">
          <Nav.Link href="tel:+34625988312" style={{ padding: 0, color: 'inherit' }}>
            <FiPhone size={20} />
            <p className="d-none d-md-block" style={{ fontSize: '0.8rem' }}>+34 625 98 83 12</p>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
