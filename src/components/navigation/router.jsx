
import { Routes, Route } from "react-router-dom";
import Home from "../../screens/Home.jsx";
import Products from "../../screens/Products.jsx";
import About from "../../screens/About.jsx";
import Counter from "../../screens/Counter.jsx";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="counter" element={<Counter />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
    
    </Routes>
  );
};

export default Router;
