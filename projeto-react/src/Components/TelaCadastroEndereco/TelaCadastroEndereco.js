import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
  H1
} from "./styled";
import {useNavigate} from "react-router-dom"

function TelaCadasEnde(props) {
  const navigate = useNavigate()
  const enviarCadastro = () => {
    alert("Cadastro realizado com sucesso, faça o login!");
  };
  const TLogin = ()=>{
    navigate("/TelaLogin")
  }
  return (
    <FormContainer>
      <H1><strong>Cadastro Endereço</strong></H1>
      <Form>
        <StyledLabel>
          Endereço:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Número de Residência:
          <Input type={"password"} />
        </StyledLabel>
        <StyledLabel>
          Número de Telefone:
          <Input type={"tel"} placeholder={"(61) 98269-4303"} />
        </StyledLabel>
        <StyledLabel>
          Complemento:
          <select>
            <option value="volvo">Casa</option>
            <option value="saab">Apartamento</option>
            <option value="fiat">Fazenda</option>
            <option value="audi">República</option>
          </select>
        </StyledLabel>
        <SendButton onClick={enviarCadastro}>
          Finalizar Cadastro
        </SendButton>
        <RegisterButton onClick={TLogin}>
          Tela de Login
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}
export default TelaCadasEnde;
