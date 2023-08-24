import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css"
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg color-nav">
            <div className="container-fluid ajust-navbar">
                <Link className="navbar-brand" to="/">E-comerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Electronica</a></li>
                                <li><a className="dropdown-item" href="#">Componentes</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Conexiones</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/mi-cuenta">Mi Cuenta</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}
export default NavBar;
