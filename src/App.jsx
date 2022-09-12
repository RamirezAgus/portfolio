import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import MainContainer from './Components/MainContainer';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <MainContainer />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
