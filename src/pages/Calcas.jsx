import React, { useEffect, useState } from "react";
import { buscaCalca, buscaLista } from "../api/api";
import Filtro from "../Components/filtro/Filtro";
import Footer from "../Components/footer/Footer";
import OrdenarProduto from "../Components/ordernarProduto/OrdenarProduto";
import '../Components/vitrine/vitrine.css';
import { Button, Titlepage } from '../ComponentsStyles/ComponentsStyles';

const Calca = () => {
    const [vitrines, setvitrines] = useState([])
    // const [lista, setLista] = useState([])
    useEffect(() => {
        buscaCalca(setvitrines)
        // buscaLista(setLista)
    }, [])
    return (
        <>
            <div className="container--page-vitrine">
                <Filtro />
                <div className="container--vitrine-produto">
                    <Titlepage> Calça</Titlepage>
                    <OrdenarProduto/>
                    <div className="div--vitrine">
                        {
                            vitrines.map((produto) => (
                                <div className="container--vitrine" key={produto.id}>
                                   
                                        <img className="img--borda" src={produto.image} alt="" />
                                        <p className="name--vitrine">{produto.name}</p>
                                        <p className="price--vitrine" >R$ {produto.price}</p>
                                        <Button color={'#00A8A9'} width={'210px'} radius={'5px'}> Comprar </Button>
                                   
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Calca;