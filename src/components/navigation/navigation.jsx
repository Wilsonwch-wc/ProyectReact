import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/products" className="nav-link">Product</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/counter" className="nav-link">Counter</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="nav-link">Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
