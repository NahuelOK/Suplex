import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/Logo.png"
import {Link} from 'react-router-dom';
import "./navBar.css"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg color-nav">
            <div className="container-fluid ajust-navbar">
                <Link className="navbar-brand" to="/"><img className="color-logo" src={Logo} alt="Logo"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Productos</button>
                            <ul className="dropdown-menu">
                                <Link className="dropdown-item" to="/proteinas">Proteinas</Link>
                                <Link className="dropdown-item" to="/creatinas">Creatinas</Link>
                                <li><hr className="dropdown-divider" /></li>
                                <Link className="dropdown-item" to="/shakers">Shakers</Link>
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
