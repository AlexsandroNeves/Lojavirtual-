import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Camiseta from "./pages/Camiseta";
import Calca from "./pages/Calcas";
import Sapato from "./pages/Sapato";
import Contato from "./pages/Contato";
import { Switch } from "react-router-dom";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import MenuLateral from "./Components/menuLateral/MenuLateral";
import Banner from './Components/banner/Banner'
import './app.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/camiseta" element={<Camiseta />} />
        <Route path="/calca" element={<Calca />} />
        <Route path="/sapato" element={<Sapato />} />
        <Route path="/contato" element={<Contato />} />
      </Switch>
      <section className="section--menuBanner">
        <MenuLateral />
        <Banner />
      </section>
      <Footer />
    </div>
  )
}

export default App;
