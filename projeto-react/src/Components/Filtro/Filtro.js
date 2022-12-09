import { BoxLateral } from "../../styles";

function Filtro(props) {
  const handleNomeSearch = (event) => {
    props.setPesquisa(event.target.value);
  };

  const handleMinSearch = (event) => {
    props.setMinimo(event.target.value);
  };

  const handleMaxSearch = (event) => {
    props.setMaximo(event.target.value);
  };

  return (
    <>
      <BoxLateral>
        <input
          type="text"
          className="Input-Dados"
          value={props.pesquisa}
          onChange={handleNomeSearch}
          placeholder="Pesquise aqui"
        />
        <h3>Filtrar por preço</h3>

        <h3>Menor Preço:</h3>
        <input
          type="text"
          className="Input-Dados"
          value={props.minimo}
          onChange={handleMinSearch}
          placeholder="R$ 0.00"
        />
        <h3>Maior Preço:</h3>
        <input
          type="text"
          className="Input-Dados"
          value={props.maximo}
          onChange={handleMaxSearch}
          placeholder="R$ 0.00"
        />
      </BoxLateral>
    </>
  );
}

export default Filtro;
