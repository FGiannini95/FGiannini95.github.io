import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { dataTrabajos } from '../../data/data';
import './ProjectDetails.css'

export const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = dataTrabajos.find((elem) => elem.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="p-5">
      <h1 className='font-weigh'>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.material}</p>
      <Carousel
        className="project-carousel"
        interval={2000}
        indicators={false}
        nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
        prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}
      >
        {project.images.map((image, index) => (
          <Carousel.Item key={index} className="carousel-item-custom">
            <img className="d-block project-image w-50" src={`/assets/${project.carpeta}/${image}`} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
