import SmallCarousel from './SmallCarousel';

const Projects = () => {
  return (
    <section id="projects" className="projectSection">
      <h2 className="projectSection_title">Mis proyectos</h2>
      <div className="projectSection_div2 showSmaller">
        <SmallCarousel></SmallCarousel>
      </div>
    </section>
  );
};
export default Projects;
