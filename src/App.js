import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import Detail from './components/Detail'
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import products from "./products";

function App() {

  return (
    <div >
      <NavBar />
      
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductList" element={<ProductList/>} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/products" element={<Products products={products}/> } />
        

        
      </Routes>
    </div>
  );
}

export default App;
//<Route path="/detail/products" element={DetailsProduct detail={products}/>
//