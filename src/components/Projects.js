import DemoCarousel from './DemoCarousel';
import { HashScroll } from 'react-hash-scroll';

const Projects = () => {
  return (
    <HashScroll hash="projects" position="start">
      <section id="paquito" className="projectSection">
        <h2 className="projectSection__title">Mis proyectos</h2>
        <div className="projectSection__div2">
          <DemoCarousel></DemoCarousel>
        </div>
      </section>
    </HashScroll>
  );
};
export default Projects;
