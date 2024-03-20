import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import About from './component/About';
import Cards from './component/Cards';

import Footer from './component/Footer';
import Course from './component/Course';
function App() {
  return (
  
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Cards />
      <Course />
      
      <Footer />
      
    </div>
  );
}

export default App;
