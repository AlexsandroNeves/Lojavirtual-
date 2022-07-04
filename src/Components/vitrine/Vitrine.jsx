import { useState, useEffect } from "react";
import { buscaSapato } from "../../api/api";


const Vitrine = () => {
    const [vitrines, setvitrines] = useState([])

 return (
        <>
            {
                vitrines.map((produto ) => (
                    <div key={produto.id}>
                        <img src={produto.image} alt="Imagem do produto" />
                        <p>{produto.name}</p>
                        <p>{produto.price}</p>
                    </div>
                ))
            }
        </>
    )

}
export default Vitrine;