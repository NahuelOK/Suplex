import ig from "./assets/Instagram.png"
import whats from "./assets/WhatsApp.png"
import tarj from "./assets/tarjetas.png"
import "./footer.css"

const Footer = () => {
    return(
        <div className="footer">
          <h3 className="redes">Redes Sociales</h3>
          <a href="#" target="_blank"><img className="ig" src={ig} alt="ig" /></a>
          <a href="#" target="_blank"><img className="whats" src={whats} alt="WhatsApp" /></a>
          <h3 className="contactanos">Contáctanos Ante Cualquier Problema</h3>
          <div className="adress">
            <a className="dire" href="#" target="_blank"><h3 className="dire">2118 Thornridge Cir. Syracuse, Connecticut 35624</h3></a>
          </div>
          <div className="mail" >
            <h3>suplex@gmail.com</h3>
          </div>
          <div className="medios-d-p">
            <h3 className="medios-h3">Medios de pago</h3>
            <img className="tarjetas" src={tarj} alt="tarjetas"/>
          </div>
          <a className="developer" href="https://github.com/NahuelOK" target="_blank"><h3 className="creador">Diseño y desarrollo por Nahuel Moreno</h3></a>
        </div>
    )
}

export default Footer;