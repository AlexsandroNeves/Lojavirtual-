import './header.css'
import logo from '../../assets/img/Captura_de_tela_2022-06-29_160000-removebg-preview.png';
import { Button } from '../../ComponentsStyles/ComponentsStyles';
import { Link } from 'react-router-dom';

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
                    <Link to="/">
                        <img className='page__logo' src={logo} alt="logo Webjump" />
                    </Link>
                    <div>
                        <input type="text" />
                        <Button color={'#CB0D1F'} width={'110px'}>Buscar</Button>
                    </div>
                </section>
            </header>
        </>

    )

}

export default Header;