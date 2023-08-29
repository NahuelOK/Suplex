import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import Separadores from "../components/Separadores/Separadores"
import React, { useState } from "react";

const Home = ()=>{
    const [currentPage] = useState("C"); 
    return(
        <div>
            <NavBar/>
            <Banner/>
            <Separadores titulo={"Creatinas"}/>
            <Card categoriaFiltrar={currentPage} />
        </div>
    )
}

export default Home;