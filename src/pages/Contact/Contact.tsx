import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";

export const Contact = () => {
  return (
    <Container className="p-10">
      <Row className="sectionContact pb-5">
        <Col sm={12} md={10} xxl={8}>
          <p>
            ¡Hola! Soy Nacho Segura, arquitecto graduado en Granada, una ciudad
            que me ha formado tanto académicamente como personalmente. Mi
            trayectoria no ha sido lineal, sino una serie de experiencias y
            pasiones que se entrelazan, llevándome a donde estoy hoy.

            Después de finalizar mis estudios en arquitectura, decidí seguir uno
            de mis grandes sueños: viajar a Australia. Pasé un año increíble en
            este fascinante país, donde trabajé en un restaurante y pude
            sumergirme en una cultura completamente nueva y diversa. Esta
            experiencia no solo enriqueció mi vida personal, sino que también me
            proporcionó una perspectiva única que ahora aplico en mi trabajo.

            Al regresar a España, me matriculé en un máster en arquitectura,
            buscando profundizar aún más en mi formación. Paralelamente, comencé
            a colaborar con un carpintero local, descubriendo una nueva pasión
            por la carpintería. Este trabajo manual y creativo complementaba
            perfectamente mis habilidades como arquitecto, permitiéndome abordar
            los proyectos desde una perspectiva más integral.

            Mi curiosidad y amor por el mar me llevaron a mudarme a Menorca, una
            isla que me cautivó desde el primer momento. Allí trabajé durante
            casi cuatro años en una empresa de alquiler de barcos, lo que me
            permitió obtener varios carnés de navegación y convertirme en patrón
            de barco. Esta etapa de mi vida consolidó mi pasión por el mundo
            náutico y me enseñó mucho sobre trabajo en equipo, responsabilidad y
            la importancia de disfrutar del entorno natural.

            Ahora, de vuelta en mi querida Granada, he decidido embarcarme en un
            nuevo y emocionante proyecto: una carpintería que combine la calidad
            y la cercanía. Este espacio no solo será un lugar de trabajo, sino
            también un punto de encuentro para compartir conocimientos y crear
            piezas únicas y personalizadas que reflejen tanto mis experiencias
            como las necesidades y deseos de mis clientes.

            Estoy entusiasmado por esta nueva etapa y espero que mi trayectoria
            y dedicación se reflejen en cada proyecto que emprenda.
          </p>
        </Col>
        <Col sm={12} md={2} xxl={4}>
          <img
            src="https://selectedinspiration.com/storage/profiles/2019/05/29495220190516035515464/Ignacio-Segura-Fernandez-Nogueras-thumb.jpg"
            alt="Foto perfil Nacho Segura"
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={12} md={6} lg={3}>
          <div>
            <p>Contacto:</p>
            <Nav.Link href="mailto:info@huesocabra.com" className="link">
              <MdEmail />
              <p>info@huesocabra.com</p>
            </Nav.Link>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div>
            <p>Studio:</p>
            <Nav.Link href="https://www.google.de/maps/place/La+Buia+Espacio+Creativo/@37.1607516,-3.6184501,20z/data=!4m9!1m2!2m1!1sJuncos+Pol%C3%ADgono+Industrial+Ctjo.+la+Pur%C3%ADsima,+7,+18006+Granada!3m5!1s0xd71fd555fe9c1d9:0xd4a0ecdea880281c!8m2!3d37.1608154!4d-3.6183347!16s%2Fg%2F11p66tfx3l?entry=ttu" className="link">
              <GiPositionMarker />
              <p>Polígono Industrial La Purísima</p>
              <p>Granada 18004</p>
              <p>España</p>
            </Nav.Link>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <div>
            <p>Social Media:</p>
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
        <Col sm={12} md={6} lg={3}>
          <div>
            <p>Teléfono:</p>
              <FaPhone  />
              <p>+34 722 63 55 77</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
