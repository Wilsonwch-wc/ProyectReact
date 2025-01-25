import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/formSlice.js";

 
const Navigation = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, formData } = useSelector((state) => state.form);

  const handleLogout = () => {
    dispatch(logout());
  };

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
          <Link to="/counter" className="nav-link">Counter</Link>
        </li>

        {isLoggedIn ? (
          <>
            <li className="navbar-item">
               {formData.username} | {formData.email}
            </li>
            <li className="navbar-item">
              <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
            </li>
          </>
        ) : (
          <li className="navbar-item">
            <Link to="/account" className="nav-link">Iniciar sesión</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
