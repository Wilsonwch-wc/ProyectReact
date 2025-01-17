
import { Routes, Route } from "react-router-dom";
import Home from "../../screens/Home.jsx";
import Products from "../../screens/Products.jsx";
import About from "../../screens/About.jsx";
import Counter from "../../screens/Counter.jsx";
import FormLogin from "../../screens/Login.jsx";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="counter" element={<Counter />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<FormLogin />} />
    
    </Routes>
  );
};

export default Router;
