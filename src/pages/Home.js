import NavBar from "../components/NavBar/NavBar";
import Oferta from "../components/Oferta/Oferta";
import Banner from "../components/Banner/Banner";
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
        </div>
    )
}

export default Home;
