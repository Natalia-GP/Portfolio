import awesomewomen from '../images/AweWom.png';
import bb from '../images/B_B.png';
import codingtime from '../images/CodingTime.png';
import rickandmorty from '../images/RickMor.png';
import pillow from '../images/pillows_.png';
import Maq from '../images/Maq_.png';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const DemoCarousel = () => {
  return (
    <Carousel autoPlay>
      <div>
        <img alt="" src={pillow} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src={Maq} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src={awesomewomen} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src={codingtime} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src={rickandmorty} />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src={bb} />
        <p className="legend">Legend 6</p>
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
