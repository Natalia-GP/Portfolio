import iconJs from '../images/javascript.png';
import iconCss from '../images/css.png';
import iconHtml from '../images/html.png';
import iconGit from '../images/git.png';
import iconReact from '../images/react.png';
import iconBS from '../images/bootstrap.png';
import iconSql from '../images/sql.png';
import iconResDesign from '../images/responsive.png';
import iconGulp from '../images/gulp_logo_icon_248132.png';
import iconsass from '../images/sass_icon.png';
import iconNpm from '../images/npm.png';
import iconAngular from '../images/angular.png';
import iconNodeJs from '../images/nodejs.png';
import icongoal from '../images/goal.png';
import iconCognitive from '../images/cognitive.png';
import iconSmile from '../images/smile.png';

const SkillsDev = () => {
  return (
    <section className="skillsArt">
      <h2 className="skillsArt__text">Skills</h2>
      <div className="skillsArt__list">
        <img className="iconStyle" src={iconJs} alt="icono-js"></img>
        <img className="iconStyle" src={iconCss} alt="icono-jcss"></img>
        <img className="iconStyle" src={iconsass} alt="icono-sass"></img>
        <img className="iconStyle" src={iconHtml} alt="icono-htmk"></img>
        <img className="iconStyle" src={iconReact} alt="icono-react"></img>
        <img className="iconStyle" src={iconAngular} alt="icono-Angular"></img>
        <img className="iconStyle" src={iconGit} alt="icono-git"></img>
        <img className="iconStyle" src={iconBS} alt="icono-Bootstrap"></img>
        <img className="iconStyle" src={iconNodeJs} alt="icono-NodeJs"></img>
        <img className="iconStyle" src={iconSql} alt="icono-SQL"></img>
        <img
          className="iconStyle respons"
          src={iconResDesign}
          alt="icono-responsive"
        ></img>
        <img className="iconStyle" src={iconGulp} alt="icono-gulp"></img>
        <img className="iconStyle" src={iconNpm} alt="icono-npm"></img>
        <img className="iconStyle" src={icongoal} alt="icono-npm"></img>
        <img className="iconStyle" src={iconCognitive} alt="icono-npm"></img>
        <img className="iconStyle" src={iconSmile} alt="icono-npm"></img>
      </div>
    </section>
  );
};
export default SkillsDev;
