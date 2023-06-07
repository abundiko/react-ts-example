import { Routes, BrowserRouter, Route } from 'react-router-dom';

import '../assets/css/App.css';

import FlowerHero from '../components/FlowerHero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import NavContext from '../context/NavContext';
import About from './About';


function App() {
  return (
    <BrowserRouter >
      <NavContext.Provider value={{ ref: null, show: () => null, hide: () => null }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <FlowerHero />
              <Services />
              <WhyChooseUs />
            </>
          } />
          <Route path='/about' element={<About/>}
          />
          <Route path='/contact'></Route>
        </Routes>
      </NavContext.Provider>
    </BrowserRouter>

  );
}

export default App;
