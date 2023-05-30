import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <section className="header">
      <nav className="header__div">
        <ul className="nav__list">
          <li className="nav__lis__item">
            <Link to="/#aboutMe">Sobre mí</Link>{' '}
          </li>
          <li className="nav__lis__item">
            <Link to="/#projects"> Proyectos</Link>
          </li>
          <li className="nav__lis__item">
            <Link to="/#contact">Contacto</Link>{' '}
          </li>
        </ul>
      </nav>
      <div aria-label="hamster" role="img" className="divHamster">
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </section>
  );
};
export default Header;
