import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Camiseta from "../pages/Camiseta";
import Calca from "../pages/Calcas";
import Sapato from "../pages/Sapato";
import Contato from "../pages/Contato";


const Rout = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/camiseta" element={<Camiseta />} />
                    <Route path="/calca" element={<Calca />} />
                    <Route path="/sapato" element={<Sapato />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </BrowserRouter>
    );
}

export default Rout;