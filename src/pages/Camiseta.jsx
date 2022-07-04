import { useEffect, useState } from "react";
import { buscaCamiseta } from "../api/api";
import { Button, Titlepage } from "../ComponentsStyles/ComponentsStyles";
import '../Components/vitrine/vitrine.css';
import Footer from "../Components/footer/Footer";
import Filtro from "../Components/filtro/Filtro";


const Camiseta = () => {
    const [vitrines, setvitrines] = useState([])
    useEffect(() => {
        buscaCamiseta(setvitrines)
    }, [])
    return (
        <>
            <div className="container--page-vitrine">
                <Filtro />
                <div className="container--vitrine-produto">
                    <div>
                    <Titlepage> Camisetas</Titlepage>
                    </div>
                    

                    <div className="div--vitrine">
                        {
                            vitrines.map((produto) => (
                                <div className="container--vitrine" key={produto.id}>
                                    <div>
                                        <img className="img--borda" src={produto.image} alt="Imagem do produto" />
                                        <p className="name--vitrine">{produto.name}</p>
                                        <p className="price--vitrine" >R$ {produto.price}</p>
                                        <Button color={'#00A8A9'} width={'210px'} radius={'5px'}> Comprar </Button>
                                    </div>
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

export default Camiseta;