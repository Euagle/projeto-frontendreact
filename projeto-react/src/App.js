import { createGlobalStyle } from "styled-components";
import TelaLogin from "./Components/TelaLogin/TelaLogin";
import TelaCadasEnde from "./Components/TelaCadastroEndereco/TelaCadastroEndereco";

import { Container } from "./Components/styles";
import Carrin from "./Components/Carrinho/Carrin";
import MainPage from "../src/Components/MainPage/MainPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastro from "./Components/TelaCadastro/TelaCadastro";

export const GlobalStyled = createGlobalStyle`
*{

  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;

}

li{
  list-style: none;
}`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyled />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Carrin" element={<Carrin />} />
            <Route path="/TelaLogin" element={<TelaLogin />} />
            <Route path="/TelaCadastro" element={<TelaCadastro />} />
            <Route path="/TelaCadasEnde" element={<TelaCadasEnde />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
