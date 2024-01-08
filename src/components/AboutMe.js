import { HashScroll } from 'react-hash-scroll';
import cvNatalia from '../static/CV Natalia Gomez.pdf';
import patternImage from '../images/pattern.png';
const AboutMe = () => {
  return (
    <HashScroll hash="#aboutMe" position="start">
      <section id="aboutMe" className="aboutMeSection">
        <div className="book">
          <p className="book__text">
            Soy una maestra reinventada que decidí entrar en el mundo de la
            programación que tanto me atraía. Salí de mi zona de confort, dí un
            salto de fe y comencé una nueva etapa profesional. Feliz de mi
            decisión te doy la bienvenida a este trocito de mi.
          </p>
          <div
            className="cover"
            style={{ backgroundImage: `url(${patternImage})` }}
          >
            <p className="cover__text">SOBRE MI</p>
          </div>
        </div>
        <div className="divCv">
          <h2 className="divCv__text">Descarga mi CV</h2>
          <button className="buttonCV">
            <a
              className="cvLink"
              href={cvNatalia}
              download="CV Natalia Gomez"
              target="blank"
            >
              gracias
            </a>
          </button>
        </div>
      </section>
    </HashScroll>
  );
};
export default AboutMe;
