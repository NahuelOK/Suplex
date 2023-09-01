import NavBar from "../components/NavBar/NavBar";
import Oferta from "../components/Oferta/Oferta";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Separadores from "../components/Separadores/Separadores"
import React, { useState } from "react";

const Home = ()=>{
    const [currentPage] = useState(true); 
    return(
        <div>
            <NavBar/>
            <Banner/>
            <Separadores titulo={"Ofertas"}/>
            <Oferta ofertaFiltrar={currentPage} />
            <Footer/>
        </div>
    )
}

export default Home;
