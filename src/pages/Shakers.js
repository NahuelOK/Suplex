import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import Oferta from "../components/Oferta/Oferta";
import React, { useState } from "react";

const Home = ()=>{
    const [currentPage] = useState("S"); 
    return(
        <div>
            <NavBar/>
            <Banner/>
            <Oferta/>
            <Card categoriaFiltrar={currentPage} />
        </div>
    )
}

export default Home;