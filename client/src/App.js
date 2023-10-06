
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import Servicios from './components/Servicios/Servicios';
import CompraApt from './components/CompraApt/CompraApt';
import Proyectos from './components/Proyectos/Proyectos';

function App() {
  return (
    <div>
      <header style={{position: 'sticky', top: '0'}}>
        <NavBar></NavBar>
      </header>
      <main>
        <div id='inicio'>
          <Home></Home>
        </div>
        <div id='sobrenosotros'>
          <SobreNosotros></SobreNosotros>
        </div>
        <div id='servicios'>
          <Servicios></Servicios>
        </div>
        <div id='proyectos'>
          <Proyectos></Proyectos>
        </div>
        <div id='compraapt'>
          <CompraApt></CompraApt>
        </div>
        <div id='contacto'>
          <Contact></Contact>
        </div>
      </main>
    </div>
  );
}

export default App;
