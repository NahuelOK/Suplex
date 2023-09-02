import Home from "./pages/Home";
import Proteinas from "./pages/Proteinas"
import Creatinas from "./pages/Creatinas"
import Shakers from "./pages/Shakers"
import Cuenta from "./pages/Cuenta"
import Error from "./pages/Error";
import DetallesProducto from "./pages/DetallesProducto";
import"bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/proteinas" element={<Proteinas/>} />
          <Route path="/creatinas" element={<Creatinas/>} />
          <Route path="/DetalleProducto/:productId" element={<DetallesProducto/>} />
          <Route path="/shakers" element={<Shakers/>} />
          <Route path="/mi-cuenta" element={<Cuenta/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;