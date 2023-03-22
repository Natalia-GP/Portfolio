import iconJs from '../images/bootstrap.png';
import iconCss from '../images/css.png';
import iconHtml from '../images/html.png';
import iconGit from '../images/git.png';
import iconReact from '../images/react.png';
import iconBS from '../images/bootstrap.png';

const SkillsDev = () => {
  return (
    <article className="skillsArt">
      <h2 className="">Front-end</h2>
      <div className="skillsArt__list">
        <div>
          <img className="iconStyle" src={iconJs} alt="icono-js"></img>
          <p className="">JavaScript</p>
        </div>
        <div>
          <img className="iconStyle" src={iconCss} alt="icono-js"></img>
          <p className="">Css</p>
        </div>
        <div>
          <img className="iconStyle" src={iconHtml} alt="icono-js"></img>
          <p className="">HTML</p>
        </div>
        <div>
          <img className="iconStyle" src={iconReact} alt="icono-js"></img>
          <p className="">React</p>
        </div>
        <div>
          <img className="iconStyle" src={iconGit} alt="icono-js"></img>
          <p className="">Git</p>
        </div>
        <div>
          <img className="iconStyle" src={iconBS} alt="icono-js"></img>
          <p className="">bootstrap</p>
        </div>
      </div>
    </article>
  );
};
export default SkillsDev;
