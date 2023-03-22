const Aside = () => {
  return (
    <div className="main-content">
      <p>Sígueme en:</p>
      <aside className="asideRight">
        <ul className="social">
          <li>
            <a
              className=""
              href="https://github.com/Natalia-GP"
              target="blank"
              rel="norefferrer"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
          </li>

          <li>
            <a
              className=""
              href="https://www.linkedin.com/in/natalia-gomez-perez/"
              target="blank"
              rel="norefferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className=""
              href="https://twitter.com/kyrhia"
              target="blank"
              rel="norefferrer"
            >
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};
export default Aside;
