import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import Separadores from "../components/Separadores/Separadores"
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";

const Home = ()=>{
    const [currentPage] = useState("C"); 
    return(
        <div>
            <NavBar/>
            <Separadores titulo={"Creatinas"}/>
            <Card categoriaFiltrar={currentPage} />
            <Footer/>
        </div>
    )
}

export default Home;