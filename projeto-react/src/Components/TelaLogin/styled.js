import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 800px;
`;
export const Display =styled.h1`
padding: 0px 0px 40px 0px;`

export const Form = styled.div`
  width: 200px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 16px;
`;

export const SendButton = styled.button`
  background-color: black;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
  padding: 10px;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const StyledLabel = styled.label`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
