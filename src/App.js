import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Ventas from "./components/Ventas/Ventas";
import Contacto from "./components/Contacto/Contacto";
import About from "./components/About/About";
import Principal from "./components/Principal/Principal";
import NoEncontrado from "./components/NoEncontrado/NoEncontrado";
import ArticuloDetalle from "./components/ArticuloDetalle/ArticuloDetalle";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/", element: <Principal /> },
  { path: "/tienda", element: <Ventas /> },
  { path: "/contacto", element: <Contacto /> },
  { path: "/nosotros", element: <About /> },
  { path: "*", element: <NoEncontrado /> },
  { path: "/tienda/:id", element: <ArticuloDetalle /> },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
