import styled from "styled-components";
export const Imagg = styled.img`
  width: 1355px;
  @media (max-device-width: 328px) {
    width: 1220px;
  }
`;
export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: row;
`;

export const H1header = styled.h1`
  display: flex;
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  white-space: nowrap;

  align-items: center;
  @media (max-device-width: 500px) {
    height: 120px;
  }
`;

export const TituloAcima = styled.section`
  display: flex;
  color: red;

  justify-content: center;
  background-color: black;
  width: 1355px;
`;
export const HeaderOne = styled.header`
  background-color: #3e065f;

  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  color: white;
  width: 1355px;
  @media (max-device-width: 328px) {
    width: 1220px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const HeaderTwo = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute;

  display: none;
`;
export const Li = styled.li`
  color: white;

  margin-left: 30px;
`;
export const Botão = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const Type = styled.input`
  display: flex;
  height: 50px;
  width: 205px;
  font-size: 1.2rem;
  background-color: white;
`;
export const MtIcons = styled.span`
  font-size: 50px;
  color: grey;
  background-color: white;
`;
export const Link = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  font-size: 1.2rem;
  white-space: nowrap;
`;
export const H3 = styled.h3`
  font-size: 0.9rem;
`;

export const Sgv = styled.svg`
  display: flex;
`;
