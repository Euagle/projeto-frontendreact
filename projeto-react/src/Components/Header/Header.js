import React from "react";
// import TelaLogin from "../TelaLogin/TelaLogin";
// import Home from "../Home";

// import TelaCadastro from "../TelaCadastro/TelaCadastro";
// import TelaCadasEnde from "../TelaCadastroEndereco/TelaCadastroEndereco";
import { useState } from "react";
import {
  H1header,
  HeaderOne,
  Imagg,
  TituloAcima,
  HeaderTwo,
  Li,
  Botão,
  Type,
  MtIcons,
  Link,
  H3,
  Sgv,
} from "./Styles";
import { useNavigate } from "react-router-dom";

const Header = (props) => {


  let navigate = useNavigate();

  return (
    <div>
      <Imagg
        src="https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/ecc006ff-9f2b-42fc-94b8-38d1aa3c070c___b1fa76313937bfa15dbaa4e69c7ce81a.gif"
        alt="imagem"
        crossorigin="anonymous"
      ></Imagg>
      <Imagg
        class="img_ga_view"
        src="https://dafitistatic.dafiti.com.br/dynamic_yield/cms/static/dafiti/images/16650a31c05e__after_interno_desk_troca.gif"
        data-creative="Afterheader_catalogo"
        data-name="NA-NA-BRZ01-TrocaGratis"
        alt="NA-NA-BRZ01-TrocaGratis"
        width="1158"
        height="35"
      ></Imagg>
     

      <HeaderOne className="header">
     

        <H1header style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          <svg
            width="50"
            height="50"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.382 13.334c2.76 2.214 4.294 4.171 3.764 5.088-.836 1.446-6.505-.257-12.66-3.804C4.33 11.07.017 7.023.854 5.578c.523-.904 2.933-.578 6.17.66"></path>
            <path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"></path>
          </svg> {" "}
          SRa. ESPACIAL
        </H1header>
      

        <Link className="link">
          <div style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/TelaLogin");
            }}
          >

            <Sgv
              width="50"
              height="50"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 20v-1a7 7 0 1 1 14 0v1"></path>
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
            </Sgv>
          </div>


          <div style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/Carrin");
            }}
          >
            <Sgv
              width="50"
              height="50"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              ></path>
              <path
                fill="currentColor"
                d="M9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              ></path>
              <path d="M5 4c-.167-.667-1-2-3-2m3 2h17l-2 11H7L5 4Z"></path>
              <path
                d="M20 15H5.23c
-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
              ></path>
            </Sgv>
          </div>
        </Link>

        <HeaderTwo className="header-class">
          <Li> Produtos</Li>
          <Li> Conheça a Sra. Espacial</Li>
        </HeaderTwo>
      </HeaderOne>
    </div>
  );
};
export default Header;
