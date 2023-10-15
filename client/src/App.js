
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import DetalleApt from './components/DetalleApt/DetalleApt';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import Servicios from './components/Servicios/Servicios';
import CompraApt from './components/CompraApt/CompraApt';
import Proyectos from './components/Proyectos/Proyectos';

function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !=='/' ? 
      <Routes>
        <Route path='/detalle/:id' element={<DetalleApt/>}></Route>
      </Routes> : 
      <div>
        <header style={{position: 'sticky', top: '0', zIndex: '2'}}>
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
      }
    </div>
  );
}

export default App;
