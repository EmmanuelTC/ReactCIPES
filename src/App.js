import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Shared/Routes';

function App() {
  return (
    <Router>
      <Layout>
        <div className='App'>
          <Routes />
        </div>
      </Layout>
    </Router>
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> y guardar para volver a cargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
        <Button variant="contained">Boton</Button>
      </header>
    </div>*/
  );
}

export default App;
