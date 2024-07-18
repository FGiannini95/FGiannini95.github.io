import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';



export const SillaBobardi = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const image = [
    {
      src: '/assets/SillaBobardi/01_Silla_Bobardi.jpg',
      label: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      src: '/assets/SillaBobardi/02_Silla_Bobardi.jpg',
      label: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      src: '/assets/SillaBobardi/03_Silla_Bobardi.jpg',
      label: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ];


  return (
    <section className='p-5'>
      <h1>Silla Bobardi</h1>
      <h5>Descripción</h5>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ex minima soluta nesciunt ducimus quibusdam suscipit similique ullam laudantium perferendis sed architecto sint provident ipsa veritatis, eius accusantium at qui.</p>
      <h5>Material</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius distinctio assumenda aliquam id quisquam praesentium dignissimos laborum vitae odit explicabo quas, repudiandae optio accusamus corporis, possimus doloribus labore! Dolore, cum?</p>
      <h5>Otras cosas</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel voluptatibus laboriosam magnam molestiae laudantium. Voluptatum in repellat fuga dolore explicabo veritatis ipsum consequatur magnam harum vero, quasi quia cupiditate!</p>
      <img src="" alt="" />

      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
          <img className="d-block w-100 project-image" src={image[0].src} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 project-image" src={image[0].src} />
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 project-image" src={image[0].src} />
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}
