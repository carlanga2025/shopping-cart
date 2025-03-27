import { useContext } from "react";
import Card from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

const Home = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };

  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ofertas</h1>
      <hr className="mb-4" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col">
            <Card
              imagen={producto.image}
              titulo={producto.title}
              descripcion={producto.description}
              precio={producto.price}
              handleAgregar={() => handleAgregar(producto)}
              handleQuitar={() => handleQuitar(producto.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;




