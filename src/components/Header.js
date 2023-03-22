import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <section className="header">
      <nav className="nav">
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
    </section>
  );
};
export default Header;
