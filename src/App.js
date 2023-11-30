import About from "./components/About";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import './index.css'
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path='/' element={<>
          <Slider />
          <ProductList />
          </>}/>
        <Route path='/about' element={<About />}/>
        <Route path='product/:productId' element={<Details />}/>


     </Routes>
   
    </div>
  );
}

export default App;
