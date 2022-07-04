import { useEffect, useState } from "react";
import { buscaSapato } from "../api/api";
import Filtro from "../Components/filtro/Filtro";
import Footer from '../Components/footer/Footer'
import OrdenarProduto from "../Components/ordernarProduto/OrdenarProduto";
import '../Components/vitrine/vitrine.css'
import { Titlepage, Button } from "../ComponentsStyles/ComponentsStyles";

const Sapato = () => {
  const [vitrines, setvitrines] = useState([])
  useEffect(() => {
    buscaSapato(setvitrines)
  }, [])

  return (
    <>
    <div className="container--page-vitrine">
        <Filtro />
        <div className="container--vitrine-produto">
            <Titlepage> Sapato</Titlepage>
            <OrdenarProduto/>
            <div className="div--vitrine">
                {
                    vitrines.map((produto) => (
                        <div className="container--vitrine" key={produto.id}>
                            <div>
                                <img className="img--borda" src={produto.image} alt="" />
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

export default Sapato;