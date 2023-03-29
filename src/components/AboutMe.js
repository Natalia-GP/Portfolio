import { HashScroll } from 'react-hash-scroll';
const AboutMe = () => {
  return (
    <HashScroll hash="#aboutMe" position="start">
      <section id="aboutMe" className="aboutMeSection">
        <div className="book">
          <p className="book__text">
            Maestra reinventada, decidí dejarme llevar y dar un salto de fe al
            mundo de la programación. Tantas horas delante del ordenador deben
            servir para algo no?. Aquí hay un pedacito de mi, humildemente
            empiezo mi aventura. Cómo dijo Antonio Machado: "Caminante, no hay
            camino, se hace camino al andar."
          </p>
          <div className="cover">
            <p className="cover__text">SOBRE MI</p>
          </div>
        </div>
      </section>
    </HashScroll>
  );
};
export default AboutMe;
