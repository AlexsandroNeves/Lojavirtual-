import React, { useState } from "react";
import './OrdenarProduto.css'


const OrdenarProduto = () => {

    const [ordenar, setOrdenacao] = useState(false);
        return (
            <>
                <span>Ordenar por</span>
                <select className="container--select">
                    <option value="selecione-opcao"> Selecione opção</option>
                    <option value="maior-preco" > Maior Preço</option>
                    <option value="menor-preco">Menor Preco</option>
                </select>
            </>
        )
    }
    export default OrdenarProduto;