import awesomewomen from '../images/AweWom.png';
import bb from '../images/B_B.png';
import codingtime from '../images/CodingTime.png';
import rickandmorty from '../images/RickMor.png';
import pillow from '../images/pillows_.png';
import Maq from '../images/Maq_.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/components/DemoCarousel.scss';

const DemoCarousel = () => {
  return (
    <Carousel className="MyCarousel" autoPlay>
      <div>
        <img alt="" src={pillow} />
        <p className="legend">
          Proyecto Grupal realizado en React.
          <a
            href="https://github.com/Natalia-GP/pillow_heads"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div>
        <img alt="" src={Maq} />
        <p className="legend">
          Maquetación responsive
          <a
            className="Cv"
            href="https://github.com/Natalia-GP/Maquetacion"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div>
        <img alt="" src={awesomewomen} />
        <p className="legend">
          Legend 3
          <a
            href="https://github.com/Natalia-GP/Awesome-Woman-Cards"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div>
        <img alt="" src={bb} />
        <p className="legend">
          Página de creación y personificación de tarjetas con migración de
          código heredado y creación de servidor.{' '}
          <a
            href="https://github.com/Natalia-GP/Coding-Time"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div>
        <img alt="" src={rickandmorty} />
        <p className="legend">
          Buscador de personajes usando una API de la serie de Rick and Morty
          con distintos filtros{' '}
          <a
            href="https://github.com/Natalia-GP/Buscador-Rick-and-Morty"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div>
        <img alt="" src={codingtime} />
        <p className="legend">
          Buscador de personajes con filtrados y con funcionalidad de guardado
          en favoritos con LocalStorage.
          <a
            href="https://github.com/Natalia-GP/Breaking-Bad"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;

//   return (
//     <Carousel>
//       <Carousel.Item>
//         <div className="d-flex flex-row">
//           <Card>
//             <Card.Img variant="top" src={pillow} />
//             <Card.Body>
//               <Card.Title>Pillow Heads</Card.Title>
//               <Card.Text>Proyecto grupal realizado en React.</Card.Text>
//             </Card.Body>
//           </Card>
//           <Card>
//             <Card.Img variant="top" src={Maq} />
//             <Card.Body>
//               <Card.Title>Maquetación</Card.Title>
//               <Card.Text>Maquetación realizada en html y sass</Card.Text>
//             </Card.Body>
//           </Card>
//           <Card>
//             <Card.Img variant="top" src={awesomewomen} />
//             <Card.Body>
//               <Card.Title>Awesome Woman cards</Card.Title>
//               <Card.Text>Proyecto realizado en Js, html y sass</Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className="d-flex flex-row">
//           <Card>
//             <Card.Img variant="top" src={codingtime} />
//             <Card.Body>
//               <Card.Title>CodingTime</Card.Title>
//               <Card.Text>This is the first card.</Card.Text>
//             </Card.Body>
//           </Card>
//           <Card>
//             <Card.Img variant="top" src={rickandmorty} />
//             <Card.Body>
//               <Card.Title>Rick and Morty</Card.Title>
//               <Card.Text>This is the second card.</Card.Text>
//             </Card.Body>
//           </Card>
//           <Card>
//             <Card.Img variant="top" src={bb} />
//             <Card.Body>
//               <Card.Title>Breaking Bad</Card.Title>
//               <Card.Text>This is the third card.</Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default SmallCarousel;
