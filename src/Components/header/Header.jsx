import './header.css'
import logo from '../../assets/img/Captura_de_tela_2022-06-29_160000-removebg-preview.png';
import Menu from '../menu/Menu';
import { Button } from '../../ComponentsStyles/Button';

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
                    <div>
                        <img className='page__logo' src={logo} alt="logo Webjump" />
                    </div>
                    <div>
                        <input type="text" />
                        <Button>Buscar</Button>
                    </div>
                </section>
                <Menu />
            </header>
        </>

    )

}

export default Header;