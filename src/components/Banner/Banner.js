import Img from "./assets/banner-inicio.png"
import "./banner.css"

const Banner = ()=>{
return(
    <div>
        <img src={Img} className="banner"></img>
    </div>
    )
}

export default Banner;