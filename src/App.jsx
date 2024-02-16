import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
