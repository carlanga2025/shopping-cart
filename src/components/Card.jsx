import { useState } from "react";

const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar }) => {
  const [agregar, setAgregar] = useState(false);

  const clickAgregar = () => {
    handleAgregar();
    setAgregar(true);
  };

  const clickQuitar = () => {
    handleQuitar();
    setAgregar(false);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imagen}
        alt={titulo}
        className="card-img-top p-3"
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text text-muted">{descripcion}</p>
        <p className="card-text fw-bold">$ {precio}</p>
      </div>
      <div className="card-footer bg-white border-0">
        {agregar ? (
          <button
            type="button"
            className="btn btn-outline-danger w-100"
            onClick={clickQuitar}
          >
            Quitar del carrito
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={clickAgregar}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;




