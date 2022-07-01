import App from "../App";
import Footer from "../Components/footer/Footer";
import MenuLateral from "../Components/menuLateral/MenuLateral";
import Banner from '../Components/banner/Banner'

const Home = () => {

    return (
        <>
            <section className="section--menuBanner">
                <MenuLateral />
                <Banner />
            </section>
            <Footer />
        </>
    );

}

export default Home;