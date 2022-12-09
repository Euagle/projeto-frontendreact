// import "./App.css";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import  Header  from "./componentes/Header/Header";



function App() {
  
  return (
   
//     <div>
//       <section className="acima">
//         <Heaader> Frete grátis para todo o Brasil em compras acima de R$199</Heaader>
//       </section>
//       <header className="header">
//         <h1 className="titulo"> <svg width="50" height="50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   <path d="M19.382 13.334c2.76 2.214 4.294 4.171 3.764 5.088-.836 1.446-6.505-.257-12.66-3.804C4.33 11.07.017 7.023.854 5.578c.523-.904 2.933-.578 6.17.66"></path>
//   <path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"></path>
// </svg>   SRa. ESPACIAL</h1>

//         <div className="botão" id="id-botão">
//           <input
//             type="text"
//             name="busca"
//             className="type"
//             placeholder="Pesquise aqui!"
//           />
//           <button>
//             {" "}
//             <span className="material-icons">search</span>
//           </button>
//         </div>

//         <div className="link">
//           <h3>MINHA CONTA</h3>
//           <svg
//             width="50"
//             height="50"
//             fill="none"
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="1.5"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M5 20v-1a7 7 0 1 1 14 0v1"></path>
//             <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
//           </svg>

//           <h3>MEU CARRINHO</h3>
//           <svg
//             width="50"
//             height="50"
//             fill="none"
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="1.5"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="currentColor"
//               d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
//             ></path>
//             <path
//               fill="currentColor"
//               d="M9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
//             ></path>
//             <path d="M5 4c-.167-.667-1-2-3-2m3 2h17l-2 11H7L5 4Z"></path>
//             <path
//               d="M20 15H5.23c
// -1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
//             ></path>
//           </svg>
          
//         </div>

//         <ul className="header-class">
//           <li> Produtos</li>
//           <li> Conheça a Sra. Espacial</li>
//         </ul>
//       </header>
<div> 
      <main className="imagem">
        <div className="main">
          <ul className="ul">
            <li>Home</li>
            <li>|</li>
            <li>Camisetas</li>
          </ul>
        </div>
        <div className="cards">
          <div className="cads-img">
            <img src="./img-1.jpg" width={"250px"} height={"250px"}></img>

            <h3>Camiseta manga curta com estampa de ET</h3>
            <div className="camisas">
     
              <p className="h4"> Restam 6 peças</p>
              <p> R$49,99     <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
            
            </div>
          </div>
          <div className="cads-img">
            <img src="./img-2.png" width={"250px"} height={"250px"}></img>
            <div className="camisas">
              <h3> Camiseta com estampa de Et</h3>
              <p className="h4"> Restam 10 peças </p>
              
                <p> R$49,99    <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
              </div>
           
          </div>
          <div className="cads-img">
            <img
              className="imgum"
              src="./img-4.jpg"
              width={"250px"}
              height={"250px"}
            ></img>
            <h3>Camiseta manga curta de astronautas</h3>
            <div className="camisas">
              <p className="h4"> Restam 9 peças </p>
              <p> R$49,99    <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
            </div>
          </div>
          <div className="cads-img">
            <img src="./img-5.jpg" width={"250px"} height={"250px"}></img>{" "}
            <h3>Camiseta com estampa de astronauta e ET</h3>
            <div className="camisas">
              <p className="h4"> Restam 19 peças </p>
              <p> R$49,99   <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
            </div>
          </div>
          <div className="cads-img">
            <img src="./img-6.jpg" width={"250px"} height={"250px"}></img>{" "}
            <h3>Camiseta manga curta - Astronauta</h3>
            <div className="camisas">
              <p className="h4"> Esgotado! </p>
              <p> R$49,99   <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
            </div>
          </div>
          <div className="cads-img">
            <img src="./img-7.jpg" width={"250px"} height={"250px"}></img>
            <h3>Camiseta manga curta - astronauta</h3>

            <div className="camisas">
              <p className="h4"> Restam 13 peças </p>
              <p> R$49,99    <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
            </div>
          </div>
          <div className="cads-img">
            <img src="./img-8.jpg" width={"250px"} height={"250px"}></img>
            <h3>Camiseta manga curta divirtada-astronauta</h3>

            <div className="camisas">
              <p className="h4"> Restam 4 peças </p>
              <p> R$49,99     <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
            </div>
          </div>
          <div className="cads-img">
            <img src="./img-9.jpg" width={"250px"} height={"250px"}></img>{" "}
            <h3>Camiseta manga curta divertida - Naza</h3>
            <div className="camisas">
              <p className="h4"> Restam 15 peças </p>
              <p> R$49,99    <svg width="39" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
  <path d="M12 8.25v7.5"></path>
  <path d="M15.75 12h-7.5"></path>
</svg></p>
            </div>
          </div>
        </div>
      </main>
      <footer>
      Para mais informações, entre em contato conosco:

    <a  className="im" href={"https://www.instagram.com/euagle/-*/*6396*/*636"} target={'_blank'}>   <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.375 3.25a4.388 4.388 0 0 1 4.375 4.375v8.75a4.388 4.388 0 0 1-4.375 4.375h-8.75a4.389 4.389 0 0 1-4.375-4.375v-8.75A4.388 4.388 0 0 1 7.625 3.25h8.75Zm0-1.75h-8.75C4.256 1.5 1.5 4.256 1.5 7.625v8.75c0 3.369 2.756 6.125 6.125 6.125h8.75c3.369 0 6.125-2.756 6.125-6.125v-8.75c0-3.369-2.756-6.125-6.125-6.125Z"></path>
  <path d="M17.688 7.625a1.313 1.313 0 1 1 0-2.625 1.313 1.313 0 0 1 0 2.625Z"></path>
  <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"></path>
</svg></a> <a  className="im" href={'https://www.linkedin.com/in/gleiciane-lima-b83408239/'} target={'_blank'}>
<svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z"></path>
</svg></a> <a  className="im" href={'https://github.com/Euagle'} target={'_blank'}>
<svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z"></path>
</svg></a>
      
      </footer>
    </div>
  );
}

export default App;
