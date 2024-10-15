import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { dataTrabajos } from '../../data/data';
import './ProjectDetails.css'

export const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = dataTrabajos.find((elem) => elem.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(project?.images[0]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container className='pt-5'>
      <Row>
        <Col xs={12} md={6} style={{ textAlign: 'justify' }}>
          <h1 className='projectTitle'>{project.title}</h1>
          <p className='projectDescription'>{project.description}</p>
          <p>{project.material}</p>
          <p>{project.medida}</p>
        </Col>
        <Col xs={12} md={6}>
          <img className="d-block project-image w-100" src={`/assets/${project.carpeta}/${selectedImage}`} alt={project.title} />
        </Col>
      </Row>
      <Row className="pt-5">
        {project.images.map((image, index) => (
          <Col xs={3} md={2} key={index} className="mb-3">
            <img
              className={`thumbnail-image w-100 ${selectedImage === image ? 'selected-thumbnail' : ''}`}
              src={`/assets/${project.carpeta}/${image}`}
              alt={`Thumbnail ${index}`}
              onClick={() => setSelectedImage(image)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
