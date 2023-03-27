import { HashScroll } from 'react-hash-scroll';
const AboutMe = () => {
  return (
    <HashScroll hash="#aboutMe" position="start">
      <section id="aboutMe" className="aboutMeSection">
        <h2 aboutMeSection__title>Sobre mí</h2>
        <p className="aboutMeSection__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl
          velit, posuere sed tellus a, semper finibus lacus. Integer sit amet
          nibh augue. Mauris interdum egestas interdum. Pellentesque at dictum
          odio, et ultricies lectus. Nulla sit amet elementum tellus. Phasellus
          mattis scelerisque purus quis porttitor. Donec vehicula sapien non dui
          venenatis eleifend. Donec at tempor nulla. Sed vitae mi in mauris
          tincidunt vulputate. Aenean congue, nunc eu condimentum lacinia, elit
          augue pulvinar leo, vitae luctus leo velit in dui. Pellentesque nisi
          felis, sagittis eu sollicitudin id, lacinia sed velit. In facilisis
          condimentum justo sit amet pulvinar.
        </p>
      </section>
    </HashScroll>
  );
};
export default AboutMe;
