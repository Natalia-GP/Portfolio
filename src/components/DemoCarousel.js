import awesomewomen from '../images/AweWom.png';
import bb from '../images/B_B.png';
import codingtime from '../images/CodingTime.png';
import rickandmorty from '../images/RickMor.png';
import pillow from '../images/pillows_.png';
import Maq from '../images/Maq_.png';
import ZM from '../images/ZombieMaze.png';
import NxJs from '../images/Next.js.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/components/DemoCarousel.scss';

const DemoCarousel = () => {
  return (
    <Carousel className="MyCarousel" autoPlay>
      <div className="MyCarousel__div">
        <img alt="" src={ZM} />
        <p className="MyCarousel__div--legend">
          Videojuego realizado en JS, HTML Y CSS.
          <a
            className="ghIcon"
            href="https://github.com/Natalia-GP/JavaScript-videogame"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div className="MyCarousel__div">
        <img alt="" src={NxJs} />
        <p className="MyCarousel__div--legend">
          Calculadora de sumas realizada en Next.Js almacenando los resultados en LocalStorage.
          <a
            className="ghIcon"
            href="https://github.com/Natalia-GP/NG_calc_test"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div className="MyCarousel__div">
        <img alt="" src={pillow} />
        <p className="MyCarousel__div--legend">
          Proyecto Grupal realizado en React.
          <a
            className="ghIcon"
            href="https://github.com/Natalia-GP/pillow_heads"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div className="MyCarousel__div">
        <img alt="" src={Maq} />
        <p className="MyCarousel__div--legend">
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
      <div className="MyCarousel__div">
        <img alt="screen shot of awesome cards project" src={awesomewomen} />
        <p className="MyCarousel__div--legend">
          Página de creación y personificación de tarjetas. Maquetación y
          funcionalidades para customizar la tarjeta.
          <a
            href="https://github.com/Natalia-GP/Awesome-Woman-Cards"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div className="MyCarousel__div">
        <img alt="screen shot of breaking bad project" src={bb} />
        <p className="MyCarousel__div--legend">
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
      <div className="MyCarousel__div">
        <img alt="screen shot of Rick and Morty project" src={rickandmorty} />
        <p className="MyCarousel__div--legend">
          Buscador de personajes usando una API con distintos filtros.
          <a
            href="https://github.com/Natalia-GP/Buscador-Rick-and-Morty"
            target="blank"
            rel="norefferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
      </div>
      <div className="MyCarousel__div">
        <img alt="screen shot of coding time project" src={codingtime} />
        <p className="MyCarousel__div--legend">
          Página de creación y personificación de tarjetas con migración de
          código heredado y creación de servidor.
          <a
            href="https://github.com/Natalia-GP/Coding-Time "
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
