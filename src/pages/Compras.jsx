import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Compras = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de Compras</h2>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => disminuirCantidad(item.id)}
                    >
                      -
                    </button>
                    <span className="btn btn-light btn-sm disabled">
                      {item.cantidad}
                    </span>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => aumentarCantidad(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarCompra(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-end fw-bold">
                Total
              </td>
              <td className="fw-bold">${calcularTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="d-grid gap-2 mt-4">
        <button className="btn btn-primary btn-lg" type="button">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Compras;




