import Home from "./pages/Home";
import Proteinas from "./pages/Proteinas"
import Creatinas from "./pages/Creatinas"
import Shakers from "./pages/Shakers"
import Cuenta from "./pages/Cuenta"
import Error from "./pages/Error";
import Checkout from "./components/Checkout/Checkout";
import Carrito from "./pages/Carrito"
import DetallesProducto from "./pages/DetallesProducto";
import"bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/proteinas" element={<Proteinas/>} />
            <Route path="/creatinas" element={<Creatinas/>} />
            <Route path="/DetalleProducto/:productId" element={<DetallesProducto/>} />
            <Route path="/shakers" element={<Shakers/>} />
            <Route path="/mi-cuenta" element={<Cuenta/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<Error/>} />
            <Route path="/carrito" element={<Carrito/>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;