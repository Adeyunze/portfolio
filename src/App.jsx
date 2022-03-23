import './index.css';
import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className='md:px-16 px-5'>
      <Navbar/>
      <ImageSection/>
      <Skills/>
      <Work/>
    </div>
      <Footer/>
    </>
  );
}

export default App;
