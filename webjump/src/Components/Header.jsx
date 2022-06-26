import Rout from '../router/Rout';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';

const Header = () => {
    return (
        <>
            <header>
                <section className="container__login">
                    <div className='section__login' >
                        <a className='section__link__acesso' href="#">Acesse sua Conta</a>
                        <span className=''>ou</span>
                        <a className='section__link__acesso' href="#">Cadastre-se</a>
                    </div>
                </section>

                <section className='section--banner'>
                    <figure>
                        <img src="#" alt="logo Webjump" />
                    </figure>
                    <div>
                        <input type="text" />
                        <button>Buscar</button>
                    </div>
                </section>

                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/camiseta">Camiseta</Link>
                        <Link to="/calca">Calça</Link>
                        <Link to="/sapato">Sapato</Link>
                        <Link to="/contato">Contato</Link>
                    </ul>

                </nav>
                    <Rout/>

            </header>


        </>

    )

}

export default Header;