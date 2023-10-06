
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';

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
        <div id='contacto'>
          <Contact></Contact>
        </div>
      </main>
    </div>
  );
}

export default App;
