import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import './index.css'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Slider />
    <ProductList />
    </div>
  );
}

export default App;
