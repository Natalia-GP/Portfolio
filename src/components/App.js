import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';

//COMPONENTS
import Header from './Header';
import Landing from './Landing';
import AboutMe from './AboutMe';
import SkillsDev from './SkillsDev';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Aside from './Aside';
function App() {
  // VARIABLES ESTADO
  const [toggle, setToggle] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  // USEEFFECT ?

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header toggle={toggle} setToggle={setToggle}></Header>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Landing />
                <Aside />
                <AboutMe />
                <Projects />
                <SkillsDev />
                <Contact
                  statusMessage={statusMessage}
                  setStatusMessage={setStatusMessage}
                ></Contact>
              </>
            }
          />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
