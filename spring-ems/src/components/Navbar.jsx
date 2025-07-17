import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]); 

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">EMS</Link>

        <ul className="navbar-nav me-auto">
          {isLoggedIn && (
            <>
              <li className="nav-item"><Link className="nav-link" to="/">Employees</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/add">Add</Link></li>
            </>
          )}

          {!isLoggedIn && (
            <>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">Register</Link></li>
            </>
          )}
        </ul>

     
      </div>
    </nav>
  );
};

export default Navbar;
