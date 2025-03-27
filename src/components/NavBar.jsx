import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";


const NavBar = () => {
  const { listaCompras } = useContext(CarritoContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top" style={{ zIndex: 1000 }}>
      <div className="container-fluid">
        {/* Logo o nombre de la marca */}
        <NavLink to="/" className="navbar-brand fs-3 fw-bold">
          Shopping Cart
        </NavLink>

        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav" style={{ zIndex: 1000 }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link fs-5"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/compras"
                className="nav-link fs-5"
                activeClassName="active"
              >
                Compras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link fs-5"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Icono del carrito */}
          <NavLink to="/compras" className="text-decoration-none">
            <Badge badgeContent={listaCompras.length} color="secondary">
              <ShoppingCart className="fs-2 text-white" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;





