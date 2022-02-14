import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Promocoes from "./pages/Promocoes";
import Destino from "./pages/Destino";
import Contato from "./pages/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Promoções" element={<Promocoes/>} />
        <Route path="/Destino" element={<Destino/>} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;