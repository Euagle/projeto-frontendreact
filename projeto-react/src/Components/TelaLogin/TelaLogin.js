import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
  Display,
} from "./styled";
import { useNavigate } from "react-router-dom";

function TelaLogin() {
  let navigate = useNavigate();
  const telaCadastro = () => {
    navigate("/TelaCadastro");
  };
  const cadastro = () => {
    navigate("/");
  };

  return (
    <FormContainer>
      <Display>LOGIN</Display>
      <Form>
        <StyledLabel>
          E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Senha:
          <Input type={"password"} />
        </StyledLabel>
        <SendButton onClick={cadastro}>Entrar</SendButton>
        <RegisterButton onClick={telaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
