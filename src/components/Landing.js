import cvNatalia from '../static/CV Natalia Gómez -es.pdf';
const Landing = () => {
  return (
    <div className="section">
      <h1 className="section__title">¡Hola! Soy Natalia, Web developed</h1>
      <p className="section__text"> Te doy la bienvenida a mi Porfolio.</p>
      <a href={cvNatalia} download="Cv Natalia Gómez" className="section__link">
        CV
      </a>
    </div>
  );
};

export default Landing;
