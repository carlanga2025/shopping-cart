import { Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Compras from "./pages/Compras"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div style={{ paddingTop: "56px" }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/compras' element={<Compras />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}

export default CarritoApp