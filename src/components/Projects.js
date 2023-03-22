import SmallCarousel from './SmallCarousel';
import { HashScroll } from 'react-hash-scroll';

const Projects = () => {
  return (
    <HashScroll hash="projects" position="start">
      <section id="paquito" className="projectSection">
        <h2 className="projectSection_title">Mis proyectos</h2>
        <div className="projectSection_div2 showSmaller">
          <SmallCarousel></SmallCarousel>
        </div>
      </section>
    </HashScroll>
  );
};
export default Projects;
