import './index.css';
import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';
import Skills from './components/Skills';
import Work from './components/Work';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <ImageSection/>
      <Skills/>
      <Work/>
    </>
  );
}

export default App;
