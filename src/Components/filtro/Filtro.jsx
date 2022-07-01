import { Link } from "react-router-dom";
import { VitrineCor } from "../../ComponentsStyles/ComponentsStyles";
import './filtro.css'
const Filtro = () => {
    return (
        <div className="container--filtro">
            <div>
                <div>
                    <h2>Filtre por</h2>
                </div>
                <h3>Categoria</h3>
                <ul>
                    <li>
                        <Link to={'/camiseta'}>Camisetas</Link>
                    </li>
                    <li>
                        <Link to={'/calca'}>Calças</Link>
                    </li>

                    <li>
                        <Link to={'/sapato'}>Sapatos</Link>
                    </li>
                </ul>

                <h3>Cores</h3>
                <div className="container--cores">
                    <VitrineCor cor={'#CB0D1F'}/>
                    <VitrineCor cor={'#F26324'}/>
                    <VitrineCor cor={'#27A3A9'}/>
                </div>

                <h3>Tipo</h3>

                <ul>
                    <li>
                        <Link to={''}>Camisetas</Link>
                    </li>
                    <li>
                        <Link to={''}>Calças</Link>
                    </li>

                    <li>
                        <Link to={''}>Sapatos</Link>
                    </li>
                </ul>
            </div>
        </div>


    )
}

export default Filtro;