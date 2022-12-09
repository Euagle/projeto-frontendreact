import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
  H1
} from "./styledte";
import {useNavigate} from "react-router-dom"


function TelaCadastro(props) {
  let navigate = useNavigate()
  const goto =()=>{
    navigate("/TelaCadasEnde")
  }  
  const pronto =()=>{
    navigate(-1)
  }
  return (
    <FormContainer>
      <H1>      <strong>Cadastro </strong>
</H1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmar senha:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={goto}>
          Adicionar Endereço
        </SendButton>
        <BackToLoginButton onClick={pronto}>
          Já possuo um cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
