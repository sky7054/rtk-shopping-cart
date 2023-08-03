import './App.css';
import Navbar from "./Components/Navbar"
import ProductCard from "./Components/ProductCard"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <ProductCard/>
      </header>
    </div>
  );
}

export default App;
