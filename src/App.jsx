import './App.css';
import Header from "./Header";
import MenuBar from './MenuBar';
import Accordion from './Acordeon';
import Footer from './Footer';
import './estilos.css'


function App() {
  return (
    <div className="cuerpoTotal">
      <div className="titulo">
        <Header />
      </div>

      <div className="bar">
        <MenuBar />
      </div>

      <main className="cuerpo">
        <Acordeon />
      </main>

      <div className='piedepag'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
