import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import Oferta from "../components/Oferta/Oferta";

const Home = ()=>{
    return(
        <div>
            <NavBar/>
            <Banner/>
            <Oferta/>
            <Card/>
        </div>
    )
}

export default Home;
