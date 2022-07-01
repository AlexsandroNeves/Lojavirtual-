import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Camiseta from "./pages/Camiseta";
import Calca from "./pages/Calcas";
import Sapato from "./pages/Sapato";
import Contato from "../src/pages/Contato";
import { Switch } from "react-router-dom";

import './app.css'
import Menu from "./Components/menu/Menu";
import Header from "./Components/header/Header";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/camiseta" >
            <Camiseta />
          </Route>
          <Route path="/calca" >
            <Calca />
          </Route>
          <Route path="/sapato">
            <Sapato />
          </Route>
          <Route path="/contato" >
            <Contato />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>


  )
}

export default App;
