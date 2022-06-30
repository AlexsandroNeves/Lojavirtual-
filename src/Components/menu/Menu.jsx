import { Link } from "react-router-dom";
import '../menu/menu.css'

const Menu = () => {
    return (
        <nav className="nav--menu">
            <ul>
                <li>
                    <Link to="/">Página Inicial</Link>
                </li>
                <li>
                    <Link to="/camiseta">Camiseta</Link>
                </li>
                <li>
                    <Link to="/calca">Calça</Link>
                </li>
                <li>
                    <Link to="/sapato">Sapato</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Menu;

