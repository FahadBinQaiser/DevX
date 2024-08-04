import './App.css';
import Navbar from './components/navbar1/navbar';
import Slider from './components/slider/slider';
import TopSellings from './components/top-sellings/topsellings';
import Shop from './components/shopbyclassics/shop';
import Testimonials from './components/testimonials/testimonials';
import About from './components/about/about';
import Footer from './components/footer/footer';





function App() {
  return (
     <div className="App">
      <Navbar />
      <Slider/>
      <TopSellings/>
      <Shop/>
      <Testimonials/>
      <About/>
      <Footer/>
      {/* Other components or content here */}
    </div>
  );
}

export default App;
