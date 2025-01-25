import { Routes, Route } from "react-router-dom";

import Home from "../../screens/Home.jsx";
import Products from "../../screens/Products.jsx";
import Account from "../../screens/Account.jsx";
import Counter from "../../screens/Counter.jsx";
import Landing from "../../screens/Ladingpage.jsx";
const Router = () => {
  return (
    <Routes>   
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/account" element={<Account />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
};

export default Router;
