import iconJs from '../images/javascript.png';
import iconCss from '../images/css.png';
import iconHtml from '../images/html.png';
import iconGit from '../images/git.png';
import iconReact from '../images/react.png';
import iconBS from '../images/bootstrap.png';

const SkillsDev = () => {
  return (
    <article className="skillsArt">
      <h2 className="skillsArt__text">Skills</h2>
      <div className="skillsArt__list">
        <p>Front-End</p>
        <div>
          <img className="iconStyle" src={iconJs} alt="icono-js"></img>
          <img className="iconStyle" src={iconCss} alt="icono-js"></img>
          <img className="iconStyle" src={iconHtml} alt="icono-js"></img>
          <img className="iconStyle" src={iconReact} alt="icono-js"></img>
          <img className="iconStyle" src={iconGit} alt="icono-js"></img>
          <img className="iconStyle" src={iconBS} alt="icono-js"></img>
        </div>
      </div>
      <div className="skillsArt__list">
        <p>Back-End</p>
      </div>
    </article>
  );
};
export default SkillsDev;
